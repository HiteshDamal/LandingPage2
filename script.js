
const table_body=document.querySelector("#table_body")

getData()
async function getData(){
    const obj = [
            {
            "current_price": 2400,
            "seat_no": "U1",
            "status": "B"
          },{
            "current_price": 2800,
            "seat_no": "L1",
            "status": "B"
          },{
            "current_price": 1600,
            "seat_no": "L2",
            "status": "A"
          },{
            "current_price": 1848,
            "seat_no": "L3",
            "status": "B"
          },{
            "current_price": 2071,
            "seat_no": "U2",
            "status": "A"
          },{
            "current_price": 1790,
            "seat_no": "U3",
            "status": "B"
          },{
            "current_price": 2400,
            "seat_no": "U4",
            "status": "B"
          },{
            "current_price": 2410,
            "seat_no": "L4",
            "status": "A"
          },{
            "current_price": 2338,
            "seat_no": "L5",
            "status": "B"
          },{
            "current_price": 2338,
            "seat_no": "L6",
            "status": "A"
          }
    ]
    return obj;
    
}
display()
async function display() {
  const obj= await getData()
  let tableData=""
    obj.map((values)=>{
        tableData+=` <tr>
        <td>${values.seat_no}</td>
        <td>${values.current_price}</td>
        <td>${values.status}</td>
    </tr>`
    })
    table_body.innerHTML=tableData
}

const sort=document.querySelector('.sort')
sort.addEventListener("click",async()=>{
  const obj =await getData()
  

  obj.sort((a, b) => a.current_price - b.current_price);

        let tableData = "";
        obj.forEach((values) => {
            tableData += `
                <tr>
                    <td>${values.seat_no}</td>
                    <td>${values.current_price}</td>
                    <td>${values.status}</td>
                </tr>`;
        });

        table_body.innerHTML = tableData;
})
var main_via = [
    {
        "0": "2023-05-12",
        "1": 7,
        "2": 23,
        "3": 30,
        "4": 30
    },
    {
        "0": "2023-05-13",
        "1": 5,
        "2": 25,
        "3": 30,
        "4": 30
    },
    {
        "0": "2023-05-14",
        "1": 10,
        "2": 20,
        "3": 30,
        "4": 30
    },
    {
        "0": "2023-05-15",
        "1": 6,
        "2": 24,
        "3": 30,
        "4": 30
    },
    {
        "0": "2023-05-16",
        "1": 4,
        "2": 26,
        "3": 30,
        "4": 30
    },
    {
        "0": "2023-05-17",
        "1": 5,
        "2": 25,
        "3": 30,
        "4": 30
    }
];

var data = [
    {
        "date": "2023-05-12",
        "main_route": 7,
        "via_route": 23
    },
    {
        "date": "2023-05-13",
        "main_route": 5,
        "via_route": 25
    },
    {
        "date": "2023-05-14",
        "main_route": 10,
        "via_route": 20
    },
    {
        "date": "2023-05-15",
        "main_route": 6,
        "via_route": 24
    },
    {
        "date": "2023-05-16",
        "main_route": 4,
        "via_route": 26
    },
    {
        "date": "2023-05-17",
        "main_route": 5,
        "via_route": 25
    }
];

Highcharts.chart('container', {
    chart: {
      type: 'column',
      width:700,

    },
    title: {
      text: 'Booking History',
      align: 'left', 
        x: 10, 
      style:{
        fontSize:'4vw',
        color:"rgb(39, 52, 100)"
      }
    },
    xAxis: {
      categories: ['2023-05-12', '2023-05-13', '2023-05-14', '2023-05-15', '2023-05-16', '2023-05-17']
    },
    yAxis: {
      title: {
        text: 'Bookings'
      }
    },
    series: [{
      name: 'Main Route',
      data: [7, 5, 10, 6, 4, 5],
      color:'rgb(128, 128, 128)'
    }, {
      name: 'Via Route',
      data: [23, 25, 20, 24, 26, 25],
      color:'rgb(205, 214, 255)'
    }]
  })


  const social_button = document.querySelector(".social_button");
const social = document.querySelector('.social-media');

social_button.addEventListener("click", () => {
    social_button.style.display = "none";
    social.style.display = "block"; 
});
