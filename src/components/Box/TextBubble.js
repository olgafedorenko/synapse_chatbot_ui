import React from "react";
import styled from "styled-components";
import { Document, Page } from "react-pdf";
import ProgressiveImage from 'react-progressive-image';
import * as SvgIcons from '../SvgIcons';

import utils from '../Input/util/util';

let show = true;
let logo = 'https://synapse-chatbot.s3-us-west-1.amazonaws.com/img/bank-icon.png';

function addDefaultSrc(ev) {
  ev.target.src = logo;
  show = false;
  ev.target.style.display = "block";
  ev.target.style.height = "5rem";
  ev.target.style.margin = "0px auto 5px";
}

const Bubble = styled.div`
  background-color: ${(props) => {
    if (props.err) return "#FF5757";
    return `${props.backgroundColor}`;
  }};

  color: ${(props) => {
    if (props.user) return "white";
    return "black";
  }};

  border-radius: ${props => props.withTail ? '10px 10px 10px 0' : '10px'};
  border: ${(props) => {
    if (props.uploadBorder) return props.uploadBorder;
    if (props.border) return "solid 1px #D9D9D9";
    return "";
  }};
  padding: ${(props) => {
    if (props.noPadding) return 0;
    return "12px";
  }};
  float: ${(props) => {
    if (props.user) return "right";
    return "left";
  }};

  margin: ${(props) => {
    if (props.user) return "16px 0px 16px 36px;";
    return "4px 5px 4px 36px;";
  }};

  display: inline-block;
  width: auto;
	max-width: ${(props) => {
    if (props.step.upload) return "100%";
    return "78%";
  }};
	overflow-wrap: break-word;
`;

const Image = styled.img`
  height: ${(props) => {
		if (!props.withTail) {
			if (props.horizontalImg) {
				return "auto";
			}
			return "5em";
		}
		return "5.75rem"
  }};
  margin: ${(props) => {
    if (props.horizontalImg && !props.withTail) return "0 12px";
    return "0 28px";
  }};
  max-height: ${(props) => {
    if (props.horizontalImg && !props.withTail) return "55px";
    return "100%";
  }};
  max-width: ${(props) => {
    if (props.horizontalImg && !props.withTail) return "148px";
    return "100%";
  }};
`;

const TailDiv = styled.div`
	margin-left: 30px;
	position: absolute;
	bottom: 4px;
	display: flex;
`;

const TextBubble = (props) => {
  const {
    step,
    content,
    user,
    image,
    stepImage,
    clientColor,
    list,
    bankName,
    bubbleColor,
    bubbleBorder,
    currentStep,
    horizontalImg,
    loading,
    endText,
    fileType,
    withTail,
  } = props;
  
  const downloadStyle = {
    boxSizing: step.user ? "inherit" : "border-box",
    border: !step.user && !bubbleBorder ? "1px solid #F0F1F3" : "none",
    borderRadius: step.user ? "inherit" : "0 0 10px 10px",
    backgroundColor: step.user ? "inherit" : "white",
    color: step.user ? "white" : "black",
    fontWeight: 600,
    justifyContent: step.user ? "flex-end" : "flex-start",
    alignItems: "center",
    display: "flex",
    padding: "3px 12px 5px",
    cursor: loading ? "auto" : "pointer",
    borderTop: !step.user && bubbleBorder ? "1px solid #d9d9d9" : null,
    margin: !step.user && !bubbleBorder ? "-1px 1px 0px 1px" : "none",
    height: withTail ? null : "30px",
  };

  let displayImg;
  let downloadEl;
  let uploadImg;
  let typeIcon;
  let uploadBorder;

  if (step.upload_type) {
    if (step.upload_type.includes('image')) {
      typeIcon = <SvgIcons.image />;
    } else if (step.upload_type.includes('pdf')) {
      typeIcon = <SvgIcons.document />;
    } else if (step.upload_type.includes('video')) {
      typeIcon = <SvgIcons.video />;
    } else {
      typeIcon = <SvgIcons.document />;
    }
  }

  if (step.pdf) {
    displayImg = (
      <Document file={image} style={{ display: "none" }}>
        <Page pageNumber={1} />
      </Document>
    );
  } else {
    displayImg = (
			withTail ?(
				<ProgressiveImage src={image} placeholder={logo}>
        {src => (
          <div>
            {src !== logo
              ? <Image src={src} alt={bankName} />
              : <span style={{ display: 'block' }}>{bankName}</span>
            }
          </div>
        )}
      </ProgressiveImage>
			) :
			(
				<Image
					currentStep={currentStep}
					onError={addDefaultSrc}
					src={image}
					alt="logo"
          horizontalImg={horizontalImg}
          withTail={withTail}
				/>
			)
    );
  }

  if (step.upload) {
    uploadBorder = `solid 1px ${step.resend ? "#FF5757" : `#${clientColor}`}`;
    if (step.user) {
      downloadEl = (
        <div
          onClick={loading ? null : () => utils.openBase64(step.meta.content, step.upload_type)}
          onKeyPress={loading ? null : () => utils.openBase64(step.meta.content, step.upload_type)}
          style={downloadStyle}
        >
          <span style={{ marginRight: "6px" }}>View</span>
          <SvgIcons.open_new_window fill="white" />
        </div>
      );

      uploadImg = (
        <div
          className="upload-image-user"
          style={{
            height: withTail ? null : ( step.remove ? "59px" : ""),
						justifyContent: "space-between",
						border: withTail ? `solid 1px #${step.remove ? 'FF5757' : clientColor}` : null
          }}
        >
          {step.remove ? <SvgIcons.error /> : typeIcon}
          <div style={withTail ? null : { marginLeft: "10px" }}>
            <div style={{ fontWeight: "bold" }}>
              {utils.shortenFileName(step.meta.name, 16)}
            </div>
            <div style={{ textAlign: "end" }}>
              {utils.formatBytes(step.meta.size, 1)}
            </div>
          </div>
        </div>
      );
    } else {
      downloadEl = loading ? (
        <div style={downloadStyle}>
          <span style={{ marginRight: "5px" }}>Download</span>
          <SvgIcons.open_new_window fill="black" />{" "}
        </div>
      ) : (
        <div style={downloadStyle}>
          <a
            href={image}
            download={step.meta.name}
            style={{ marginRight: "5px", color: `#${clientColor}` }}
          >
            Download
          </a>
          <SvgIcons.open_new_window fill="black" />
        </div>
      );

      uploadImg = (
        <div className="upload-image" style={{ background: `${bubbleColor}` }}>
          <div style={{ width: "142px", marginRight: "6px" }}>
            <div style={{ fontWeight: "bold" }}>
              {utils.shortenFileName(step.meta.name, 16)}
            </div>
            <div style={{ textAlign: "start" }}>
              {utils.formatBytes(step.meta.size, 1)}
            </div>
          </div>
          {typeIcon}
        </div>
      );
    }
  }

  return (
    <div style={withTail ? { width: "100%" } : null}>
			{
				withTail ? (
					<TailDiv>
						<SvgIcons.tail color={bubbleColor} border={bubbleBorder ? '#D6D6D6' : bubbleColor} />
					</TailDiv>
				) : null
			}
      <Bubble
        id={withTail ? "bubble-with-tail" : null}
        backgroundColor={user ? `#${clientColor}` : bubbleColor}
        border={bubbleBorder}
        user={user}
        noPadding={step.upload}
        err={step.resend}
        uploadBorder={uploadBorder}
        step={step}
        withTail={withTail}
      >
        {content}
        {list}
        {stepImage ? (
          <div style={{ display: "block" }}>
            {step.upload ? (
              <div
                className={`upload-step ${
                  step.remove ? "err-file-upload" : ""
                }`}
                id={step.meta.id}>
                {uploadImg}
                {step.resend ? (
                  <span
                    onClick={loading ? null : step.resend}
                    onKeyPress={loading ? null : step.resend}
                    style={downloadStyle}
                  >
                    Resend
                  </span>
                ) : (
                  downloadEl
                )}
              </div>
            ) : (
              <div>{displayImg}</div>
            )}
            {show ? null : (
              <span
                id="bankName"
                style={{ display: "block", textAlign: "center" }}
              >
                {bankName}
              </span>
            )}
          </div>
        ) : 
        null}
        <div style={endText ? { marginTop: "1.25rem" } : null}>{endText}</div>
      </Bubble>
    </div>
  );
};

export default TextBubble;
