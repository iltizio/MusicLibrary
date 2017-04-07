import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../shared/albums.service';
import { Album } from '../shared/album';

@Component({
    selector: 'app-detail',
    templateUrl: 'app/albums/album-detail/album-detail.component.html',
    styleUrls: ['app/albums/album-detail/album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
    currentAlbum: Album;

    constructor(
        private route: ActivatedRoute,
        private service: AlbumsService
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: {id: string}) => {
            this.currentAlbum = this.service.getAlbumByID(params.id);
        });
    }
}
