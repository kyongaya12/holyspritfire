import React from 'react'
import { NavLink } from 'react-router-dom'
import imageCall from '../images/ed-pastor-with-freedom-arena.jpg'
//import imageCall1 from './images/dominican-crusade.jpg'
import imageCall2 from './images/holy-sprit-with-ed.jpg'
import imageCall1 from './images/holy-sprit-with-ed-mobile.jpg'
import Gallery from './Gallery';
const About = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    return (
        <div>
<div class="container-fluid">
  <div class="row">
      <div class="col-md-12 mx-auto p-0">
            <div class="image-with-text">     
      {isMobile ? (
        <img src={imageCall1} alt="Mobile Image" class="cover-image" />
      ) : (
        <img src={imageCall2} alt="Desktop Image" class="cover-image" />
      )}
   <div class="text-overlay">
                        <h1>가장 친한 친구인 성령님께 감사와 찬양
</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* 
            <div className="container-fluid " style={{background:'#fff'}}>
                <div class="center-content">
            <img src={imageCall2} alt="에드 목사님의 성령사역" className="image-fluid text-center" ></img>
            </div>
            </div> */}
            
            <div className="container">
                <div className="row about-holy-sprit">             
               <h1>에드목사님의 성령사역 </h1>
              <div className="col-md-12 float-md-end mb-3 ms-md-3" />
                <p>예언자 에드 목사님의 사역은 세계 끝까지 그를 이끄는 성령의 힘에 의해 이루어진 예언,치유, 축사로 복음을 전파하는 데에 초점을 맞추고 있습니다.</p>
                <p> 미국부터 도미니카 공화국, 에콰도르, 멕시코, 인도, 파키스탄, 가나, 나이지리아, 그리고 리베리아, 케냐, 우간다, 말라위, 탄자니아, 르완다, 아랍 에미리트, 아이티, 필리핀과 같은 다른 국가에서도 그의 사역을 요청받아 강연하고 있습니다.</p>
                <p>예언자 에드 목사님은 기적의 표적들이 그의 사역을 따르며 10 만명에 달하는 대규모 기적의 크루세이드를 진행하여 다양한 나라들을 하나님의 나라로 표식을 남기고 있습니다. </p>
                <p>병든 자들이 치유되고, 맹인들이 보이고, 귀먹은자 들리며, 벙어리가 말하며, 절름발이가 걷고, 악령들이 쫓겨나며, 사탄의 저주가 깨지며, 심지어 죽은 자들도 부활합니다.
                   이 모든 것들은 성령의 능력과 예수 그리스도 우리 주님의 이름으로 이루어지는 것입니다.</p>

<p>바쁜 국제 일정 외에도, 예언자 에드 목사님은 뉴욕과 텍사스에 다문화적인 교회들을 지휘하고 있습니다. 교회 구성원으로는 21개국 이상의 국가들이 참여하고 있습니다. 또한, 에콰도르, 가나, 파키스탄 등 세계 여러 지점에 다른 지점들도 있습니다. </p>
<p>그는 예배와 찬양을 중요시하며, 이는 성령의 강한 동참을 일으킵니다. 사람들은 하나님의 능력에 엎드려 울며 주 예수 그리스도 앞에 숙연합니다. 또한, 지식의 말씀과 표적, 기적이 강하게 나타나기 시작합니다. 환상, 천사의 나타남, 초자연적 체중 감소, 하늘에서 떨어지는 금가루 등이 보고되었습니다. 돈이 비어있는 지갑에서 초자연적으로 나타난 적도 있습니다. </p>
<p>그는 성령의 능력의 중요성을 잘 알고 있으며, 복음화 모임, 회의, 세미나, 워크샵을 통해 목사들과 지도자들을 세계적으로 장비시키는 데에 열정을 가지고 있습니다. 요즘에는 그의 사역이 전 세계적으로 확장되고 업무 부담이 더해지지만, "이것은 우리의 시대입니다. 사도들은 자신들의 시대를 가지고 그들의 일을 잘 해왔습니다. 그러나 하나님은 예수를 위해 그들의 시대를 표식지었던 것처럼, 우리에게도 우리의 시대를 표식하도록 의지하고 계십니다"라고 말합니다.</p>
<p>예언자 에드 목사님은 아내 캐롤과 35년 이상 함께하며 결혼 생활을 영위하고 있으며, 그들은 절개하는 하나님을 경외하는 아름다운 세 자녀, 저스틴, 가브리엘, 한나를 두고 있습니다. 그는 자주 기적 크루세이드에서 사람들에게 말씀할 때 "우리의 가장 친한 친구인 성령께 감사와 찬양을 보내 주세요. 그분께서 우리와 함께 계시고 행하신 일들을 인정해 주세요"라고 말합니다.

                        </p>
                        {/* <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink> */}
                    </div>
                  
                </div>

                <session>
                    <div className="container-fluid cross" >
                        <div className="container"  >
                            <div className="row ">
                                <div className="we-belive-cover">
                               <div className="what-we-believe">
                                <h2>우리의 사명</h2>
<p>에드 시트론넬리 사역은 하나님의 뜻에 의해 존재하여 이 세대와 차세대에 영향을 끼치고, 모든 민족에 복음의 능력을 가져가서 사람들을 구원하고 치유하며 해방시키며 종합적인 복지를 주는 데 목적이 있습니다(3요한서 2장).
이는 주님께서 주신 대사를 수행하는 것입니다(마태복음 28:18-20; 마가복음 16:15-18).</p>

<p>이는 주님께서 주신 대사를 수행하는 것입니다</p>
<p>이는 전 세계적으로 그리스도의 몸 내의 통일을 촉진하는 것입니다. 이는 하나님의 왕국의 기초적인 진리를 가르쳐 모든 믿는 자를 강화하고 격려하며 권면함으로써, 그들이 성령의 교제와 능력 및 하나님의 주신 기업을 행할 수 있도록 하는 것입니다(에베소서 1:17-19; 3:14-19).</p>
<p>에드 시트론넬리 사역의 비전은 예수 그리스도의 속죄의 혜택과 특권에 대한 지식으로 교회를 갖추는 것입니다. 이는 지구상에서의 성공적인 삶과 그 이후 천국에서의 필요한 것으로, 성령의 변형력과 교제의 진리를 가르치는 것을 포함합니다. 가능한 모든 의사소통 채널을 활용하여 예수 그리스도의 놀라운 치유 능력을 모든 민족에 전하고, 교회가 성령의 사람을 알고 인정하고 의지하는 데 도움을 주는 것입니다. 하나님의 영광이 세상에서 가장 어두운 곳에까지 이르러 사람들과 정부들에게 확실한 변화를 가져다주길 바랍니다.</p>
{/* <blockquote class="blockquote">
    <p>사랑하는 자여 네 영혼이 잘 됨같이 네가 범사에 잘 되고 강건하기를 내가 간구하노라</p>
    <footer class="blockquote-footer">요한3서 1장2절 KRV</footer>
</blockquote>
<blockquote class="blockquote">
  <p>예수께서 나아와 일러 가라사대 하늘과 땅의 모든 권세를 내게 주셨으니 그러므로 너희는 가서 모든 족속으로 제자를 삼아 아버지와 아들과 성령의 이름으로 세례를 주고
내가 너희에게 분부한 모든 것을 가르쳐 지키게 하라 볼찌어다 내가 세상 끝날까지 너희와 항상 함께 있으리라 하시니라</p>
  <footer class="blockquote-footer">마태복음 28:18-20 KRV</footer>
</blockquote>
<blockquote class="blockquote"> 
 <p>또 가라사대 너희는 온 천하에 다니며 만민에게 복음을 전파하라 믿고 세례를 받는 사람은 구원을 얻을 것이요 믿지 않는 사람은 정죄를 받으리라 믿는 자들에게는 이런 표적이 따르리니 곧 저희가 내 이름으로 귀신을 쫓아내며 새 방언을 말하며 뱀을 집으며 무슨 독을 마실찌라도 해를 받지 아니하며 병든 사람에게 손을 얹은즉 나으리라 하시더라</p>
   <footer class="blockquote-footer">마가복음 16:15-18 KRV</footer>
</blockquote>
<blockquote class="blockquote">
<p>우리 주 예수 그리스도의 하나님, 영광의 아버지께서 지혜와 계시의 정신을 너희에게 주사 하나님을 알게 하시고 너희 마음눈을 밝히사 그의 부르심의 소망이 무엇이며 성도 안에서 그 기업의 영광의 풍성이 무엇이며 그의 힘의 강력으로 역사하심을 따라 믿는 우리에게 베푸신 능력의 지극히 크심이 어떤 것을 너희로 알게 하시기를 구하노라.</p>
<footer class="blockquote-footer">에베소서 1:17-19 KRV</footer>
</blockquote>   
<blockquote class="blockquote">
<p>이러하므로 내가 하늘과 땅에 있는 각 족속에게 이름을 주신 아버지 앞에 무릎을 꿇고 비노니 그 영광의 풍성을 따라 그의 성령으로 말미암아 너희 속 사람을 능력으로 강건하게 하옵시며 믿음으로 말미암아 그리스도께서 너희 마음에 계시게 하옵시고 너희가 사랑 가운데서 뿌리가 박히고 터가 굳어져서 능히 모든 성도와 함께 지식에 넘치는 그리스도의 사랑을 알아 그 넓이와 길이와 높이와 깊이가 어떠함을 깨달아 하나님의 모든 충만하신 것으로 너희에게 충만하게 하시기를 구하노라.</p>
<footer class="blockquote-footer">에베소서 3:14-19 KRV</footer>
</blockquote> */}

<hr/>                    
 <p>에드 시트론넬리 사역 에서는 성경의 권위에 기초하여 신앙을 구축하며 그것이 하나님의 불가능한 말씀임을 믿습니다.</p> 
 <p>우리는 모든 면에서 생활의 각 영역에서 성경적 기준을 유지하려고 노력합니다.</p>               
<p>아버지, 아들, 성령으로 이루어진 삼위일체.</p>
<p>유일하신 하나님의 아들 예수 그리스도, 성령으로 잉태되어 처녀 마리아에게서 나시고 십자가에 못 박혀 죽으셨으며 장사되었습니다. 예수 그리스도는 부활하여 하늘로 올라가 하나님 아버지 우편에 앉아 계시며 참 하나님과 참 인간입니다.</p>
<p>주 예수님의 공중에서 교회를 하늘로 데려가는 재림.</p>
<p>영원한 생명인 천국 또는 지옥은 개인적으로 예수님을 주님으로 믿는 마음과 입으로 시인하느냐의 조건으로 주어집니다.</p>
<p>구원 후의 물 세례는 그리스도와 함께 잠들고 새 생명으로 걸어가기 위한 증거로 행해집니다.</p>
<p>방언으로 말하는 증거와 함께 성령의 세례</p>
<p>우리는 마귀들을 쫓아내는 해방 사역과 마가복음 16:15-18에 따라 병자를 위해 기도하여  하나님으로부터의 치유를 믿습니다.</p>
<p>마가복음 16:17-18에 따라 이 기적이 믿는 사람들을 따르리니 내 이름으로 귀신을 쫓아내며 새로운 언어로 말할 것이며 뱀을 잡을 것이며 만일 무슨 독을 마시든 해를 받지 않을 것이며 병자에게 손을 얹으면 나을 것이다.</p>
</div>
</div>


</div> </div>        </div>
                </session>
                <session>
                <div className="container-fluid text-center">
                {/* <img src={imageCall1} alt="About Us" className="image-fluid" ></img> */}
                </div>
              </session>
            
            <div className="container-fluid text-center gallery-images" style={{background:'black'}}>
                <Gallery />
                </div>
            
            </div>
      
    )
}


export default About
