import React, { useContext, useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ChatContext } from "@/context/ChatContext/index";
import Scrollbar from "@/components/custom-scroll/Scrollbar";
import { ChatsType } from "@/features/chat/types";
import { last } from "lodash";
import { formatDistanceToNowStrict } from "date-fns";
import { IconChevronDown } from "@tabler/icons-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "@mui/material";

const ChatListing = () => {
  const theme = useTheme();
  const {
    chatData,
    chatSearch,
    setChatSearch,
    setSelectedChat,
    setActiveChatId,
    activeChatId,
  } = useContext(ChatContext);

  const filteredChats = mockingChatData.filter((chat) =>
    chat.name.toLowerCase().includes(chatSearch.toLowerCase()),
  );

  const getDetails = (conversation: ChatsType) => {
    let displayText = "";

    const lastMessage = conversation.messages[conversation.messages.length - 1];
    if (lastMessage) {
      const sender = lastMessage.senderId === conversation.id ? "You: " : "";
      const message =
        lastMessage.type === "image" ? "Sent a photo" : lastMessage.msg;
      displayText = `${sender}${message}`;
    }

    return displayText;
  };

  const lastActivity = (chat: ChatsType) => last(chat.messages)?.createdAt;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChatSelect = (chat: ChatsType) => {
    const chatId =
      typeof chat.id === "string" ? parseInt(chat.id, 10) : chat.id;
    setSelectedChat(chat);
    setActiveChatId(chatId);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChatSearch(event.target.value);
  };

  return (
    <div>
      {/* ------------------------------------------- */}
      {/* Profile */}
      {/* ------------------------------------------- */}
      <Box display={"flex"} alignItems="center" gap="10px" p={3}>
        <Badge
          variant="dot"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          overlap="circular"
          color="success"
        >
          <Avatar
            alt="cameron Sharp"
            src="/images/profile/avtar.png"
            sx={{ width: 54, height: 54 }}
          />
        </Badge>
        <Box>
          <Typography variant="body1" fontWeight={600}>
            Cameron
          </Typography>
          <Typography variant="body2">Designer</Typography>
        </Box>
      </Box>
      {/* ------------------------------------------- */}
      {/* Search */}
      {/* ------------------------------------------- */}
      <Box px={3} py={1}>
        <TextField
          id="outlined-search"
          placeholder="Search contacts"
          size="small"
          type="search"
          variant="outlined"
          fullWidth
          onChange={handleSearchChange}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Icon
                    icon="solar:magnifer-line-duotone"
                    width={16}
                    height={16}
                    color="textPrimary"
                  />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
      {/* ------------------------------------------- */}
      {/* Contact List */}
      {/* ------------------------------------------- */}
      <List sx={{ px: 0 }}>
        <Box px={2.5} pb={1}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="inherit"
          >
            Recent Chats <IconChevronDown size="16" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={handleClose}>Sort By Time</MenuItem>
            <MenuItem onClick={handleClose}>Sort By Unread</MenuItem>
            <MenuItem onClick={handleClose}>Mark as all Read</MenuItem>
          </Menu>
        </Box>
        <ListItemButton
          key={0}
          onClick={() => { }}
          sx={{
            py: 2,
            px: 3,
            alignItems: "start",
            backgroundColor: "#d2e7f7ff",
          }}
          selected={activeChatId === 0}
        >
          <ListItemAvatar>

            <Avatar
              alt="Remy Sharp"
              src={'/images/profile/avtar.png'}
              sx={{ width: 42, height: 42 }}
            />

          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="subtitle2" fontWeight={600} mb={0.5}>
                Alluvo AI
              </Typography>
            }
            secondary={'Hello, how are you?'}
            sx={{ my: 0 }}
            slotProps={{
              secondary: {
                noWrap: true,
              },
            }}
          />

          <Box sx={{ flexShrink: "0" }} mt={0.5}>
            {/* <Typography variant="body2">
                {formatDistanceToNowStrict(
                  new Date(lastActivity(chat) ?? new Date()),
                  {
                    addSuffix: false,
                  },
                )}
              </Typography> */}
          </Box>
        </ListItemButton>
        <Scrollbar
          sx={{
            height: { lg: "calc(100vh - 100px)", md: "100vh" },
            maxHeight: "600px",
          }}
        >

          {filteredChats && filteredChats.length ? (
            filteredChats.map((chat) => (
              <ListItemButton
                key={chat.id}
                onClick={() => handleChatSelect(chat)}
                sx={{
                  py: 2,
                  px: 3,
                  alignItems: "start",
                }}
                selected={activeChatId === chat.id}
              >
                <ListItemAvatar>
                  <Badge
                    color={
                      chat.status === "online"
                        ? "success"
                        : chat.status === "busy"
                          ? "error"
                          : chat.status === "away"
                            ? "warning"
                            : "secondary"
                    }
                    variant="dot"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    overlap="circular"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={chat.thumb}
                      sx={{ width: 42, height: 42 }}
                    />
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2" fontWeight={600} mb={0.5}>
                      {chat.name}
                    </Typography>
                  }
                  secondary={getDetails(chat)}
                  sx={{ my: 0 }}
                  slotProps={{
                    secondary: {
                      noWrap: true,
                    },
                  }}
                />

                <Box sx={{ flexShrink: "0" }} mt={0.5}>
                  <Typography variant="body2">
                    {formatDistanceToNowStrict(
                      new Date(lastActivity(chat) ?? new Date()),
                      {
                        addSuffix: false,
                      },
                    )}
                  </Typography>
                </Box>
              </ListItemButton>
            ))
          ) : (
            <Box m={2}>
              <Alert severity="error" variant="filled" sx={{ color: "white" }}>
                No Contacts Found!
              </Alert>
            </Box>
          )}
        </Scrollbar>
      </List>
    </div>
  );
};

export default ChatListing;

let mockingChatData = [
  {
    "id": 1,
    "name": "James Johnson",
    "status": "online",
    "thumb": "/images/profile/user-1.png",
    "recent": false,
    "excerpt": "Theme Developer",
    "messages": [
      {
        "createdAt": "2026-04-23T10:39:40.526Z",
        "msg": "Repnapin so him liggu jinnuz.",
        "senderId": 1,
        "type": "text",
        "attachment": [
          {
            "icon": "/images/chat/icon-adobe.svg",
            "file": "service-task.pdf",
            "fileSize": "2MB"
          },
          {
            "icon": "/images/chat/icon-chrome.svg",
            "file": "homepage-design.fig",
            "fileSize": "3MB"
          },
          {
            "icon": "/images/chat/icon-figma.svg",
            "file": "about-us.html",
            "fileSize": "1KB"
          },
          {
            "icon": "/images/chat/icon-javascript.svg",
            "file": "work-project.zip",
            "fileSize": "20MB"
          },
          {
            "icon": "/images/chat/icon-zip-folder.svg",
            "file": "custom.js",
            "fileSize": "2MB"
          }
        ],
        "id": "1"
      },
      {
        "createdAt": "2026-04-23T11:09:40.529Z",
        "msg": "Olsecvar zautine zecvenbar vifambo nauleike di hajecmev luucwur memwek te.",
        "senderId": 1,
        "type": "text",
        "attachment": [],
        "id": "2"
      },
      {
        "createdAt": "2026-04-23T11:33:40.530Z",
        "msg": "Julubo bu tildij tumi zej.",
        "senderId": "3",
        "type": "text",
        "attachment": [],
        "id": "4"
      },
      {
        "msg": "/images/blog/blog-img1.jpg",
        "senderId": "5",
        "type": "image",
        "attachment": [],
        "id": "6"
      },
      {
        "createdAt": "2026-04-23T11:34:40.530Z",
        "msg": "Siw pecrewow goholijom wozieko fefip.",
        "senderId": 1,
        "type": "text",
        "attachment": [],
        "id": "7"
      },
      {
        "id": "0.9348585026492366",
        "senderId": "55",
        "msg": "lo",
        "createdAt": "2026-04-23T13:07:54.696Z",
        "type": "text",
        "attachment": []
      }
    ]
  },
  {
    "id": 2,
    "name": "Maria Hernandez",
    "status": "away",
    "thumb": "/images/profile/user-9.png",
    "recent": true,
    "excerpt": "Doctor",
    "messages": [
      {
        "createdAt": "2026-04-23T10:39:40.531Z",
        "msg": "Peci soh niogieka jipum zu.",
        "senderId": "8",
        "type": "text",
        "attachment": [
          {
            "icon": "/images/chat/icon-adobe.svg",
            "file": "service-task.pdf",
            "fileSize": "2MB"
          },
          {
            "icon": "/images/chat/icon-chrome.svg",
            "file": "homepage-design.fig",
            "fileSize": "3MB"
          },
          {
            "icon": "/images/chat/icon-javascript.svg",
            "file": "work-project.zip",
            "fileSize": "20MB"
          },
          {
            "icon": "/images/chat/icon-zip-folder.svg",
            "file": "custom.js",
            "fileSize": "2MB"
          }
        ],
        "id": "9"
      },
      {
        "createdAt": "2026-04-23T11:09:40.532Z",
        "msg": "Hizak jepir gullawkug poge toj nedilum sotteav impoig ah esufamhal.",
        "senderId": "10",
        "type": "text",
        "attachment": [],
        "id": "11"
      },
      {
        "createdAt": "2026-04-23T11:33:40.535Z",
        "msg": "Fulvootu ficani cu techuvaw woecacof.",
        "senderId": 2,
        "type": "text",
        "attachment": [],
        "id": "12"
      },
      {
        "msg": "/images/blog/blog-img3.jpg",
        "senderId": 2,
        "type": "image",
        "attachment": [],
        "id": "13"
      },
      {
        "createdAt": "2026-04-23T11:38:40.536Z",
        "msg": "Wumzuz te ezjujja duhgejul gotteg.",
        "senderId": "14",
        "type": "text",
        "attachment": [],
        "id": "15"
      }
    ]
  },
  {
    "id": 3,
    "name": "David Smith",
    "status": "busy",
    "thumb": "/images/profile/user-3.png",
    "recent": false,
    "excerpt": "Hacker",
    "messages": [
      {
        "createdAt": "2026-04-23T01:39:40.537Z",
        "msg": "Sapegjen dufuj lawkif nusome rah.",
        "senderId": 1,
        "type": "text",
        "attachment": [
          {
            "icon": "/images/chat/icon-adobe.svg",
            "file": "service-task.pdf",
            "fileSize": "2MB"
          },
          {
            "icon": "/images/chat/icon-zip-folder.svg",
            "file": "custom.js",
            "fileSize": "2MB"
          }
        ],
        "id": "16"
      },
      {
        "createdAt": "2026-04-23T11:09:40.537Z",
        "msg": "Buwkeb vi gijup ka gafa suvwoden biwufiwuk neah ti fa.",
        "senderId": 1,
        "type": "text",
        "attachment": [],
        "id": "17"
      },
      {
        "createdAt": "2026-04-23T11:33:40.539Z",
        "msg": "So lukin ohifu ummirhe ruddomkuf.",
        "senderId": 3,
        "type": "text",
        "attachment": [],
        "id": "18"
      },
      {
        "createdAt": "2026-04-23T11:33:40.540Z",
        "msg": "Cupugis fur pe an wiumoat.",
        "senderId": 3,
        "type": "text",
        "attachment": [],
        "id": "19"
      }
    ]
  },
  {
    "id": 4,
    "name": "Maria Rodriguez",
    "status": "offline",
    "thumb": "/images/profile/user-2.png",
    "recent": true,
    "excerpt": "Please wait outside of the house",
    "messages": [
      {
        "createdAt": "2026-04-23T10:39:40.543Z",
        "msg": "Poeg tauser ok vo epe.",
        "senderId": 1,
        "type": "text",
        "attachment": [],
        "id": "20"
      },
      {
        "createdAt": "2026-04-23T01:39:40.543Z",
        "msg": "Ki loudo vutaluji zifzo pa.",
        "senderId": 4,
        "type": "text",
        "attachment": [
          {
            "icon": "/images/chat/icon-javascript.svg",
            "file": "work-project.zip",
            "fileSize": "20MB"
          },
          {
            "icon": "/images/chat/icon-zip-folder.svg",
            "file": "custom.js",
            "fileSize": "2MB"
          }
        ],
        "id": "21"
      },
      {
        "createdAt": "2026-04-23T00:39:40.544Z",
        "msg": "/images/blog/blog-img6.jpg",
        "senderId": "22",
        "type": "image",
        "attachment": [],
        "id": "23"
      },
      {
        "createdAt": "2026-04-23T11:33:40.544Z",
        "msg": "Bocag pehtote heoc viucu tijec.",
        "senderId": 4,
        "type": "text",
        "attachment": [],
        "id": "24"
      },
      {
        "createdAt": "2026-04-23T11:38:40.544Z",
        "msg": "Vowgiku el voof guv oto nahdebew nutun.",
        "senderId": 3,
        "type": "text",
        "attachment": [],
        "id": "25"
      }
    ]
  },
  {
    "id": 5,
    "name": "Robert Smith",
    "status": "online",
    "thumb": "/images/profile/user-5.png",
    "recent": true,
    "excerpt": "Front End Developer",
    "messages": [
      {
        "createdAt": "2026-04-23T10:39:40.546Z",
        "msg": "Vehiuf tuige nahame va fe.",
        "senderId": 1,
        "type": "text",
        "attachment": [
          {
            "icon": "/images/chat/icon-adobe.svg",
            "file": "service-task.pdf",
            "fileSize": "2MB"
          },
          {
            "icon": "/images/chat/icon-chrome.svg",
            "file": "homepage-design.fig",
            "fileSize": "3MB"
          },
          {
            "icon": "/images/chat/icon-figma.svg",
            "file": "about-us.html",
            "fileSize": "1KB"
          },
          {
            "icon": "/images/chat/icon-javascript.svg",
            "file": "work-project.zip",
            "fileSize": "20MB"
          },
          {
            "icon": "/images/chat/icon-zip-folder.svg",
            "file": "custom.js",
            "fileSize": "2MB"
          }
        ],
        "id": "26"
      },
      {
        "createdAt": "2026-04-23T11:09:40.547Z",
        "msg": "Recujeh wefabe delwah per digpo so ivbez ubjilco lo efa.",
        "senderId": 1,
        "type": "text",
        "attachment": [],
        "id": "27"
      },
      {
        "createdAt": "2026-04-23T11:33:40.548Z",
        "msg": "Azlaaf oti lonep vaafoh ulimowij.",
        "senderId": "28",
        "type": "text",
        "attachment": [],
        "id": "29"
      },
      {
        "msg": "/images/blog/blog-img10.jpg",
        "senderId": 5,
        "type": "image",
        "attachment": [],
        "id": "30"
      },
      {
        "createdAt": "2026-04-23T11:34:40.548Z",
        "msg": "Fon tas ame sir ucfah.",
        "senderId": 5,
        "type": "text",
        "attachment": [],
        "id": "31"
      }
    ]
  },
  {
    "id": 6,
    "name": "Joseph Sarah",
    "status": "busy",
    "thumb": "/images/profile/user-10.png",
    "recent": false,
    "excerpt": "Graphics Designer",
    "messages": [
      {
        "createdAt": "2026-04-23T01:39:40.550Z",
        "msg": "Eku roge sinreceli pof opvon.",
        "senderId": 1,
        "type": "text",
        "attachment": [
          {
            "icon": "/images/chat/icon-chrome.svg",
            "file": "homepage-design.fig",
            "fileSize": "3MB"
          },
          {
            "icon": "/images/chat/icon-javascript.svg",
            "file": "work-project.zip",
            "fileSize": "20MB"
          },
          {
            "icon": "/images/chat/icon-zip-folder.svg",
            "file": "custom.js",
            "fileSize": "2MB"
          }
        ],
        "id": "32"
      },
      {
        "msg": "/images/blog/blog-img2.jpg",
        "senderId": "33",
        "type": "image",
        "attachment": [],
        "id": "34"
      },
      {
        "createdAt": "2026-04-23T11:34:40.553Z",
        "msg": "Woz givpocne cuol laricej tol.",
        "senderId": 1,
        "type": "text",
        "attachment": [],
        "id": "35"
      },
      {
        "createdAt": "2026-04-23T11:37:40.559Z",
        "msg": "Urzo gat igupamzak gogofusu vufuwa.",
        "senderId": 6,
        "type": "text",
        "attachment": [],
        "id": "36"
      }
    ]
  },
  {
    "id": 7,
    "name": "Thomas Smith",
    "status": "away",
    "thumb": "/images/profile/user-8.png",
    "recent": true,
    "excerpt": "Back End Developer",
    "messages": [
      {
        "createdAt": "2026-04-23T01:39:40.560Z",
        "msg": "Bam mabnocnem zozsaiz emuleved ji.",
        "senderId": 1,
        "type": "text",
        "attachment": [
          {
            "icon": "/images/chat/icon-adobe.svg",
            "file": "service-task.pdf",
            "fileSize": "2MB"
          },
          {
            "icon": "/images/chat/icon-chrome.svg",
            "file": "homepage-design.fig",
            "fileSize": "3MB"
          }
        ],
        "id": "37"
      },
      {
        "createdAt": "2026-04-23T10:39:40.561Z",
        "msg": "Igeirna hamtena tudheb he ef si bekejla sozunu wiciv wudpi.",
        "senderId": 1,
        "type": "text",
        "attachment": [],
        "id": "38"
      },
      {
        "createdAt": "2026-04-23T11:24:40.563Z",
        "msg": "Su vaz ciz aw rapaj.",
        "senderId": 7,
        "type": "text",
        "attachment": [],
        "id": "39"
      },
      {
        "createdAt": "2026-04-23T11:29:40.564Z",
        "msg": "Ji ituabeju repitju seet tisgojav.",
        "senderId": 7,
        "type": "text",
        "attachment": [],
        "id": "40"
      }
    ]
  },
  {
    "id": 8,
    "name": "David Elizabeth",
    "status": "offline",
    "thumb": "/images/profile/user-3.png",
    "recent": false,
    "excerpt": "Theme Developer",
    "messages": [
      {
        "createdAt": "2026-04-23T01:39:40.565Z",
        "msg": "Ajcijlek ga iwo lejrolbe hickic.",
        "senderId": 1,
        "type": "text",
        "attachment": [
          {
            "icon": "/images/chat/icon-adobe.svg",
            "file": "service-task.pdf",
            "fileSize": "2MB"
          },
          {
            "icon": "/images/chat/icon-javascript.svg",
            "file": "work-project.zip",
            "fileSize": "20MB"
          },
          {
            "icon": "/images/chat/icon-zip-folder.svg",
            "file": "custom.js",
            "fileSize": "2MB"
          }
        ],
        "id": "41"
      },
      {
        "createdAt": "2026-04-23T05:39:40.567Z",
        "msg": "Oduom fauf jepis dug tosa.",
        "senderId": 3,
        "type": "text",
        "attachment": [],
        "id": "42"
      },
      {
        "createdAt": "2026-04-23T05:39:40.568Z",
        "msg": "Pulpehgah gatuv ohlu ap edlitu.",
        "senderId": 1,
        "type": "text",
        "attachment": [],
        "id": "43"
      },
      {
        "createdAt": "2026-04-23T11:38:40.569Z",
        "msg": "Joohot haja ru gomil vahbirwir.",
        "senderId": 8,
        "type": "text",
        "attachment": [],
        "id": "44"
      }
    ]
  },
  {
    "id": 9,
    "name": "Charles Martha",
    "status": "online",
    "thumb": "/images/profile/user-4.png",
    "recent": false,
    "excerpt": "Administrator",
    "messages": [
      {
        "createdAt": "2026-04-23T01:39:40.569Z",
        "msg": "Ihineleh dambijbuf linwej mefuci cehfut.",
        "senderId": 1,
        "type": "text",
        "attachment": [
          {
            "icon": "/images/chat/icon-javascript.svg",
            "file": "work-project.zip",
            "fileSize": "20MB"
          },
          {
            "icon": "/images/chat/icon-zip-folder.svg",
            "file": "custom.js",
            "fileSize": "2MB"
          }
        ],
        "id": "45"
      },
      {
        "createdAt": "2026-04-23T03:39:40.570Z",
        "msg": "Bihe gecakib ekuira niidiaje buto.",
        "senderId": 3,
        "type": "text",
        "attachment": [],
        "id": "46"
      },
      {
        "createdAt": "2026-04-23T03:39:40.571Z",
        "msg": "Cumtin tuvpo hosugija maju neba.",
        "senderId": 3,
        "type": "text",
        "attachment": [],
        "id": "47"
      },
      {
        "createdAt": "2026-04-23T11:34:40.571Z",
        "msg": "Egovi asi zegejuj uh gemjez.",
        "senderId": 9,
        "type": "text",
        "attachment": [],
        "id": "48"
      },
      {
        "createdAt": "2026-04-23T11:37:40.572Z",
        "msg": "Pohler wa huhseznah obaopu labiz.",
        "senderId": 9,
        "type": "text",
        "attachment": [],
        "id": "49"
      }
    ]
  },
  {
    "id": 10,
    "name": "Samuel Eliza",
    "status": "online",
    "thumb": "/images/profile/user-5.png",
    "recent": false,
    "excerpt": "Doctor",
    "messages": [
      {
        "createdAt": "2026-04-23T01:39:40.572Z",
        "msg": "Sep uzgo wunegze papcu onfi.",
        "senderId": 1,
        "type": "text",
        "attachment": [
          {
            "icon": "/images/chat/icon-adobe.svg",
            "file": "service-task.pdf",
            "fileSize": "2MB"
          },
          {
            "icon": "/images/chat/icon-zip-folder.svg",
            "file": "custom.js",
            "fileSize": "2MB"
          }
        ],
        "id": "50"
      },
      {
        "createdAt": "2026-04-23T00:39:40.573Z",
        "msg": "Fe uwo go tuj gucog.",
        "senderId": 3,
        "type": "text",
        "attachment": [],
        "id": "51"
      },
      {
        "createdAt": "2026-04-23T05:39:40.573Z",
        "msg": "Ge onzuken nevob ted nosgah.",
        "senderId": 3,
        "type": "text",
        "attachment": [],
        "id": "52"
      },
      {
        "createdAt": "2026-04-23T05:39:40.573Z",
        "msg": "Tipfabej ineriweso cene ji kulrojak.",
        "senderId": 3,
        "type": "text",
        "attachment": [],
        "id": "53"
      },
      {
        "createdAt": "2026-04-23T11:33:40.574Z",
        "msg": "Zevsom tok rebbapbav dupmaf ev.",
        "senderId": 10,
        "type": "text",
        "attachment": [],
        "id": "54"
      }
    ]
  }
]
