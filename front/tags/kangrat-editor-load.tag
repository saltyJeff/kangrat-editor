<kangrat-editor-load>
	<input ref="fileInput" type="file" /><br>
	<material-button class="ui" refs="fileButton" wavestart={this.loadFile}>
		<div class="text">LOAD</div>
	</material-button>
	<script>
		this.loadFile = (evt) => {
			console.log('attempting load');
			(window as any).state.loadSave(this.refs.fileInput.files[0].path);
		};
	</script>
</kangrat-editor-load>