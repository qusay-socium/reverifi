import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { ReactComponent as Seller } from 'assets/icons/gray-seller.svg';
import FormCheckbox from 'components/shared/FormCheckbox';
import { ReactComponent as SellerAddress } from 'assets/icons/gray-seller-address.svg';
import { ReactComponent as SellerName } from 'assets/icons/gray-seller-name.svg';
import { ReactComponent as BuyerAgent } from 'assets/icons/gray-buyer-agent.svg';
import { ReactComponent as BuyerGroup } from 'assets/icons/gray-buyer-group.svg';
import { ReactComponent as NoteIcon } from 'assets/icons/profile-about.svg';
import { getUsersWithLimit } from 'services/user';
import Select from 'react-select';
import TextAreaInput from 'components/shared/FormTextArea';
import Button from 'components/shared/Button';
import FormInput from 'components/shared/FormInput';
import { InputLabel } from 'components/my-profile/MyProfileWrapper/my-profile-wrapper.styles';
import addPartiesSchema from 'components/transaction/AddPartiesWrapper/add-parties-wrapper-schema';
import {
  CheckBoxContainer,
  SellerTeamFromContainer,
  TitleText,
  LabelText,
  RowContainer,
  SelectContainer,
  SideContainer,
  ButtonCheckBoxContainer,
  ButtonText,
  TextAreaContainer,
} from 'components/transaction/AddPartiesWrapper/add-parties-wrapper.styles';

/**
 * Add Involved Parties.
 *
 * @return {JSX.Element} Transaction first page.
 */
export default function AddPartiesWrapper() {
  const [sellerList, setSellerList] = useState([]);
  const [buyerList, setBuyerList] = useState([]);
  const [isSellerRepresented, setIsSellerRepresented] = useState(false);
  const [sellerName, setSellerName] = useState('');
  const [buyerName, setBuyerName] = useState('');

  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(addPartiesSchema),
  });

  const fetchSellerData = async () => {
    if (sellerName.length > 2) {
      const { data } = await getUsersWithLimit(10, sellerName);
      const users = [];
      data.forEach((user) => {
        users.push({ label: user.name, value: user.id });
      });
      setSellerList(users);
    } else {
      setSellerList([]);
    }
  };

  const fetchBuyerData = async () => {
    if (buyerName.length > 2) {
      const { data } = await getUsersWithLimit(10, buyerName);
      const users = [];
      data.forEach((user) => {
        users.push({ label: user.name, value: user.id });
      });
      setBuyerList(users);
    } else {
      setBuyerList([]);
    }
  };

  useEffect(() => {
    fetchSellerData();
  }, [sellerName]);

  useEffect(() => {
    fetchBuyerData();
  }, [buyerName]);

  return (
    <form onSubmit={handleSubmit()}>
      <div>
        <SellerTeamFromContainer>
          <SideContainer>
            <TitleText>Seller Team</TitleText>

            <RowContainer>
              <SelectContainer>
                <InputLabel>
                  <Seller />
                  <LabelText>Seller Agent:</LabelText>
                </InputLabel>
                <Controller
                  name="agents"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      styles={{ backgroundColor: 'red', height: '1000px' }}
                      hideSelectedOptions={false}
                      options={sellerList}
                      placeholder="Seller"
                      value={value}
                      onChange={onChange}
                      onInputChange={setSellerName}
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
            {!isSellerRepresented && (
              <RowContainer>
                <ButtonCheckBoxContainer>
                  <Button>
                    <ButtonText>
                      Upload Power of Attorney or Supporting Document
                    </ButtonText>
                  </Button>
                  <CheckBoxContainer>
                    <FormCheckbox
                      label="I confirm i am an agent representing the seller and will do all the transactions on his/her behalf"
                      name="confirmation"
                      register={register}
                    />
                  </CheckBoxContainer>
                </ButtonCheckBoxContainer>
              </RowContainer>
            )}
          </SideContainer>
        </SellerTeamFromContainer>

        <SideContainer>
          <TitleText>Buyer Team</TitleText>

          <RowContainer>
            <SelectContainer>
              <InputLabel>
                <BuyerAgent />
                <LabelText>Buyer Agent:</LabelText>
              </InputLabel>
              <Controller
                name="buyerAgent"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    hideSelectedOptions={false}
                    options={buyerList}
                    placeholder="John Doe"
                    value={value}
                    onChange={onChange}
                    onInputChange={setBuyerName}
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
