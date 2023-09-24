import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RoundedBlockDirective } from './directives/rounded-block.directive';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    PageWrapperComponent,
    SidebarComponent,
    FooterComponent,
    ToolbarComponent,
    RoundedBlockDirective,
    ListaDeUsuariosComponent,

 ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
