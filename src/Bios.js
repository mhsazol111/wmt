import React, { Component } from 'react';

class Bios extends Component {
  componentDidMount() {
    let $ = jQuery;
    $('.amz-back-to-top a').on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 300);
      return false;
    });
  }
  render() {
    let themeUrl = amzData.theme_url;
    return (
      <div className="amz-bios-wrapper">

        <div className="wmt-biography-wrap">
          <div className="wmt-bios-item">
            <div className="wmt-bios-img">
              <img className="profile" src={themeUrl + '/assets/images/bios/Emily-Blunt.png'} alt="Emily Blunt" />
            </div>
            <div className="wmt-bios-content">
              <h3>Emily Blunt</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd estgubergren, no sea takimata.</p>
            </div>
          </div>

          <div className="wmt-bios-item">
            <div className="wmt-bios-img">
              <img className="profile" src={themeUrl + '/assets/images/bios/Jamie-Dornan.png'} alt="Jamie Dornan" />
            </div>
            <div className="wmt-bios-content">
              <h3>Jamie Dornan</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd estgubergren, no sea takimata.</p>
            </div>
          </div>

          <div className="wmt-bios-item">
            <div className="wmt-bios-img">
              <img className="profile" src={themeUrl + '/assets/images/bios/John-Hamm.png'} alt="Jon Hamm" />
            </div>
            <div className="wmt-bios-content">
              <h3>Jon Hamm</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd estgubergren, no sea takimata.</p>
            </div>
          </div>

          <div className="wmt-bios-item">
            <div className="wmt-bios-img">
              <img className="profile" src={themeUrl + '/assets/images/bios/Christopher-Walken.png'} alt="Christopher Walken" />
            </div>
            <div className="wmt-bios-content">
              <h3>Christopher Walken</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd estgubergren, no sea takimata.</p>
            </div>
          </div>

          <div className="wmt-bios-item">
            <div className="wmt-bios-img">
              <img className="profile" src={themeUrl + '/assets/images/bios/Dearbhla-Molloy.png'} alt="Dearbhla Molloy" />
            </div>
            <div className="wmt-bios-content">
              <h3>Dearbhla Molloy</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd estgubergren, no sea takimata.</p>
            </div>
          </div>
        </div>
        <div className="wmt-biography-bottom">
          <p>BLEECKER STREET AMASIA ENTERTAINMENT Present in Association with APERTURE MEDIA PARTNERS FÍS ÉIREANN/SCREEN<be/> IRELAND and WRAP FUND A MAR-KEY PICTURES LIKELY STORY and<br/> PORT PICTURES Production A Film By JOHN PATRICK SHANLEY “WILD MOUNTAIN THYME”<br/> EMILY BLUNT JAMIE DORNAN JON HAMM DEARBHLA MOLLOY and CHRISTOPHER WALKEN Casting by JEANNE MCCARTHY Music Supervisor ROBIN URDANG Music By AMELIA WARNER Emily Blunt’s Costumes Designed By KASIA WALICKA MAIMONE Costume Designer TRIONA LILLIS Production Designer ANNA RACKARD Editor IAN BLUME Director of Photography STEPHEN GOLDBLATT ASC, BSC Co-Executive Producers CRAIG DWORKIN LELAND GREENBERG HARRISON KLEIN CRAIG SNIDER Executive Producers ANDREW KRAMER ZYGI KAMASA JONATHAN LOUGHRAN STEPHEN MALLAGHAN JARED UNDERWOOD ANDREW ROBINSON DANNY MANDEL COLIN MARSHALL WILLIAM C. GALLO ALLEN CHURCH Producers LESLIE URDANG ANTHONY BREGMAN ALEX WITCHEL MARTINA NILAND MICHAEL A. HELFANT BRADLEY GALLO Based on the Play “Outside Mullingar” by JOHN PATRICK SHANLEY Written for the Screen and Directed by JOHN PATRICK SHANLEY</p>
          <div class="amz-back-to-top">
            <a href="#">
              <img src={`${themeUrl}/assets/images/back-top.svg`} alt="Back to top" />
              <span>Back to Top</span>
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default Bios;
