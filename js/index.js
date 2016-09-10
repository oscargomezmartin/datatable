$(document).ready(function() {
  $('#example').DataTable({
    "ajax": "data/objects.txt",
    "columns": [
      { "mData": "niceClass" },
      { "mData": "standardPhrase" },
      {
        "mData": "incompatibility",
        "mRender": function(data, type, row){
          var columnHTML = "";
          for (var i = 0; i < data.length; i++) {
            columnHTML += "<span>" + data[i].niceClass + "</span>";
          }
          return columnHTML;
        }
      },
      {
        "mData": null,
        "mRender": function() {
          return null;
        }
      }
    ],
  });
});
