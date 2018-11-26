import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../share/models/usuario';
import { UsuarioService } from '../share/usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle-user',
  templateUrl: './detalle-user.component.html',
  styleUrls: ['./detalle-user.component.css']
})

export class DetalleUserComponent implements OnInit {
@Input()
usuario : Usuario;

constructor(private usuariosService : UsuarioService) { 
  this.usuariosService=usuariosService;
}

ngOnInit() {
  
}

onEdit() : void{
  this.usuariosService.editUser(this.usuario)
    .subscribe((data : Usuario) => {
      this.usuario = null;
    }, error => console.log("error " + error));
}

}
