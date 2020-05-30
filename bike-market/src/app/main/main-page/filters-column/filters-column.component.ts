import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {Component, OnInit} from '@angular/core';
import {CheckboxService} from '../../../shared/services/checkbox.service';
import {ProductNode} from '../../../shared/models/product-node.model';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-filters-column',
  templateUrl: './filters-column.component.html',
  styleUrls: ['./filters-column.component.scss']
})

export class FiltersColumnComponent implements OnInit {
  treeControl = new NestedTreeControl<ProductNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ProductNode>();
  TREE_DATA = this.checkboxService.productNodes;
  // tslint:disable-next-line:variable-name
  private _currentRoutParams: string[];

  constructor(private checkboxService: CheckboxService, private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.dataSource.data = this.TREE_DATA;
    Object.keys(this.dataSource.data).forEach(x => {
      this.setParent(this.dataSource.data[x], null);
    });
  }

  hasChild = (_: number, node: ProductNode) =>
    !!node.children && node.children.length > 0

  setParent(data, parent) {
    data.parent = parent;
    if (data.children) {
      data.children.forEach(x => {
        this.setParent(x, data);
      });
    }
  }

  checkAllParents(node) {
    if (node.parent) {
      const descendants = this.treeControl.getDescendants(node.parent);
      node.parent.selected = descendants.every(child => child.selected);
      node.parent.indeterminate = descendants.some(child => child.selected);
      this.checkAllParents(node.parent);
    }
  }

  todoItemSelectionToggle(checked, node) {
    node.selected = checked;
    if (node.children) {
      node.children.forEach(x => {
        this.todoItemSelectionToggle(checked, x);
      });
    }
    this.checkAllParents(node);
  }

  onChange() {
    let result = [];
    this.dataSource.data.forEach(node => {
      result = result.concat(
        this.treeControl
          .getDescendants(node)
          .filter(x => x.selected && x.value)
          .map(x => x.value)
      );
    });
    this._currentRoutParams = result;
    this.router.navigate(['/filters'], {
      queryParams:
        {category: this._currentRoutParams.toString()}
    });
  }

  onResetFilters() {
    this._currentRoutParams = null;
    this.router.navigate(['/filters']);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((queryParamMap: ParamMap) => {
      const query = queryParamMap.get('category');
      if (query) {
        this._currentRoutParams = query.split(',');
        this.dataSource.data.forEach(node => {
          this.treeControl.getDescendants(node).forEach((filter) => {
            if (this._currentRoutParams.includes(filter.value)) {
              filter.selected = true;
              node.indeterminate = true;
            } else {
              filter.selected = false;
              node.selected = false;
            }
          });
        });
      } else if (query === null) {
        this.dataSource.data.forEach((node) => {
          this.treeControl.getDescendants(node).forEach((filter) => {
            filter.selected = false;
            node.indeterminate = false;
            node.selected = false;
          });
        });
      }
    });
  }
}
