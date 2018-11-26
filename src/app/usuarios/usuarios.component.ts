import { Component, OnInit } from '@angular/core';
import { Usuario } from '../share/models/usuario';
import { UsuarioService } from '../share/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:Array<Usuario>;
  createMode : boolean;
  nuevoUsuario : Usuario;
  SelectedUser: Usuario;
  constructor(private usuarioService:UsuarioService) {
    this.usuarioService = usuarioService;
    this.createMode = false;

   }

  ngOnInit() {
    this.usuarioService.getUsuarios()
    .subscribe((data: Array<Usuario>)=>{
        this.usuarios = data;
    },error =>{
      console.log("Error " + error);
    });
  }

  createUser():void{
    this.createMode=true; 
    this.nuevoUsuario = new Usuario;
  }

  onCreateUser() : void{
    this.usuarioService.crearUser(this.nuevoUsuario)
      .subscribe((data : Usuario ) =>{
        this.usuarios.push(data);
        this.createMode = false;
      }, error => console.log("error "+ error));
  }

  onSelect(user:Usuario):void{
    this.SelectedUser = user;
  }

}
