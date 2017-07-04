import moment from 'moment'

export const getDaysInMonth = (month, year) => {
    var date = new Date(year, month, 1);
     var days = [];
//     moment.locale();   
  //   moment().format('L');  
     while (date.getMonth() === month) {
        const day = new Date(date)
        days.push(
            {
                'date': moment(day).format('DD/MM/YYYY'),
                'day': moment(day).format('dddd')
            });
        date.setDate(date.getDate() + 1);
     }
     return days;
}


export const getDaysInCurrentMonth = () => {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    return getDaysInMonth(month, year);
} 