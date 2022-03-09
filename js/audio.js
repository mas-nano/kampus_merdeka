$(document).ready(() => {
  $("#kambing").click(() => {
    $("#audio").html(`
        <audio controls autoplay>
            <source src="audio/kambing.mp3" type="audio/mpeg">
        </audio>
    `);
    $("#kambing").css({
      background: "url('img/kambing.jpg')",
      "background-size": "200px 100px",
    });
  });
  $("#kuda").click(() => {
    $("#audio").html(`
        <audio controls autoplay>
            <source src="audio/kuda.mp3" type="audio/mpeg">
        </audio>
    `);
    $("#kuda").css({
      background: "url('img/kuda.jpg')",
      "background-size": "200px 100px",
    });
  });
  $("#singa").click(() => {
    $("#audio").html(`
        <audio controls autoplay>
            <source src="audio/singa.mp3" type="audio/mpeg">
        </audio>
    `);
    $("#singa").css({
      background: "url('img/singa.jpg')",
      "background-size": "200px 100px",
    });
  });
  $("#burung").click(() => {
    $("#audio").html(`
        <audio controls autoplay>
            <source src="audio/burung.mp3" type="audio/mpeg">
        </audio>
    `);
    $("#burung").css({
      background: "url('img/burung.jpg')",
      "background-size": "200px 100px",
    });
  });
});
