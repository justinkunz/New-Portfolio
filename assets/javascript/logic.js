var activeSheet = 'about'
var page
$(document).ready(function () {
    $('#homeBio').fadeIn('slow')
});

$(document).on('click', '.pageLink', function (e) {
    e.preventDefault()
    page = $(this).val()
    if (activeSheet === page) {
        return
    }
    activeSheet = page

    fadeCurr()
    setTimeout(show, 500)
})
function show() {
    if (page === 'cont') {
        $('#contForm').fadeIn('slow')
    }
    if (page === 'about') {
        $('#homeBio').fadeIn('slow')
    }
    if (page === 'port') {
        $('#portPage').fadeIn('slow')
        $('.sticky').css('height', 'auto')
    }
}

function fadeCurr() {
    $('#contForm').fadeOut('500')
    $('#portPage').fadeOut('500')
    $('#homeBio').fadeOut('500')
    $('.sticky').css('height', 'calc(100vh - 50px)')
}

$(document).on('click', '.imgs', function () {
    $('#picTitle').text($(this).attr('data-proj'))
    $('#picBody').text($(this).attr('data-desc'))

    liveLink = $(this).attr('data-liveLink')
    viewCode = $(this).attr('data-codeLink')

    $('#picModal').modal('toggle')
})

$(document).on('click', '#viewCode', function(){
    window.open(viewCode)
 });

 $(document).on('click', '#liveLink', function(){
    window.open(liveLink)
 });

 $(document).on('click', '#linkedin', function(){
    window.open('https://www.linkedin.com/in/justin-kunz-449392136/')
 })

 $(document).on('click', '#github', function(){
    window.open('https://github.com/justinkunz')
 })

 var config = {
    apiKey: "AIzaSyDboo91WR61Gm8K-TsvC9iRznNrQmeHfLA",
    authDomain: "portfoliocontact-3e598.firebaseapp.com",
    databaseURL: "https://portfoliocontact-3e598.firebaseio.com",
    projectId: "portfoliocontact-3e598",
    storageBucket: "portfoliocontact-3e598.appspot.com",
    messagingSenderId: "1063611236117"
  };
  firebase.initializeApp(config);

  db = firebase.database()

  $(document).on('click', '#pushCont', function(){
   db.ref().push({
    name: $('#inpName').val().trim(),
    email: $('#inpEmail').val().trim(),
    msg: $('#inpMsg').val().trim()
   })

   $('#contModal').modal('toggle')
   
 })

 $(document).on('click', '#goBack', function(){
    $('#contModal').modal('toggle')
 })
 
