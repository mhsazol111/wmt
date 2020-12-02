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
              <img className="profile" src={themeUrl + '/assets/images/bios/John-Patrick-Shanley.png'} alt="John Patrick Shanley" />
            </div>
            <div className="wmt-bios-content">
              <p><strong>John Patrick Shanley</strong> (Director, Writer)  is a Bronx-born award-winning playwright, screenwriter and director. His film Moonstruck won a WGA Award and Academy Award for Best Original Screenplay. Shanley has nine screenwriting credits, most recently the adaptation of Doubt. The film, which Shanley also directed, was nominated for five Academy Awards including Best Adapted Screenplay. His other film credits include Five Corners, Alive and Joe Versus the Volcano (which he also directed). Some of his plays are “Dirty Story,” “Prodigal Son,” “Outside Mullingar” (Tony nomination), “Danny and the Deep Blue Sea,” and “Savage in Limbo.” In 2009 the Writers Guild of America honored Shanley with its award for Lifetime Achievement in Writing.</p>
            </div>
          </div>

          <div className="wmt-bios-item">
            <div className="wmt-bios-img">
              <img className="profile" src={themeUrl + '/assets/images/bios/Emily-Blunt.png'} alt="Emily Blunt" />
            </div>
            <div className="wmt-bios-content">
              <p><strong>EMILY BLUNT</strong> (Rosemary Muldoon) is a Golden Globe®-and SAG Award-winning actress. She won a Screen Actors Guild Award for her work opposite John Krasinski in A Quiet Place, and for her performance in the title role in Mary Poppins Returns, she received Golden Globe, Screen Actors Guild and Critics’ Choice award nominations alongside Meryl Streep, Colin Firth, Dick Van Dyke and Lin-Manuel Miranda. Blunt’s other notable film credits include The Girl on the Train, Edge of Tomorrow, Sicario, Into the Woods, Salmon Fishing in the Yemen, Looper, Your Sister’s Sister, The Adjustment Bureau, The Wolfman, The Young Victoria (BAFTA and Golden Globe nominations), Charlie Wilson’s War, Sunshine Cleaning, The Devil Wears Prada (BAFTA and Golden Globe nominations) and My Summer of Love.</p>
            </div>
          </div>

          <div className="wmt-bios-item">
            <div className="wmt-bios-img">
              <img className="profile" src={themeUrl + '/assets/images/bios/Jamie-Dornan.png'} alt="Jamie Dornan" />
            </div>
            <div className="wmt-bios-content">
              <p><strong>JAMIE DORNAN</strong> (Anthony) is a Northern Irish actor who has received critical acclaim for his portrayals in both film and television. Dornan recently starred opposite Rosamund Pike as photographer ‘Paul Conroy’ in Matthew Heineman’s A Private War. He also starred opposite Peter Dinklage in Sacha Gervasi’s My Dinner with Herve, which was nominated for a 2019 Emmy Award. Next year, Dornan will star alongside Kristen Wiig and Annie Mumolo in the comedy film BARB AND STAR GO TO VISTA DEL MAR. His other film credits include Untogether, Syncrhonic, The 9th Life of Louis Drax, Endings, Beginnings, Anthropoid, Robin Hood, A Private War, The Siege of Jadotville, Marie Antoinette, Shadows in the Sun and Flying Home. His television work includes “The Fall” which earned him a BAFTA Award Nomination.</p>
            </div>
          </div>

          <div className="wmt-bios-item">
            <div className="wmt-bios-img">
              <img className="profile" src={themeUrl + '/assets/images/bios/John-Hamm.png'} alt="Jon Hamm" />
            </div>
            <div className="wmt-bios-content">
              <p><strong>Jon Hamm</strong> (Adam Reilly) is an actor that has received many accolades for both his film and television performances, including a Golden Globe®-, Emmy Award® and multiple Television Critics Association Awards. Most notably, Hamm portrayed high-powered advertising executive Don Draper in AMC’s “Mad Men,” which established him as one of Hollywood’s most versatile actors. Most recently, he appeared on “Curb Your Enthusiasm” and “Unbreakable Breakable Kimmy Schmidt.” A few of his film credits include Baby, Driver, Million Dollar Arm, Sucker Punch, The Town and Richard Jewel. Next summer, Hamm can be seen in Top Gun: Maverick.</p>
            </div>
          </div>

          <div className="wmt-bios-item">
            <div className="wmt-bios-img">
              <img className="profile" src={themeUrl + '/assets/images/bios/Christopher-Walken.png'} alt="Christopher Walken" />
            </div>
            <div className="wmt-bios-content">
              <p><strong>CHRISTOPHER WALKEN</strong> (Tony Reilly) won an Academy Award® and the New York Film Critics Circle Award for his performance in The Deer Hunter. He also received an Oscar nomination and won BAFTA and SAG awards for Catch Me if You Can., and in 2010 he was nominated for a Tony and a Drama Desk Award for his performance in “A Behanding in Spokane.” Walken’s many notable film credits include Annie Hall, Pennies From Heaven, The Dead Zone, At Close Range, King of New York, Man on Fire, Man of the Year, Wedding Crashers, Hairspray, True Romance, Pulp Fiction, Batman Returns, The Family Fang, Irreplaceable You, Nine Lives and A Late Quartet. His stage work includes “The Lion in Winter”, “The Seagull”, “The Rose Tattoo”, “The Dead” and “The Seagull.”</p>
            </div>
          </div>

          <div className="wmt-bios-item">
            <div className="wmt-bios-img">
              <img className="profile" src={themeUrl + '/assets/images/bios/Dearbhla-Molloy.png'} alt="Dearbhla Molloy" />
            </div>
            <div className="wmt-bios-content">
              <p><strong>Dearbhla Molloy</strong> (Aoife Muldoon) has an expansive array of film, television and theater credits. She was nominated for Best Actress honors at the Irish Film and Television Awards and Royal Television Society Awards and she is also a U.S. Audie Award winner, Grammy Award® and Tony Award nominee. Most recently Molloy starred in the West End production of “Uncle Vanya” and completed the Broadway transfer of “The Ferryman.” Her other film credits include 3096 Days, The Damned United, Tara Road, The Blackwater Lightship, Bloom, Frankie Starlight, and Run of the Country. Some of Molloy’s television credits include “Women on the Verge,” created by Sharon Horgan. She has made guest appearances on series such as “Acceptable Risk,” “Scandal,”  and “Family Tree.”</p>
            </div>
          </div>
        </div>
        <div className="wmt-biography-bottom">
          <p>BLEECKER STREET AMASIA ENTERTAINMENT Present in Association with APERTURE MEDIA PARTNERS FÍS ÉIREANN/SCREEN<br/> IRELAND and WRAP FUND A MAR-KEY PICTURES LIKELY STORY and<br/> PORT PICTURES Production A Film By JOHN PATRICK SHANLEY “WILD MOUNTAIN THYME”<br/> EMILY BLUNT JAMIE DORNAN JON HAMM DEARBHLA MOLLOY and CHRISTOPHER WALKEN Casting by JEANNE MCCARTHY Music Supervisor ROBIN URDANG Music By AMELIA WARNER Emily Blunt’s Costumes Designed By KASIA WALICKA MAIMONE Costume Designer TRIONA LILLIS Production Designer ANNA RACKARD Editor IAN BLUME Director of Photography STEPHEN GOLDBLATT ASC, BSC Co-Executive Producers CRAIG DWORKIN LELAND GREENBERG HARRISON KLEIN CRAIG SNIDER Executive Producers ANDREW KRAMER ZYGI KAMASA JONATHAN LOUGHRAN STEPHEN MALLAGHAN JARED UNDERWOOD ANDREW ROBINSON DANNY MANDEL COLIN MARSHALL WILLIAM C. GALLO ALLEN CHURCH Producers LESLIE URDANG ANTHONY BREGMAN ALEX WITCHEL MARTINA NILAND MICHAEL A. HELFANT BRADLEY GALLO Based on the Play “Outside Mullingar” by JOHN PATRICK SHANLEY Written for the Screen and Directed by JOHN PATRICK SHANLEY</p>
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
