import Menu from "@mui/material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { Switch } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const Settings = (props) => {
  const [anchorElement, setAnchorElement] = useState(null);

  const handleChange = () => {
    props.darkness(!props.dark);
  };

  const open = Boolean(anchorElement);
  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <div>
      <SettingsIcon
        onClick={handleClick}
        className="text-black dark:text-white"
      />
      <Menu anchorEl={anchorElement} open={open} onClose={handleClose}>
        <FormControlLabel
          className="pl-3.5 text-slate-600"
          control={<Switch onChange={handleChange} />}
          label="Dark mode"
        />
        <hr />
        <div className="flex justify-around pt-2">
          <a className="flex" href="https://github.com/MahmoudFettal/wordle">
            <GitHubIcon />
          </a>
          <a className="flex" href="https://twitter.com/mahmoudfettal">
            <TwitterIcon />
          </a>
        </div>
      </Menu>
    </div>
  );
};

export default Settings;
