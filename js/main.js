function formatDate(date) {
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
                    'Sep', 'Oct', 'Nov', 'Dec'];
  return date.getDate() + ' ' +
         monthNames[date.getMonth()] + ' ' +
	       date.getFullYear();
}


function getYesterday() {
  var today = new Date();
  today.setDate(today.getDate() - 1);
  return today;
}


new Vue({
  el: '#gigs',
  computed: {
    areFutureGigs: function() {
      for (var i = 0; i < this.gigs.length; i++) {
        if (this.gigs[i].when > this.yesterday) {
          return true;
        }
      }
      return false;
    }
  },
  data: {
    yesterday: getYesterday(),
    gigs: [
      {
	      when: new Date(2018, 2, 21),
	      content: '<a href="https://www.facebook.com/events/511121392622338/">ElectrolightsAV VI</a><br >Rye Wax',
      },
      {
	      when: new Date(2018, 8, 29),
	      content: '<a href="https://therawandthecooked.intersections.io/cooked.html">The RAW and The COOKED</a><br >Café 1001'
      },
      {
	      when: new Date(2018, 9, 18),
	      content: '<a href="https://www.residentadvisor.net/events/1169850">ElectrolightsAV XII</a><br >New River Studios'
      },
      {
	      when: new Date(2019, 1, 23),
	      content: '<a href="https://www.meetup.com/London-modular-synthesis-group/events/258296806/">CV Freqs XI</a><br >IKLECTIK'
      },
      {
	      when: new Date(2019, 4, 1),
	      content: '<a href="https://www.residentadvisor.net/events/1204412">Sonic Electronics</a><br >The others'
      },
      {
	      when: new Date(2019, 5, 15),
        content: 'As <b>IDMT?</b> w/ <b><a href="https://lwlsn.github.io/digitalselves-web/">digital selves</a></b><br ><a href="https://www.residentadvisor.net/events/1259799">ElectrolightsAV XIII</a><br >New River Studios'
      },
      {
        when: new Date(2019, 6, 21),
        content: '<a href="http://brightonmodularmeet.co.uk/">Brighton Modular Festival</a><br >Attenborough Centre for the Creative Arts, Brighton'
      },
      {
        when: new Date(2019, 6, 27),
        content: 'As <b>IDMT?</b> w/ <b><a href="https://lwlsn.github.io/digitalselves-web/">digital selves</a></b><br ><a href="https://www.wegottickets.com/event/477845">TOTAL CULT #3</a><br >Brew Club'
      },
    ]
  }
});
