riot.tag2('kangrat-editor-load', '<input ref="fileInput" type="file"><br> <material-button class="ui" refs="fileButton" wavestart="{this.loadFile}"> <div class="text">LOAD</div> </material-button>', '', '', function(opts) {
var _this = this;
this.loadFile = function (evt) {
    console.log('attempting load');
    window.state.loadSave(_this.refs.fileInput.files[0].path);
};
});
riot.tag2('kangrat-editor', '<material-navbar> <div class="logo">Kangrat</div> </material-navbar> <router> <route path="/load"><kangrat-editor-load></kangrat-editor-load></route> <route path="/schemas"></route> <route path="/template"><p>Template</p></route> <route path="/data"><p>Data</p></route> </router>', 'kangrat-editor .logo,[data-is="kangrat-editor"] .logo{ font-size: 25pt; color: white; margin-left: 10px; }', '', function(opts) {
});