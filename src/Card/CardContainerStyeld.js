import styled from "styled-components";
export const CardContainer = styled.div`
  width: 415px;
  height: 415px;
  background: var(--Very-Dark-Blue);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  color: var(--White);
  @media only screen and (max-width: 375px){
    width: 330px;
    height: 360px;
    padding:20px ;
    

  }
  .rating {
    width: 45px;
    height:45px;
    min-height:45px;
    border-radius: 50%;
    background: var(--Dark-Blue);
    display: flex;
    justify-content: center;
    align-items: center;
    transition:.3s ease-in;
    &:hover{
        background:var(--Orange);
        
        cursor:pointer;
    }
  }
  .CardHeading{
      margin:25px 0 15px 0;
      

  }
  @media only screen and (max-width: 375px){
    .CardHeading{
        margin:20px 0 10px 0;
    }
    

  }

  button{
      width:100%;
      height:45px;
      min-height:45px;
      background:var(--Orange);
      outline:none;
      border:none;
      border-radius:20px;
      font-weight:var(--font-weight-bold);
      color:var(--White);
      text-transform:uppercase;
      letter-spacing:2px;
      &:hover{
          background:var(--Light-Grey);
          cursor:pointer;
      }
  }
  @media only screen and (max-width: 375px){
    button{
        height:40px ;
    }
    

  }
  p{
      opacity:.7;
      line-height:2;
      padding-bottom:30px;
  }
  @media only screen and (max-width: 375px){
    p{
        line-height:1.5;
    }
    

  }
  .selected{
      background:var(--Light-Grey)
  }
  .ratings{
      display:flex;
      justify-content:space-between;
      margin-bottom:30px;
      span{
              opacity:.5;
              font-weight:700;
              pointer-events: none;
          }
  }
  @media only screen and (max-width: 375px){
    .ratings{
      display:flex;
      justify-content:space-between;
      margin-bottom:20px;
     
  }
    

  }
  .hero-image{
      display:flex ;
      justify-content:center;
      align-items:center;
      padding-bottom:25px;
  }
  .ratingStar{
      
      display:flex ;
      justify-content:center;
      align-items:center;
      span{
          background:var(--Dark-Blue) ;
          padding:10px 15px;
          border-radius:20px;
          color:var(--Orange) ;
      }
      
  }
  h1{
      text-align:center;
      padding:30px 0 20px 0 ;
      
  }
  @media only screen and (max-width: 375px){
      h1{padding:25px 0 15px 0 ;}
  }
  .appreciation p{
      opacity:.5 ;
  }
`;