/* Automatically generated by './build/bin/build-entry.js' */

import Pagination from '../packages/pagination/elementUI.js';
import Dialog from '../packages/dialog/elementUI.js';
import Autocomplete from '../packages/autocomplete/elementUI.js';
import Dropdown from '../packages/dropdown/elementUI.js';
import DropdownMenu from '../packages/dropdown-menu/elementUI.js';
import DropdownItem from '../packages/dropdown-item/elementUI.js';
import Menu from '../packages/menu/elementUI.js';
import Submenu from '../packages/submenu/elementUI.js';
import MenuItem from '../packages/menu-item/elementUI.js';
import MenuItemGroup from '../packages/menu-item-group/elementUI.js';
import Input from '../packages/input/elementUI.js';
import InputNumber from '../packages/input-number/elementUI.js';
import Radio from '../packages/radio/elementUI.js';
import RadioGroup from '../packages/radio-group/elementUI.js';
import RadioButton from '../packages/radio-button/elementUI.js';
import Checkbox from '../packages/checkbox/elementUI.js';
import CheckboxButton from '../packages/checkbox-button/elementUI.js';
import CheckboxGroup from '../packages/checkbox-group/elementUI.js';
import Switch from '../packages/switch/elementUI.js';
import Select from '../packages/select/elementUI.js';
import Option from '../packages/option/elementUI.js';
import OptionGroup from '../packages/option-group/elementUI.js';
import Button from '../packages/button/elementUI.js';
import ButtonGroup from '../packages/button-group/elementUI.js';
import Table from '../packages/table/elementUI.js';
import TableColumn from '../packages/table-column/elementUI.js';
import DatePicker from '../packages/date-picker/elementUI.js';
import TimeSelect from '../packages/time-select/elementUI.js';
import TimePicker from '../packages/time-picker/elementUI.js';
import Popover from '../packages/popover/elementUI.js';
import Tooltip from '../packages/tooltip/elementUI.js';
import MessageBox from '../packages/message-box/elementUI.js';
import Breadcrumb from '../packages/breadcrumb/elementUI.js';
import BreadcrumbItem from '../packages/breadcrumb-item/elementUI.js';
import Form from '../packages/form/elementUI.js';
import FormItem from '../packages/form-item/elementUI.js';
import Tabs from '../packages/tabs/elementUI.js';
import TabPane from '../packages/tab-pane/elementUI.js';
import Tag from '../packages/tag/elementUI.js';
import Tree from '../packages/tree/elementUI.js';
import Alert from '../packages/alert/elementUI.js';
import Notification from '../packages/notification/elementUI.js';
import Slider from '../packages/slider/elementUI.js';
import Loading from '../packages/loading/elementUI.js';
import Icon from '../packages/icon/elementUI.js';
import Row from '../packages/row/elementUI.js';
import Col from '../packages/col/elementUI.js';
import Upload from '../packages/upload/elementUI.js';
import Progress from '../packages/progress/elementUI.js';
import Spinner from '../packages/spinner/elementUI.js';
import Message from '../packages/message/elementUI.js';
import Badge from '../packages/badge/elementUI.js';
import Card from '../packages/card/elementUI.js';
import Rate from '../packages/rate/elementUI.js';
import Steps from '../packages/steps/elementUI.js';
import Step from '../packages/step/elementUI.js';
import Carousel from '../packages/carousel/elementUI.js';
import Scrollbar from '../packages/scrollbar/elementUI.js';
import CarouselItem from '../packages/carousel-item/elementUI.js';
import Collapse from '../packages/collapse/elementUI.js';
import CollapseItem from '../packages/collapse-item/elementUI.js';
import Cascader from '../packages/cascader/elementUI.js';
import ColorPicker from '../packages/color-picker/elementUI.js';
import Transfer from '../packages/transfer/elementUI.js';
import Container from '../packages/container/elementUI.js';
import Header from '../packages/header/elementUI.js';
import Aside from '../packages/aside/elementUI.js';
import Main from '../packages/main/elementUI.js';
import Footer from '../packages/footer/elementUI.js';
import Timeline from '../packages/timeline/elementUI.js';
import TimelineItem from '../packages/timeline-item/elementUI.js';
import Link from '../packages/link/elementUI.js';
import Divider from '../packages/divider/elementUI.js';
import Image from '../packages/image/elementUI.js';
import Calendar from '../packages/calendar/elementUI.js';
import Backtop from '../packages/backtop/elementUI.js';
import InfiniteScroll from '../packages/infinite-scroll/elementUI.js';
import PageHeader from '../packages/page-header/elementUI.js';
import CascaderPanel from '../packages/cascader-panel/elementUI.js';
import Avatar from '../packages/avatar/elementUI.js';
import Drawer from '../packages/drawer/elementUI.js';
import Popconfirm from '../packages/popconfirm/elementUI.js';
import locale from 'element-ui/src/locale';
import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

const components = [
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  Popconfirm,
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '2.13.2',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  MessageBox,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Notification,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Message,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  InfiniteScroll,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  Popconfirm
};
