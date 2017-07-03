import {SaveFile} from 'kangrat';
import * as mobx from 'mobx';
import * as path from 'path';
export class SharedState {
	@mobx.observable public currentPage: string = 'load';
	@mobx.observable public save: SaveFile = null;
	public async loadSave(metaPath: string) {
		this.save = new SaveFile();
		await this.save.readFrom(path.dirname(metaPath));
		console.log('save loaded');
		this.currentPage = 'schemas';
	}
}