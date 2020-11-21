import React, { Component } from 'react';

class Faqs extends Component {
  componentDidMount() {
    jQuery('.amz-faq-question-item').click(function () {
      jQuery(this).toggleClass('active').find('.faq-content').slideToggle();
    });
  }

  render() {
    return (
      <div id="amz-faq-wrapper">
        <div className="amz-faq-container">
          <div className="amz-faq-head">
            <div className="amz-faq-name">
              <h2>VOTING FAQs</h2>
            </div>
            <div className="amz-faq-designation">
              <h4>
                Visit{' '}
                <a href="https://www.allinforvoting.com" target="_blank">
                  www.AllInForVoting.com
                </a>{' '}
                for more information
              </h4>
            </div>
          </div>
          <div className="amz-faq-question-wrap">
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Can I register a new address?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    Residency rules vary by state. In certain states you can register right away. Others require that you’ve resided there for at
                    least 30 days. To learn your state’s guidelines, call your state election office.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Do I need to be a U.S. citizen to register to vote?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>Yes, you have to be born in the U.S. or fully naturalized to register to vote.</p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">If I’m changing my address, do I need to note that on the form?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    Yes, in most cases. On a state form, look for the appropriate checkbox and/or fill out the section which asks for your previously
                    registered voting address. On the federal, multi-state form, fill out the portion on the bottom half relating to your address
                    change.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">I move around a lot and I’m really not sure where I’ll be during the election.</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    The smartest option is to register now wherever you have a permanent mailing address. Vote in that district and bring some proof
                    of identification and/or residency or apply for an absentee ballot if you will be away during the election. You must be registered
                    to vote to request an absentee ballot.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Am I required to vote for everything on the ballot?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>No, you don’t have to answer everything.</p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">When is the last day to register to vote?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>Voter Registration postmark deadlines vary from 30 days out to just a couple of days before the election.</p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Can I register if I have US citizenship, but am living abroad and don’t have a permanent US address?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    Yes, in this scenario you must register at the last address you had before you left the USA, or at the address to which you will
                    return. If the latter, there must be some indication of a present intent to return and live there (e.g. vehicle registration,
                    driver’s license, property ownership, family, etc.).
                  </p>
                  <p>
                    If you have never had a permanent address in the United States but are a citizen you are allowed to register at an address you
                    plan on moving to or an address where you currently have family living.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">
                  I have an out-of-state driver’s license, but I live in this state and want to register here. Should I use my out-of-state license ID
                  number or the last four digits of my social?
                </h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    You should never use a driver’s license number that is not from the state where you intend to register to vote. If your driver’s
                    license is out-of-state, then give the last 4 digits of your SSN (except in HI, KY, NM, SC, TN, and VA, where you need to provide
                    your full SSN).
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Can I put a P.O. Box address or a school mailbox address as my permanent address?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    No, your form will not be processed if you put a P.O. Box as your permanent address. For districting purposes, you must put a
                    physical address. There is a section of the form to put your mailing address, in addition to your physical address.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">I am a student. Can I register to vote at my school address?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    Yes, you have the right to register to vote at your school address – this includes a dorm room. Any student living in a dorm is
                    entitled to the same rights as any other student. To imply otherwise is illegal.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">I was previously convicted of a felony. Can I register to vote?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>If you were convicted of a felony, your voting rights may vary from state to state.</p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">I know someone who’s mentally impaired/disabled. Can they vote?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    In most states, if a person has been declared “non-compos mentis,” or “mentally incompetent” by a court of law, that person is
                    ineligible to vote.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">
                  I am a voter with a disability. Will my polling place be accessible and what options do I have to cast a ballot?
                </h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>Every voter has the right to cast a private and independent ballot, including voters with disabilities.</p>
                  <p>
                    If you want to learn more about what your voting rights are or were denied the right to vote because of your disability, look into
                    your state’s National Disability Rights Network member agency, the U.S. Election Assistance Commission and Nonprofit VOTE.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Can I register and vote if I don’t have a home address or am experiencing homelessness?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    Yes, however, you’ll need to provide an address when you register to vote – this is used to assign your voting districts and to
                    send any election mail. Homeless registrants can list a shelter address, or can include the address where they sleep most often,
                    like a street corner or park address.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Do I need to be 18 to register to vote?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    The voter registration age requirement varies by state, but most states allow individuals who will be 18 by the next election to
                    register to vote. Some states do have a minimum age requirement to register to vote (for example you may have to be 17 ½ years of
                    age).
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Can I register to vote if I don’t have a driver’s license?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    Yes, while all states require a driver’s license identification number or non-drivers ID number on the voter registration form, if
                    you don’t have a driver’s license and have not been issued a non-driver state ID card, states will accept the last four digits of
                    your social security number (except in HI, KY, NM, SC, TN, and VA where you should give your full SSN).
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">
                  Can I complete a voter registration form if I don’t have an in-state driver’s license (or state issued ID card) and I can’t remember
                  the last 4 digits of my social security number?
                </h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>No, you should wait to register to vote until you have this information.</p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">What do I need to register to vote?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>In most states you need:</p>
                  <p>1. An address from which you plan to vote</p>
                  <p>2. An ID number – either a current and valid driver’s license or your social security number, if you don’t have the former.</p>
                  <p>
                    In most states, if you have neither a current driver’s license or state-issued ID, and have never been issued a social security
                    number, you can still register by indicating on the registration form that you have neither identification number. Some may
                    require other documentation.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">I think my voting rights have been violated. What do I do?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    Call the voting rights hotline at <strong>866 OUR-VOTE</strong>.<br />
                    They have lawyers ready to help you.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">What is a provisional ballot?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    A provisional ballot is used when a voter’s eligibility cannot be confirmed at the polls. Often this occurs due to out-of-precinct
                    voting, if the voter has not updated their address on their voter registration or more often if the voter cannot provide
                    sufficient identification.
                  </p>
                  <p>
                    The laws governing the use of provisional ballots vary by state. Most of the time these ballots will not be counted until the
                    voter can be verified, a process that happens after election day and usually only affects an extremely close or tied election.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">What if I go to the polls and they tell me I’m not registered?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    First, make sure you are at the correct polling place. Next, call your state election office and verify your registration. If you
                    cannot find your polling place or verify that you are in fact registered, the best thing to do is fill out a provisional ballot,
                    and then make sure you are properly registered for the next election.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">How do I know where to vote?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    Find your polling place by visiting the website of your state election office or calling your state election office. Note that
                    updated information is often not available until shortly before Election Day.
                  </p>
                  <p>
                    You may receive a voter information card/certificate in the mail that will direct you to your polling place. Polling places can be
                    moved, however, so it is important to check where to vote before Election Day.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Do I need to re-register if I moved?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    Yes, if you have changed your address, changed your name, or need to change your political party, you must re-register. Check out
                    our Election Center for information for the requirements in your state.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">What is a voter card?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    After you register to vote, most states send out a “voter card” to let you know your registration has gone through. The voter card
                    helps you to confirm you’re registered to vote and that your information is correct. Most also contain information about where you
                    will go to vote on Election Day.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Is my voter card an acceptable form of ID?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    In most states, a voter card is not considered an acceptable ID. If you are a first-time voter who mailed in your registration
                    form, you should check out our Election Center to find out what identification you will need at the polls.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Why should I hold onto my voter card?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    A voter card lets you verify that your voter registration information is correct, such as your name, address, and birthdate. It
                    also has the address for your polling place, which is where you will vote on Election Day.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">What if my info on the card is wrong?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    The card should have information on how to change any incorrect information. If instructions are missing, get the information to
                    call your state or local election administrator.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Do I need my voter card to vote?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    No, voter cards simply let you know that you have successfully registered to vote. They contain information for where you will
                    vote on Election Day and a phone number for your state if you have any questions.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">I lost my voter card. How can I get another one?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>You should be able to call your state and request a new voter card. Not all states send out voter cards.</p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">I don’t know if I ever received a voter card (or I lost mine). What should I do?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    Call your state to make sure you completed your voter registration form correctly and that they have you listed as a registered
                    voter.
                  </p>
                  <p>
                    If you’re registering right before the voter registration deadline, chances are you won’t receive the card in time for the
                    election. You do not need this card to vote but you do need to know if you’re registered and where your voting location is. Get
                    the information to call your state election authority with any questions.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">How long does it take to get my voter card via mail?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>It usually takes 6-8 weeks for the state to send out your voter card.</p>
                  <p>
                    If 8 weeks have passed and you haven’t received your card, you probably are not registered and should call your state to make sure
                    your registration went through properly. If you register to vote with fewer than 8 weeks to the election, you may not receive your
                    card in time. Call your state to confirm your registration.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">What does a voter card look like?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>Voter cards vary from state to state but generally, they’re small cards that look like a postcard.</p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">How long does it take to process my registration?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    It can take several weeks. Most states send out voter registration cards within 5 to 7 weeks after receiving the registration.
                  </p>
                  <p>
                    If you do not receive a registration card in the mail, contact your state election office to confirm you are registered. In any
                    event, you should verify your registration a week prior to the voter registration deadline in your state in case you need to fill
                    out a new registration form or correct your form.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Can I check to see if I’m registered to vote?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>You can verify your voter registration status online or by phone in most states.</p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Do I need to pick a party when I register to vote?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    No, however, some states require that you be enrolled with a party to vote in that party’s primary election. If you do not choose
                    a party, enter “No party” on your voter registration form.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Can you change your vote if you voted early?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>Some states allow you to do this. Please check with your local elections office to determine the rules in your state.</p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">How do I vote if I will be away from home on Election Day?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    You can generally vote by absentee ballot if you will be away from home on Election Day. Many states also offer in-person early
                    voting in the days or weeks leading up to the election.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">I have messy handwriting. Can my friend fill out my form for me and then I’ll sign it?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    Laws vary by state, but in some states anyone who assists in filling out voter registration forms must also sign and date the form
                    and provide contact info. Because the laws vary, it’s generally best for people to fill out their own form.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">
                  The registration form asks for information that I’m uncertain about. Should I take my best guess or leave it blank?
                </h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    You should complete all required sections of the voter registration form to the best of your ability. The problem with leaving
                    portions of the form blank is that there are different rules in different states regarding what is a complete form and how to
                    treat incomplete forms. You also have to attest to the truthfulness and accuracy of the information you’ve provided.
                  </p>
                  <p>If you have an idea but are unsure, write “to the best of my knowledge” in the section you’re not 100% sure of.</p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
            <div className="amz-faq-question-item amz-faq-question-toggle">
              <div className="amz-faq-question-left">
                <h3 className="faq-title">Can I register to vote online?</h3>
              </div>
              <div className="amz-faq-question-right">
                <div className="faq-content">
                  <p>
                    In some states, yes. An increasing number of states allow you to register online if you have a driver’s license or non-driver’s ID
                    card issued by the state. In all other states, you will still need to print it out and send it in to the state election office or
                    your county election office.
                  </p>
                </div>
              </div>
              <span className="faq-arrow">‹</span>
            </div>
          </div>
          <div className="amz-faq-head amz-faq-bottom">
            <div className="amz-faq-name"></div>
            <div className="amz-faq-designation">
              <h4>
                Visit{' '}
                <a href="https://www.allinforvoting.com" target="_blank">
                  www.AllInForVoting.com
                </a>{' '}
                for more information
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faqs;
