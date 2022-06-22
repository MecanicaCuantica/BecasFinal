import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    children:[
      {
        path:"",
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
      },
      {
        path:"consultar/:becaId",
        loadChildren: () => import('./consultar/consultar.module').then(m => m.ConsultarPageModule)
      }
    ]
  },
  {
    path: 'consultar',
    loadChildren: () => import('./consultar/consultar.module').then( m => m.ConsultarPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
