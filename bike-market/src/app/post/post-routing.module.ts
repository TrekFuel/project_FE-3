import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostPageComponent} from './post-page.component';
import {PostPageResolver} from './resolvers/post-page.resolver';

const routes: Routes = [
  {
    path: '',
    component: PostPageComponent,
    resolve: {postId: PostPageResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
