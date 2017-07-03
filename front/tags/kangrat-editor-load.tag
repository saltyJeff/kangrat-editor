<kangrat-editor-load>
	<input refs="fileInput" type="file" /><br>
	<material-button class="ui" onclick="this.loadFile">
		<div class="text">LOAD</div>
	</material-button>
	<script>
		this.loadFile = (evt) => {
			(window as any).state.loadFile(this.refs.fileInput.files[0].path);
		};
	</script>
</kangrat-editor-load>