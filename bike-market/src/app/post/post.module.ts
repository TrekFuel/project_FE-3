import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostPageComponent} from './post-page.component';
import {PostPagePipe} from './pipes/post-page.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {RouterModule} from '@angular/router';
import {PostRoutingModule} from './post-routing.module';


@NgModule({
  declarations: [
    PostPageComponent,
    PostPagePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    RouterModule,
    PostRoutingModule,
  ],
  exports: [
    PostPageComponent,
    PostPagePipe,
  ]
})
export class PostModule {
}
