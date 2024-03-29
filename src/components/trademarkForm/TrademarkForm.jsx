import { Grid } from "@mui/material";
import React from "react";
import "./TrademarkForm.css";
import {
  CustomTypo,
  FormContainer,
  FileLabel,
  FileUploadContainer,
  CustomTextField,
} from "../../styles/formStyles";
import { useState, useEffect } from "react";

const TrademarkForm = ({ onTrademarkDataChange, onImageDataChange }) => {
  const [trademarkData, setTrademarkData] = useState({
    brand_name: "",
    description: "",
    image: "",
  });
  const [fileName, setFileName] = useState("");
  useEffect(() => {
    onTrademarkDataChange(trademarkData);
  }, [trademarkData, onTrademarkDataChange]);

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setTrademarkData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file.size === 0) {
      // 파일이 선택되지 않은 경우
      return;
    }

    if (file.size > 50000000) {
      window.confirm(
        "사진 크기가 너무 큽니다. 50MB 이하의 크기로 업로드 해주세요."
      );
      event.target.value = null;
      return;
    }

    setFileName(file.name);

    onImageDataChange(file);
  };
  return (
    <>
      <FormContainer>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomTypo>02. 상표명과 설명을 적어주세요*</CustomTypo>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              required
              fullWidth
              id="trademarkName"
              label="상표명(필수)"
              variant="standard"
              value={trademarkData.trademarkName}
              onChange={(event) => handleInputChange(event, "brand_name")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              fullWidth
              multiline
              id="trademarkDescription"
              label="상표에 대해 간단하게 설명해주세요"
              variant="standard"
              value={trademarkData.trademarkDescription}
              onChange={(event) => handleInputChange(event, "description")}
            />
          </Grid>
        </Grid>
      </FormContainer>
      <FileUploadContainer>
        <FileLabel>상표이미지가 있다면 파일을 첨부해주세요</FileLabel>
        <label
          style={{
            fontFamily: "Pretendard",
            textDecoration: "underline",
            fontSize: "20px",
          }}
        >
          {fileName}
        </label>
        <input
          accept="image/*"
          id="fileUpload"
          type="file"
          onChange={(event) => handleImageChange(event)}
        />
        <label className="fileLabel" htmlFor="fileUpload">
          파일 첨부
        </label>
      </FileUploadContainer>
    </>
  );
};

export default TrademarkForm;
