import { Component } from '@angular/core';
import { AlbumsService } from './shared/albums.service';

@Component({
    selector: 'app-albums',
    templateUrl: 'app/albums/albums.component.html',
    styleUrls: ['app/albums/albums.component.css'],
    providers: [AlbumsService]
})
export class AlbumsComponent{}