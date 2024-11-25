import React from "react";
import Image from "next/image"; // Importing Next.js Image component
import {
  Box,
  Typography,
  Divider,
  Card,
  CardContent,
  Avatar,
  Icon,
} from "@mui/material";
import { AvatarGroup } from "@mui/material";
import { FaEllipsisH } from 'react-icons/fa';

function Page() {
  return (
    <div className="my-[120px] ml-[130px] flex">
      {/* Left */}
      <div className="w-[290px] h-[480px]">
        <div className="w-auto h-[95px] shadow-md mb-6">
          <p className="px-9 py-2 text-center">Notifications</p>
          <hr />
          <p className="pt-2 px-6 text-center font-semibold">
            Notifications Settings
          </p>
        </div>
        <div className="h-[360px] shadow-lg">
          <div className="space-x-8 w-[230px] mx-auto">
            <span className="font-semibold">Your Dashboard</span>
            <span className="text-right text-[#A45286] font-semibold">
              Go To stats
            </span>
          </div>
          <hr className="w-[230px] mx-auto mt-4" />
          <div className="flex flex-col m-4">
            <div className="flex flex-col w-[83px] h-[71px] mb-6">
              <span className="text-[#A45286] font-bold text-[45px] leading-[51.75px] text-left">
                896
              </span>
              <span className="text-[16px] text-gray-700">views today</span>
            </div>
            <div className="flex flex-col w-[83px] h-[71px] mb-6">
              <span className="text-[#A45286] font-bold text-[45px] leading-[51.75px] text-left">
                896
              </span>
              <span className="text-[16px] text-gray-700">views today</span>
            </div>
            <div className="flex flex-col w-[183px] h-[71px] mb-6">
              <span className="text-[#A45286] font-bold text-[45px] leading-[51.75px] text-left">
                896
              </span>
              <span className="text-[16px] text-gray-700">
                search appearances
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <Box className="w-[850px] ml-10 h-[562px] p-4">
        {/* RECENT Section */}
        <Box className="w-auto h-[330px]">
          <Box className="flex justify-between items-center mb-4">
            <Divider className="flex-grow mx-4" />
            <Typography className="font-semibold">RECENT</Typography>
            <Divider className="flex-grow mx-4" />
          </Box>

          {/* Card 1 */}
          <Card className="w-auto h-[78px] mb-4 border-2 rounded-lg">
            <CardContent>
              <Box className="flex justify-between items-center">
                <Box className="flex items-center">
                  <AvatarGroup spacing={24}>
                    {[
                      "https://s3-alpha-sig.figma.com/img/56f4/f3b2/45c3d4fa08edf0f75f777758c3716f59?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oHCEIwBXlPqVvLNiam2MpGJgwFfyxW-cWGXov2J7uBLfxBbC825b4IxtoKU3I-ISb49IB10JlfIhpn7bW2ghr0Nfr-DR30nEFjt9uBfdeiF8XSt4mMJJTa7nF12xv2bUDdrgRosTq4~tOVCF8XdW-fIUYGIJQd5yWyMSNQFyShSUpBBTr4~1QcffAZ5e13j9B~FmHQtpjPTRpvjysvxY2eJvnIaG0lWLvotw2SHstTMJguyjt-ryW4OVINoPVXn6BdovTo112xMNoOhfuQkz9oLR0ZIi7VbELypjTAV9C3bfVddh7XwHYTNUKxNi59FJ9GEEukHd4DRMZtziAB6Jrg__",
                      "https://s3-alpha-sig.figma.com/img/8b6c/0ac7/95bad202cc24bddda3d0a85a5c1f2698?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-U~KpYmv--cjOQJR42zN6MSqKUH3DnV2KpzgD7J5eTNvbuvQruM7tz18tm2LZ1Bd~s-jX8RmM09GhFlP5tVu6xsU9KkQzeP05IPyovkIHOGFZ8tjFR834juwd5j1Mc8PsfpGU2FXM9zh9zpKfo4SxMUUmn4AwjjMkLVBcJ2y5Pw66q~21ZS9J9xF6lslrxjKZWaick2HIcXRzMrmpCY9pXuLjHZlS0L-2ujpD6MM4dsdBM2o50vSzX6djlQHB4lSjDzbN-6KSgxRnSSEs8LFY73M2fUGFTNAP0lhnzVNVBEbywrpUSJPFIaz2yGge7NU4ByiIR7~iEpy-ZtpVgDsA__",
                      "https://s3-alpha-sig.figma.com/img/3aab/992d/7a6145822373091e9304935999e0fe7f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iV0vMReJaLfDdKUyTCPaRxvokRYbffMPX0ZsEvkvu~Kk1EeH6l3rKTqVIdeZR1J6eEEd7R6ccfZJ5MoTiR~p7PFgdz73nbOUTYju8dnsp60eWfMVSjnpzj7DoBBgPZ8mpW~YXxv-7JnoE-gPAhNAarl1vFKAU2LAnMsBBTlVPBstrgvXiEZ0QR~msas0OPU~rz97TXpf-E9fJu1rVXDaRWSayPm7OP1BDRHfJ0jBI6ydf~iSXT86Vt~~cpS0CldTfDakYMOleCNX4BLF0jBEyj8fPp1YZ4lkk11DLe1dwlEbC73f65dr32nb9lQbUkeM3PbaxMp4mMkqigc8z-6dHQ__",
                    ].map((src, idx) => (
                      <Avatar key={idx} alt={`Avatar ${idx + 1}`} src={src} />
                    ))}
                  </AvatarGroup>
                  <Box className="ml-4">
                    <Typography variant="body2">
                      You appeared in 9 searches this week
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      3 hours
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2"> <FaEllipsisH className="text-gray-700 text-[20px] cursor-pointer w-[24px] h-[24px] " /></Typography>
              </Box>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="w-auto h-[78px] mb-4 border-2 rounded-lg">
            <CardContent>
              <Box className="flex justify-between items-center">
                <Box className="flex items-center">
                  <AvatarGroup spacing={24}>
                    {[
                      "https://s3-alpha-sig.figma.com/img/0707/1b5c/c4766380c498dbd1155f64c2717a27a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKk3q1CUZ-bWFGtIzq~2gmSQ5vvxLdMl2xbgQBE3Dyh0Xo0jrAj64GC8yzp3CyWd7RtBZI2j~Uwx0CB72bRikC6raqDwDE5vJo8b7F2EdWJfEdDTEw6nq8uWnhpZ6QTYS4yZh0vAnv8dCQA4DyM~XQVilVvyeWTM2sIbKmZzg4uIl-DVO-xRM5Giil6E4EUmZzDEHL1p8OAuw5XFpv0qKi~86817D47hr-dLbvkH8RPKGQMNhHZDO0gJy6XwG4IyIFs6GOBh~k0CbnoEmu7XOVUo~B0n~ZaO3QynYqD4dy5gPwq4GeI~zIllE1Op-lT1iaAtxwGZDPtEOG98I-K47Q__",
                      "https://s3-alpha-sig.figma.com/img/0707/1b5c/c4766380c498dbd1155f64c2717a27a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKk3q1CUZ-bWFGtIzq~2gmSQ5vvxLdMl2xbgQBE3Dyh0Xo0jrAj64GC8yzp3CyWd7RtBZI2j~Uwx0CB72bRikC6raqDwDE5vJo8b7F2EdWJfEdDTEw6nq8uWnhpZ6QTYS4yZh0vAnv8dCQA4DyM~XQVilVvyeWTM2sIbKmZzg4uIl-DVO-xRM5Giil6E4EUmZzDEHL1p8OAuw5XFpv0qKi~86817D47hr-dLbvkH8RPKGQMNhHZDO0gJy6XwG4IyIFs6GOBh~k0CbnoEmu7XOVUo~B0n~ZaO3QynYqD4dy5gPwq4GeI~zIllE1Op-lT1iaAtxwGZDPtEOG98I-K47Q__",
                      "https://s3-alpha-sig.figma.com/img/0707/1b5c/c4766380c498dbd1155f64c2717a27a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKk3q1CUZ-bWFGtIzq~2gmSQ5vvxLdMl2xbgQBE3Dyh0Xo0jrAj64GC8yzp3CyWd7RtBZI2j~Uwx0CB72bRikC6raqDwDE5vJo8b7F2EdWJfEdDTEw6nq8uWnhpZ6QTYS4yZh0vAnv8dCQA4DyM~XQVilVvyeWTM2sIbKmZzg4uIl-DVO-xRM5Giil6E4EUmZzDEHL1p8OAuw5XFpv0qKi~86817D47hr-dLbvkH8RPKGQMNhHZDO0gJy6XwG4IyIFs6GOBh~k0CbnoEmu7XOVUo~B0n~ZaO3QynYqD4dy5gPwq4GeI~zIllE1Op-lT1iaAtxwGZDPtEOG98I-K47Q__",
                    ].map((src, idx) => (
                      <Avatar key={idx} alt={`Avatar ${idx + 1}`} src={src} />
                    ))}
                  </AvatarGroup>
                  <Box className="ml-4">
                    <Typography variant="body2">
                      Audrey Alexander and 10 others viewed your profile
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      9 hours
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2"> <FaEllipsisH className="text-gray-700 text-[20px] cursor-pointer w-[24px] h-[24px] " /></Typography>
              </Box>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="w-auto h-[78px] mb-4 border-2 rounded-lg">
            <CardContent>
              <Box className="flex justify-between items-center">
                <Box className="flex items-center">
                  <AvatarGroup spacing={24}>
                    {[
                      "https://s3-alpha-sig.figma.com/img/0707/1b5c/c4766380c498dbd1155f64c2717a27a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKk3q1CUZ-bWFGtIzq~2gmSQ5vvxLdMl2xbgQBE3Dyh0Xo0jrAj64GC8yzp3CyWd7RtBZI2j~Uwx0CB72bRikC6raqDwDE5vJo8b7F2EdWJfEdDTEw6nq8uWnhpZ6QTYS4yZh0vAnv8dCQA4DyM~XQVilVvyeWTM2sIbKmZzg4uIl-DVO-xRM5Giil6E4EUmZzDEHL1p8OAuw5XFpv0qKi~86817D47hr-dLbvkH8RPKGQMNhHZDO0gJy6XwG4IyIFs6GOBh~k0CbnoEmu7XOVUo~B0n~ZaO3QynYqD4dy5gPwq4GeI~zIllE1Op-lT1iaAtxwGZDPtEOG98I-K47Q__",
                      "https://s3-alpha-sig.figma.com/img/0707/1b5c/c4766380c498dbd1155f64c2717a27a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKk3q1CUZ-bWFGtIzq~2gmSQ5vvxLdMl2xbgQBE3Dyh0Xo0jrAj64GC8yzp3CyWd7RtBZI2j~Uwx0CB72bRikC6raqDwDE5vJo8b7F2EdWJfEdDTEw6nq8uWnhpZ6QTYS4yZh0vAnv8dCQA4DyM~XQVilVvyeWTM2sIbKmZzg4uIl-DVO-xRM5Giil6E4EUmZzDEHL1p8OAuw5XFpv0qKi~86817D47hr-dLbvkH8RPKGQMNhHZDO0gJy6XwG4IyIFs6GOBh~k0CbnoEmu7XOVUo~B0n~ZaO3QynYqD4dy5gPwq4GeI~zIllE1Op-lT1iaAtxwGZDPtEOG98I-K47Q__",
                      "https://s3-alpha-sig.figma.com/img/0707/1b5c/c4766380c498dbd1155f64c2717a27a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKk3q1CUZ-bWFGtIzq~2gmSQ5vvxLdMl2xbgQBE3Dyh0Xo0jrAj64GC8yzp3CyWd7RtBZI2j~Uwx0CB72bRikC6raqDwDE5vJo8b7F2EdWJfEdDTEw6nq8uWnhpZ6QTYS4yZh0vAnv8dCQA4DyM~XQVilVvyeWTM2sIbKmZzg4uIl-DVO-xRM5Giil6E4EUmZzDEHL1p8OAuw5XFpv0qKi~86817D47hr-dLbvkH8RPKGQMNhHZDO0gJy6XwG4IyIFs6GOBh~k0CbnoEmu7XOVUo~B0n~ZaO3QynYqD4dy5gPwq4GeI~zIllE1Op-lT1iaAtxwGZDPtEOG98I-K47Q__",
                    ].map((src, idx) => (
                      <Avatar key={idx} alt={`Avatar ${idx + 1}`} src={src} />
                    ))}
                  </AvatarGroup>
                  <Box className="ml-4">
                    <Typography variant="body2">
                      Company visited onboarding 3hrs
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      yours
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2"> <FaEllipsisH className="text-gray-700 text-[20px] cursor-pointer w-[24px] h-[24px] " /></Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* "Earlier" section */}
        <Box className="w-auto h-[305px]">
          <Box className="flex justify-between items-center mb-4">
            <Divider className="flex-grow mx-4" />
            <Typography className="font-semibold">EARLIER</Typography>
            <Divider className="flex-grow mx-4" />
          </Box>

          {/* Card 1 */}
          <Card className="w-auto h-[78px] mb-4 border-2 rounded-lg">
            <CardContent>
              <Box className="flex justify-between items-center">
                <Box className="flex items-center">
                  <AvatarGroup spacing={24}>
                    {[
                      "https://s3-alpha-sig.figma.com/img/0707/1b5c/c4766380c498dbd1155f64c2717a27a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKk3q1CUZ-bWFGtIzq~2gmSQ5vvxLdMl2xbgQBE3Dyh0Xo0jrAj64GC8yzp3CyWd7RtBZI2j~Uwx0CB72bRikC6raqDwDE5vJo8b7F2EdWJfEdDTEw6nq8uWnhpZ6QTYS4yZh0vAnv8dCQA4DyM~XQVilVvyeWTM2sIbKmZzg4uIl-DVO-xRM5Giil6E4EUmZzDEHL1p8OAuw5XFpv0qKi~86817D47hr-dLbvkH8RPKGQMNhHZDO0gJy6XwG4IyIFs6GOBh~k0CbnoEmu7XOVUo~B0n~ZaO3QynYqD4dy5gPwq4GeI~zIllE1Op-lT1iaAtxwGZDPtEOG98I-K47Q__",
                      "https://s3-alpha-sig.figma.com/img/0707/1b5c/c4766380c498dbd1155f64c2717a27a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKk3q1CUZ-bWFGtIzq~2gmSQ5vvxLdMl2xbgQBE3Dyh0Xo0jrAj64GC8yzp3CyWd7RtBZI2j~Uwx0CB72bRikC6raqDwDE5vJo8b7F2EdWJfEdDTEw6nq8uWnhpZ6QTYS4yZh0vAnv8dCQA4DyM~XQVilVvyeWTM2sIbKmZzg4uIl-DVO-xRM5Giil6E4EUmZzDEHL1p8OAuw5XFpv0qKi~86817D47hr-dLbvkH8RPKGQMNhHZDO0gJy6XwG4IyIFs6GOBh~k0CbnoEmu7XOVUo~B0n~ZaO3QynYqD4dy5gPwq4GeI~zIllE1Op-lT1iaAtxwGZDPtEOG98I-K47Q__",
                      "https://s3-alpha-sig.figma.com/img/0707/1b5c/c4766380c498dbd1155f64c2717a27a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKk3q1CUZ-bWFGtIzq~2gmSQ5vvxLdMl2xbgQBE3Dyh0Xo0jrAj64GC8yzp3CyWd7RtBZI2j~Uwx0CB72bRikC6raqDwDE5vJo8b7F2EdWJfEdDTEw6nq8uWnhpZ6QTYS4yZh0vAnv8dCQA4DyM~XQVilVvyeWTM2sIbKmZzg4uIl-DVO-xRM5Giil6E4EUmZzDEHL1p8OAuw5XFpv0qKi~86817D47hr-dLbvkH8RPKGQMNhHZDO0gJy6XwG4IyIFs6GOBh~k0CbnoEmu7XOVUo~B0n~ZaO3QynYqD4dy5gPwq4GeI~zIllE1Op-lT1iaAtxwGZDPtEOG98I-K47Q__",
                    ].map((src, idx) => (
                      <Avatar key={idx} alt={`Avatar ${idx + 1}`} src={src} />
                    ))}
                  </AvatarGroup>
                  <Box className="ml-4">
                    <Typography variant="body2">
                      You appeared in 9 searches this week
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      3 hours
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2"> <FaEllipsisH className="text-gray-700 text-[20px] cursor-pointer w-[24px] h-[24px] " /></Typography>
              </Box>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="w-auto h-[78px] mb-4 border-2 rounded-lg">
            <CardContent>
              <Box className="flex justify-between items-center">
                <Box className="flex items-center">
                  <AvatarGroup spacing={24}>
                    {[
                      "https://s3-alpha-sig.figma.com/img/0707/1b5c/c4766380c498dbd1155f64c2717a27a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKk3q1CUZ-bWFGtIzq~2gmSQ5vvxLdMl2xbgQBE3Dyh0Xo0jrAj64GC8yzp3CyWd7RtBZI2j~Uwx0CB72bRikC6raqDwDE5vJo8b7F2EdWJfEdDTEw6nq8uWnhpZ6QTYS4yZh0vAnv8dCQA4DyM~XQVilVvyeWTM2sIbKmZzg4uIl-DVO-xRM5Giil6E4EUmZzDEHL1p8OAuw5XFpv0qKi~86817D47hr-dLbvkH8RPKGQMNhHZDO0gJy6XwG4IyIFs6GOBh~k0CbnoEmu7XOVUo~B0n~ZaO3QynYqD4dy5gPwq4GeI~zIllE1Op-lT1iaAtxwGZDPtEOG98I-K47Q__",
                      "https://s3-alpha-sig.figma.com/img/0707/1b5c/c4766380c498dbd1155f64c2717a27a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKk3q1CUZ-bWFGtIzq~2gmSQ5vvxLdMl2xbgQBE3Dyh0Xo0jrAj64GC8yzp3CyWd7RtBZI2j~Uwx0CB72bRikC6raqDwDE5vJo8b7F2EdWJfEdDTEw6nq8uWnhpZ6QTYS4yZh0vAnv8dCQA4DyM~XQVilVvyeWTM2sIbKmZzg4uIl-DVO-xRM5Giil6E4EUmZzDEHL1p8OAuw5XFpv0qKi~86817D47hr-dLbvkH8RPKGQMNhHZDO0gJy6XwG4IyIFs6GOBh~k0CbnoEmu7XOVUo~B0n~ZaO3QynYqD4dy5gPwq4GeI~zIllE1Op-lT1iaAtxwGZDPtEOG98I-K47Q__",
                      "https://s3-alpha-sig.figma.com/img/0707/1b5c/c4766380c498dbd1155f64c2717a27a6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKk3q1CUZ-bWFGtIzq~2gmSQ5vvxLdMl2xbgQBE3Dyh0Xo0jrAj64GC8yzp3CyWd7RtBZI2j~Uwx0CB72bRikC6raqDwDE5vJo8b7F2EdWJfEdDTEw6nq8uWnhpZ6QTYS4yZh0vAnv8dCQA4DyM~XQVilVvyeWTM2sIbKmZzg4uIl-DVO-xRM5Giil6E4EUmZzDEHL1p8OAuw5XFpv0qKi~86817D47hr-dLbvkH8RPKGQMNhHZDO0gJy6XwG4IyIFs6GOBh~k0CbnoEmu7XOVUo~B0n~ZaO3QynYqD4dy5gPwq4GeI~zIllE1Op-lT1iaAtxwGZDPtEOG98I-K47Q__",
                    ].map((src, idx) => (
                      <Avatar key={idx} alt={`Avatar ${idx + 1}`} src={src} />
                    ))}
                  </AvatarGroup>
                  <Box className="ml-4">
                    <Typography variant="body2">
                      Audrey Alexander and 10 others viewed your profile
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      9 hours
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2"> <FaEllipsisH className="text-gray-700 text-[20px] cursor-pointer w-[24px] h-[24px] " /></Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
}

export default Page;
