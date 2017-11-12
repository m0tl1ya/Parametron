import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import {muiTheme} from 'storybook-addon-material-ui';

import { Button, Welcome } from '@storybook/react/demo';


import NavBar from '../components/NavBar';
import ModuleCard from '../components/ModuleCard';
import ParameterTable from '../components/ParameterTable';

import ConfigModule from '../components/ConfigModule';
import ConfigProject from '../components/ConfigProject';

import ParameterUnit from '../components/ParameterUnit';

import ProjectTable from '../components/ProjectTable';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


storiesOf('NavBar', module)
  .add('NavBar', () => <NavBar></NavBar>);

storiesOf('ParameterTable', module)
  .add('ParameterTable', () => <ParameterTable></ParameterTable>);

storiesOf('ModuleCard', module)
  .add('ModuleCard', () => <ModuleCard></ModuleCard>);


storiesOf('ConfigModule', module)
  .add('ConfigModule', () => <ConfigModule></ConfigModule>);

storiesOf('ConfigProject', module)
  .add('ConfigProject', () => <ConfigProject></ConfigProject>);

storiesOf('ParameterUnit', module)
  .add('ParameterUnit', () => <ParameterUnit></ParameterUnit>);

storiesOf('ProjectTable', module)
  .add('ProjectTable', () => <ProjectTable></ProjectTable>)
