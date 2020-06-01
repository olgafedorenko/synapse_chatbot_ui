import React from 'react';
import styled from 'styled-components';
import { qs_mark } from '../SvgIcons';

const DropUpContainer = styled.div`
z-index: 300;
width: ${props => props.fullWidth ? '100%' : '90%'};
position: absolute;
bottom: ${props => props.fullWidth ? '52px' : '48px'};
padding: ${props => props.fullWidth ? '12px 8px 0px 14px' : '12px 8px 0px 11px'};
border-radius: ${props => props.fullWidth ? '20px 20px 0 0' : '6px 6px 0 0'};
background: white;
border-bottom: none;
max-height: 194px;
overflow-y: scroll;
-webkit-overflow-scrolling: touch;
font-family: Nunito Sans;
font-size: 14px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 1;
letter-spacing: normal;
color: #333333;
animation: moveUpDropUp 0.55s cubic-bezier(0.25, 0.1, 0.25, 1);
cursor: pointer;
display: ${props => props.hide};
&::-webkit-scrollbar {
  display: -webkit-box !important;
  width: ${props => props.fullWidth ? '25px !important' : '36px !important'};
  max-height: 170px !important;
  border-radius: 3px !important;
}
&::-webkit-scrollbar-button {
  width: ${props => props.fullWidth ? '0 !important' : null};
  height: ${props => props.fullWidth ? '0 !important' : null};
  display: ${props => props.fullWidth ? 'none !important' : null};
}
&::-webkit-scrollbar-corner {
  background-color: ${props => props.fullWidth ? 'transparent !important' : null};
}
&::-webkit-scrollbar-thumb:hover {
	height: ${props => props.fullWidth ? null : '65px !important'};
	border-radius: ${props => props.fullWidth ? null : '18px !important'};
	background-color: ${props => props.fullWidth ? null : '#6c6c6c !important'};
	border: ${props => props.fullWidth ? null : '16px solid rgba(255, 255, 255, 0) !important'};
	background-clip: ${props => props.fullWidth ? null : 'padding-box !important'};
}
&::-webkit-scrollbar-thumb {
  height: ${props => props.fullWidth ? '46px !important' : '65px !important'};
  border: ${props => props.fullWidth ? '10px solid rgba(0, 0, 0, 0) !important' : '16px solid rgba(255, 255, 255, 0) !important'};
  background-clip: padding-box !important;
	-webkit-border-radius: ${props => props.fullWidth ? '30px !important' : '18px !important'};
	border-radius: ${props => props.fullWidth ? '30px !important' : '18px !important'};
  background-color: ${props => props.fullWidth ? 'rgba(0, 0, 0, 0.15) !important' : '#6c6c6c !important'};
}
&::-webkit-scrollbar-track {
  margin-top: ${props => props.fullWidth ? '9px !important' : '3px !important'};
  margin-bottom: ${props => props.fullWidth ? '3px !important' : '0px !important'};
  background-clip: padding-box !important;
  background-color: ${props => props.fullWidth ? 'white !important' : null};
  border: 16px solid rgba(255, 255, 255, 0) !important;
	border-radius: ${props => props.fullWidth ? null: '18px'};
}
`;

const DropUpItem = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: ${props => props.fullWidth ? '40px': null};
min-height: ${props => props.fullWidth ? null: '48px'};
position: relative;
&:hover {
  border-radius: 8px;
  background-color: #f1f1f1;
  height: 40px;
};
`;

const ItemImg = styled.img`
height: 24px;
left: ${props => props.fullWidth ? '13px': '12px'};
position: absolute;
top: calc(50% + 2px);
-webkit-transform: translateY(calc(-50% - 2px));
transform: translateY(calc(-50% - 2px));
width: 24px;
border-radius: 4px;
box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
`;

const ItemSvg = styled.div`
height: 24px;
left: ${props => props.fullWidth ? '13px': '12px'};
position: absolute;
top: calc(50% + 2px);
-webkit-transform: translateY(calc(-50% - 2px));
transform: translateY(calc(-50% - 2px));
width: 24px;
border-radius: 4px;
box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
`;

const ItemText = styled.span`
font-weight: bold;
display: block;
margin-left: ${props => props.fullWidth ? '49px': null};
padding-left: ${props => props.fullWidth ? null: '45px'};
padding-right: ${props => props.fullWidth ? null: '8px'};
border-bottom: ${props => props.fullWidth ? '1px solid #f0f1f3': null};
padding-bottom: ${props => props.fullWidth ? '13px': null};
padding-top: ${props => props.fullWidth ? '13px': null};
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
width: ${props => props.fullWidth ? '250px': null};
@media only screen and (max-width: 420px) {
  width: ${props => props.fullWidth ? '100%': null};
}
`;

const Dropup = (props) => {
  const {
    hide,
    items,
		onClick,
		fullWidth
  } = props;

  const semiBold = {
    fontWeight: '400'
  };

  return (
    <DropUpContainer
      hide={hide ? 'none' : null}
			className="dropUp"
			fullWidth={fullWidth}
    >
      {
        items.map((item, idx) => (
          <DropUpItem
            key={`suggestion-${idx}`}
            onClick={() => onClick(item, idx)}
            style={{ marginBottom: idx === items.length - 1 ? '12px' : null }}
          >
            {item.value !== 'ACRT_FLOW'
              ? (
                <ItemImg
                  src={item.logo}
                  alt="logo"
                />
              ) : <ItemSvg><qs_mark /></ItemSvg>
            }
            <ItemText
              style={item.value === 'ACRT_FLOW' ? semiBold : null}
            >
              {item.bank_name}
            </ItemText>
          </DropUpItem>
        ))
      }
    </DropUpContainer>
  );
};

export default Dropup;