<kangrat-editor>
	<style>
		.logo {
			font-size: 25pt;
			color: white;
			margin-left: 10px;
		}
	</style>
	<material-navbar>
    	<div class="logo">Kangrat</div>
	</material-navbar>
	<router>
		<route path="/load"><kangrat-editor-load></kangrat-editor-load></route>
		<route path="/schemas"></route>
		<route path="/template"><p>Template</p></route>
		<route path="/data"><p>Data</p></route>
	</router>
</kangrat-editor>