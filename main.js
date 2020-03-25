$(function(){
    //表格
    var data=[
        {lang:'Java',rank:'1',change:'降',degree:'-0.01%'},
        {lang:'C',rank:'2',change:'升',degree:'+2.44%'},
        {lang:'Python',rank:'3',change:'升',degree:'+1.41%'},
        {lang:'C++',rank:'4',change:'降',degree:'-2.58%'},
        {lang:'C#',rank:'5',change:'升',degree:'+2.07%'},
        {lang:'Visual Basic',rank:'6',change:'降',degree:'-1.17%'},
        {lang:'JavaScript',rank:'7',change:'降',degree:'-0.85%'}
    ];

    var excel=new Handsontable(document.getElementById('excel'),{
        data:data,
        colHeaders:['语言名称','排名','升或降','变化幅度'],//自定义列头
        colWidths:130,//设置所有列宽
        rowHeights:30,//设置所有行高
        filters:true,
        columnSorting:true,//列排序
        autoColumnSize:true,//自动列大小
        undo:true,
        redo:true,
        wordWrap:true,
        allowInsertRow:true,
        allowInsertColumn:false,
        licenseKey: "4d522-5237a-55f42-6653a-d1494"
    });

    //折线图
    var myChart=echarts.init(document.getElementById('main'));
    var option={
        title:{
            text:'JavaScript语言排名变化'
        },
        tooltip:{},
        xAxis:{
            type:'category',
            data:[2000,2005,2010,2015,2020]
        },
        yAxis:{
            type:'value'
        },
        series:[{
            data:[6,9,8,8,7],
            type:'line'
        }]
    };

    myChart.setOption(option);
});