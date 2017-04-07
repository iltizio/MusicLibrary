import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import { MaterialModule } from '@angular/material';

import {AppComponent} from "./app.component";
import {WelcomeComponent} from './home/welcome.component';
import {AlbumsComponent} from './albums/albums.component';
import {AlbumsListComponent} from './albums/albums-list/albums-list.component';
import {AlbumDetailComponent} from './albums/album-detail/album-detail.component';

import 'hammerjs';

const appRoutes: Routes = [
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: 'welcome', component: WelcomeComponent},
    { path: 'albums', component: AlbumsComponent, children: [
        { path: 'albumsList', component: AlbumsListComponent, outlet: 'list' },
        { path: ':id', component: AlbumDetailComponent, outlet: 'detail' }
    ] },
    //{ path: 'product/:id', component: ProductDetailComponent },
    {path: '**', component: WelcomeComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        AlbumsComponent,
        AlbumsListComponent,
        AlbumDetailComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
