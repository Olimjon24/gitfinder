"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _vuex.createStore)({
  state: {
    user: null,
    repositories: null,
    url: 'https://api.github.com/users/',
    error: '',
    currentSort: 'name'
  },
  mutations: {
    sort: function sort(state, payload) {
      state.currentSort = payload;
    },
    clearInfo: function clearInfo(state) {
      state.user = null;
      state.repositories = null;
      state.search = '';
      state.error = '';
    },
    userInfo: function userInfo(state, payload) {
      state.user = payload;
    },
    getError: function getError(state, error) {
      if (error.response.status == 404) {
        state.error = error.response.data.message;
        state.user = null;
        state.repositories = null;
      } else {
        state.error = error.response.data.message;
        state.user = null;
        state.repositories = null;
      }
    },
    userRepos: function userRepos(state, payload) {
      state.repositories = payload;
    }
  },
  actions: {
    userInfo: function userInfo(_ref, search) {
      var commit, state, res, repos;
      return regeneratorRuntime.async(function userInfo$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, state = _ref.state;
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(_axios["default"].get("".concat(state.url).concat(search)));

            case 4:
              res = _context.sent;
              _context.next = 7;
              return regeneratorRuntime.awrap(_axios["default"].get("".concat(state.url).concat(search, "/repos")));

            case 7:
              repos = _context.sent;
              commit('userInfo', res.data);
              commit('userRepos', repos.data);
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              commit('getError', _context.t0);
              console.error(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 12]]);
    }
  },
  getters: {
    getReposSort: function getReposSort(state) {
      return state.repositories.sort(function (prev, next) {
        var mod = 1;

        if (prev[state.currentSort] < next[state.currentSort]) {
          return -1 & mod;
        }
      });
    }
  }
});

exports["default"] = _default;