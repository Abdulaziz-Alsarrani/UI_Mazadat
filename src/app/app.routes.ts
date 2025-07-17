import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path:'',
    pathMatch:'full',
    loadComponent: () => {
       return import('./pages/home-page/home-page').then(
        (m) => m.HomePage
       )
    },
},
 {
    path:'mazadat-page',
    loadComponent: () => {
       return import('./pages/mazadat-page/mazadat-page').then(
        (m) => m.MazadatPage
       )
    },
},
{
    path:'info-page',
    loadComponent: () => {
       return import('./pages/info-page/info-page').then(
        (m) => m.InfoPage
       )
    },
}
];
