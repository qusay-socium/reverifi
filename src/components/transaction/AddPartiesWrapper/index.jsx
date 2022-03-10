import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as BuyerAgent } from 'assets/icons/gray-buyer-agent.svg';
import { ReactComponent as BuyerGroup } from 'assets/icons/gray-buyer-group.svg';
import { ReactComponent as SellerAddress } from 'assets/icons/gray-seller-address.svg';
import { ReactComponent as SellerName } from 'assets/icons/gray-seller-name.svg';
import { ReactComponent as Seller } from 'assets/icons/gray-seller.svg';
import { ReactComponent as NoteIcon } from 'assets/icons/profile-about.svg';
import { InputLabel } from 'components/my-profile/MyProfileWrapper/my-profile-wrapper.styles';
import Button from 'components/shared/Button';
import FormCheckbox from 'components/shared/FormCheckbox';
import FormInput from 'components/shared/FormInput';
import TextAreaInput from 'components/shared/FormTextArea';
import addPartiesSchema from 'components/transaction/AddPartiesWrapper/add-parties-wrapper-schema';
import {
  ButtonText,
  CheckBoxContainer,
  LabelText,
  RowContainer,
  SelectContainer,
  SellerTeamFromContainer,
  SideContainer,
  TextAreaContainer,
  TitleText,
} from 'components/transaction/AddPartiesWrapper/add-parties-wrapper.styles';
import { useShowModal } from 'contexts/ShowModalContext';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { getUsersWithLimit } from 'services/user';
import colors from 'styles/colors';
import MenuInviteMessage from '../MenuInviteMessage';

/**
 * custom select theme function to change select default colors
 *
 * @param {Object} theme theme object from the select component
 * @param {Object} error input useForm error
 *
 */
const customSelectTheme = (theme, error) => ({
  ...theme,
  colors: {
    ...theme.colors,
    dangerLight: colors.alabaster,
    primary: error ? colors.red : colors.green,
    primary25: colors.midGray,
  },
});

/**
 * Add Parties Wrapper component
 *
 * @return {JSX.Element}
 */
export default function AddPartiesWrapper() {
  const { setModalData } = useShowModal();
  const [sellerList, setSellerList] = useState([]);
  const [buyerList, setBuyerList] = useState([]);
  const [isSellerRepresented, setIsSellerRepresented] = useState(false);
  const [sellerName, setSellerName] = useState('');
  const [buyerName, setBuyerName] = useState('');

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addPartiesSchema),
  });

  /**
   * fetch Seller Data function
   */
  const fetchSellerData = async () => {
    if (sellerName?.length > 2) {
      const data = await getUsersWithLimit(10, sellerName);
      setSellerList(data);
    } else {
      setSellerList([]);
    }
  };

  /**
   * fetch Buyer Data function
   */
  const fetchBuyerData = async () => {
    if (buyerName?.length > 2) {
      const data = await getUsersWithLimit(10, buyerName);
      setBuyerList(data);
    } else {
      setBuyerList([]);
    }
  };

  /**
   * handle Input Change function
   */
  const handleInputChange = (val, action, type) => {
    if (type === 'sellerAgent') {
      setSellerName(val);
    } else if (type === 'buyerAgent') {
      setBuyerName(val);
    }

    // prevent clear input when not focused
    if (action !== 'set-value' && val) {
      setValue(type, { label: val, value: val });
    }
    setModalData(val);
  };

  useEffect(() => {
    fetchSellerData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sellerName]);

  useEffect(() => {
    fetchBuyerData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buyerName]);

  return (
    <form onSubmit={handleSubmit()}>
      <div>
        <SellerTeamFromContainer>
          <SideContainer>
            <TitleText>Seller Team</TitleText>

            <RowContainer>
              <SelectContainer noOptions={sellerList.length > 0}>
                <InputLabel>
                  <Seller />
                  <LabelText>Seller Agent:</LabelText>
                </InputLabel>
                <Controller
                  name="sellerAgent"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      components={{ NoOptionsMessage: MenuInviteMessage }}
                      hideSelectedOptions={false}
                      options={sellerList}
                      placeholder="Seller"
                      value={value}
                      onChange={onChange}
                      onInputChange={(val, { action }) =>
                        handleInputChange(val, action, 'sellerAgent')
                      }
                      className="transaction_s1-select"
                      classNamePrefix="transaction_s1"
                      theme={(theme) =>
                        customSelectTheme(theme, errors.sellerAgent?.message)
                      }
                      isClearable
                      isSearchable
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                    />
                  )}
                />
              </SelectContainer>
              <CheckBoxContainer>
                <FormCheckbox
                  label="Represent Seller"
                  name="representSeller"
                  register={register}
                  onChange={() => setIsSellerRepresented(!isSellerRepresented)}
                />
              </CheckBoxContainer>
            </RowContainer>
            {!isSellerRepresented && (
              <RowContainer>
                <SelectContainer>
                  <InputLabel>
                    <SellerAddress />
                    <LabelText>Seller Address:</LabelText>
                  </InputLabel>
                  <FormInput
                    name="address"
                    placeholder="New York"
                    register={register}
                  />
                </SelectContainer>

                <SelectContainer>
                  <InputLabel>
                    <SellerName />
                    <LabelText>Seller Name:</LabelText>
                  </InputLabel>
                  <FormInput
                    name="seller"
                    placeholder="John Doe"
                    register={register}
                  />
                </SelectContainer>
              </RowContainer>
            )}
          </SideContainer>
        </SellerTeamFromContainer>

        <SideContainer>
          <TitleText>Buyer Team</TitleText>

          <RowContainer>
            <SelectContainer noOptions={buyerList.length > 0}>
              <InputLabel>
                <BuyerAgent />
                <LabelText>Buyer Agent:</LabelText>
              </InputLabel>
              <Controller
                name="buyerAgent"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    components={{ NoOptionsMessage: MenuInviteMessage }}
                    hideSelectedOptions={false}
                    options={buyerList}
                    placeholder="Buyer"
                    value={value}
                    onChange={onChange}
                    onInputChange={(val, { action }) =>
                      handleInputChange(val, action, 'buyerAgent')
                    }
                    className="transaction_s1-select"
                    classNamePrefix="transaction_s1"
                    theme={(theme) =>
                      customSelectTheme(theme, errors.buyerAgent?.message)
                    }
                    isClearable
                    isSearchable
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.id}
                  />
                )}
              />
            </SelectContainer>
            <SelectContainer>
              <InputLabel>
                <BuyerGroup />
                <LabelText>Buyer:</LabelText>
              </InputLabel>
              <FormInput
                name="buyer"
                placeholder="Sarah M"
                register={register}
              />
            </SelectContainer>
          </RowContainer>
          <RowContainer>
            <TextAreaContainer>
              <TextAreaInput
                label="Notes"
                labelIconElement={<NoteIcon />}
                name="notes"
                rounded={false}
                limit={140}
                register={register}
              />
            </TextAreaContainer>
          </RowContainer>
          <RowContainer>
            <Button type="submit">
              <ButtonText>Confirm and Next</ButtonText>
            </Button>
          </RowContainer>
        </SideContainer>
      </div>
    </form>
  );
}
