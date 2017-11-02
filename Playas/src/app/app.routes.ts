import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CoordinadorComponent } from './components/coordinador/coordinador.component';
import { SocorristaComponent } from './components/socorrista/socorrista.component';
import { AdminGeneralComponent } from './components/admin-general/admin-general.component';
import { GestorPlayasComponent } from './components/gestor-playas/gestor-playas.component';
import { MenuComponent } from './components/menu/menu.component';


const app_routes: Routes = [
{ path: 'login', component: LoginComponent},
{ path: 'coordinador', component: CoordinadorComponent},
{ path: 'socorrista', component: SocorristaComponent},
{ path: 'admin', component: AdminGeneralComponent},
{ path: 'gestor', component: GestorPlayasComponent},
{ path: 'menu', component: MenuComponent},
{ path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const app_routing = RouterModule.forRoot(app_routes);
