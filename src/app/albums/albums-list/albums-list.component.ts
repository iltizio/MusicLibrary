import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { AlbumsService } from '../shared/albums.service';
import { Album } from '../shared/album';

@Component({
    selector: 'app-albums-list',
    templateUrl: 'app/albums/albums-list/albums-list.component.html',
    styleUrls: ['app/albums/albums-list/albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
    albums: Album[] = [];

    constructor(
        private router: Router,
        private service: AlbumsService
    ) { }

    ngOnInit() {
        this.albums = this.service.getAlbums();
    }

    showDetail(id: String) {
        this.router.navigate(['/albums', {outlets: {'detail': [id]}}]);
    }
}
