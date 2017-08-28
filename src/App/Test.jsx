import React, { Component } from 'react';


import Navbar from '../App/Components/Navbar/BottomNav.jsx';
import ActionBar from './Components/Actionbar/Actionbar.jsx';

import InstagramIcon from '../App/Icons/InstagramIcon.jsx';
import SnapchatIcon from '../App/Icons/SnapchatIcon.jsx';
import AllIcon from '../App/Icons/AllIcon.jsx';

// import './styles/mainstyles.scss';



class Main extends Component {

    constructor() {
        super();

        this.state = {
            selectedIndex: 0
        }

        this.navItems = [
            {
                label: 'Snapchat',
                icon: <SnapchatIcon />
            },
            {
                label: 'All',
                icon: <AllIcon />
            }, {
                label: 'Instagram',
                icon: <InstagramIcon />
            }
        ]


    }

    selectTab(index) {
        this.setState({
            selectedIndex: index
        })
    }

    render() {

        return (
            <section className="app">
                <header className="action-bar">
                    <ActionBar />
                </header>
                <div className="main-content">
                    <section className="leftSide">
                        <div className="leftSideBit">
                            Left Side
                        </div>
                    </section>
                    <div className="profiles">
                        <h4>Main Content</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deleniti nobis ipsam vero temporibus ad, ullam non exercitationem perspiciatis consequuntur iste enim ut at quod expedita optio sint nam quibusdam ipsa facere quasi iusto quas similique. Autem consequatur expedita ullam corporis vero blanditiis deleniti ea perferendis mollitia? Nulla porro quia nam rerum quis facilis aspernatur ipsa deleniti corrupti, minus aperiam doloremque quibusdam autem vitae quae? Quas, molestiae amet porro necessitatibus ea, maiores incidunt laboriosam tempore dolor deserunt hic perspiciatis ducimus? Similique amet adipisci cum quibusdam maiores, eveniet totam tempora quaerat labore cumque dolorum, minima tempore libero fugiat delectus voluptatum obcaecati beatae ad quae repellendus. Fuga repellat nulla facere velit deleniti sint adipisci repellendus hic eaque dolores excepturi delectus maxime molestias exercitationem dolorem amet, quae error voluptatibus laudantium esse itaque suscipit eos odio! Sapiente officiis laborum ab, nemo eveniet quae nulla vero quibusdam dignissimos voluptatem. Autem doloribus necessitatibus dolore quasi et quos nam quis illum, esse minus commodi laboriosam molestias quae labore error ducimus, eveniet facere itaque facilis! Veritatis tempora modi autem, doloribus et, molestiae esse voluptatem nisi sint eum accusantium maxime harum animi tempore iure corporis dignissimos eveniet architecto provident vitae. Architecto hic vel ab corporis sint aliquid, debitis velit temporibus praesentium nostrum veritatis sequi sapiente quisquam dolorum quod molestias. Esse, optio error deleniti impedit rem eos et recusandae, necessitatibus provident quidem incidunt sed aut voluptate at sit repellendus saepe, quae quaerat laboriosam vero quia ab! Minima provident optio minus asperiores inventore eum odio impedit consequuntur atque laboriosam corrupti dolor quod voluptatum ad repudiandae iusto culpa, quidem aut repellendus sit voluptas in! Dolor possimus sint quod a unde minima aut tenetur ab odit ex id nulla exercitationem dignissimos, sequi, nostrum quas fugit eveniet quam asperiores neque quos? Dolorum, magni sequi magnam deleniti fugiat animi molestiae porro est. Modi tempora delectus minima quam voluptate alias et! Architecto possimus cumque reiciendis nisi eligendi quibusdam! Quia aliquam eaque perspiciatis debitis nisi quis numquam, beatae quibusdam laudantium officia corporis dicta aliquid aspernatur suscipit deleniti expedita dignissimos. Minima nihil non laborum, nobis voluptate similique quas omnis accusantium, assumenda labore unde id porro ea odit. Aperiam perferendis temporibus dicta nulla hic, sed dolore quis numquam tempora atque fugiat neque nihil deserunt error perspiciatis molestiae ut inventore eius dolorem doloremque praesentium laboriosam quos dolor! Error nostrum possimus corporis nihil vel nesciunt est praesentium rerum, dicta, suscipit vero beatae ipsa quidem optio qui iusto! Eius voluptatem nulla molestias beatae ipsa minus ad, ratione eligendi rerum distinctio mollitia modi, voluptatum doloremque pariatur obcaecati! Quae, obcaecati. Nobis provident, repudiandae dolorem quaerat placeat neque quibusdam aliquid quidem ducimus cupiditate quia, velit itaque similique, modi inventore tempore. Recusandae ad eligendi labore hic quam ex sed excepturi totam tempore non. Temporibus, perferendis voluptates? Odio amet fugit officiis nam enim saepe qui, in ullam voluptatem eligendi quidem nihil, consequuntur neque. Dolorum vel ipsa, numquam temporibus corrupti quia, hic atque alias eveniet recusandae aperiam rerum, accusamus exercitationem sit cum modi ab amet! Quas repellendus tempora qui voluptas quisquam? Atque, aspernatur odio eos harum magni eveniet sint expedita sed quia voluptas illo? Earum maiores sapiente tenetur aspernatur, consequuntur voluptas architecto repellendus illum debitis dolorem sunt sequi eveniet ea? Quod quam earum consequatur magnam a, eos sed assumenda sint, dicta atque distinctio neque adipisci officia pariatur temporibus doloremque tempora praesentium excepturi odit fuga facere voluptatibus laudantium provident. Possimus amet iusto sapiente, odit tenetur repellendus qui, cum, soluta modi eius eaque quis quidem excepturi omnis.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptas ea tempore ex repellendus cum quos autem illo, cumque laborum modi harum temporibus deleniti. Expedita animi atque maiores vitae eveniet magnam laudantium soluta veritatis optio quo. Illo minima maiores, voluptas cupiditate provident suscipit officia nisi excepturi. Nulla vitae dignissimos mollitia non ab provident, est modi repellendus soluta vero error hic eligendi voluptatibus deserunt unde dolorum. Voluptatibus ad illo beatae corrupti expedita ratione adipisci aliquam repudiandae error cupiditate ea a saepe culpa consectetur, excepturi veniam similique sed nam obcaecati dolore vel rerum nulla? Sunt, modi voluptatem, asperiores minus harum porro illo quas a quidem atque nisi! Eligendi, aspernatur! Unde, assumenda placeat sint, rem libero cum accusamus voluptatem eligendi ratione sapiente atque maxime quibusdam optio delectus. Neque odit similique aliquam tempora pariatur voluptates, sunt omnis officia impedit vero repellendus ipsa libero perferendis! Nihil ducimus doloribus illum aliquam cum odio suscipit explicabo debitis? Possimus ad voluptas animi, temporibus cupiditate ab iure facere debitis doloremque nihil blanditiis repellat aliquam, error atque accusamus? Maxime assumenda iste fugiat neque illum esse, accusantium, quod repellat, reiciendis odio temporibus voluptatibus dicta nulla praesentium voluptate quae? Hic laboriosam non natus minima eaque dignissimos, cum quas assumenda iste rerum laudantium enim reiciendis inventore ipsa iure dolores ex! Esse voluptatem, doloremque molestiae, beatae deleniti debitis suscipit non sint tenetur architecto itaque velit nisi explicabo vel iure repellat ducimus fugiat harum natus minima? Deserunt eum, rerum harum omnis natus eveniet. Consectetur, natus. Repellendus, eligendi perspiciatis ab quaerat ullam debitis soluta eaque! Eius quasi obcaecati, necessitatibus ab dolorum, deserunt consectetur dicta iste laboriosam possimus ipsum recusandae at debitis eveniet impedit! Voluptate deserunt ea eveniet fugiat maiores! Soluta totam quod repellat ducimus similique? Quisquam aliquam et debitis perspiciatis rem in. Molestiae ipsa deserunt, non laudantium eaque mollitia soluta ipsam quia voluptates esse placeat atque expedita, aspernatur consectetur! Recusandae perspiciatis laborum veniam harum ipsa voluptas dolores iste natus a, ex hic alias deleniti cupiditate. Quo dolores consequatur dolorum possimus quam ipsam cum eius delectus distinctio ea iusto assumenda quia quas totam ullam natus nisi, molestias a voluptatem laudantium ad maiores. Quisquam eaque corporis consectetur itaque enim aliquam magnam ipsa perferendis aliquid optio dicta, porro dolorum sint quasi. Repellat incidunt deleniti dolorum corrupti consequatur numquam architecto? Possimus error rem perspiciatis non corporis eius numquam pariatur facere amet. Dignissimos consequatur est nostrum labore veniam voluptatum possimus libero eveniet rem, harum, accusamus deserunt at, vero nobis mollitia consequuntur dolores? Quaerat est ullam magnam temporibus, laboriosam cupiditate odio voluptatum id. Eos inventore et sunt in perferendis voluptatum excepturi impedit libero illum sint, ipsum voluptatem est mollitia possimus laboriosam iusto asperiores laudantium maxime numquam? A soluta reiciendis pariatur illum harum. Ducimus pariatur quibusdam sapiente repudiandae, placeat aspernatur labore sed itaque, ipsa asperiores sint nemo sunt reprehenderit nam voluptatem repellendus adipisci omnis quo doloribus veniam praesentium alias dicta possimus quaerat. Dolorum explicabo placeat, laborum molestiae voluptatum quae obcaecati debitis nulla ea pariatur reprehenderit vero, nesciunt vitae animi. Enim voluptatem omnis minus assumenda, eaque, quibusdam perferendis excepturi vero, itaque repudiandae tempore id! Atque asperiores pariatur aperiam labore illo omnis rerum quae voluptates voluptate cum?</p>
                    </div>
                    <section className="social">
                        
                        <section className="socialbit">
                            SOCAILBIT
                        </section>
                    
                        
                    </section>
                </div>
                <footer className="nav-bar">
                    <Navbar
                        items={this.navItems} selectedIndex={this.state.selectedIndex}
                        selectTab={(index) => this.selectTab(index)}>
                    </Navbar><Navbar
                        items={this.navItems} selectedIndex={this.state.selectedIndex}
                        selectTab={(index) => this.selectTab(index)}>
                    </Navbar>
                </footer>
            </section>

        );
    }
}

export default Main;