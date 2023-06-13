import React, { useState } from "react";
import "./style.css";
import Button from "./button.js";
import { Select } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AudioOutlined,
  TeamOutlined,
  InstagramOutlined,
  Html5Outlined,
} from "@ant-design/icons";

export default function App() {
  const [btnRadius, setBtnRadius] = useState("normal");
  const [btnImgText, setBtnImgText] = useState("no_img");
  const [btnImg, setBtnImg] = useState("");
  const [btnColor, setBtnColor] = useState("success");

  const handleChange = (value) => {
    setBtnImgText(value);
    switch (value) {
      case "audio":
        setBtnImg(<AudioOutlined />);
        break;

      default:
        setBtnImg("");
        setBtnRadius("normal");
        break;
    }
  };

  const handleChangeRadius = (value) => {
    switch (value) {
      case "circle":
        setBtnImg(<AudioOutlined />);
        setBtnImgText("audio");
        setBtnRadius(value);
        break;

      default:
        setBtnRadius(value);
        break;
    }
  };

  const handleChangeColor = (value) => {
    setBtnColor(value);
  };

 
  return (
    <div className="container">
      <ToastContainer />
      <div className="box">
        <h1>GitHub!</h1>
        <h2>
          <b>React Active Bottons components</b>
        </h2>
        <div className="button_components">
          <Button
            name="Saqlash"
            type="submit"
            classes="btn btn-success"
            paddingY={"5px"}
            paddingX={"20px"}
            disabled={false}
            toastText="Muvaffaqiyatli saqlandi"
            status="success"
          />
          <Button
            name="Tahrirlash"
            type="submit"
            classes="btn btn-warning mx-3"
            paddingY={"5px"}
            paddingX={"20px"}
            disabled={false}
            toastText="Fo'rma to'liq to'ldirilmagan!!!"
            status="warning"
          />
          <Button
            name="Bekor qilish"
            type="submit"
            classes="btn btn-danger"
            paddingY={"5px"}
            paddingX={"20px"}
            disabled={false}
            toastText="Rad etildi"
            status="danger"
          />
          <Button
            name="Bekor qilish"
            type="submit"
            classes="btn btn-secondary ms-3"
            paddingY={"5px"}
            paddingX={"20px"}
            disabled={false}
            toastText="Bekor qilindi"
            status="secondary"
          />
        </div>
        <h2>
          <b>React Disabled Bottons components</b>
        </h2>
        <div className="button_components">
          <Button
            name="Saqlash"
            type="submit"
            classes="btn btn-success"
            paddingY={"5px"}
            paddingX={"20px"}
            disabled={true}
          />
          <Button
            name="Tahrirlash"
            type="submit"
            classes="btn btn-warning mx-3"
            paddingY={"5px"}
            paddingX={"20px"}
            disabled={true}
          />
          <Button
            name="Bekor qilish"
            type="submit"
            classes="btn btn-danger"
            paddingY={"5px"}
            paddingX={"20px"}
            disabled={true}
          />
          <Button
            name="Bekor qilish"
            type="submit"
            classes="btn btn-secondary ms-3"
            paddingY={"5px"}
            paddingX={"20px"}
            disabled={true}
          />
        </div>
        <h2>
          <b>React Circle Bottons components</b>
        </h2>
        <div className="button_components">
          <Button
            name="ok"
            type="submit"
            classes="btn btn-success circle"
            disabled={false}
            img={<AudioOutlined />}
          />
          <Button
            type="submit"
            classes="btn btn-warning mx-3 circle"
            disabled={false}
            img={<Html5Outlined />}
          />
          <Button
            name="Bekor qilish"
            type="submit"
            classes="btn btn-danger circle"
            disabled={false}
            img={<InstagramOutlined />}
          />
          <Button
            type="submit"
            classes="btn btn-secondary ms-3 circle"
            disabled={false}
            img={<TeamOutlined />}
          />
        </div>
        <h2>
          <b>React Botton component</b>
        </h2>
        <div className="button_components" style={{ minHeight: "70px" }}>
          <Button
            name="Saqlash"
            type="submit"
            paddingX={"25px"}
            paddingY={"10px"}
            classes={`btn btn-${btnColor} ${btnRadius}`}
            disabled={false}
            img={btnImg}
          />
        </div>
        <div className="more">
          <div className="more-item">
            <label htmlFor="btnRad">Button type:</label>
            <Select
              id="btnRad"
              value={btnRadius}
              style={{
                width: 120,
              }}
              onChange={handleChangeRadius}
              options={[
                {
                  value: "normal",
                  label: "Normal",
                },
                {
                  value: "circle",
                  label: "Circle",
                },
              ]}
            />
          </div>
          <div className="more-item ms-3">
            <label htmlFor="btn_img">Button Img:</label>
            <Select
              id="btn_img"
              value={btnImgText}
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "no_img",
                  label: "No Img",
                },
                {
                  value: "audio",
                  label: "Audio Img",
                },
              ]}
            />
          </div>
          <div className="more-item ms-3">
            <label htmlFor="btn_img">Button Color:</label>
            <Select
              id="btn_img"
              value={btnColor}
              style={{
                width: 120,
              }}
              onChange={handleChangeColor}
              options={[
                {
                  value: "success",
                  label: "Success",
                },
                {
                  value: "danger",
                  label: "Danger",
                },
                {
                  value: "warning",
                  label: "Warning",
                },
                {
                  value: "secondary",
                  label: "Secondary",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
