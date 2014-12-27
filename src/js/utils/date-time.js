module.exports = {

  addDays: function(d, days) {
    var newDate = this.clone(d);
    newDate.setDate(d.getDate() + days);
    return newDate;
  },

  addMonths: function(d, months) {
    var newDate = this.clone(d);
    newDate.setMonth(d.getMonth() + months);
    return newDate;
  },

  clone: function(d) {
    return new Date(d.getTime());
  },

  getDaysInMonth: function(d) {
    var resultDate = this.getFirstDayOfMonth(d);

    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);

    return resultDate.getDate();
  },

  getFirstDayOfMonth: function(d) {
    return new Date(d.getFullYear(), d.getMonth(), 1);
  },

  getFullMonth: function(d) {
    var month = d.getMonth();
    switch (month) {
      case 0:  return 'Janvier';
      case 1:  return 'Février';
      case 2:  return 'Mars';
      case 3:  return 'Avril';
      case 4:  return 'Mai';
      case 5:  return 'Juin';
      case 6:  return 'Juillet';
      case 7:  return 'Août';
      case 8:  return 'Septembre';
      case 9:  return 'Octobre';
      case 10: return 'Novembre';
      case 11: return 'Décembre';
    }
  },

  getShortMonth: function(d) {
    var month = d.getMonth();
    switch (month) {
      case 0: return 'Jan';
      case 1: return 'Feb';
      case 2: return 'Mar';
      case 3: return 'Avr';
      case 4: return 'Mai';
      case 5: return 'Jui';
      case 6: return 'Jui';
      case 7: return 'Aou';
      case 8: return 'Sep';
      case 9: return 'Oct';
      case 10: return 'Nov';
      case 11: return 'Déc';
    }
  },

  getDayOfWeek: function(d) {
    var dow = d.getDay();
    switch (dow) {
      case 0: return 'Dimanche';
      case 1: return 'Lundi';
      case 2: return 'Mardi';
      case 3: return 'Mercredi';
      case 4: return 'Jeudi';
      case 5: return 'Vendredi';
      case 6: return 'Samedi';
    }
  },

  getWeekArray: function(d) {
    var dayArray = [];
    var daysInMonth = this.getDaysInMonth(d);
    var daysInWeek;
    var emptyDays;
    var firstDayOfWeek;
    var week;
    var weekArray = [];

    for (var i = 1; i <= daysInMonth; i++) {
      dayArray.push(new Date(d.getFullYear(), d.getMonth(), i));
    };

    while (dayArray.length) {
      firstDayOfWeek = dayArray[0].getDay();
      daysInWeek = 7 - firstDayOfWeek;
      emptyDays = 7 - daysInWeek;
      week = dayArray.splice(0, daysInWeek);

      for (var i = 0; i < emptyDays; i++) {
        week.unshift(null);
      };

      weekArray.push(week);
    }

    return weekArray;
  },

  format: function(date) {
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var y = date.getFullYear();
    return m + '/' + d + '/' + y;
  },

  isEqualDate: function(d1, d2) {
    return d1 && d2 &&
      (d1.getFullYear() === d2.getFullYear()) &&
      (d1.getMonth() === d2.getMonth()) &&
      (d1.getDate() === d2.getDate());
  },

  monthDiff: function(d1, d2) {
    var m;
    m = (d1.getFullYear() - d2.getFullYear()) * 12;
    m += d1.getMonth();
    m -= d2.getMonth();
    return m;
  }

}
