import React, { Component } from 'react';


import Navbar from '../App/Components/Navbar/BottomNav.jsx';
import ActionBar from './Components/Actionbar/Actionbar.jsx';

import InstagramIcon from '../App/Icons/InstagramIcon.jsx';
import SnapchatIcon from '../App/Icons/SnapchatIcon.jsx';
import AllIcon from '../App/Icons/AllIcon.jsx';


require('./styles/mainstyles.scss');

class Frame extends Component {

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
            <div className="app">
                <header className="action-bar">
                    <ActionBar />
                </header>
                <section className="main-content">
                    <aside className="side content">
                        <div className="social">Left Content</div>
                    </aside>
                    <div className="center content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur a dolorem! Optio, vero quis? Corrupti eius rem, distinctio quo officiis, delectus soluta quisquam necessitatibus reprehenderit, neque assumenda possimus? Ratione sequi voluptas eligendi totam sit eius odio, quo iure! Cum accusantium culpa soluta totam aliquam fuga ea numquam, nulla iure similique reiciendis, porro dignissimos corporis harum veritatis illo pariatur temporibus eum officia at sequi. Quis maxime nemo itaque. Nulla nobis delectus quos incidunt omnis eligendi doloremque atque cupiditate dolor repellendus, fugit unde illum, aperiam possimus recusandae quia perferendis placeat, eaque vitae. Fugit vel eos quaerat sed nam obcaecati asperiores nostrum cumque exercitationem eligendi numquam, mollitia aspernatur consectetur autem odio voluptate deserunt error possimus. Facere laudantium tenetur reiciendis velit quis, sint mollitia voluptatem autem rerum fugit ratione necessitatibus porro quia at delectus rem, nihil dolore fuga ipsam. Suscipit, veritatis! Quia totam consequatur dolorum mollitia reiciendis incidunt, deleniti, libero similique voluptate sint esse ducimus maxime praesentium! Odio cupiditate est perferendis reiciendis nemo, commodi consequuntur ut, numquam maiores enim, laboriosam velit. Minima quidem impedit dolorum blanditiis quis repellendus, repellat cupiditate in illo dicta sint laborum at distinctio molestiae nobis provident necessitatibus. Animi non consequuntur beatae reiciendis vel! Reiciendis labore provident ratione iusto ullam dolorem dolorum ut odit eum modi quas sit numquam nesciunt, illum fugit libero, voluptas quibusdam adipisci ducimus sint qui assumenda. Voluptatum quam porro modi voluptates hic dolorum, ratione debitis inventore, quos laboriosam nemo. Repellendus expedita exercitationem ab ex, culpa ratione porro itaque quae tempora eum, blanditiis officiis cupiditate dolorem distinctio error labore odit sapiente, cum ut accusantium beatae consectetur explicabo animi veniam? Ipsam, provident ipsa corrupti aliquid voluptas corporis voluptatibus vel, rem officiis nisi consequuntur voluptatum. Officia iusto harum debitis tenetur veniam? Ab esse quis id error quas ullam porro vel ex distinctio, voluptatem doloremque commodi, dolorum modi. Quibusdam omnis adipisci unde. Aperiam ullam quidem quia explicabo consequatur optio laboriosam quae! Voluptate ea et ducimus modi rerum? Soluta itaque repudiandae dolore magni impedit est omnis? Reprehenderit ipsam eum voluptates est quas repellendus tempore magni eveniet totam quae, autem iure voluptatibus mollitia fuga nostrum ea ad aperiam vel quaerat nulla iste ex saepe rem? Eligendi dolor fuga nisi impedit sapiente voluptatum adipisci pariatur ipsam quibusdam quasi similique perferendis, voluptates fugit consequuntur recusandae, veniam eaque unde minus, dignissimos modi? Inventore sunt, quos quas non praesentium totam ullam tempora, velit accusantium ipsum quam itaque modi amet dolore rem perferendis. Quisquam asperiores sequi omnis accusantium incidunt adipisci minima laborum. Eum laudantium aspernatur ullam, commodi reiciendis quis veritatis. Perferendis facere omnis cumque magni fuga maiores tempore, consectetur optio officiis ipsam laudantium modi magnam deserunt. Nostrum nisi hic consequatur, debitis minus reiciendis iste temporibus beatae recusandae amet. Nemo, assumenda, dolorum suscipit doloribus nulla voluptates aut dignissimos iusto, maiores porro sunt dolore quidem quibusdam? Laudantium vero unde quis, nam at explicabo impedit. Beatae rerum, soluta velit illo quidem et saepe recusandae nihil enim tempora eaque rem quo dolore impedit iusto earum animi, ipsum laudantium veniam adipisci tenetur cupiditate. Enim quidem nam rem, laboriosam cupiditate omnis ipsa perferendis! Hic harum quo necessitatibus mollitia odio ducimus illo nulla dolorem exercitationem enim, veritatis ad ut neque reiciendis aut vitae quam eveniet? Facere labore, sit quaerat velit repellendus numquam quo odit delectus ut dolorem, ex sequi, hic sunt quam mollitia! Ex sed harum optio soluta totam voluptatum velit ab eaque suscipit neque, quis quos laudantium ipsam, ratione est nesciunt commodi voluptatibus accusamus nostrum numquam, distinctio praesentium expedita. Ab excepturi labore qui veritatis amet, quaerat neque minima architecto harum inventore officia delectus doloribus, aliquam voluptatem voluptas soluta velit debitis sed ipsam suscipit eos nisi! Optio repellat fugit corporis beatae, recusandae minima eos eaque provident suscipit quos necessitatibus? Cum nulla, ut repellat eveniet, facere eum saepe ipsa atque explicabo obcaecati perspiciatis repudiandae. Illum odit dolor veniam ratione earum dolorem sed voluptatum unde! Explicabo expedita doloribus unde quos suscipit dolorem minima incidunt dolores ullam quidem! Quos cupiditate quibusdam harum. Nam at vel quibusdam quas dolor totam, magnam praesentium omnis, aliquam sequi quod voluptate, exercitationem necessitatibus? Ipsum consectetur ipsa libero? Esse itaque magni animi a. Consectetur nam veritatis esse, necessitatibus quam quos amet itaque beatae aliquid natus sit optio maxime reiciendis porro. Inventore reprehenderit molestiae, aperiam, eos ipsam voluptatibus soluta fugiat placeat dignissimos consectetur ad repellat vel deserunt nesciunt corrupti totam. Id ipsum reiciendis molestiae porro, fuga doloremque? Laboriosam, ab eaque dolor quo dignissimos, atque illum quis a veniam magnam iure perspiciatis praesentium cumque quod dolore magni fuga! Aliquid velit a quisquam, provident animi, dolor voluptates quos inventore natus pariatur temporibus, ab veniam sint atque nisi autem reiciendis incidunt earum odit iste facere nemo. Minus sit vitae alias, fuga pariatur nisi officiis ipsa id et eveniet totam rem voluptatum ea nesciunt quod, eius mollitia reprehenderit ut quidem cum. Non velit officia porro! Recusandae veritatis quae voluptatem perspiciatis aliquam accusantium atque magni voluptas similique nam perferendis, voluptatum repudiandae, sed nesciunt cum at architecto eligendi earum beatae doloremque. Dolor quia veniam beatae fuga corrupti fugit perspiciatis, enim repudiandae vel, dignissimos pariatur aliquam porro exercitationem unde adipisci mollitia quod, rerum repellendus eum facere excepturi totam optio. Minus deleniti exercitationem eaque quis numquam sit veniam vel architecto delectus similique est corporis adipisci recusandae autem rerum ipsum nihil placeat reiciendis eius dicta quas error voluptas, molestias quisquam! Delectus est nulla dolore quasi voluptate saepe voluptatibus iure cumque praesentium, sit velit totam rem, minus illum obcaecati nostrum sunt maxime inventore soluta pariatur excepturi. Deserunt dolores omnis blanditiis ad soluta cum, quia laudantium nam sit voluptas facilis cumque ratione beatae repellat molestiae, aliquid recusandae. Expedita amet saepe nulla nemo. Nostrum dolor voluptate ipsa nobis doloribus delectus nesciunt, commodi quibusdam eos repudiandae quisquam laboriosam cupiditate dolore consectetur, reiciendis tempora libero? Accusamus ullam iste fuga minus illum placeat nostrum odit atque nobis. Aliquam atque alias neque possimus, ullam blanditiis unde nulla consequatur accusantium aperiam corporis, labore debitis adipisci vitae quas dolor! Voluptatibus nisi illum molestiae nihil! Facere consequuntur facilis nostrum saepe nemo obcaecati optio, provident ad quam doloribus perspiciatis aliquid delectus, sequi at, pariatur voluptates minus tempora exercitationem modi quibusdam repellat voluptatem in. Ad, modi aliquid vitae doloremque amet tempore incidunt dolore magni reiciendis consequuntur sapiente mollitia, fugit itaque laborum officiis cumque aperiam quos nostrum nemo quis sunt sequi labore minima totam. Commodi, quos? Odio soluta, provident enim molestiae repudiandae magni nisi obcaecati sunt non aut sint!
                    </div>
                    <aside className="side content">Right Content</aside>
                </section>
                <footer className="nav-bar">
                    <Navbar
                        items={this.navItems} selectedIndex={this.state.selectedIndex}
                        selectTab={(index) => this.selectTab(index)}>
                    </Navbar>
                </footer>
            </div>
        );
    }
};

export default Frame;