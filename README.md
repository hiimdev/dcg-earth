# Installation

## Prerequisites

Node.js (at least v18.12) to be installed on your system.

### Installs nvm (Node Version Manager)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

### Download and install Node.js (you may need to restart the terminal)

```bash
nvm install 20
```

### Install pnpm

```bash
npm install -g pnpm
```

#### Option A (Using Git):

1. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. Open a terminal and run:

**Important**: To create an app password, you need [2-Step Verification](https://myaccount.google.com/signinoptions/twosv?gar=WzI0Nl0&rapt=AEjHL4NcKjiIPx4B0m7vToVhiyUlUnDKd1d5zYbiHLJM5Me8G0vz3ZT-b5O1UFOHowpox9TBWqgtrSm2bTOdjrp9r-Kr-i1R2bT9Hb1WHf4obT18Id01SQo) on your Google Account.

If you use 2-Step-Verification and get a "password incorrect" error when you sign in, you can try to use an app password.

[Create and manage your app passwords](https://myaccount.google.com/apppasswords). You may need to sign in to your Google Account.

### Create `.env` file

````
NODE_ENV=production

### Install dependencies

```bash
pnpm install
````

### Run the development server

```bash
pnpm run dev
```
