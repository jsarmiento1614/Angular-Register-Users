import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RolesComponent } from './roles/roles.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DetalleRolComponent } from './detalle-rol/detalle-rol.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DetalleUserComponent } from './detalle-user/detalle-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    DetalleRolComponent,
    UsuariosComponent,
    DetalleUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
