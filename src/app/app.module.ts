import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarFilmesComponent } from './components/listar-filmes/listar-filmes.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesFilmeComponent } from './components/detalhes-filme/detalhes-filme.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { allIcons } from 'ngx-bootstrap-icons';
import { EmAltaFilmeComponent } from './shared/em-alta/em-alta.component';
import { LancamentoFilmeComponent } from './shared/lancamentos/lancamentos.component';
import { EmBreveComponent } from './shared/em-breve/em-breve.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListarFilmesComponent,
    DetalhesFilmeComponent,
    EmAltaFilmeComponent,
    LancamentoFilmeComponent,
    EmBreveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxBootstrapIconsModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }