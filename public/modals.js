//Modal procesando datos
function showProcesandoDatos(){
  var modalLoading = '<div class="modal" id="showProcesandoDatos" data-backdrop="static" data-keyboard="false role="dialog">\
        <div class="modal-dialog">\
            <div class="modal-content">\
                <div class="modal-header">\
                    <h4 class="modal-title">Estamos validando tus datos...</h4>\
                </div>\
                <div class="modal-body">\
                    <div class="progress">\
                      <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar"\
                      aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%; height: 40px">\
                      </div>\
                    </div>\
                </div>\
                </div>\
            </div>\
        </div>\
    </div>';
    $(document.body).append(modalLoading);
    $("#showProcesandoDatos").modal("show");
}
//Modal procesando datos
function hideProcesandoDatos(){
  $("#showProcesandoDatos").modal("hide");
}