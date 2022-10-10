import React from "react";
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import largerProjectsList from "../components/LargerProjectsList";
  

function LargerProjectsCard(props) {
    return (
    <div> 
    
    <h1 className="page-title">Sampling of Larger Projects</h1>
    <div className="larger-projects-section">

      {/* <section className=""> */}
        <MDBCard className='mw-100 p-3 larger-projects-headercard'>
        <MDBCardBody>
          <MDBCardTitle>{props.bigtitle}</MDBCardTitle>
          <MDBCardText>{props.titledescription}</MDBCardText>
          <MDBBtn className="button-color" href={props.gitbaseURL}>See Project in Action</MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBRow className='row-cols-1 row-cols-lg-3 row-cols-md-2 g-4'>
      <MDBCol>

      <MDBCard>
      <MDBCardImage position='top' alt='...' src={props.imgURL1} />
      <MDBCardBody>
        <MDBCardTitle>{props.subtitle1}</MDBCardTitle>
        <MDBCardText>
        {props.subtext1}
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem> {props.listitem11} </MDBListGroupItem>
        <MDBListGroupItem> {props.listitem12} </MDBListGroupItem>
        <MDBListGroupItem> {props.listitem13} </MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>

    </MDBCol>
    <MDBCol>
    

    <MDBCard>
      <MDBCardImage position='top' alt='...' src={props.imgURL2} />
      <MDBCardBody>
        <MDBCardTitle>{props.subtitle2}</MDBCardTitle>
        <MDBCardText>
        {props.subtext2}
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem> {props.listitem21} </MDBListGroupItem>
        <MDBListGroupItem> {props.listitem22} </MDBListGroupItem>
        <MDBListGroupItem> {props.listitem23} </MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>

    </MDBCol>
    <MDBCol>

    <MDBCard>
      <MDBCardImage position='top' alt='...' src={props.imgURL3} />
      <MDBCardBody>
        <MDBCardTitle>{props.subtitle3}</MDBCardTitle>
        <MDBCardText>
          {props.subtext3}
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem> {props.listitem31} </MDBListGroupItem>
        <MDBListGroupItem> {props.listitem32} </MDBListGroupItem>
        <MDBListGroupItem> {props.listitem33} </MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>


    </MDBCol>
    </MDBRow>

        </div>      
      </div>
    );
}

export default LargerProjectsCard;