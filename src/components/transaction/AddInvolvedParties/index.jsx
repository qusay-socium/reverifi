import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { ReactComponent as Seller } from 'assets/icons/gray-seller.svg';
import FormCheckbox from 'components/shared/FormCheckbox';
import { ReactComponent as SellerAddress } from 'assets/icons/gray-seller-address.svg';
import { ReactComponent as SellerName } from 'assets/icons/gray-seller-name.svg';
import { ReactComponent as BuyerAgent } from 'assets/icons/gray-buyer-agent.svg';
import { ReactComponent as BuyerGroup } from 'assets/icons/gray-buyer-group.svg';
import { ReactComponent as NoteIcon } from 'assets/icons/profile-about.svg';
import Select from 'react-select';
import TextAreaInput from 'components/shared/FormTextArea';
import Button from 'components/shared/Button';
import { InputLabel } from 'components/my-profile/MyProfileWrapper/my-profile-wrapper.styles';
import addPartiesSchema from 'components/transaction/AddInvolvedParties/add-involved-parties-schema';
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
} from 'components/transaction/AddInvolvedParties/add-involved-parties.styles';

/**
 * Add Involved Parties.
 *
 * @return {JSX.Element} Transaction first page.
 */

const agentOptions = [
  { label: 'Faris', value: 'faris' },
  { label: 'Ammar', value: 'ammar' },
  { label: 'Tamam', value: 'tamam' },
  { label: 'Yousef', value: 'yousef' },
  { label: 'Sara', value: 'sara' },
];
const addressOptions = [
  { label: 'Amman', value: 'amman' },
  { label: 'Oman', value: 'oman' },
  { label: 'Dubai', value: 'dubai' },
  { label: 'New York', value: 'newYork' },
  { label: 'Madrid', value: 'madrid' },
];
const sellerOptions = [
  { label: 'Faris', value: 'faris' },
  { label: 'Ammar', value: 'ammar' },
  { label: 'Tamam', value: 'tamam' },
  { label: 'Yousef', value: 'yousef' },
  { label: 'Sara', value: 'sara' },
];
const buyerAgentOptions = [
  { label: 'Faris', value: 'faris' },
  { label: 'Ammar', value: 'ammar' },
  { label: 'Tamam', value: 'tamam' },
  { label: 'Yousef', value: 'yousef' },
  { label: 'Sara', value: 'sara' },
];
const buyerOptions = [
  { label: 'Faris', value: 'faris' },
  { label: 'Ammar', value: 'ammar' },
  { label: 'Tamam', value: 'tamam' },
  { label: 'Yousef', value: 'yousef' },
  { label: 'Sara', value: 'sara' },
];

export default function AddInvolvedParties() {
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(addPartiesSchema),
  });
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
                  <LabelText>Seller or Agent:</LabelText>
                </InputLabel>
                <Controller
                  name="agents"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      hideSelectedOptions={false}
                      options={agentOptions}
                      placeholder="Seller"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </SelectContainer>
              <CheckBoxContainer>
                <FormCheckbox
                  label="Represent Seller"
                  name="representSeller"
                  register={register}
                />
              </CheckBoxContainer>
            </RowContainer>

            <RowContainer>
              <SelectContainer>
                <InputLabel>
                  <SellerAddress />
                  <LabelText>Seller Address:</LabelText>
                </InputLabel>
                <Controller
                  name="address"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      hideSelectedOptions={false}
                      options={addressOptions}
                      placeholder="New York"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </SelectContainer>

              <SelectContainer>
                <InputLabel>
                  <SellerName />
                  <LabelText>Seller Name:</LabelText>
                </InputLabel>
                <Controller
                  name="seller"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      hideSelectedOptions={false}
                      options={sellerOptions}
                      placeholder="John Doe"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </SelectContainer>
            </RowContainer>

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
                    options={buyerAgentOptions}
                    placeholder="John Doe"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </SelectContainer>
            <SelectContainer>
              <InputLabel>
                <BuyerGroup />
                <LabelText>Buyer:</LabelText>
              </InputLabel>
              <Controller
                name="buyer"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    hideSelectedOptions={false}
                    options={buyerOptions}
                    placeholder="Sarah M"
                    value={value}
                    onChange={onChange}
                  />
                )}
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
