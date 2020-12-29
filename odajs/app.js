// import '../lib/oda.js'

import 'https://odajs.org/oda.js'

ODA({
    is: 'oda-pref',
    template:`
        <style>
            table {
                border-collapse: collapse;
                border-spacing: 0;
            }

            :before,
            :after {
                box-sizing: border-box;
            }

            .table>thead>tr>th,
            .table>tbody>tr>th,
            .table>tfoot>tr>th,
            .table>thead>tr>td,
            .table>tbody>tr>td,
            .table>tfoot>tr>td {
                border-top: 1px solid #ddd;
                line-height: 1.42857143;
                padding: 8px;
                vertical-align: top;
            }

            .table {
                width: 100%;
            }

            .table-striped>tbody>tr:nth-child(odd)>td,
            .table-striped>tbody>tr:nth-child(odd)>th {
                background: #f9f9f9;
            }

            .label {border-radius:.25em;color:#fff;display:inline;font-size:75%;font-weight:700;line-height:1;padding:.2em .6em .3em;text-align:center;vertical-align:baseline;white-space:nowrap;}

            .label-success {background-color:#5cb85c;}

            .label-warning {background-color:#f0ad4e;}
            :before,:after {box-sizing: border-box;}
            .popover {background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 5px 10px rgba(0,0,0,.2);display:none;left:0;max-width:276px;padding:1px;position:absolute;text-align:left;top:0;white-space:normal;z-index:1010;}
            .popover>.arrow:after {border-width:10px;content:"";}
            .popover.left {margin-left:-10px;}
            .popover.left > .arrow {border-right-width:0;border-left-color:rgba(0,0,0,.25);margin-top:-11px;right:-11px;top:50%;}
            .popover.left > .arrow:after {border-left-color:#fff;border-right-width:0;bottom:-10px;content:" ";right:1px;}
            .popover > .arrow {border-width:11px;}
            .popover > .arrow,.popover>.arrow:after {border-color:transparent;border-style:solid;display:block;height:0;position:absolute;width:0;}

            .popover-content {padding:9px 14px;}
        </style>

        <div id="app">
            <table class="table table-striped lastest-data">
                <tbody>
                    <tr oda-for="(db, $index) in databases">
                        <td class="dbname">{{db.dbname}}</td>
                        <td class="query-count">
                            <span :class="db.lastSample.countClassName">{{db.lastSample.nbQueries}} </span>
                        </td>
                         <td :for="(q, $index1) in db.lastSample.topFiveQueries" :class="q.elapsedClassName">
                            {{q.formatElapsed}}
                            <div class="popover left">
                                <div class="popover-content">{{q.query}}</div>
                                <div class="arrow"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    properties: {
        databases: {
            default: []
        }
    },
    ready(){
        this.databases = ENV.generateData(true).toArray();
        setTimeout(this.update.bind(this), ENV.timeout);
    },
    update() {
        // this.databases = ENV.generateData(true).toArray();
        ENV.generateData(true);
        Monitoring.renderRate.ping();
        // requestAnimationFrame(this.update.bind(this));
        setTimeout(this.update.bind(this), ENV.timeout);
    }
})
