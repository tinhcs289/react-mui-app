import acceptLanguage from '@/browser/localStorage/acceptLanguage';
import { EAcceptLanguage } from '@/constants/language';
import { i18n } from '@/translation';
import { AcceptLanguage } from '@/types';
import TranslateIcon from '@mui/icons-material/Translate';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import US from 'country-flag-icons/react/3x2/US';
import VN from 'country-flag-icons/react/3x2/VN';
import type { MouseEvent, MouseEventHandler } from 'react';
import { createElement, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
const languageCodes = Object.keys(EAcceptLanguage) as Array<`${EAcceptLanguage}`>;
const flagDict = {
  [EAcceptLanguage['vi-VN']]: VN,
  [EAcceptLanguage['en-US']]: US,
};
export default function ButtonLanguage() {
  const {
    i18n: { language: currentLanguage },
  } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    event?.stopPropagation?.();
    event?.preventDefault?.();
    setAnchorEl(event?.target);
  }, []);
  const handleClose = useCallback((event: any) => {
    setAnchorEl(null);
  }, []);
  const handleChangeLanguage = useCallback(
    (code: `${EAcceptLanguage}`) => {
      return (event: MouseEvent<HTMLLIElement>) => {
        if (code === currentLanguage) {
          setAnchorEl(null);
          return;
        }
        event?.stopPropagation?.();
        event?.preventDefault?.();
        setAnchorEl(null);
        i18n.changeLanguage(code);
        acceptLanguage.set(code as AcceptLanguage);
      };
    },
    [currentLanguage]
  );
  const $LanguageList = useMemo(() => {
    return languageCodes.map((code) => {
      const selected = currentLanguage === code;
      return (
        <MenuItem
          dense
          key={code}
          onClick={handleChangeLanguage(code)}
          selected={selected}
          {...(selected ? { style: { fontWeight: 700 } } : {})}
        >
          {createElement(flagDict[code], { style: { width: 16, height: 16 } })}
          &nbsp;&nbsp;
          {code}
        </MenuItem>
      );
    });
  }, [handleChangeLanguage, currentLanguage]);
  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        <TranslateIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
        {$LanguageList}
      </Menu>
    </>
  );
}
