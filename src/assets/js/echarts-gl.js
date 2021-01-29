! function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t(require("echarts")) : "function" == typeof define && define.amd ? define(["echarts"], t) : "object" == typeof exports ? exports["echarts-gl"] = t(require("echarts")) : e["echarts-gl"] = t(e.echarts)
}(this, function (e) {
  return function (e) {
    function t(n) {
      if (r[n]) return r[n].exports;
      var i = r[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var r = {};
    return t.m = e, t.c = r, t.d = function (e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, {
        configurable: !1,
        enumerable: !0,
        get: n
      })
    }, t.n = function (e) {
      var r = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return t.d(r, "a", r), r
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 106)
  }([function (t, r) {
    t.exports = e
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return !e || "none" === e
    }

    function i(e) {
      return e instanceof HTMLCanvasElement || e instanceof HTMLImageElement || e instanceof Image
    }

    function a(e) {
      return e.getZr && e.setOption
    }

    function o(e) {
      return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
    }

    function s(e) {
      if ((e.wrapS === c.a.REPEAT || e.wrapT === c.a.REPEAT) && e.image) {
        var t = o(e.width),
          r = o(e.height);
        if (t !== e.width || r !== e.height) {
          var n = document.createElement("canvas");
          n.width = t, n.height = r;
          n.getContext("2d").drawImage(e.image, 0, 0, t, r), e.image = n
        }
      }
    }
    var u = r(40),
      l = r(52),
      h = r(5),
      c = r(4),
      d = r(8),
      f = r(19),
      p = r(35),
      m = r(15),
      g = r(0),
      _ = r.n(g),
      v = r(36),
      y = r(60),
      x = r.n(y),
      T = r(61),
      b = r(124),
      w = r(125),
      E = r(129),
      S = r(130),
      A = r(2),
      M = r(132),
      C = r(43),
      L = r(76),
      D = r(133),
      N = r(134),
      R = r(135),
      P = r(136),
      I = r(41),
      O = r(37),
      F = r(26),
      B = r(3),
      U = r(137),
      z = r(56),
      G = r(138),
      H = r(139),
      V = r(140),
      k = r(9),
      W = r(74),
      j = r(54),
      X = r(18),
      q = r(59),
      Z = r(141),
      Y = r(146),
      K = r(71),
      Q = r(147),
      J = r(148),
      $ = r(149),
      ee = r(150),
      te = r(151),
      re = r(152);
    _.a.util.extend(p.a.prototype, Z.a), d.a.import(Y.a), d.a.import(K.a), d.a.import(Q.a), d.a.import(J.a), d.a.import($.a), d.a.import(ee.a), d.a.import(te.a), d.a.import(re.a);
    var ne = v.a.prototype.addToScene,
      ie = v.a.prototype.removeFromScene;
    v.a.prototype.addToScene = function (e) {
      if (ne.call(this, e), this.__zr) {
        var t = this.__zr;
        e.traverse(function (e) {
          e.__zr = t, e.addAnimatorsToZr && e.addAnimatorsToZr(t)
        })
      }
    }, v.a.prototype.removeFromScene = function (e) {
      ie.call(this, e), e.traverse(function (e) {
        var t = e.__zr;
        e.__zr = null, t && e.removeAnimatorsFromZr && e.removeAnimatorsFromZr(t)
      })
    }, f.a.prototype.setTextureImage = function (e, t, r, i) {
      if (this.shader) {
        var a, o = r.getZr(),
          s = this;
        return s.autoUpdateTextureStatus = !1, s.disableTexture(e), n(t) || (a = ae.loadTexture(t, r, i, function (t) {
          s.enableTexture(e), o && o.refresh()
        }), s.set(e, a)), a
      }
    };
    var ae = {};
    ae.Renderer = l.a, ae.Node = p.a, ae.Mesh = u.a, ae.Shader = d.a, ae.Material = f.a, ae.Texture = c.a, ae.Texture2D = h.a, ae.Geometry = m.a, ae.SphereGeometry = M.a, ae.PlaneGeometry = C.a, ae.CubeGeometry = L.a, ae.AmbientLight = D.a, ae.DirectionalLight = N.a, ae.PointLight = R.a, ae.SpotLight = P.a, ae.PerspectiveCamera = I.a, ae.OrthographicCamera = O.a, ae.Vector2 = F.a, ae.Vector3 = B.a, ae.Vector4 = U.a, ae.Quaternion = z.a, ae.Matrix2 = G.a, ae.Matrix2d = H.a, ae.Matrix3 = V.a, ae.Matrix4 = k.a, ae.Plane = W.a, ae.Ray = j.a, ae.BoundingBox = X.a, ae.Frustum = q.a;
    var oe = T.a.createBlank("rgba(255,255,255,0)").image;
    ae.loadTexture = function (e, t, r, n) {
      "function" == typeof r && (n = r, r = {}), r = r || {};
      for (var o = Object.keys(r).sort(), u = "", l = 0; l < o.length; l++) u += o[l] + "_" + r[o[l]] + "_";
      var h = t.__textureCache = t.__textureCache || new x.a(20);
      if (a(e)) {
        var c = e.__textureid__,
          d = h.get(u + c);
        if (d) d.texture.surface.setECharts(e), n && n(d.texture);
        else {
          var f = new b.a(e);
          f.onupdate = function () {
            t.getZr().refresh()
          }, d = {
            texture: f.getTexture()
          };
          for (var l = 0; l < o.length; l++) d.texture[o[l]] = r[o[l]];
          c = e.__textureid__ || "__ecgl_ec__" + d.texture.__uid__, e.__textureid__ = c, h.put(u + c, d), n && n(d.texture)
        }
        return d.texture
      }
      if (i(e)) {
        var c = e.__textureid__,
          d = h.get(u + c);
        if (!d) {
          d = {
            texture: new ae.Texture2D({
              image: e
            })
          };
          for (var l = 0; l < o.length; l++) d.texture[o[l]] = r[o[l]];
          c = e.__textureid__ || "__ecgl_image__" + d.texture.__uid__, e.__textureid__ = c, h.put(u + c, d), s(d.texture), n && n(d.texture)
        }
        return d.texture
      }
      var d = h.get(u + e);
      if (d) d.callbacks ? d.callbacks.push(n) : n && n(d.texture);
      else if (e.match(/.hdr$|^data:application\/octet-stream/)) {
        d = {
          callbacks: [n]
        };
        var p = T.a.loadTexture(e, {
          exposure: r.exposure,
          fileType: "hdr"
        }, function () {
          p.dirty(), d.callbacks.forEach(function (e) {
            e && e(p)
          }), d.callbacks = null
        });
        d.texture = p, h.put(u + e, d)
      } else {
        for (var p = new ae.Texture2D({
            image: new Image
          }), l = 0; l < o.length; l++) p[o[l]] = r[o[l]];
        d = {
          texture: p,
          callbacks: [n]
        };
        var m = p.image;
        m.onload = function () {
          p.image = m, s(p), p.dirty(), d.callbacks.forEach(function (e) {
            e && e(p)
          }), d.callbacks = null
        }, m.src = e, p.image = oe, h.put(u + e, d)
      }
      return d.texture
    }, ae.createAmbientCubemap = function (e, t, r, n) {
      e = e || {};
      var i = e.texture,
        a = A.a.firstNotNull(e.exposure, 1),
        o = new w.a({
          intensity: A.a.firstNotNull(e.specularIntensity, 1)
        }),
        s = new E.a({
          intensity: A.a.firstNotNull(e.diffuseIntensity, 1),
          coefficients: [.844, .712, .691, -.037, .083, .167, .343, .288, .299, -.041, -.021, -.009, -.003, -.041, -.064, -.011, -.007, -.004, -.031, .034, .081, -.06, -.049, -.06, .046, .056, .05]
        });
      return o.cubemap = ae.loadTexture(i, r, {
        exposure: a
      }, function () {
        o.cubemap.flipY = !1;
        o.prefilter(t, 32);
        s.coefficients = S.a.projectEnvironmentMap(t, o.cubemap, {
          lod: 1
        }), n && n()
      }), {
        specular: o,
        diffuse: s
      }
    }, ae.createBlankTexture = T.a.createBlank, ae.isImage = i, ae.additiveBlend = function (e) {
      e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE)
    }, ae.parseColor = function (e, t) {
      return e instanceof Array ? (t || (t = []), t[0] = e[0], t[1] = e[1], t[2] = e[2], e.length > 3 ? t[3] = e[3] : t[3] = 1, t) : (t = _.a.color.parse(e || "#000", t) || [0, 0, 0, 0], t[0] /= 255, t[1] /= 255, t[2] /= 255, t)
    }, ae.directionFromAlphaBeta = function (e, t) {
      var r = e / 180 * Math.PI + Math.PI / 2,
        n = -t / 180 * Math.PI + Math.PI / 2,
        i = [],
        a = Math.sin(r);
      return i[0] = a * Math.cos(n), i[1] = -Math.cos(r), i[2] = a * Math.sin(n), i
    }, ae.getShadowResolution = function (e) {
      var t = 1024;
      switch (e) {
        case "low":
          t = 512;
          break;
        case "medium":
          break;
        case "high":
          t = 2048;
          break;
        case "ultra":
          t = 4096
      }
      return t
    }, ae.COMMON_SHADERS = ["lambert", "color", "realistic", "hatching"], ae.createShader = function (e) {
      var t = d.a.source(e + ".vertex"),
        r = d.a.source(e + ".fragment");
      t || console.error("Vertex shader of '%s' not exits", e), r || console.error("Fragment shader of '%s' not exits", e);
      var n = new d.a(t, r);
      return n.name = e, n
    }, ae.createMaterial = function (e, t) {
      t instanceof Array || (t = [t]);
      var r = ae.createShader(e),
        n = new f.a({
          shader: r
        });
      return t.forEach(function (e) {
        "string" == typeof e && n.define(e)
      }), n
    }, ae.setMaterialFromModel = function (e, t, r, n) {
      t.autoUpdateTextureStatus = !1;
      var i = r.getModel(e + "Material"),
        a = i.get("detailTexture"),
        o = A.a.firstNotNull(i.get("textureTiling"), 1),
        s = A.a.firstNotNull(i.get("textureOffset"), 0);
      "number" == typeof o && (o = [o, o]), "number" == typeof s && (s = [s, s]);
      var u = o[0] > 1 || o[1] > 1 ? ae.Texture.REPEAT : ae.Texture.CLAMP_TO_EDGE,
        l = {
          anisotropic: 8,
          wrapS: u,
          wrapT: u
        };
      if ("realistic" === e) {
        var h = i.get("roughness"),
          c = i.get("metalness");
        null != c ? isNaN(c) && (t.setTextureImage("metalnessMap", c, n, l), c = A.a.firstNotNull(i.get("metalnessAdjust"), .5)) : c = 0, null != h ? isNaN(h) && (t.setTextureImage("roughnessMap", h, n, l), h = A.a.firstNotNull(i.get("roughnessAdjust"), .5)) : h = .5;
        var d = i.get("normalTexture");
        t.setTextureImage("detailMap", a, n, l), t.setTextureImage("normalMap", d, n, l), t.set({
          roughness: h,
          metalness: c,
          detailUvRepeat: o,
          detailUvOffset: s
        })
      } else if ("lambert" === e) t.setTextureImage("detailMap", a, n, l), t.set({
        detailUvRepeat: o,
        detailUvOffset: s
      });
      else if ("color" === e) t.setTextureImage("detailMap", a, n, l), t.set({
        detailUvRepeat: o,
        detailUvOffset: s
      });
      else if ("hatching" === e) {
        for (var f = i.get("hatchingTextures") || [], p = 0; p < 6; p++) t.setTextureImage("hatch" + (p + 1), f[p], n, {
          anisotropic: 8,
          wrapS: ae.Texture.REPEAT,
          wrapT: ae.Texture.REPEAT
        });
        t.set({
          detailUvRepeat: o,
          detailUvOffset: s
        })
      }
    }, ae.updateVertexAnimation = function (e, t, r, n) {
      var i = n.get("animation"),
        a = n.get("animationDurationUpdate"),
        o = n.get("animationEasingUpdate"),
        s = r.shadowDepthMaterial;
      if (i && t && a > 0 && t.geometry.vertexCount === r.geometry.vertexCount) {
        r.material.define("vertex", "VERTEX_ANIMATION"), r.ignorePreZ = !0, s && s.define("vertex", "VERTEX_ANIMATION");
        for (var u = 0; u < e.length; u++) r.geometry.attributes[e[u][0]].value = t.geometry.attributes[e[u][1]].value;
        r.geometry.dirty(), r.__percent = 0, r.material.set("percent", 0), r.stopAnimation(), r.animate().when(a, {
          __percent: 1
        }).during(function () {
          r.material.set("percent", r.__percent), s && s.set("percent", r.__percent)
        }).done(function () {
          r.ignorePreZ = !1, r.material.undefine("vertex", "VERTEX_ANIMATION"), s && s.undefine("vertex", "VERTEX_ANIMATION")
        }).start(o)
      } else r.material.undefine("vertex", "VERTEX_ANIMATION"), s && s.undefine("vertex", "VERTEX_ANIMATION")
    }, t.a = ae
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = {
        firstNotNull: function () {
          for (var e = 0, t = arguments.length; e < t; e++)
            if (null != arguments[e]) return arguments[e]
        },
        queryDataIndex: function (e, t) {
          return null != t.dataIndexInside ? t.dataIndexInside : null != t.dataIndex ? i.a.util.isArray(t.dataIndex) ? i.a.util.map(t.dataIndex, function (t) {
            return e.indexOfRawIndex(t)
          }) : e.indexOfRawIndex(t.dataIndex) : null != t.name ? i.a.util.isArray(t.name) ? i.a.util.map(t.name, function (t) {
            return e.indexOfName(t)
          }) : e.indexOfName(t.name) : void 0
        }
      };
    t.a = a
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r) {
      return e < t ? t : e > r ? r : e
    }
    var i = r(12),
      a = function (e, t, r) {
        e = e || 0, t = t || 0, r = r || 0, this.array = i.a.fromValues(e, t, r), this._dirty = !0
      };
    a.prototype = {
      constructor: a,
      add: function (e) {
        return i.a.add(this.array, this.array, e.array), this._dirty = !0, this
      },
      set: function (e, t, r) {
        return this.array[0] = e, this.array[1] = t, this.array[2] = r, this._dirty = !0, this
      },
      setArray: function (e) {
        return this.array[0] = e[0], this.array[1] = e[1], this.array[2] = e[2], this._dirty = !0, this
      },
      clone: function () {
        return new a(this.x, this.y, this.z)
      },
      copy: function (e) {
        return i.a.copy(this.array, e.array), this._dirty = !0, this
      },
      cross: function (e, t) {
        return i.a.cross(this.array, e.array, t.array), this._dirty = !0, this
      },
      dist: function (e) {
        return i.a.dist(this.array, e.array)
      },
      distance: function (e) {
        return i.a.distance(this.array, e.array)
      },
      div: function (e) {
        return i.a.div(this.array, this.array, e.array), this._dirty = !0, this
      },
      divide: function (e) {
        return i.a.divide(this.array, this.array, e.array), this._dirty = !0, this
      },
      dot: function (e) {
        return i.a.dot(this.array, e.array)
      },
      len: function () {
        return i.a.len(this.array)
      },
      length: function () {
        return i.a.length(this.array)
      },
      lerp: function (e, t, r) {
        return i.a.lerp(this.array, e.array, t.array, r), this._dirty = !0, this
      },
      min: function (e) {
        return i.a.min(this.array, this.array, e.array), this._dirty = !0, this
      },
      max: function (e) {
        return i.a.max(this.array, this.array, e.array), this._dirty = !0, this
      },
      mul: function (e) {
        return i.a.mul(this.array, this.array, e.array), this._dirty = !0, this
      },
      multiply: function (e) {
        return i.a.multiply(this.array, this.array, e.array), this._dirty = !0, this
      },
      negate: function () {
        return i.a.negate(this.array, this.array), this._dirty = !0, this
      },
      normalize: function () {
        return i.a.normalize(this.array, this.array), this._dirty = !0, this
      },
      random: function (e) {
        return i.a.random(this.array, e), this._dirty = !0, this
      },
      scale: function (e) {
        return i.a.scale(this.array, this.array, e), this._dirty = !0, this
      },
      scaleAndAdd: function (e, t) {
        return i.a.scaleAndAdd(this.array, this.array, e.array, t), this._dirty = !0, this
      },
      sqrDist: function (e) {
        return i.a.sqrDist(this.array, e.array)
      },
      squaredDistance: function (e) {
        return i.a.squaredDistance(this.array, e.array)
      },
      sqrLen: function () {
        return i.a.sqrLen(this.array)
      },
      squaredLength: function () {
        return i.a.squaredLength(this.array)
      },
      sub: function (e) {
        return i.a.sub(this.array, this.array, e.array), this._dirty = !0, this
      },
      subtract: function (e) {
        return i.a.subtract(this.array, this.array, e.array), this._dirty = !0, this
      },
      transformMat3: function (e) {
        return i.a.transformMat3(this.array, this.array, e.array), this._dirty = !0, this
      },
      transformMat4: function (e) {
        return i.a.transformMat4(this.array, this.array, e.array), this._dirty = !0, this
      },
      transformQuat: function (e) {
        return i.a.transformQuat(this.array, this.array, e.array), this._dirty = !0, this
      },
      applyProjection: function (e) {
        var t = this.array;
        if (e = e.array, 0 === e[15]) {
          var r = -1 / t[2];
          t[0] = e[0] * t[0] * r, t[1] = e[5] * t[1] * r, t[2] = (e[10] * t[2] + e[14]) * r
        } else t[0] = e[0] * t[0] + e[12], t[1] = e[5] * t[1] + e[13], t[2] = e[10] * t[2] + e[14];
        return this._dirty = !0, this
      },
      eulerFromQuat: function (e, t) {
        a.eulerFromQuat(this, e, t)
      },
      eulerFromMat3: function (e, t) {
        a.eulerFromMat3(this, e, t)
      },
      toString: function () {
        return "[" + Array.prototype.join.call(this.array, ",") + "]"
      },
      toArray: function () {
        return Array.prototype.slice.call(this.array)
      }
    };
    var o = Object.defineProperty;
    if (o) {
      var s = a.prototype;
      o(s, "x", {
        get: function () {
          return this.array[0]
        },
        set: function (e) {
          this.array[0] = e, this._dirty = !0
        }
      }), o(s, "y", {
        get: function () {
          return this.array[1]
        },
        set: function (e) {
          this.array[1] = e, this._dirty = !0
        }
      }), o(s, "z", {
        get: function () {
          return this.array[2]
        },
        set: function (e) {
          this.array[2] = e, this._dirty = !0
        }
      })
    }
    a.add = function (e, t, r) {
      return i.a.add(e.array, t.array, r.array), e._dirty = !0, e
    }, a.set = function (e, t, r, n) {
      i.a.set(e.array, t, r, n), e._dirty = !0
    }, a.copy = function (e, t) {
      return i.a.copy(e.array, t.array), e._dirty = !0, e
    }, a.cross = function (e, t, r) {
      return i.a.cross(e.array, t.array, r.array), e._dirty = !0, e
    }, a.dist = function (e, t) {
      return i.a.distance(e.array, t.array)
    }, a.distance = a.dist, a.div = function (e, t, r) {
      return i.a.divide(e.array, t.array, r.array), e._dirty = !0, e
    }, a.divide = a.div, a.dot = function (e, t) {
      return i.a.dot(e.array, t.array)
    }, a.len = function (e) {
      return i.a.length(e.array)
    }, a.lerp = function (e, t, r, n) {
      return i.a.lerp(e.array, t.array, r.array, n), e._dirty = !0, e
    }, a.min = function (e, t, r) {
      return i.a.min(e.array, t.array, r.array), e._dirty = !0, e
    }, a.max = function (e, t, r) {
      return i.a.max(e.array, t.array, r.array), e._dirty = !0, e
    }, a.mul = function (e, t, r) {
      return i.a.multiply(e.array, t.array, r.array), e._dirty = !0, e
    }, a.multiply = a.mul, a.negate = function (e, t) {
      return i.a.negate(e.array, t.array), e._dirty = !0, e
    }, a.normalize = function (e, t) {
      return i.a.normalize(e.array, t.array), e._dirty = !0, e
    }, a.random = function (e, t) {
      return i.a.random(e.array, t), e._dirty = !0, e
    }, a.scale = function (e, t, r) {
      return i.a.scale(e.array, t.array, r), e._dirty = !0, e
    }, a.scaleAndAdd = function (e, t, r, n) {
      return i.a.scaleAndAdd(e.array, t.array, r.array, n), e._dirty = !0, e
    }, a.sqrDist = function (e, t) {
      return i.a.sqrDist(e.array, t.array)
    }, a.squaredDistance = a.sqrDist, a.sqrLen = function (e) {
      return i.a.sqrLen(e.array)
    }, a.squaredLength = a.sqrLen, a.sub = function (e, t, r) {
      return i.a.subtract(e.array, t.array, r.array), e._dirty = !0, e
    }, a.subtract = a.sub, a.transformMat3 = function (e, t, r) {
      return i.a.transformMat3(e.array, t.array, r.array), e._dirty = !0, e
    }, a.transformMat4 = function (e, t, r) {
      return i.a.transformMat4(e.array, t.array, r.array), e._dirty = !0, e
    }, a.transformQuat = function (e, t, r) {
      return i.a.transformQuat(e.array, t.array, r.array), e._dirty = !0, e
    };
    var u = Math.atan2,
      l = Math.asin,
      h = Math.abs;
    a.eulerFromQuat = function (e, t, r) {
      e._dirty = !0, t = t.array;
      var i = e.array,
        a = t[0],
        o = t[1],
        s = t[2],
        h = t[3],
        c = a * a,
        d = o * o,
        f = s * s,
        p = h * h,
        r = (r || "XYZ").toUpperCase();
      switch (r) {
        case "XYZ":
          i[0] = u(2 * (a * h - o * s), p - c - d + f), i[1] = l(n(2 * (a * s + o * h), -1, 1)), i[2] = u(2 * (s * h - a * o), p + c - d - f);
          break;
        case "YXZ":
          i[0] = l(n(2 * (a * h - o * s), -1, 1)), i[1] = u(2 * (a * s + o * h), p - c - d + f), i[2] = u(2 * (a * o + s * h), p - c + d - f);
          break;
        case "ZXY":
          i[0] = l(n(2 * (a * h + o * s), -1, 1)), i[1] = u(2 * (o * h - s * a), p - c - d + f), i[2] = u(2 * (s * h - a * o), p - c + d - f);
          break;
        case "ZYX":
          i[0] = u(2 * (a * h + s * o), p - c - d + f), i[1] = l(n(2 * (o * h - a * s), -1, 1)), i[2] = u(2 * (a * o + s * h), p + c - d - f);
          break;
        case "YZX":
          i[0] = u(2 * (a * h - s * o), p - c + d - f), i[1] = u(2 * (o * h - a * s), p + c - d - f), i[2] = l(n(2 * (a * o + s * h), -1, 1));
          break;
        case "XZY":
          i[0] = u(2 * (a * h + o * s), p - c + d - f), i[1] = u(2 * (a * s + o * h), p + c - d - f), i[2] = l(n(2 * (s * h - a * o), -1, 1));
          break;
        default:
          console.warn("Unkown order: " + r)
      }
      return e
    }, a.eulerFromMat3 = function (e, t, r) {
      var i = t.array,
        a = i[0],
        o = i[3],
        s = i[6],
        c = i[1],
        d = i[4],
        f = i[7],
        p = i[2],
        m = i[5],
        g = i[8],
        _ = e.array,
        r = (r || "XYZ").toUpperCase();
      switch (r) {
        case "XYZ":
          _[1] = l(n(s, -1, 1)), h(s) < .99999 ? (_[0] = u(-f, g), _[2] = u(-o, a)) : (_[0] = u(m, d), _[2] = 0);
          break;
        case "YXZ":
          _[0] = l(-n(f, -1, 1)), h(f) < .99999 ? (_[1] = u(s, g), _[2] = u(c, d)) : (_[1] = u(-p, a), _[2] = 0);
          break;
        case "ZXY":
          _[0] = l(n(m, -1, 1)), h(m) < .99999 ? (_[1] = u(-p, g), _[2] = u(-o, d)) : (_[1] = 0, _[2] = u(c, a));
          break;
        case "ZYX":
          _[1] = l(-n(p, -1, 1)), h(p) < .99999 ? (_[0] = u(m, g), _[2] = u(c, a)) : (_[0] = 0, _[2] = u(-o, d));
          break;
        case "YZX":
          _[2] = l(n(c, -1, 1)), h(c) < .99999 ? (_[0] = u(-f, d), _[1] = u(-p, a)) : (_[0] = 0, _[1] = u(s, g));
          break;
        case "XZY":
          _[2] = l(-n(o, -1, 1)), h(o) < .99999 ? (_[0] = u(m, d), _[1] = u(s, a)) : (_[0] = u(-f, g), _[1] = 0);
          break;
        default:
          console.warn("Unkown order: " + r)
      }
      return e._dirty = !0, e
    }, Object.defineProperties(a, {
      POSITIVE_X: {
        get: function () {
          return new a(1, 0, 0)
        }
      },
      NEGATIVE_X: {
        get: function () {
          return new a(-1, 0, 0)
        }
      },
      POSITIVE_Y: {
        get: function () {
          return new a(0, 1, 0)
        }
      },
      NEGATIVE_Y: {
        get: function () {
          return new a(0, -1, 0)
        }
      },
      POSITIVE_Z: {
        get: function () {
          return new a(0, 0, 1)
        }
      },
      NEGATIVE_Z: {
        get: function () {
          return new a(0, 0, -1)
        }
      },
      UP: {
        get: function () {
          return new a(0, 1, 0)
        }
      },
      ZERO: {
        get: function () {
          return new a
        }
      }
    }), t.a = a
  }, function (e, t, r) {
    "use strict";
    var n = r(7),
      i = r(11),
      a = r(57),
      o = n.a.extend({
        width: 512,
        height: 512,
        type: i.a.UNSIGNED_BYTE,
        format: i.a.RGBA,
        wrapS: i.a.REPEAT,
        wrapT: i.a.REPEAT,
        minFilter: i.a.LINEAR_MIPMAP_LINEAR,
        magFilter: i.a.LINEAR,
        useMipmap: !0,
        anisotropic: 1,
        flipY: !0,
        sRGB: !0,
        unpackAlignment: 4,
        premultiplyAlpha: !1,
        dynamic: !1,
        NPOT: !1,
        __used: 0
      }, function () {
        this._cache = new a.a
      }, {
        getWebGLTexture: function (e) {
          var t = e.gl,
            r = this._cache;
          return r.use(e.__uid__), r.miss("webgl_texture") && r.put("webgl_texture", t.createTexture()), this.dynamic ? this.update(e) : r.isDirty() && (this.update(e), r.fresh()), r.get("webgl_texture")
        },
        bind: function () {},
        unbind: function () {},
        dirty: function () {
          this._cache && this._cache.dirtyAll()
        },
        update: function (e) {},
        updateCommon: function (e) {
          var t = e.gl;
          t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, this.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, this.unpackAlignment), this.format === i.a.DEPTH_COMPONENT && (this.useMipmap = !1);
          var r = e.getGLExtension("EXT_sRGB");
          this.format !== o.SRGB || r || (this.format = o.RGB), this.format !== o.SRGB_ALPHA || r || (this.format = o.RGBA), this.NPOT = !this.isPowerOfTwo()
        },
        getAvailableWrapS: function () {
          return this.NPOT ? i.a.CLAMP_TO_EDGE : this.wrapS
        },
        getAvailableWrapT: function () {
          return this.NPOT ? i.a.CLAMP_TO_EDGE : this.wrapT
        },
        getAvailableMinFilter: function () {
          var e = this.minFilter;
          return this.NPOT || !this.useMipmap ? e === i.a.NEAREST_MIPMAP_NEAREST || e === i.a.NEAREST_MIPMAP_LINEAR ? i.a.NEAREST : e === i.a.LINEAR_MIPMAP_LINEAR || e === i.a.LINEAR_MIPMAP_NEAREST ? i.a.LINEAR : e : e
        },
        getAvailableMagFilter: function () {
          return this.magFilter
        },
        nextHighestPowerOfTwo: function (e) {
          --e;
          for (var t = 1; t < 32; t <<= 1) e |= e >> t;
          return e + 1
        },
        dispose: function (e) {
          var t = this._cache;
          t.use(e.__uid__);
          var r = t.get("webgl_texture");
          r && e.gl.deleteTexture(r), t.deleteContext(e.__uid__)
        },
        isRenderable: function () {},
        isPowerOfTwo: function () {}
      });
    Object.defineProperty(o.prototype, "width", {
      get: function () {
        return this._width
      },
      set: function (e) {
        this._width = e
      }
    }), Object.defineProperty(o.prototype, "height", {
      get: function () {
        return this._height
      },
      set: function (e) {
        this._height = e
      }
    }), o.BYTE = i.a.BYTE, o.UNSIGNED_BYTE = i.a.UNSIGNED_BYTE, o.SHORT = i.a.SHORT, o.UNSIGNED_SHORT = i.a.UNSIGNED_SHORT, o.INT = i.a.INT, o.UNSIGNED_INT = i.a.UNSIGNED_INT, o.FLOAT = i.a.FLOAT, o.HALF_FLOAT = 36193, o.UNSIGNED_INT_24_8_WEBGL = 34042, o.DEPTH_COMPONENT = i.a.DEPTH_COMPONENT, o.DEPTH_STENCIL = i.a.DEPTH_STENCIL, o.ALPHA = i.a.ALPHA, o.RGB = i.a.RGB, o.RGBA = i.a.RGBA, o.LUMINANCE = i.a.LUMINANCE, o.LUMINANCE_ALPHA = i.a.LUMINANCE_ALPHA, o.SRGB = 35904, o.SRGB_ALPHA = 35906, o.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776, o.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777, o.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778, o.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779, o.NEAREST = i.a.NEAREST, o.LINEAR = i.a.LINEAR, o.NEAREST_MIPMAP_NEAREST = i.a.NEAREST_MIPMAP_NEAREST, o.LINEAR_MIPMAP_NEAREST = i.a.LINEAR_MIPMAP_NEAREST, o.NEAREST_MIPMAP_LINEAR = i.a.NEAREST_MIPMAP_LINEAR, o.LINEAR_MIPMAP_LINEAR = i.a.LINEAR_MIPMAP_LINEAR, o.REPEAT = i.a.REPEAT, o.CLAMP_TO_EDGE = i.a.CLAMP_TO_EDGE, o.MIRRORED_REPEAT = i.a.MIRRORED_REPEAT, t.a = o
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
    }

    function i(e, t) {
      var r = n(e.width),
        i = n(e.height);
      return t = t || document.createElement("canvas"), t.width = r, t.height = i, t.getContext("2d").drawImage(e.image, 0, 0, r, i), t
    }
    var a = r(4),
      o = r(11),
      s = r(14),
      u = r(73),
      l = u.a.isPowerOfTwo,
      h = a.a.extend(function () {
        return {
          image: null,
          pixels: null,
          mipmaps: [],
          convertToPOT: !1
        }
      }, {
        textureType: "texture2D",
        update: function (e) {
          var t = e.gl;
          t.bindTexture(t.TEXTURE_2D, this._cache.get("webgl_texture")), this.updateCommon(e);
          var r = this.format,
            n = this.type,
            i = !(!this.convertToPOT || this.mipmaps.length || !this.image || this.wrapS !== a.a.REPEAT && this.wrapT !== a.a.REPEAT || !this.NPOT);
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, i ? this.wrapS : this.getAvailableWrapS()), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, i ? this.wrapT : this.getAvailableWrapT()), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, i ? this.magFilter : this.getAvailableMagFilter()), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, i ? this.minFilter : this.getAvailableMinFilter());
          var s = e.getGLExtension("EXT_texture_filter_anisotropic");
          if (s && this.anisotropic > 1 && t.texParameterf(t.TEXTURE_2D, s.TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropic), 36193 === n) {
            e.getGLExtension("OES_texture_half_float") || (n = o.a.FLOAT)
          }
          if (this.mipmaps.length)
            for (var u = this.width, l = this.height, h = 0; h < this.mipmaps.length; h++) {
              var c = this.mipmaps[h];
              this._updateTextureData(t, c, h, u, l, r, n, !1), u /= 2, l /= 2
            } else this._updateTextureData(t, this, 0, this.width, this.height, r, n, i), !this.useMipmap || this.NPOT && !i || t.generateMipmap(t.TEXTURE_2D);
          t.bindTexture(t.TEXTURE_2D, null)
        },
        _updateTextureData: function (e, t, r, n, o, s, u, l) {
          if (t.image) {
            var h = t.image;
            l && (this._potCanvas = i(this, this._potCanvas), h = this._potCanvas), e.texImage2D(e.TEXTURE_2D, r, s, s, u, h)
          } else s <= a.a.COMPRESSED_RGBA_S3TC_DXT5_EXT && s >= a.a.COMPRESSED_RGB_S3TC_DXT1_EXT ? e.compressedTexImage2D(e.TEXTURE_2D, r, s, n, o, 0, t.pixels) : e.texImage2D(e.TEXTURE_2D, r, s, n, o, 0, s, u, t.pixels)
        },
        generateMipmap: function (e) {
          var t = e.gl;
          this.useMipmap && !this.NPOT && (t.bindTexture(t.TEXTURE_2D, this._cache.get("webgl_texture")), t.generateMipmap(t.TEXTURE_2D))
        },
        isPowerOfTwo: function () {
          return l(this.width) && l(this.height)
        },
        isRenderable: function () {
          return this.image ? "CANVAS" === this.image.nodeName || "VIDEO" === this.image.nodeName || this.image.complete : !(!this.width || !this.height)
        },
        bind: function (e) {
          e.gl.bindTexture(e.gl.TEXTURE_2D, this.getWebGLTexture(e))
        },
        unbind: function (e) {
          e.gl.bindTexture(e.gl.TEXTURE_2D, null)
        },
        load: function (e, t) {
          var r = s.a.createImage();
          t && (r.crossOrigin = t);
          var n = this;
          return r.onload = function () {
            n.dirty(), n.trigger("success", n), r.onload = null
          }, r.onerror = function () {
            n.trigger("error", n), r.onerror = null
          }, r.src = e, this.image = r, this
        }
      });
    Object.defineProperty(h.prototype, "width", {
      get: function () {
        return this.image ? this.image.width : this._width
      },
      set: function (e) {
        this.image ? console.warn("Texture from image can't set width") : (this._width !== e && this.dirty(), this._width = e)
      }
    }), Object.defineProperty(h.prototype, "height", {
      get: function () {
        return this.image ? this.image.height : this._height
      },
      set: function (e) {
        this.image ? console.warn("Texture from image can't set height") : (this._height !== e && this.dirty(), this._height = e)
      }
    }), t.a = h
  }, function (e, t, r) {
    "use strict";
    var n = r(161);
    t.a = n.a
  }, function (e, t, r) {
    "use strict";
    var n = r(110),
      i = r(53),
      a = r(23),
      o = function () {
        this.__uid__ = a.a.genGUID()
      };
    o.__initializers__ = [function (e) {
      a.a.extend(this, e)
    }], a.a.extend(o, n.a), a.a.extend(o.prototype, i.a), t.a = o
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      for (var t = [], r = 0; r < e; r++) t[r] = 0;
      return t
    }

    function i(e, t) {
      var r = "vertex:" + e + "fragment:" + t;
      if (x[r]) return x[r];
      var n = l.a.genGUID();
      return x[r] = n, T[n] = {
        vertex: e,
        fragment: t
      }, n
    }

    function a(e) {
      return e.replace(/[ \t]*\/\/.*\n/g, "").replace(/[ \t]*\/\*[\s\S]*?\*\//g, "")
    }

    function o() {
      console.error("Wrong uniform/attributes syntax")
    }

    function s(e, t) {
      function r(e) {
        e || o();
        var t = e.match(/\[(.*?)\]/);
        u = e.replace(/\[(.*?)\]/, ""), c[u] = {}, t && (c[u].isArray = !0, c[u].arraySize = t[1])
      }
      for (var n = /[,=\(\):]/, i = t.replace(/:\s*\[\s*(.*)\s*\]/g, "=" + e + "($1)").replace(/\s+/g, "").split(/(?=[,=\(\):])/g), a = [], s = 0; s < i.length; s++) i[s].match(n) ? a.push(i[s].charAt(0), i[s].slice(1)) : a.push(i[s]);
      i = a;
      var u, l = 0,
        c = {},
        d = null;
      r(i[0]);
      for (var s = 1; s < i.length; s++) {
        var f = i[s];
        if (f)
          if ("=" !== f)
            if (":" !== f)
              if ("," !== f)
                if (")" !== f)
                  if ("(" !== f)
                    if (f.indexOf("vec") >= 0) {
                      if (1 !== l && 4 !== l) {
                        o();
                        break
                      }
                      l = 2, d = []
                    } else if (1 !== l)
          if (4 !== l) r(f), l = 0;
          else {
            var p = f;
            g.indexOf(p) >= 0 || _.indexOf(p) >= 0 || v.indexOf(p) >= 0 ? c[u].semantic = p : "ignore" === p || "unconfigurable" === p ? c[u].ignore = !0 : c[u].value = "bool" === e ? "true" === p : parseFloat(p)
          }
        else c[u].value = "bool" === e ? "true" === f : parseFloat(f), d = null;
        else {
          if (2 !== l) {
            o();
            break
          }
          if (!(d instanceof Array)) {
            o();
            break
          }
          d.push(+i[++s])
        } else c[u].value = new h.a.Float32Array(d), d = null, l = 5;
        else if (2 === l) {
          if (!(d instanceof Array)) {
            o();
            break
          }
          d.push(+i[++s])
        } else l = 5;
        else l = 4;
        else {
          if (0 !== l && 3 !== l) {
            o();
            break
          }
          l = 1
        }
      }
      return c
    }

    function u(e, t) {
      "object" == typeof e && (t = e.fragment, e = e.vertex), e = a(e), t = a(t), this._shaderID = i(e, t), this._vertexCode = u.parseImport(e), this._fragmentCode = u.parseImport(t), this.attributeSemantics = {}, this.matrixSemantics = {}, this.uniformSemantics = {}, this.matrixSemanticKeys = [], this.uniformTemplates = {}, this.attributes = {}, this.textures = {}, this.vertexDefines = {}, this.fragmentDefines = {}, this._parseAttributes(), this._parseUniforms(), this._parseDefines()
    }
    var l = r(23),
      h = r(14),
      c = /uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,
      d = /attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,
      f = /#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,
      p = {
        bool: "1i",
        int: "1i",
        sampler2D: "t",
        samplerCube: "t",
        float: "1f",
        vec2: "2f",
        vec3: "3f",
        vec4: "4f",
        ivec2: "2i",
        ivec3: "3i",
        ivec4: "4i",
        mat2: "m2",
        mat3: "m3",
        mat4: "m4"
      },
      m = {
        bool: function () {
          return !0
        },
        int: function () {
          return 0
        },
        float: function () {
          return 0
        },
        sampler2D: function () {
          return null
        },
        samplerCube: function () {
          return null
        },
        vec2: function () {
          return n(2)
        },
        vec3: function () {
          return n(3)
        },
        vec4: function () {
          return n(4)
        },
        ivec2: function () {
          return n(2)
        },
        ivec3: function () {
          return n(3)
        },
        ivec4: function () {
          return n(4)
        },
        mat2: function () {
          return n(4)
        },
        mat3: function () {
          return n(9)
        },
        mat4: function () {
          return n(16)
        },
        array: function () {
          return []
        }
      },
      g = ["POSITION", "NORMAL", "BINORMAL", "TANGENT", "TEXCOORD", "TEXCOORD_0", "TEXCOORD_1", "COLOR", "JOINT", "WEIGHT"],
      _ = ["SKIN_MATRIX", "VIEWPORT_SIZE", "VIEWPORT", "DEVICEPIXELRATIO", "WINDOW_SIZE", "NEAR", "FAR", "TIME"],
      v = ["WORLD", "VIEW", "PROJECTION", "WORLDVIEW", "VIEWPROJECTION", "WORLDVIEWPROJECTION", "WORLDINVERSE", "VIEWINVERSE", "PROJECTIONINVERSE", "WORLDVIEWINVERSE", "VIEWPROJECTIONINVERSE", "WORLDVIEWPROJECTIONINVERSE", "WORLDTRANSPOSE", "VIEWTRANSPOSE", "PROJECTIONTRANSPOSE", "WORLDVIEWTRANSPOSE", "VIEWPROJECTIONTRANSPOSE", "WORLDVIEWPROJECTIONTRANSPOSE", "WORLDINVERSETRANSPOSE", "VIEWINVERSETRANSPOSE", "PROJECTIONINVERSETRANSPOSE", "WORLDVIEWINVERSETRANSPOSE", "VIEWPROJECTIONINVERSETRANSPOSE", "WORLDVIEWPROJECTIONINVERSETRANSPOSE"],
      y = {
        vec4: 4,
        vec3: 3,
        vec2: 2,
        float: 1
      },
      x = {},
      T = {};
    u.prototype = {
      constructor: u,
      createUniforms: function () {
        var e = {};
        for (var t in this.uniformTemplates) {
          var r = this.uniformTemplates[t];
          e[t] = {
            type: r.type,
            value: r.value()
          }
        }
        return e
      },
      _parseImport: function () {
        this._vertexCode = u.parseImport(this.vertex), this._fragmentCode = u.parseImport(this.fragment)
      },
      _addSemanticUniform: function (e, t, r) {
        if (g.indexOf(r) >= 0) this.attributeSemantics[r] = {
          symbol: e,
          type: t
        };
        else if (v.indexOf(r) >= 0) {
          var n = !1,
            i = r;
          r.match(/TRANSPOSE$/) && (n = !0, i = r.slice(0, -9)), this.matrixSemantics[r] = {
            symbol: e,
            type: t,
            isTranspose: n,
            semanticNoTranspose: i
          }
        } else _.indexOf(r) >= 0 && (this.uniformSemantics[r] = {
          symbol: e,
          type: t
        })
      },
      _addMaterialUniform: function (e, t, r, n, i, a) {
        a[e] = {
          type: r,
          value: i ? m.array : n || m[t],
          semantic: null
        }
      },
      _parseUniforms: function () {
        function e(e) {
          return null != e ? function () {
            return e
          } : null
        }

        function t(t, a, o) {
          var u = s(a, o),
            l = [];
          for (var h in u) {
            var c = u[h],
              d = c.semantic,
              f = h,
              m = p[a],
              g = e(u[h].value);
            u[h].isArray && (f += "[" + u[h].arraySize + "]", m += "v"), l.push(f), n._uniformList.push(h), c.ignore || ("sampler2D" !== a && "samplerCube" !== a || (n.textures[h] = {
              shaderType: i,
              type: a
            }), d ? n._addSemanticUniform(h, m, d) : n._addMaterialUniform(h, a, m, g, u[h].isArray, r))
          }
          return l.length > 0 ? "uniform " + a + " " + l.join(",") + ";\n" : ""
        }
        var r = {},
          n = this,
          i = "vertex";
        this._uniformList = [], this._vertexCode = this._vertexCode.replace(c, t), i = "fragment", this._fragmentCode = this._fragmentCode.replace(c, t), n.matrixSemanticKeys = Object.keys(this.matrixSemantics), this.uniformTemplates = r
      },
      _parseAttributes: function () {
        function e(e, n, i) {
          var a = s(n, i),
            o = y[n] || 1,
            u = [];
          for (var l in a) {
            var h = a[l].semantic;
            if (t[l] = {
                type: "float",
                size: o,
                semantic: h || null
              }, h) {
              if (g.indexOf(h) < 0) throw new Error('Unkown semantic "' + h + '"');
              r.attributeSemantics[h] = {
                symbol: l,
                type: n
              }
            }
            u.push(l)
          }
          return "attribute " + n + " " + u.join(",") + ";\n"
        }
        var t = {},
          r = this;
        this._vertexCode = this._vertexCode.replace(d, e), this.attributes = t
      },
      _parseDefines: function () {
        function e(e, n, i) {
          var a = "vertex" === r ? t.vertexDefines : t.fragmentDefines;
          return a[n] || (a[n] = "false" !== i && ("true" === i || (i ? isNaN(parseFloat(i)) ? i.trim() : parseFloat(i) : null))), ""
        }
        var t = this,
          r = "vertex";
        this._vertexCode = this._vertexCode.replace(f, e), r = "fragment", this._fragmentCode = this._fragmentCode.replace(f, e)
      },
      clone: function () {
        var e = T[this._shaderID];
        return new u(e.vertex, e.fragment)
      }
    }, Object.defineProperty && (Object.defineProperty(u.prototype, "shaderID", {
      get: function () {
        return this._shaderID
      }
    }), Object.defineProperty(u.prototype, "vertex", {
      get: function () {
        return this._vertexCode
      }
    }), Object.defineProperty(u.prototype, "fragment", {
      get: function () {
        return this._fragmentCode
      }
    }), Object.defineProperty(u.prototype, "uniforms", {
      get: function () {
        return this._uniformList
      }
    }));
    var b = /(@import)\s*([0-9a-zA-Z_\-\.]*)/g;
    u.parseImport = function (e) {
      return e = e.replace(b, function (e, t, r) {
        var e = u.source(r);
        return e ? u.parseImport(e) : (console.error('Shader chunk "' + r + '" not existed in library'), "")
      })
    };
    var w = /(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;
    u.import = function (e) {
      e.replace(w, function (e, t, r, n) {
        var n = n.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g, "");
        if (n) {
          for (var i, a = r.split("."), o = u.codes, s = 0; s < a.length - 1;) i = a[s++], o[i] || (o[i] = {}), o = o[i];
          i = a[s], o[i] = n
        }
        return n
      })
    }, u.codes = {}, u.source = function (e) {
      for (var t = e.split("."), r = u.codes, n = 0; r && n < t.length;) {
        r = r[t[n++]]
      }
      return "string" != typeof r ? (console.error('Shader "' + e + '" not existed in library'), "") : r
    }, t.a = u
  }, function (e, t, r) {
    "use strict";
    var n = r(21),
      i = r(12),
      a = r(55),
      o = r(34),
      s = r(3),
      u = function () {
        this._axisX = new s.a, this._axisY = new s.a, this._axisZ = new s.a, this.array = n.a.create(), this._dirty = !0
      };
    u.prototype = {
      constructor: u,
      setArray: function (e) {
        for (var t = 0; t < this.array.length; t++) this.array[t] = e[t];
        return this._dirty = !0, this
      },
      adjoint: function () {
        return n.a.adjoint(this.array, this.array), this._dirty = !0, this
      },
      clone: function () {
        return (new u).copy(this)
      },
      copy: function (e) {
        return n.a.copy(this.array, e.array), this._dirty = !0, this
      },
      determinant: function () {
        return n.a.determinant(this.array)
      },
      fromQuat: function (e) {
        return n.a.fromQuat(this.array, e.array), this._dirty = !0, this
      },
      fromRotationTranslation: function (e, t) {
        return n.a.fromRotationTranslation(this.array, e.array, t.array), this._dirty = !0, this
      },
      fromMat2d: function (e) {
        return u.fromMat2d(this, e), this
      },
      frustum: function (e, t, r, i, a, o) {
        return n.a.frustum(this.array, e, t, r, i, a, o), this._dirty = !0, this
      },
      identity: function () {
        return n.a.identity(this.array), this._dirty = !0, this
      },
      invert: function () {
        return n.a.invert(this.array, this.array), this._dirty = !0, this
      },
      lookAt: function (e, t, r) {
        return n.a.lookAt(this.array, e.array, t.array, r.array), this._dirty = !0, this
      },
      mul: function (e) {
        return n.a.mul(this.array, this.array, e.array), this._dirty = !0, this
      },
      mulLeft: function (e) {
        return n.a.mul(this.array, e.array, this.array), this._dirty = !0, this
      },
      multiply: function (e) {
        return n.a.multiply(this.array, this.array, e.array), this._dirty = !0, this
      },
      multiplyLeft: function (e) {
        return n.a.multiply(this.array, e.array, this.array), this._dirty = !0, this
      },
      ortho: function (e, t, r, i, a, o) {
        return n.a.ortho(this.array, e, t, r, i, a, o), this._dirty = !0, this
      },
      perspective: function (e, t, r, i) {
        return n.a.perspective(this.array, e, t, r, i), this._dirty = !0, this
      },
      rotate: function (e, t) {
        return n.a.rotate(this.array, this.array, e, t.array), this._dirty = !0, this
      },
      rotateX: function (e) {
        return n.a.rotateX(this.array, this.array, e), this._dirty = !0, this
      },
      rotateY: function (e) {
        return n.a.rotateY(this.array, this.array, e), this._dirty = !0, this
      },
      rotateZ: function (e) {
        return n.a.rotateZ(this.array, this.array, e), this._dirty = !0, this
      },
      scale: function (e) {
        return n.a.scale(this.array, this.array, e.array), this._dirty = !0, this
      },
      translate: function (e) {
        return n.a.translate(this.array, this.array, e.array), this._dirty = !0, this
      },
      transpose: function () {
        return n.a.transpose(this.array, this.array), this._dirty = !0, this
      },
      decomposeMatrix: function () {
        var e = i.a.create(),
          t = i.a.create(),
          r = i.a.create(),
          n = o.a.create();
        return function (s, u, l) {
          var h = this.array;
          i.a.set(e, h[0], h[1], h[2]), i.a.set(t, h[4], h[5], h[6]), i.a.set(r, h[8], h[9], h[10]);
          var c = i.a.length(e),
            d = i.a.length(t),
            f = i.a.length(r);
          this.determinant() < 0 && (c = -c), s && s.set(c, d, f), l.set(h[12], h[13], h[14]), o.a.fromMat4(n, h), n[0] /= c, n[1] /= c, n[2] /= c, n[3] /= d, n[4] /= d, n[5] /= d, n[6] /= f, n[7] /= f, n[8] /= f, a.a.fromMat3(u.array, n), a.a.normalize(u.array, u.array), u._dirty = !0, l._dirty = !0
        }
      }(),
      toString: function () {
        return "[" + Array.prototype.join.call(this.array, ",") + "]"
      },
      toArray: function () {
        return Array.prototype.slice.call(this.array)
      }
    };
    var l = Object.defineProperty;
    if (l) {
      var h = u.prototype;
      l(h, "z", {
        get: function () {
          var e = this.array;
          return this._axisZ.set(e[8], e[9], e[10]), this._axisZ
        },
        set: function (e) {
          var t = this.array;
          e = e.array, t[8] = e[0], t[9] = e[1], t[10] = e[2], this._dirty = !0
        }
      }), l(h, "y", {
        get: function () {
          var e = this.array;
          return this._axisY.set(e[4], e[5], e[6]), this._axisY
        },
        set: function (e) {
          var t = this.array;
          e = e.array, t[4] = e[0], t[5] = e[1], t[6] = e[2], this._dirty = !0
        }
      }), l(h, "x", {
        get: function () {
          var e = this.array;
          return this._axisX.set(e[0], e[1], e[2]), this._axisX
        },
        set: function (e) {
          var t = this.array;
          e = e.array, t[0] = e[0], t[1] = e[1], t[2] = e[2], this._dirty = !0
        }
      })
    }
    u.adjoint = function (e, t) {
      return n.a.adjoint(e.array, t.array), e._dirty = !0, e
    }, u.copy = function (e, t) {
      return n.a.copy(e.array, t.array), e._dirty = !0, e
    }, u.determinant = function (e) {
      return n.a.determinant(e.array)
    }, u.identity = function (e) {
      return n.a.identity(e.array), e._dirty = !0, e
    }, u.ortho = function (e, t, r, i, a, o, s) {
      return n.a.ortho(e.array, t, r, i, a, o, s), e._dirty = !0, e
    }, u.perspective = function (e, t, r, i, a) {
      return n.a.perspective(e.array, t, r, i, a), e._dirty = !0, e
    }, u.lookAt = function (e, t, r, i) {
      return n.a.lookAt(e.array, t.array, r.array, i.array), e._dirty = !0, e
    }, u.invert = function (e, t) {
      return n.a.invert(e.array, t.array), e._dirty = !0, e
    }, u.mul = function (e, t, r) {
      return n.a.mul(e.array, t.array, r.array), e._dirty = !0, e
    }, u.multiply = u.mul, u.fromQuat = function (e, t) {
      return n.a.fromQuat(e.array, t.array), e._dirty = !0, e
    }, u.fromRotationTranslation = function (e, t, r) {
      return n.a.fromRotationTranslation(e.array, t.array, r.array), e._dirty = !0, e
    }, u.fromMat2d = function (e, t) {
      e._dirty = !0;
      var t = t.array,
        e = e.array;
      return e[0] = t[0], e[4] = t[2], e[12] = t[4], e[1] = t[1], e[5] = t[3], e[13] = t[5], e
    }, u.rotate = function (e, t, r, i) {
      return n.a.rotate(e.array, t.array, r, i.array), e._dirty = !0, e
    }, u.rotateX = function (e, t, r) {
      return n.a.rotateX(e.array, t.array, r), e._dirty = !0, e
    }, u.rotateY = function (e, t, r) {
      return n.a.rotateY(e.array, t.array, r), e._dirty = !0, e
    }, u.rotateZ = function (e, t, r) {
      return n.a.rotateZ(e.array, t.array, r), e._dirty = !0, e
    }, u.scale = function (e, t, r) {
      return n.a.scale(e.array, t.array, r.array), e._dirty = !0, e
    }, u.transpose = function (e, t) {
      return n.a.transpose(e.array, t.array), e._dirty = !0, e
    }, u.translate = function (e, t, r) {
      return n.a.translate(e.array, t.array, r.array), e._dirty = !0, e
    }, t.a = u
  }, function (e, t, r) {
    "use strict";
    var n = r(7),
      i = r(4),
      a = (r(27), r(11)),
      o = r(57),
      s = a.a.FRAMEBUFFER,
      u = a.a.RENDERBUFFER,
      l = a.a.DEPTH_ATTACHMENT,
      h = a.a.COLOR_ATTACHMENT0,
      c = n.a.extend({
        depthBuffer: !0,
        viewport: null,
        _width: 0,
        _height: 0,
        _textures: null,
        _boundRenderer: null
      }, function () {
        this._cache = new o.a, this._textures = {}
      }, {
        getTextureWidth: function () {
          return this._width
        },
        getTextureHeight: function () {
          return this._height
        },
        bind: function (e) {
          if (e.__currentFrameBuffer) {
            if (e.__currentFrameBuffer === this) return;
            console.warn("Renderer already bound with another framebuffer. Unbind it first")
          }
          e.__currentFrameBuffer = this;
          var t = e.gl;
          t.bindFramebuffer(s, this._getFrameBufferGL(e)), this._boundRenderer = e;
          var r = this._cache;
          r.put("viewport", e.viewport);
          var n, i, a = !1;
          for (var o in this._textures) {
            a = !0;
            var h = this._textures[o];
            h && (n = h.texture.width, i = h.texture.height, this._doAttach(e, h.texture, o, h.target))
          }
          this._width = n, this._height = i, !a && this.depthBuffer && console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."), this.viewport ? e.setViewport(this.viewport) : e.setViewport(0, 0, n, i, 1);
          var c = r.get("attached_textures");
          if (c)
            for (var o in c)
              if (!this._textures[o]) {
                var d = c[o];
                this._doDetach(t, o, d)
              } if (!r.get("depthtexture_attached") && this.depthBuffer) {
            r.miss("renderbuffer") && r.put("renderbuffer", t.createRenderbuffer());
            var f = r.get("renderbuffer");
            n === r.get("renderbuffer_width") && i === r.get("renderbuffer_height") || (t.bindRenderbuffer(u, f), t.renderbufferStorage(u, t.DEPTH_COMPONENT16, n, i), r.put("renderbuffer_width", n), r.put("renderbuffer_height", i), t.bindRenderbuffer(u, null)), r.get("renderbuffer_attached") || (t.framebufferRenderbuffer(s, l, u, f), r.put("renderbuffer_attached", !0))
          }
        },
        unbind: function (e) {
          e.__currentFrameBuffer = null, e.gl.bindFramebuffer(s, null), this._boundRenderer = null, this._cache.use(e.__uid__);
          var t = this._cache.get("viewport");
          t && e.setViewport(t), this.updateMipmap(e)
        },
        updateMipmap: function (e) {
          var t = e.gl;
          for (var r in this._textures) {
            var n = this._textures[r];
            if (n) {
              var o = n.texture;
              if (!o.NPOT && o.useMipmap && o.minFilter === i.a.LINEAR_MIPMAP_LINEAR) {
                var s = "textureCube" === o.textureType ? a.a.TEXTURE_CUBE_MAP : a.a.TEXTURE_2D;
                t.bindTexture(s, o.getWebGLTexture(e)), t.generateMipmap(s), t.bindTexture(s, null)
              }
            }
          }
        },
        checkStatus: function (e) {
          return e.checkFramebufferStatus(s)
        },
        _getFrameBufferGL: function (e) {
          var t = this._cache;
          return t.use(e.__uid__), t.miss("framebuffer") && t.put("framebuffer", e.gl.createFramebuffer()), t.get("framebuffer")
        },
        attach: function (e, t, r) {
          if (!e.width) throw new Error("The texture attached to color buffer is not a valid.");
          t = t || h, r = r || a.a.TEXTURE_2D;
          var n, i = this._boundRenderer,
            o = i && i.gl;
          if (o) {
            var s = this._cache;
            s.use(i.__uid__), n = s.get("attached_textures")
          }
          var u = this._textures[t];
          if (!u || u.target !== r || u.texture !== e || !n || null == n[t]) {
            var l = !0;
            i && (l = this._doAttach(i, e, t, r), this.viewport || i.setViewport(0, 0, e.width, e.height, 1)), l && (this._textures[t] = this._textures[t] || {}, this._textures[t].texture = e, this._textures[t].target = r)
          }
        },
        _doAttach: function (e, t, r, n) {
          var i = e.gl,
            o = t.getWebGLTexture(e),
            h = this._cache.get("attached_textures");
          if (h && h[r]) {
            var c = h[r];
            if (c.texture === t && c.target === n) return
          }
          r = +r;
          var d = !0;
          if (r === l || r === a.a.DEPTH_STENCIL_ATTACHMENT) {
            if (e.getGLExtension("WEBGL_depth_texture") || (console.error("Depth texture is not supported by the browser"), d = !1), t.format !== a.a.DEPTH_COMPONENT && t.format !== a.a.DEPTH_STENCIL && (console.error("The texture attached to depth buffer is not a valid."), d = !1), d) {
              var f = this._cache.get("renderbuffer");
              f && (i.framebufferRenderbuffer(s, l, u, null), i.deleteRenderbuffer(f), this._cache.put("renderbuffer", !1)), this._cache.put("renderbuffer_attached", !1), this._cache.put("depthtexture_attached", !0)
            }
          }
          return i.framebufferTexture2D(s, r, n, o, 0), h || (h = {}, this._cache.put("attached_textures", h)), h[r] = h[r] || {}, h[r].texture = t, h[r].target = n, d
        },
        _doDetach: function (e, t, r) {
          e.framebufferTexture2D(s, t, r, null, 0);
          var n = this._cache.get("attached_textures");
          n && n[t] && (n[t] = null), t !== l && t !== a.a.DEPTH_STENCIL_ATTACHMENT || this._cache.put("depthtexture_attached", !1)
        },
        detach: function (e, t) {
          if (this._textures[e] = null, this._boundRenderer) {
            this._cache.use(this._boundRenderer.__uid__), this._doDetach(this._boundRenderer.gl, e, t)
          }
        },
        dispose: function (e) {
          var t = e.gl,
            r = this._cache;
          r.use(e.__uid__);
          var n = r.get("renderbuffer");
          n && t.deleteRenderbuffer(n);
          var i = r.get("framebuffer");
          i && t.deleteFramebuffer(i), r.deleteContext(e.__uid__), this._textures = {}
        }
      });
    c.DEPTH_ATTACHMENT = l, c.COLOR_ATTACHMENT0 = h, c.STENCIL_ATTACHMENT = a.a.STENCIL_ATTACHMENT, c.DEPTH_STENCIL_ATTACHMENT = a.a.DEPTH_STENCIL_ATTACHMENT, t.a = c
  }, function (e, t, r) {
    "use strict";
    t.a = {
      DEPTH_BUFFER_BIT: 256,
      STENCIL_BUFFER_BIT: 1024,
      COLOR_BUFFER_BIT: 16384,
      POINTS: 0,
      LINES: 1,
      LINE_LOOP: 2,
      LINE_STRIP: 3,
      TRIANGLES: 4,
      TRIANGLE_STRIP: 5,
      TRIANGLE_FAN: 6,
      ZERO: 0,
      ONE: 1,
      SRC_COLOR: 768,
      ONE_MINUS_SRC_COLOR: 769,
      SRC_ALPHA: 770,
      ONE_MINUS_SRC_ALPHA: 771,
      DST_ALPHA: 772,
      ONE_MINUS_DST_ALPHA: 773,
      DST_COLOR: 774,
      ONE_MINUS_DST_COLOR: 775,
      SRC_ALPHA_SATURATE: 776,
      FUNC_ADD: 32774,
      BLEND_EQUATION: 32777,
      BLEND_EQUATION_RGB: 32777,
      BLEND_EQUATION_ALPHA: 34877,
      FUNC_SUBTRACT: 32778,
      FUNC_REVERSE_SUBTRACT: 32779,
      BLEND_DST_RGB: 32968,
      BLEND_SRC_RGB: 32969,
      BLEND_DST_ALPHA: 32970,
      BLEND_SRC_ALPHA: 32971,
      CONSTANT_COLOR: 32769,
      ONE_MINUS_CONSTANT_COLOR: 32770,
      CONSTANT_ALPHA: 32771,
      ONE_MINUS_CONSTANT_ALPHA: 32772,
      BLEND_COLOR: 32773,
      ARRAY_BUFFER: 34962,
      ELEMENT_ARRAY_BUFFER: 34963,
      ARRAY_BUFFER_BINDING: 34964,
      ELEMENT_ARRAY_BUFFER_BINDING: 34965,
      STREAM_DRAW: 35040,
      STATIC_DRAW: 35044,
      DYNAMIC_DRAW: 35048,
      BUFFER_SIZE: 34660,
      BUFFER_USAGE: 34661,
      CURRENT_VERTEX_ATTRIB: 34342,
      FRONT: 1028,
      BACK: 1029,
      FRONT_AND_BACK: 1032,
      CULL_FACE: 2884,
      BLEND: 3042,
      DITHER: 3024,
      STENCIL_TEST: 2960,
      DEPTH_TEST: 2929,
      SCISSOR_TEST: 3089,
      POLYGON_OFFSET_FILL: 32823,
      SAMPLE_ALPHA_TO_COVERAGE: 32926,
      SAMPLE_COVERAGE: 32928,
      NO_ERROR: 0,
      INVALID_ENUM: 1280,
      INVALID_VALUE: 1281,
      INVALID_OPERATION: 1282,
      OUT_OF_MEMORY: 1285,
      CW: 2304,
      CCW: 2305,
      LINE_WIDTH: 2849,
      ALIASED_POINT_SIZE_RANGE: 33901,
      ALIASED_LINE_WIDTH_RANGE: 33902,
      CULL_FACE_MODE: 2885,
      FRONT_FACE: 2886,
      DEPTH_RANGE: 2928,
      DEPTH_WRITEMASK: 2930,
      DEPTH_CLEAR_VALUE: 2931,
      DEPTH_FUNC: 2932,
      STENCIL_CLEAR_VALUE: 2961,
      STENCIL_FUNC: 2962,
      STENCIL_FAIL: 2964,
      STENCIL_PASS_DEPTH_FAIL: 2965,
      STENCIL_PASS_DEPTH_PASS: 2966,
      STENCIL_REF: 2967,
      STENCIL_VALUE_MASK: 2963,
      STENCIL_WRITEMASK: 2968,
      STENCIL_BACK_FUNC: 34816,
      STENCIL_BACK_FAIL: 34817,
      STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
      STENCIL_BACK_PASS_DEPTH_PASS: 34819,
      STENCIL_BACK_REF: 36003,
      STENCIL_BACK_VALUE_MASK: 36004,
      STENCIL_BACK_WRITEMASK: 36005,
      VIEWPORT: 2978,
      SCISSOR_BOX: 3088,
      COLOR_CLEAR_VALUE: 3106,
      COLOR_WRITEMASK: 3107,
      UNPACK_ALIGNMENT: 3317,
      PACK_ALIGNMENT: 3333,
      MAX_TEXTURE_SIZE: 3379,
      MAX_VIEWPORT_DIMS: 3386,
      SUBPIXEL_BITS: 3408,
      RED_BITS: 3410,
      GREEN_BITS: 3411,
      BLUE_BITS: 3412,
      ALPHA_BITS: 3413,
      DEPTH_BITS: 3414,
      STENCIL_BITS: 3415,
      POLYGON_OFFSET_UNITS: 10752,
      POLYGON_OFFSET_FACTOR: 32824,
      TEXTURE_BINDING_2D: 32873,
      SAMPLE_BUFFERS: 32936,
      SAMPLES: 32937,
      SAMPLE_COVERAGE_VALUE: 32938,
      SAMPLE_COVERAGE_INVERT: 32939,
      COMPRESSED_TEXTURE_FORMATS: 34467,
      DONT_CARE: 4352,
      FASTEST: 4353,
      NICEST: 4354,
      GENERATE_MIPMAP_HINT: 33170,
      BYTE: 5120,
      UNSIGNED_BYTE: 5121,
      SHORT: 5122,
      UNSIGNED_SHORT: 5123,
      INT: 5124,
      UNSIGNED_INT: 5125,
      FLOAT: 5126,
      DEPTH_COMPONENT: 6402,
      ALPHA: 6406,
      RGB: 6407,
      RGBA: 6408,
      LUMINANCE: 6409,
      LUMINANCE_ALPHA: 6410,
      UNSIGNED_SHORT_4_4_4_4: 32819,
      UNSIGNED_SHORT_5_5_5_1: 32820,
      UNSIGNED_SHORT_5_6_5: 33635,
      FRAGMENT_SHADER: 35632,
      VERTEX_SHADER: 35633,
      MAX_VERTEX_ATTRIBS: 34921,
      MAX_VERTEX_UNIFORM_VECTORS: 36347,
      MAX_VARYING_VECTORS: 36348,
      MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
      MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
      MAX_TEXTURE_IMAGE_UNITS: 34930,
      MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
      SHADER_TYPE: 35663,
      DELETE_STATUS: 35712,
      LINK_STATUS: 35714,
      VALIDATE_STATUS: 35715,
      ATTACHED_SHADERS: 35717,
      ACTIVE_UNIFORMS: 35718,
      ACTIVE_ATTRIBUTES: 35721,
      SHADING_LANGUAGE_VERSION: 35724,
      CURRENT_PROGRAM: 35725,
      NEVER: 512,
      LESS: 513,
      EQUAL: 514,
      LEQUAL: 515,
      GREATER: 516,
      NOTEQUAL: 517,
      GEQUAL: 518,
      ALWAYS: 519,
      KEEP: 7680,
      REPLACE: 7681,
      INCR: 7682,
      DECR: 7683,
      INVERT: 5386,
      INCR_WRAP: 34055,
      DECR_WRAP: 34056,
      VENDOR: 7936,
      RENDERER: 7937,
      VERSION: 7938,
      NEAREST: 9728,
      LINEAR: 9729,
      NEAREST_MIPMAP_NEAREST: 9984,
      LINEAR_MIPMAP_NEAREST: 9985,
      NEAREST_MIPMAP_LINEAR: 9986,
      LINEAR_MIPMAP_LINEAR: 9987,
      TEXTURE_MAG_FILTER: 10240,
      TEXTURE_MIN_FILTER: 10241,
      TEXTURE_WRAP_S: 10242,
      TEXTURE_WRAP_T: 10243,
      TEXTURE_2D: 3553,
      TEXTURE: 5890,
      TEXTURE_CUBE_MAP: 34067,
      TEXTURE_BINDING_CUBE_MAP: 34068,
      TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
      TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
      TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
      TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
      TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
      TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
      MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
      TEXTURE0: 33984,
      TEXTURE1: 33985,
      TEXTURE2: 33986,
      TEXTURE3: 33987,
      TEXTURE4: 33988,
      TEXTURE5: 33989,
      TEXTURE6: 33990,
      TEXTURE7: 33991,
      TEXTURE8: 33992,
      TEXTURE9: 33993,
      TEXTURE10: 33994,
      TEXTURE11: 33995,
      TEXTURE12: 33996,
      TEXTURE13: 33997,
      TEXTURE14: 33998,
      TEXTURE15: 33999,
      TEXTURE16: 34e3,
      TEXTURE17: 34001,
      TEXTURE18: 34002,
      TEXTURE19: 34003,
      TEXTURE20: 34004,
      TEXTURE21: 34005,
      TEXTURE22: 34006,
      TEXTURE23: 34007,
      TEXTURE24: 34008,
      TEXTURE25: 34009,
      TEXTURE26: 34010,
      TEXTURE27: 34011,
      TEXTURE28: 34012,
      TEXTURE29: 34013,
      TEXTURE30: 34014,
      TEXTURE31: 34015,
      ACTIVE_TEXTURE: 34016,
      REPEAT: 10497,
      CLAMP_TO_EDGE: 33071,
      MIRRORED_REPEAT: 33648,
      FLOAT_VEC2: 35664,
      FLOAT_VEC3: 35665,
      FLOAT_VEC4: 35666,
      INT_VEC2: 35667,
      INT_VEC3: 35668,
      INT_VEC4: 35669,
      BOOL: 35670,
      BOOL_VEC2: 35671,
      BOOL_VEC3: 35672,
      BOOL_VEC4: 35673,
      FLOAT_MAT2: 35674,
      FLOAT_MAT3: 35675,
      FLOAT_MAT4: 35676,
      SAMPLER_2D: 35678,
      SAMPLER_CUBE: 35680,
      VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
      VERTEX_ATTRIB_ARRAY_SIZE: 34339,
      VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
      VERTEX_ATTRIB_ARRAY_TYPE: 34341,
      VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
      VERTEX_ATTRIB_ARRAY_POINTER: 34373,
      VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
      COMPILE_STATUS: 35713,
      LOW_FLOAT: 36336,
      MEDIUM_FLOAT: 36337,
      HIGH_FLOAT: 36338,
      LOW_INT: 36339,
      MEDIUM_INT: 36340,
      HIGH_INT: 36341,
      FRAMEBUFFER: 36160,
      RENDERBUFFER: 36161,
      RGBA4: 32854,
      RGB5_A1: 32855,
      RGB565: 36194,
      DEPTH_COMPONENT16: 33189,
      STENCIL_INDEX: 6401,
      STENCIL_INDEX8: 36168,
      DEPTH_STENCIL: 34041,
      RENDERBUFFER_WIDTH: 36162,
      RENDERBUFFER_HEIGHT: 36163,
      RENDERBUFFER_INTERNAL_FORMAT: 36164,
      RENDERBUFFER_RED_SIZE: 36176,
      RENDERBUFFER_GREEN_SIZE: 36177,
      RENDERBUFFER_BLUE_SIZE: 36178,
      RENDERBUFFER_ALPHA_SIZE: 36179,
      RENDERBUFFER_DEPTH_SIZE: 36180,
      RENDERBUFFER_STENCIL_SIZE: 36181,
      FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
      FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
      FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
      FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
      COLOR_ATTACHMENT0: 36064,
      DEPTH_ATTACHMENT: 36096,
      STENCIL_ATTACHMENT: 36128,
      DEPTH_STENCIL_ATTACHMENT: 33306,
      NONE: 0,
      FRAMEBUFFER_COMPLETE: 36053,
      FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
      FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
      FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
      FRAMEBUFFER_UNSUPPORTED: 36061,
      FRAMEBUFFER_BINDING: 36006,
      RENDERBUFFER_BINDING: 36007,
      MAX_RENDERBUFFER_SIZE: 34024,
      INVALID_FRAMEBUFFER_OPERATION: 1286,
      UNPACK_FLIP_Y_WEBGL: 37440,
      UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
      CONTEXT_LOST_WEBGL: 37442,
      UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
      BROWSER_DEFAULT_WEBGL: 37444
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(20),
      i = {};
    i.create = function () {
      var e = new n.a(3);
      return e[0] = 0, e[1] = 0, e[2] = 0, e
    }, i.clone = function (e) {
      var t = new n.a(3);
      return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
    }, i.fromValues = function (e, t, r) {
      var i = new n.a(3);
      return i[0] = e, i[1] = t, i[2] = r, i
    }, i.copy = function (e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
    }, i.set = function (e, t, r, n) {
      return e[0] = t, e[1] = r, e[2] = n, e
    }, i.add = function (e, t, r) {
      return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e
    }, i.subtract = function (e, t, r) {
      return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e
    }, i.sub = i.subtract, i.multiply = function (e, t, r) {
      return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e[2] = t[2] * r[2], e
    }, i.mul = i.multiply, i.divide = function (e, t, r) {
      return e[0] = t[0] / r[0], e[1] = t[1] / r[1], e[2] = t[2] / r[2], e
    }, i.div = i.divide, i.min = function (e, t, r) {
      return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e[2] = Math.min(t[2], r[2]), e
    }, i.max = function (e, t, r) {
      return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e[2] = Math.max(t[2], r[2]), e
    }, i.scale = function (e, t, r) {
      return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e
    }, i.scaleAndAdd = function (e, t, r, n) {
      return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e[2] = t[2] + r[2] * n, e
    }, i.distance = function (e, t) {
      var r = t[0] - e[0],
        n = t[1] - e[1],
        i = t[2] - e[2];
      return Math.sqrt(r * r + n * n + i * i)
    }, i.dist = i.distance, i.squaredDistance = function (e, t) {
      var r = t[0] - e[0],
        n = t[1] - e[1],
        i = t[2] - e[2];
      return r * r + n * n + i * i
    }, i.sqrDist = i.squaredDistance, i.length = function (e) {
      var t = e[0],
        r = e[1],
        n = e[2];
      return Math.sqrt(t * t + r * r + n * n)
    }, i.len = i.length, i.squaredLength = function (e) {
      var t = e[0],
        r = e[1],
        n = e[2];
      return t * t + r * r + n * n
    }, i.sqrLen = i.squaredLength, i.negate = function (e, t) {
      return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
    }, i.inverse = function (e, t) {
      return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e
    }, i.normalize = function (e, t) {
      var r = t[0],
        n = t[1],
        i = t[2],
        a = r * r + n * n + i * i;
      return a > 0 && (a = 1 / Math.sqrt(a), e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a), e
    }, i.dot = function (e, t) {
      return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
    }, i.cross = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = r[0],
        s = r[1],
        u = r[2];
      return e[0] = i * u - a * s, e[1] = a * o - n * u, e[2] = n * s - i * o, e
    }, i.lerp = function (e, t, r, n) {
      var i = t[0],
        a = t[1],
        o = t[2];
      return e[0] = i + n * (r[0] - i), e[1] = a + n * (r[1] - a), e[2] = o + n * (r[2] - o), e
    }, i.random = function (e, t) {
      t = t || 1;
      var r = 2 * Object(n.c)() * Math.PI,
        i = 2 * Object(n.c)() - 1,
        a = Math.sqrt(1 - i * i) * t;
      return e[0] = Math.cos(r) * a, e[1] = Math.sin(r) * a, e[2] = i * t, e
    }, i.transformMat4 = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = r[3] * n + r[7] * i + r[11] * a + r[15];
      return o = o || 1, e[0] = (r[0] * n + r[4] * i + r[8] * a + r[12]) / o, e[1] = (r[1] * n + r[5] * i + r[9] * a + r[13]) / o, e[2] = (r[2] * n + r[6] * i + r[10] * a + r[14]) / o, e
    }, i.transformMat3 = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2];
      return e[0] = n * r[0] + i * r[3] + a * r[6], e[1] = n * r[1] + i * r[4] + a * r[7], e[2] = n * r[2] + i * r[5] + a * r[8], e
    }, i.transformQuat = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = r[0],
        s = r[1],
        u = r[2],
        l = r[3],
        h = l * n + s * a - u * i,
        c = l * i + u * n - o * a,
        d = l * a + o * i - s * n,
        f = -o * n - s * i - u * a;
      return e[0] = h * l + f * -o + c * -u - d * -s, e[1] = c * l + f * -s + d * -o - h * -u, e[2] = d * l + f * -u + h * -s - c * -o, e
    }, i.rotateX = function (e, t, r, n) {
      var i = [],
        a = [];
      return i[0] = t[0] - r[0], i[1] = t[1] - r[1], i[2] = t[2] - r[2], a[0] = i[0], a[1] = i[1] * Math.cos(n) - i[2] * Math.sin(n), a[2] = i[1] * Math.sin(n) + i[2] * Math.cos(n), e[0] = a[0] + r[0], e[1] = a[1] + r[1], e[2] = a[2] + r[2], e
    }, i.rotateY = function (e, t, r, n) {
      var i = [],
        a = [];
      return i[0] = t[0] - r[0], i[1] = t[1] - r[1], i[2] = t[2] - r[2], a[0] = i[2] * Math.sin(n) + i[0] * Math.cos(n), a[1] = i[1], a[2] = i[2] * Math.cos(n) - i[0] * Math.sin(n), e[0] = a[0] + r[0], e[1] = a[1] + r[1], e[2] = a[2] + r[2], e
    }, i.rotateZ = function (e, t, r, n) {
      var i = [],
        a = [];
      return i[0] = t[0] - r[0], i[1] = t[1] - r[1], i[2] = t[2] - r[2], a[0] = i[0] * Math.cos(n) - i[1] * Math.sin(n), a[1] = i[0] * Math.sin(n) + i[1] * Math.cos(n), a[2] = i[2], e[0] = a[0] + r[0], e[1] = a[1] + r[1], e[2] = a[2] + r[2], e
    }, i.forEach = function () {
      var e = i.create();
      return function (t, r, n, i, a, o) {
        var s, u;
        for (r || (r = 3), n || (n = 0), u = i ? Math.min(i * r + n, t.length) : t.length, s = n; s < u; s += r) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], a(e, e, o), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2];
        return t
      }
    }(), i.angle = function (e, t) {
      var r = i.fromValues(e[0], e[1], e[2]),
        n = i.fromValues(t[0], t[1], t[2]);
      i.normalize(r, r), i.normalize(n, n);
      var a = i.dot(r, n);
      return a > 1 ? 0 : Math.acos(a)
    }, t.a = i
  }, function (e, t) {
    function r(e, t) {
      "createCanvas" === e && (J = null), K[e] = t
    }

    function n(e) {
      if (null == e || "object" != typeof e) return e;
      var t = e,
        r = k.call(e);
      if ("[object Array]" === r) {
        if (!F(e)) {
          t = [];
          for (var i = 0, a = e.length; i < a; i++) t[i] = n(e[i])
        }
      } else if (V[r]) {
        if (!F(e)) {
          var o = e.constructor;
          if (e.constructor.from) t = o.from(e);
          else {
            t = new o(e.length);
            for (var i = 0, a = e.length; i < a; i++) t[i] = n(e[i])
          }
        }
      } else if (!H[r] && !F(e) && !A(e)) {
        t = {};
        for (var s in e) e.hasOwnProperty(s) && (t[s] = n(e[s]))
      }
      return t
    }

    function i(e, t, r) {
      if (!w(t) || !w(e)) return r ? n(t) : e;
      for (var a in t)
        if (t.hasOwnProperty(a)) {
          var o = e[a],
            s = t[a];
          !w(s) || !w(o) || x(s) || x(o) || A(s) || A(o) || E(s) || E(o) || F(s) || F(o) ? !r && a in e || (e[a] = n(t[a], !0)) : i(o, s, r)
        } return e
    }

    function a(e, t) {
      for (var r = e[0], n = 1, a = e.length; n < a; n++) r = i(r, e[n], t);
      return r
    }

    function o(e, t) {
      for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      return e
    }

    function s(e, t, r) {
      for (var n in t) t.hasOwnProperty(n) && (r ? null != t[n] : null == e[n]) && (e[n] = t[n]);
      return e
    }

    function u() {
      return J || (J = Q().getContext("2d")), J
    }

    function l(e, t) {
      if (e) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
          if (e[r] === t) return r
      }
      return -1
    }

    function h(e, t) {
      function r() {}
      var n = e.prototype;
      r.prototype = t.prototype, e.prototype = new r;
      for (var i in n) e.prototype[i] = n[i];
      e.prototype.constructor = e, e.superClass = t
    }

    function c(e, t, r) {
      e = "prototype" in e ? e.prototype : e, t = "prototype" in t ? t.prototype : t, s(e, t, r)
    }

    function d(e) {
      if (e) return "string" != typeof e && "number" == typeof e.length
    }

    function f(e, t, r) {
      if (e && t)
        if (e.forEach && e.forEach === j) e.forEach(t, r);
        else if (e.length === +e.length)
        for (var n = 0, i = e.length; n < i; n++) t.call(r, e[n], n, e);
      else
        for (var a in e) e.hasOwnProperty(a) && t.call(r, e[a], a, e)
    }

    function p(e, t, r) {
      if (e && t) {
        if (e.map && e.map === Z) return e.map(t, r);
        for (var n = [], i = 0, a = e.length; i < a; i++) n.push(t.call(r, e[i], i, e));
        return n
      }
    }

    function m(e, t, r, n) {
      if (e && t) {
        if (e.reduce && e.reduce === Y) return e.reduce(t, r, n);
        for (var i = 0, a = e.length; i < a; i++) r = t.call(n, r, e[i], i, e);
        return r
      }
    }

    function g(e, t, r) {
      if (e && t) {
        if (e.filter && e.filter === X) return e.filter(t, r);
        for (var n = [], i = 0, a = e.length; i < a; i++) t.call(r, e[i], i, e) && n.push(e[i]);
        return n
      }
    }

    function _(e, t, r) {
      if (e && t)
        for (var n = 0, i = e.length; n < i; n++)
          if (t.call(r, e[n], n, e)) return e[n]
    }

    function v(e, t) {
      var r = q.call(arguments, 2);
      return function () {
        return e.apply(t, r.concat(q.call(arguments)))
      }
    }

    function y(e) {
      var t = q.call(arguments, 1);
      return function () {
        return e.apply(this, t.concat(q.call(arguments)))
      }
    }

    function x(e) {
      return "[object Array]" === k.call(e)
    }

    function T(e) {
      return "function" == typeof e
    }

    function b(e) {
      return "[object String]" === k.call(e)
    }

    function w(e) {
      var t = typeof e;
      return "function" === t || !!e && "object" == t
    }

    function E(e) {
      return !!H[k.call(e)]
    }

    function S(e) {
      return !!V[k.call(e)]
    }

    function A(e) {
      return "object" == typeof e && "number" == typeof e.nodeType && "object" == typeof e.ownerDocument
    }

    function M(e) {
      return e !== e
    }

    function C(e) {
      for (var t = 0, r = arguments.length; t < r; t++)
        if (null != arguments[t]) return arguments[t]
    }

    function L(e, t) {
      return null != e ? e : t
    }

    function D(e, t, r) {
      return null != e ? e : null != t ? t : r
    }

    function N() {
      return Function.call.apply(q, arguments)
    }

    function R(e) {
      if ("number" == typeof e) return [e, e, e, e];
      var t = e.length;
      return 2 === t ? [e[0], e[1], e[0], e[1]] : 3 === t ? [e[0], e[1], e[2], e[1]] : e
    }

    function P(e, t) {
      if (!e) throw new Error(t)
    }

    function I(e) {
      return null == e ? null : "function" == typeof e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }

    function O(e) {
      e[$] = !0
    }

    function F(e) {
      return e[$]
    }

    function B(e) {
      function t(e, t) {
        r ? n.set(e, t) : n.set(t, e)
      }
      var r = x(e),
        n = this;
      e instanceof B ? e.each(t) : e && f(e, t)
    }

    function U(e) {
      return new B(e)
    }

    function z(e, t) {
      for (var r = new e.constructor(e.length + t.length), n = 0; n < e.length; n++) r[n] = e[n];
      var i = e.length;
      for (n = 0; n < t.length; n++) r[n + i] = t[n];
      return r
    }

    function G() {}
    var H = {
        "[object Function]": 1,
        "[object RegExp]": 1,
        "[object Date]": 1,
        "[object Error]": 1,
        "[object CanvasGradient]": 1,
        "[object CanvasPattern]": 1,
        "[object Image]": 1,
        "[object Canvas]": 1
      },
      V = {
        "[object Int8Array]": 1,
        "[object Uint8Array]": 1,
        "[object Uint8ClampedArray]": 1,
        "[object Int16Array]": 1,
        "[object Uint16Array]": 1,
        "[object Int32Array]": 1,
        "[object Uint32Array]": 1,
        "[object Float32Array]": 1,
        "[object Float64Array]": 1
      },
      k = Object.prototype.toString,
      W = Array.prototype,
      j = W.forEach,
      X = W.filter,
      q = W.slice,
      Z = W.map,
      Y = W.reduce,
      K = {},
      Q = function () {
        return K.createCanvas()
      };
    K.createCanvas = function () {
      return document.createElement("canvas")
    };
    var J, $ = "__ec_primitive__";
    B.prototype = {
      constructor: B,
      get: function (e) {
        return this.hasOwnProperty(e) ? this[e] : null
      },
      set: function (e, t) {
        return this[e] = t
      },
      each: function (e, t) {
        void 0 !== t && (e = v(e, t));
        for (var r in this) this.hasOwnProperty(r) && e(this[r], r)
      },
      removeKey: function (e) {
        delete this[e]
      }
    }, t.$override = r, t.clone = n, t.merge = i, t.mergeAll = a, t.extend = o, t.defaults = s, t.createCanvas = Q, t.getContext = u, t.indexOf = l, t.inherits = h, t.mixin = c, t.isArrayLike = d, t.each = f, t.map = p, t.reduce = m, t.filter = g, t.find = _, t.bind = v, t.curry = y, t.isArray = x, t.isFunction = T, t.isString = b, t.isObject = w, t.isBuiltInObject = E, t.isTypedArray = S, t.isDom = A, t.eqNaN = M, t.retrieve = C, t.retrieve2 = L, t.retrieve3 = D, t.slice = N, t.normalizeCssArray = R, t.assert = P, t.trim = I, t.setAsPrimitive = O, t.isPrimitive = F, t.createHashMap = U, t.concatArray = z, t.noop = G
  }, function (e, t, r) {
    "use strict";
    (function (e) {
      var n, i = r(112),
        a = {};
      a.supportWebGL = function () {
        if (null == n) try {
          var e = document.createElement("canvas");
          if (!(e.getContext("webgl") || e.getContext("experimental-webgl"))) throw new Error
        } catch (e) {
          n = !1
        }
        return n
      }, a.Int8Array = "undefined" == typeof Int8Array ? Array : Int8Array, a.Uint8Array = "undefined" == typeof Uint8Array ? Array : Uint8Array, a.Uint16Array = "undefined" == typeof Uint16Array ? Array : Uint16Array, a.Uint32Array = "undefined" == typeof Uint32Array ? Array : Uint32Array, a.Int16Array = "undefined" == typeof Int16Array ? Array : Int16Array, a.Float32Array = "undefined" == typeof Float32Array ? Array : Float32Array, a.Float64Array = "undefined" == typeof Float64Array ? Array : Float64Array;
      var o = {};
      "undefined" != typeof window ? o = window : void 0 !== e && (o = e), a.requestAnimationFrame = o.requestAnimationFrame || o.msRequestAnimationFrame || o.mozRequestAnimationFrame || o.webkitRequestAnimationFrame || function (e) {
        setTimeout(e, 16)
      }, a.createCanvas = function () {
        return document.createElement("canvas")
      }, a.createImage = function () {
        return new o.Image
      }, a.request = {
        get: i.a.get
      }, t.a = a
    }).call(t, r(68))
  }, function (e, t, r) {
    "use strict";
    var n = r(14),
      i = r(12),
      a = r(21),
      o = r(18),
      s = r(118),
      u = i.a.create,
      l = i.a.add,
      h = i.a.set,
      c = s.a.Attribute,
      d = s.a.extend(function () {
        return {
          attributes: {
            position: new c("position", "float", 3, "POSITION"),
            texcoord0: new c("texcoord0", "float", 2, "TEXCOORD_0"),
            texcoord1: new c("texcoord1", "float", 2, "TEXCOORD_1"),
            normal: new c("normal", "float", 3, "NORMAL"),
            tangent: new c("tangent", "float", 4, "TANGENT"),
            color: new c("color", "float", 4, "COLOR"),
            weight: new c("weight", "float", 3, "WEIGHT"),
            joint: new c("joint", "float", 4, "JOINT"),
            barycentric: new c("barycentric", "float", 3, null)
          },
          boundingBox: null
        }
      }, {
        mainAttribute: "position",
        updateBoundingBox: function () {
          var e = this.boundingBox;
          e || (e = this.boundingBox = new o.a);
          var t = this.attributes.position.value;
          if (t && t.length) {
            var r = e.min,
              n = e.max,
              a = r.array,
              s = n.array;
            i.a.set(a, t[0], t[1], t[2]), i.a.set(s, t[0], t[1], t[2]);
            for (var u = 3; u < t.length;) {
              var l = t[u++],
                h = t[u++],
                c = t[u++];
              l < a[0] && (a[0] = l), h < a[1] && (a[1] = h), c < a[2] && (a[2] = c), l > s[0] && (s[0] = l), h > s[1] && (s[1] = h), c > s[2] && (s[2] = c)
            }
            r._dirty = !0, n._dirty = !0
          }
        },
        generateVertexNormals: function () {
          if (this.vertexCount) {
            var e = this.indices,
              t = this.attributes,
              r = t.position.value,
              a = t.normal.value;
            if (a && a.length === r.length)
              for (var o = 0; o < a.length; o++) a[o] = 0;
            else a = t.normal.value = new n.a.Float32Array(r.length);
            for (var s, l, c, d = u(), f = u(), p = u(), m = u(), g = u(), _ = u(), v = e ? e.length : this.vertexCount, y = 0; y < v;) {
              e ? (s = e[y++], l = e[y++], c = e[y++]) : (s = y++, l = y++, c = y++), h(d, r[3 * s], r[3 * s + 1], r[3 * s + 2]), h(f, r[3 * l], r[3 * l + 1], r[3 * l + 2]), h(p, r[3 * c], r[3 * c + 1], r[3 * c + 2]), i.a.sub(m, d, f), i.a.sub(g, f, p), i.a.cross(_, m, g);
              for (var o = 0; o < 3; o++) a[3 * s + o] = a[3 * s + o] + _[o], a[3 * l + o] = a[3 * l + o] + _[o], a[3 * c + o] = a[3 * c + o] + _[o]
            }
            for (var o = 0; o < a.length;) h(_, a[o], a[o + 1], a[o + 2]), i.a.normalize(_, _), a[o++] = _[0], a[o++] = _[1], a[o++] = _[2];
            this.dirty()
          }
        },
        generateFaceNormals: function () {
          if (this.vertexCount) {
            this.isUniqueVertex() || this.generateUniqueVertex();
            var e = this.indices,
              t = this.attributes,
              r = t.position.value,
              n = t.normal.value,
              a = u(),
              o = u(),
              s = u(),
              l = u(),
              c = u(),
              d = u();
            n || (n = t.normal.value = new Float32Array(r.length));
            for (var f, p, m, g = e ? e.length : this.vertexCount, _ = 0; _ < g;) {
              e ? (f = e[_++], p = e[_++], m = e[_++]) : (f = _++, p = _++, m = _++), h(a, r[3 * f], r[3 * f + 1], r[3 * f + 2]), h(o, r[3 * p], r[3 * p + 1], r[3 * p + 2]), h(s, r[3 * m], r[3 * m + 1], r[3 * m + 2]), i.a.sub(l, a, o), i.a.sub(c, o, s), i.a.cross(d, l, c), i.a.normalize(d, d);
              for (var v = 0; v < 3; v++) n[3 * f + v] = d[v], n[3 * p + v] = d[v], n[3 * m + v] = d[v]
            }
            this.dirty()
          }
        },
        generateTangents: function () {
          if (this.vertexCount) {
            var e = this.vertexCount,
              t = this.attributes;
            t.tangent.value || (t.tangent.value = new Float32Array(4 * e));
            var r = t.texcoord0.value,
              n = t.position.value,
              a = t.tangent.value,
              o = t.normal.value;
            if (!r) return void console.warn("Geometry without texcoords can't generate tangents.");
            for (var s = [], h = [], c = 0; c < e; c++) s[c] = [0, 0, 0], h[c] = [0, 0, 0];
            for (var d, f, p, m = [0, 0, 0], g = [0, 0, 0], _ = this.indices, v = _ ? _.length : this.vertexCount, c = 0; c < v;) {
              _ ? (d = _[c++], f = _[c++], p = _[c++]) : (d = c++, f = c++, p = c++);
              var y = r[2 * d],
                x = r[2 * f],
                T = r[2 * p],
                b = r[2 * d + 1],
                w = r[2 * f + 1],
                E = r[2 * p + 1],
                S = n[3 * d],
                A = n[3 * f],
                M = n[3 * p],
                C = n[3 * d + 1],
                L = n[3 * f + 1],
                D = n[3 * p + 1],
                N = n[3 * d + 2],
                R = n[3 * f + 2],
                P = n[3 * p + 2],
                I = A - S,
                O = M - S,
                F = L - C,
                B = D - C,
                U = R - N,
                z = P - N,
                G = x - y,
                H = T - y,
                V = w - b,
                k = E - b,
                W = 1 / (G * k - V * H);
              m[0] = (k * I - V * O) * W, m[1] = (k * F - V * B) * W, m[2] = (k * U - V * z) * W, g[0] = (G * O - H * I) * W, g[1] = (G * B - H * F) * W, g[2] = (G * z - H * U) * W, l(s[d], s[d], m), l(s[f], s[f], m), l(s[p], s[p], m), l(h[d], h[d], g), l(h[f], h[f], g), l(h[p], h[p], g)
            }
            for (var j = u(), X = u(), q = u(), c = 0; c < e; c++) {
              q[0] = o[3 * c], q[1] = o[3 * c + 1], q[2] = o[3 * c + 2];
              var Z = s[c];
              i.a.scale(j, q, i.a.dot(q, Z)), i.a.sub(j, Z, j), i.a.normalize(j, j), i.a.cross(X, q, Z), a[4 * c] = j[0], a[4 * c + 1] = j[1], a[4 * c + 2] = j[2], a[4 * c + 3] = i.a.dot(X, h[c]) < 0 ? -1 : 1
            }
            this.dirty()
          }
        },
        isUniqueVertex: function () {
          return !this.isUseIndices() || this.vertexCount === this.indices.length
        },
        generateUniqueVertex: function () {
          if (this.vertexCount && this.indices) {
            this.indices.length > 65535 && (this.indices = new n.a.Uint32Array(this.indices));
            for (var e = this.attributes, t = this.indices, r = this.getEnabledAttributes(), i = {}, a = 0; a < r.length; a++) {
              var o = r[a];
              i[o] = e[o].value, e[o].init(this.indices.length)
            }
            for (var s = 0, u = 0; u < t.length; u++) {
              for (var l = t[u], a = 0; a < r.length; a++)
                for (var o = r[a], h = e[o].value, c = e[o].size, d = 0; d < c; d++) h[s * c + d] = i[o][l * c + d];
              t[u] = s, s++
            }
            this.dirty()
          }
        },
        generateBarycentric: function () {
          if (this.vertexCount) {
            this.isUniqueVertex() || this.generateUniqueVertex();
            var e = this.attributes,
              t = e.barycentric.value,
              r = this.indices;
            if (!t || t.length !== 3 * r.length) {
              t = e.barycentric.value = new Float32Array(3 * r.length);
              for (var n = 0; n < (r ? r.length : this.vertexCount / 3);)
                for (var i = 0; i < 3; i++) {
                  var a = r ? r[n++] : 3 * n + i;
                  t[3 * a + i] = 1
                }
              this.dirty()
            }
          }
        },
        applyTransform: function (e) {
          var t = this.attributes,
            r = t.position.value,
            n = t.normal.value,
            o = t.tangent.value;
          e = e.array;
          var s = a.a.create();
          a.a.invert(s, e), a.a.transpose(s, s);
          var u = i.a.transformMat4,
            l = i.a.forEach;
          l(r, 3, 0, null, u, e), n && l(n, 3, 0, null, u, s), o && l(o, 4, 0, null, u, s), this.boundingBox && this.updateBoundingBox()
        },
        dispose: function (e) {
          var t = this._cache;
          t.use(e.__uid__);
          var r = t.get("chunks");
          if (r)
            for (var n = 0; n < r.length; n++) {
              for (var i = r[n], a = 0; a < i.attributeBuffers.length; a++) {
                var o = i.attributeBuffers[a];
                e.gl.deleteBuffer(o.buffer)
              }
              i.indicesBuffer && e.gl.deleteBuffer(i.indicesBuffer.buffer)
            }
          if (this.__vaoCache) {
            var s = e.getGLExtension("OES_vertex_array_object");
            for (var u in this.__vaoCache) {
              var l = this.__vaoCache[u].vao;
              l && s.deleteVertexArrayOES(l)
            }
          }
          this.__vaoCache = {}, t.deleteContext(e.__uid__)
        }
      });
    d.STATIC_DRAW = s.a.STATIC_DRAW, d.DYNAMIC_DRAW = s.a.DYNAMIC_DRAW, d.STREAM_DRAW = s.a.STREAM_DRAW, d.AttributeBuffer = s.a.AttributeBuffer, d.IndicesBuffer = s.a.IndicesBuffer, d.Attribute = c, t.a = d
  }, function (e, t, r) {
    "use strict";
    var n = r(7),
      i = r(37),
      a = r(43),
      o = r(8),
      s = r(19),
      u = r(40),
      l = r(11),
      h = r(126);
    o.a.import(h.a);
    var c = new a.a,
      d = new u.a({
        geometry: c,
        frustumCulling: !1
      }),
      f = new i.a,
      p = n.a.extend(function () {
        return {
          fragment: "",
          outputs: null,
          material: null,
          blendWithPrevious: !1,
          clearColor: !1,
          clearDepth: !0
        }
      }, function () {
        var e = new o.a(o.a.source("clay.compositor.vertex"), this.fragment),
          t = new s.a({
            shader: e
          });
        t.enableTexturesAll(), this.material = t
      }, {
        setUniform: function (e, t) {
          this.material.setUniform(e, t)
        },
        getUniform: function (e) {
          var t = this.material.uniforms[e];
          if (t) return t.value
        },
        attachOutput: function (e, t) {
          this.outputs || (this.outputs = {}), t = t || l.a.COLOR_ATTACHMENT0, this.outputs[t] = e
        },
        detachOutput: function (e) {
          for (var t in this.outputs) this.outputs[t] === e && (this.outputs[t] = null)
        },
        bind: function (e, t) {
          if (this.outputs)
            for (var r in this.outputs) {
              var n = this.outputs[r];
              n && t.attach(n, r)
            }
          t && t.bind(e)
        },
        unbind: function (e, t) {
          t.unbind(e)
        },
        render: function (e, t) {
          var r = e.gl;
          if (t) {
            this.bind(e, t);
            var n = e.getGLExtension("EXT_draw_buffers");
            if (n && this.outputs) {
              var i = [];
              for (var a in this.outputs)(a = +a) >= r.COLOR_ATTACHMENT0 && a <= r.COLOR_ATTACHMENT0 + 8 && i.push(a);
              n.drawBuffersEXT(i)
            }
          }
          this.trigger("beforerender", this, e);
          var o = this.clearDepth ? r.DEPTH_BUFFER_BIT : 0;
          if (r.depthMask(!0), this.clearColor) {
            o |= r.COLOR_BUFFER_BIT, r.colorMask(!0, !0, !0, !0);
            var s = this.clearColor;
            Array.isArray(s) && r.clearColor(s[0], s[1], s[2], s[3])
          }
          r.clear(o), this.blendWithPrevious ? (r.enable(r.BLEND), this.material.transparent = !0) : (r.disable(r.BLEND), this.material.transparent = !1), this.renderQuad(e), this.trigger("afterrender", this, e), t && this.unbind(e, t)
        },
        renderQuad: function (e) {
          d.material = this.material, e.renderPass([d], f)
        },
        dispose: function (e) {}
      });
    t.a = p
  }, function (e, t, r) {
    "use strict";
    t.a = function (e, t, r) {
      return {
        seriesType: e,
        reset: function (e, t) {
          function r(e, t) {
            var r = e.getItemModel(t),
              n = r.get(i, !0);
            null != n && e.setItemVisual(t, "opacity", n)
          }
          var n = e.getData(),
            i = e.visualColorAccessPath.split(".");
          i[i.length - 1] = "opacity";
          var a = e.get(i);
          return n.setVisual("opacity", null == a ? 1 : a), {
            dataEach: n.hasItemOption ? r : null
          }
        }
      }
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(3),
      i = r(12),
      a = i.a.set,
      o = i.a.copy,
      s = function (e, t) {
        this.min = e || new n.a(1 / 0, 1 / 0, 1 / 0), this.max = t || new n.a(-1 / 0, -1 / 0, -1 / 0), this.vertices = null
      };
    s.prototype = {
      constructor: s,
      updateFromVertices: function (e) {
        if (e.length > 0) {
          var t = this.min,
            r = this.max,
            n = t.array,
            i = r.array;
          o(n, e[0]), o(i, e[0]);
          for (var a = 1; a < e.length; a++) {
            var s = e[a];
            s[0] < n[0] && (n[0] = s[0]), s[1] < n[1] && (n[1] = s[1]), s[2] < n[2] && (n[2] = s[2]), s[0] > i[0] && (i[0] = s[0]), s[1] > i[1] && (i[1] = s[1]), s[2] > i[2] && (i[2] = s[2])
          }
          t._dirty = !0, r._dirty = !0
        }
      },
      union: function (e) {
        var t = this.min,
          r = this.max;
        return i.a.min(t.array, t.array, e.min.array), i.a.max(r.array, r.array, e.max.array), t._dirty = !0, r._dirty = !0, this
      },
      intersection: function (e) {
        var t = this.min,
          r = this.max;
        return i.a.max(t.array, t.array, e.min.array), i.a.min(r.array, r.array, e.max.array), t._dirty = !0, r._dirty = !0, this
      },
      intersectBoundingBox: function (e) {
        var t = this.min.array,
          r = this.max.array,
          n = e.min.array,
          i = e.max.array;
        return !(t[0] > i[0] || t[1] > i[1] || t[2] > i[2] || r[0] < n[0] || r[1] < n[1] || r[2] < n[2])
      },
      containBoundingBox: function (e) {
        var t = this.min.array,
          r = this.max.array,
          n = e.min.array,
          i = e.max.array;
        return t[0] <= n[0] && t[1] <= n[1] && t[2] <= n[2] && r[0] >= i[0] && r[1] >= i[1] && r[2] >= i[2]
      },
      containPoint: function (e) {
        var t = this.min.array,
          r = this.max.array,
          n = e.array;
        return t[0] <= n[0] && t[1] <= n[1] && t[2] <= n[2] && r[0] >= n[0] && r[1] >= n[1] && r[2] >= n[2]
      },
      isFinite: function () {
        var e = this.min.array,
          t = this.max.array;
        return isFinite(e[0]) && isFinite(e[1]) && isFinite(e[2]) && isFinite(t[0]) && isFinite(t[1]) && isFinite(t[2])
      },
      applyTransform: function (e) {
        this.transformFrom(this, e)
      },
      transformFrom: function () {
        var e = i.a.create(),
          t = i.a.create(),
          r = i.a.create(),
          n = i.a.create(),
          a = i.a.create(),
          o = i.a.create();
        return function (i, s) {
          var u = i.min.array,
            l = i.max.array,
            h = s.array;
          return e[0] = h[0] * u[0], e[1] = h[1] * u[0], e[2] = h[2] * u[0], t[0] = h[0] * l[0], t[1] = h[1] * l[0], t[2] = h[2] * l[0], r[0] = h[4] * u[1], r[1] = h[5] * u[1], r[2] = h[6] * u[1], n[0] = h[4] * l[1], n[1] = h[5] * l[1], n[2] = h[6] * l[1], a[0] = h[8] * u[2], a[1] = h[9] * u[2], a[2] = h[10] * u[2], o[0] = h[8] * l[2], o[1] = h[9] * l[2], o[2] = h[10] * l[2], u = this.min.array, l = this.max.array, u[0] = Math.min(e[0], t[0]) + Math.min(r[0], n[0]) + Math.min(a[0], o[0]) + h[12], u[1] = Math.min(e[1], t[1]) + Math.min(r[1], n[1]) + Math.min(a[1], o[1]) + h[13], u[2] = Math.min(e[2], t[2]) + Math.min(r[2], n[2]) + Math.min(a[2], o[2]) + h[14], l[0] = Math.max(e[0], t[0]) + Math.max(r[0], n[0]) + Math.max(a[0], o[0]) + h[12], l[1] = Math.max(e[1], t[1]) + Math.max(r[1], n[1]) + Math.max(a[1], o[1]) + h[13], l[2] = Math.max(e[2], t[2]) + Math.max(r[2], n[2]) + Math.max(a[2], o[2]) + h[14], this.min._dirty = !0, this.max._dirty = !0, this
        }
      }(),
      applyProjection: function (e) {
        var t = this.min.array,
          r = this.max.array,
          n = e.array,
          i = t[0],
          a = t[1],
          o = t[2],
          s = r[0],
          u = r[1],
          l = t[2],
          h = r[0],
          c = r[1],
          d = r[2];
        if (1 === n[15]) t[0] = n[0] * i + n[12], t[1] = n[5] * a + n[13], r[2] = n[10] * o + n[14], r[0] = n[0] * h + n[12], r[1] = n[5] * c + n[13], t[2] = n[10] * d + n[14];
        else {
          var f = -1 / o;
          t[0] = n[0] * i * f, t[1] = n[5] * a * f, r[2] = (n[10] * o + n[14]) * f, f = -1 / l, r[0] = n[0] * s * f, r[1] = n[5] * u * f, f = -1 / d, t[2] = (n[10] * d + n[14]) * f
        }
        return this.min._dirty = !0, this.max._dirty = !0, this
      },
      updateVertices: function () {
        var e = this.vertices;
        if (!e) {
          e = [];
          for (var t = 0; t < 8; t++) e[t] = i.a.fromValues(0, 0, 0);
          this.vertices = e
        }
        var r = this.min.array,
          n = this.max.array;
        return a(e[0], r[0], r[1], r[2]), a(e[1], r[0], n[1], r[2]), a(e[2], n[0], r[1], r[2]), a(e[3], n[0], n[1], r[2]), a(e[4], r[0], r[1], n[2]), a(e[5], r[0], n[1], n[2]), a(e[6], n[0], r[1], n[2]), a(e[7], n[0], n[1], n[2]), this
      },
      copy: function (e) {
        var t = this.min,
          r = this.max;
        return o(t.array, e.min.array), o(r.array, e.max.array), t._dirty = !0, r._dirty = !0, this
      },
      clone: function () {
        var e = new s;
        return e.copy(this), e
      }
    }, t.a = s
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      var t = Object.keys(e);
      t.sort();
      for (var r = [], n = 0; n < t.length; n++) {
        var i = t[n],
          a = e[i];
        null === a ? r.push(i) : r.push(i + " " + a.toString())
      }
      return r.join("\n")
    }

    function i(e, t, r) {
      r.sort();
      for (var i = [], a = 0; a < r.length; a++) {
        var s = r[a];
        i.push(s)
      }
      var u = n(e) + "\n" + n(t) + "\n" + i.join("\n");
      if (l[u]) return l[u];
      var h = o.a.genGUID();
      return l[u] = h, h
    }
    var a = r(7),
      o = r(23),
      s = r(113),
      u = s.a.parseToFloat,
      l = {},
      h = a.a.extend(function () {
        return {
          name: "",
          depthTest: !0,
          depthMask: !0,
          transparent: !1,
          blend: null,
          autoUpdateTextureStatus: !0,
          uniforms: {},
          vertexDefines: {},
          fragmentDefines: {},
          _textureStatus: {},
          _enabledUniforms: null
        }
      }, function () {
        this.name || (this.name = "MATERIAL_" + this.__uid__), this.shader && this.attachShader(this.shader, !0)
      }, {
        precision: "highp",
        setUniform: function (e, t) {
          void 0 === t && console.warn('Uniform value "' + e + '" is undefined');
          var r = this.uniforms[e];
          r && ("string" == typeof t && (t = u(t) || t), r.value = t, this.autoUpdateTextureStatus && "t" === r.type && (t ? this.enableTexture(e) : this.disableTexture(e)))
        },
        setUniforms: function (e) {
          for (var t in e) {
            var r = e[t];
            this.setUniform(t, r)
          }
        },
        isUniformEnabled: function (e) {
          return this._enabledUniforms.indexOf(e) >= 0
        },
        getEnabledUniforms: function () {
          return this._enabledUniforms
        },
        getTextureUniforms: function () {
          return this._textureUniforms
        },
        set: function (e, t) {
          if ("object" == typeof e)
            for (var r in e) {
              var n = e[r];
              this.setUniform(r, n)
            } else this.setUniform(e, t)
        },
        get: function (e) {
          var t = this.uniforms[e];
          if (t) return t.value
        },
        attachShader: function (e, t) {
          var r = this.uniforms;
          this.uniforms = e.createUniforms(), this.shader = e;
          var n = this.uniforms;
          this._enabledUniforms = Object.keys(n), this._enabledUniforms.sort(), this._textureUniforms = this._enabledUniforms.filter(function (e) {
            var t = this.uniforms[e].type;
            return "t" === t || "tv" === t
          }, this);
          var i = this.vertexDefines,
            a = this.fragmentDefines;
          if (this.vertexDefines = o.a.clone(e.vertexDefines), this.fragmentDefines = o.a.clone(e.fragmentDefines), t) {
            for (var s in r) n[s] && (n[s].value = r[s].value);
            o.a.defaults(this.vertexDefines, i), o.a.defaults(this.fragmentDefines, a)
          }
          var u = {};
          for (var l in e.textures) u[l] = {
            shaderType: e.textures[l].shaderType,
            type: e.textures[l].type,
            enabled: !(!t || !this._textureStatus[l]) && this._textureStatus[l].enabled
          };
          this._textureStatus = u, this._programKey = ""
        },
        clone: function () {
          var e = new this.constructor({
            name: this.name,
            shader: this.shader
          });
          for (var t in this.uniforms) e.uniforms[t].value = this.uniforms[t].value;
          return e.depthTest = this.depthTest, e.depthMask = this.depthMask, e.transparent = this.transparent, e.blend = this.blend, e.vertexDefines = o.a.clone(this.vertexDefines), e.fragmentDefines = o.a.clone(this.fragmentDefines), e.enableTexture(this.getEnabledTextures()), e.precision = this.precision, e
        },
        define: function (e, t, r) {
          var n = this.vertexDefines,
            i = this.fragmentDefines;
          "vertex" !== e && "fragment" !== e && "both" !== e && arguments.length < 3 && (r = t, t = e, e = "both"), r = null != r ? r : null, "vertex" !== e && "both" !== e || n[t] !== r && (n[t] = r, this._programKey = ""), "fragment" !== e && "both" !== e || i[t] !== r && (i[t] = r, "both" !== e && (this._programKey = ""))
        },
        undefine: function (e, t) {
          "vertex" !== e && "fragment" !== e && "both" !== e && arguments.length < 2 && (t = e, e = "both"), "vertex" !== e && "both" !== e || this.isDefined("vertex", t) && (delete this.vertexDefines[t], this._programKey = ""), "fragment" !== e && "both" !== e || this.isDefined("fragment", t) && (delete this.fragmentDefines[t], "both" !== e && (this._programKey = ""))
        },
        isDefined: function (e, t) {
          switch (e) {
            case "vertex":
              return void 0 !== this.vertexDefines[t];
            case "fragment":
              return void 0 !== this.fragmentDefines[t]
          }
        },
        getDefine: function (e, t) {
          switch (e) {
            case "vertex":
              return this.vertexDefines[t];
            case "fragment":
              return this.fragmentDefines[t]
          }
        },
        enableTexture: function (e) {
          if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) this.enableTexture(e[t]);
          else {
            var r = this._textureStatus[e];
            if (r) {
              r.enabled || (r.enabled = !0, this._programKey = "")
            }
          }
        },
        enableTexturesAll: function () {
          var e = this._textureStatus;
          for (var t in e) e[t].enabled = !0;
          this._programKey = ""
        },
        disableTexture: function (e) {
          if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) this.disableTexture(e[t]);
          else {
            var r = this._textureStatus[e];
            if (r) {
              !r.enabled || (r.enabled = !1, this._programKey = "")
            }
          }
        },
        disableTexturesAll: function () {
          var e = this._textureStatus;
          for (var t in e) e[t].enabled = !1;
          this._programKey = ""
        },
        isTextureEnabled: function (e) {
          var t = this._textureStatus;
          return !!t[e] && t[e].enabled
        },
        getEnabledTextures: function () {
          var e = [],
            t = this._textureStatus;
          for (var r in t) t[r].enabled && e.push(r);
          return e
        },
        dirtyDefines: function () {
          this._programKey = ""
        },
        getProgramKey: function () {
          return this._programKey || (this._programKey = i(this.vertexDefines, this.fragmentDefines, this.getEnabledTextures())), this._programKey
        }
      });
    t.a = h
  }, function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return n
    }), r.d(t, "a", function () {
      return i
    }), r.d(t, "c", function () {
      return a
    });
    var n = 1e-6,
      i = Array,
      a = Math.random
  }, function (e, t, r) {
    "use strict";
    var n = r(20),
      i = {};
    i.create = function () {
      var e = new n.a(16);
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, i.clone = function (e) {
      var t = new n.a(16);
      return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }, i.copy = function (e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }, i.identity = function (e) {
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, i.transpose = function (e, t) {
      if (e === t) {
        var r = t[1],
          n = t[2],
          i = t[3],
          a = t[6],
          o = t[7],
          s = t[11];
        e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = r, e[6] = t[9], e[7] = t[13], e[8] = n, e[9] = a, e[11] = t[14], e[12] = i, e[13] = o, e[14] = s
      } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
      return e
    }, i.invert = function (e, t) {
      var r = t[0],
        n = t[1],
        i = t[2],
        a = t[3],
        o = t[4],
        s = t[5],
        u = t[6],
        l = t[7],
        h = t[8],
        c = t[9],
        d = t[10],
        f = t[11],
        p = t[12],
        m = t[13],
        g = t[14],
        _ = t[15],
        v = r * s - n * o,
        y = r * u - i * o,
        x = r * l - a * o,
        T = n * u - i * s,
        b = n * l - a * s,
        w = i * l - a * u,
        E = h * m - c * p,
        S = h * g - d * p,
        A = h * _ - f * p,
        M = c * g - d * m,
        C = c * _ - f * m,
        L = d * _ - f * g,
        D = v * L - y * C + x * M + T * A - b * S + w * E;
      return D ? (D = 1 / D, e[0] = (s * L - u * C + l * M) * D, e[1] = (i * C - n * L - a * M) * D, e[2] = (m * w - g * b + _ * T) * D, e[3] = (d * b - c * w - f * T) * D, e[4] = (u * A - o * L - l * S) * D, e[5] = (r * L - i * A + a * S) * D, e[6] = (g * x - p * w - _ * y) * D, e[7] = (h * w - d * x + f * y) * D, e[8] = (o * C - s * A + l * E) * D, e[9] = (n * A - r * C - a * E) * D, e[10] = (p * b - m * x + _ * v) * D, e[11] = (c * x - h * b - f * v) * D, e[12] = (s * S - o * M - u * E) * D, e[13] = (r * M - n * S + i * E) * D, e[14] = (m * y - p * T - g * v) * D, e[15] = (h * T - c * y + d * v) * D, e) : null
    }, i.adjoint = function (e, t) {
      var r = t[0],
        n = t[1],
        i = t[2],
        a = t[3],
        o = t[4],
        s = t[5],
        u = t[6],
        l = t[7],
        h = t[8],
        c = t[9],
        d = t[10],
        f = t[11],
        p = t[12],
        m = t[13],
        g = t[14],
        _ = t[15];
      return e[0] = s * (d * _ - f * g) - c * (u * _ - l * g) + m * (u * f - l * d), e[1] = -(n * (d * _ - f * g) - c * (i * _ - a * g) + m * (i * f - a * d)), e[2] = n * (u * _ - l * g) - s * (i * _ - a * g) + m * (i * l - a * u), e[3] = -(n * (u * f - l * d) - s * (i * f - a * d) + c * (i * l - a * u)), e[4] = -(o * (d * _ - f * g) - h * (u * _ - l * g) + p * (u * f - l * d)), e[5] = r * (d * _ - f * g) - h * (i * _ - a * g) + p * (i * f - a * d), e[6] = -(r * (u * _ - l * g) - o * (i * _ - a * g) + p * (i * l - a * u)), e[7] = r * (u * f - l * d) - o * (i * f - a * d) + h * (i * l - a * u), e[8] = o * (c * _ - f * m) - h * (s * _ - l * m) + p * (s * f - l * c), e[9] = -(r * (c * _ - f * m) - h * (n * _ - a * m) + p * (n * f - a * c)), e[10] = r * (s * _ - l * m) - o * (n * _ - a * m) + p * (n * l - a * s), e[11] = -(r * (s * f - l * c) - o * (n * f - a * c) + h * (n * l - a * s)), e[12] = -(o * (c * g - d * m) - h * (s * g - u * m) + p * (s * d - u * c)), e[13] = r * (c * g - d * m) - h * (n * g - i * m) + p * (n * d - i * c), e[14] = -(r * (s * g - u * m) - o * (n * g - i * m) + p * (n * u - i * s)), e[15] = r * (s * d - u * c) - o * (n * d - i * c) + h * (n * u - i * s), e
    }, i.determinant = function (e) {
      var t = e[0],
        r = e[1],
        n = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        u = e[7],
        l = e[8],
        h = e[9],
        c = e[10],
        d = e[11],
        f = e[12],
        p = e[13],
        m = e[14],
        g = e[15];
      return (t * o - r * a) * (c * g - d * m) - (t * s - n * a) * (h * g - d * p) + (t * u - i * a) * (h * m - c * p) + (r * s - n * o) * (l * g - d * f) - (r * u - i * o) * (l * m - c * f) + (n * u - i * s) * (l * p - h * f)
    }, i.multiply = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = t[4],
        u = t[5],
        l = t[6],
        h = t[7],
        c = t[8],
        d = t[9],
        f = t[10],
        p = t[11],
        m = t[12],
        g = t[13],
        _ = t[14],
        v = t[15],
        y = r[0],
        x = r[1],
        T = r[2],
        b = r[3];
      return e[0] = y * n + x * s + T * c + b * m, e[1] = y * i + x * u + T * d + b * g, e[2] = y * a + x * l + T * f + b * _, e[3] = y * o + x * h + T * p + b * v, y = r[4], x = r[5], T = r[6], b = r[7], e[4] = y * n + x * s + T * c + b * m, e[5] = y * i + x * u + T * d + b * g, e[6] = y * a + x * l + T * f + b * _, e[7] = y * o + x * h + T * p + b * v, y = r[8], x = r[9], T = r[10], b = r[11], e[8] = y * n + x * s + T * c + b * m, e[9] = y * i + x * u + T * d + b * g, e[10] = y * a + x * l + T * f + b * _, e[11] = y * o + x * h + T * p + b * v, y = r[12], x = r[13], T = r[14], b = r[15], e[12] = y * n + x * s + T * c + b * m, e[13] = y * i + x * u + T * d + b * g, e[14] = y * a + x * l + T * f + b * _, e[15] = y * o + x * h + T * p + b * v, e
    }, i.multiplyAffine = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[4],
        s = t[5],
        u = t[6],
        l = t[8],
        h = t[9],
        c = t[10],
        d = t[12],
        f = t[13],
        p = t[14],
        m = r[0],
        g = r[1],
        _ = r[2];
      return e[0] = m * n + g * o + _ * l, e[1] = m * i + g * s + _ * h, e[2] = m * a + g * u + _ * c, m = r[4], g = r[5], _ = r[6], e[4] = m * n + g * o + _ * l, e[5] = m * i + g * s + _ * h, e[6] = m * a + g * u + _ * c, m = r[8], g = r[9], _ = r[10], e[8] = m * n + g * o + _ * l, e[9] = m * i + g * s + _ * h, e[10] = m * a + g * u + _ * c, m = r[12], g = r[13], _ = r[14], e[12] = m * n + g * o + _ * l + d, e[13] = m * i + g * s + _ * h + f, e[14] = m * a + g * u + _ * c + p, e
    }, i.mul = i.multiply, i.mulAffine = i.multiplyAffine, i.translate = function (e, t, r) {
      var n, i, a, o, s, u, l, h, c, d, f, p, m = r[0],
        g = r[1],
        _ = r[2];
      return t === e ? (e[12] = t[0] * m + t[4] * g + t[8] * _ + t[12], e[13] = t[1] * m + t[5] * g + t[9] * _ + t[13], e[14] = t[2] * m + t[6] * g + t[10] * _ + t[14], e[15] = t[3] * m + t[7] * g + t[11] * _ + t[15]) : (n = t[0], i = t[1], a = t[2], o = t[3], s = t[4], u = t[5], l = t[6], h = t[7], c = t[8], d = t[9], f = t[10], p = t[11], e[0] = n, e[1] = i, e[2] = a, e[3] = o, e[4] = s, e[5] = u, e[6] = l, e[7] = h, e[8] = c, e[9] = d, e[10] = f, e[11] = p, e[12] = n * m + s * g + c * _ + t[12], e[13] = i * m + u * g + d * _ + t[13], e[14] = a * m + l * g + f * _ + t[14], e[15] = o * m + h * g + p * _ + t[15]), e
    }, i.scale = function (e, t, r) {
      var n = r[0],
        i = r[1],
        a = r[2];
      return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * i, e[5] = t[5] * i, e[6] = t[6] * i, e[7] = t[7] * i, e[8] = t[8] * a, e[9] = t[9] * a, e[10] = t[10] * a, e[11] = t[11] * a, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }, i.rotate = function (e, t, r, i) {
      var a, o, s, u, l, h, c, d, f, p, m, g, _, v, y, x, T, b, w, E, S, A, M, C, L = i[0],
        D = i[1],
        N = i[2],
        R = Math.sqrt(L * L + D * D + N * N);
      return Math.abs(R) < n.b ? null : (R = 1 / R, L *= R, D *= R, N *= R, a = Math.sin(r), o = Math.cos(r), s = 1 - o, u = t[0], l = t[1], h = t[2], c = t[3], d = t[4], f = t[5], p = t[6], m = t[7], g = t[8], _ = t[9], v = t[10], y = t[11], x = L * L * s + o, T = D * L * s + N * a, b = N * L * s - D * a, w = L * D * s - N * a, E = D * D * s + o, S = N * D * s + L * a, A = L * N * s + D * a, M = D * N * s - L * a, C = N * N * s + o, e[0] = u * x + d * T + g * b, e[1] = l * x + f * T + _ * b, e[2] = h * x + p * T + v * b, e[3] = c * x + m * T + y * b, e[4] = u * w + d * E + g * S, e[5] = l * w + f * E + _ * S, e[6] = h * w + p * E + v * S, e[7] = c * w + m * E + y * S, e[8] = u * A + d * M + g * C, e[9] = l * A + f * M + _ * C, e[10] = h * A + p * M + v * C, e[11] = c * A + m * M + y * C, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e)
    }, i.rotateX = function (e, t, r) {
      var n = Math.sin(r),
        i = Math.cos(r),
        a = t[4],
        o = t[5],
        s = t[6],
        u = t[7],
        l = t[8],
        h = t[9],
        c = t[10],
        d = t[11];
      return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = a * i + l * n, e[5] = o * i + h * n, e[6] = s * i + c * n, e[7] = u * i + d * n, e[8] = l * i - a * n, e[9] = h * i - o * n, e[10] = c * i - s * n, e[11] = d * i - u * n, e
    }, i.rotateY = function (e, t, r) {
      var n = Math.sin(r),
        i = Math.cos(r),
        a = t[0],
        o = t[1],
        s = t[2],
        u = t[3],
        l = t[8],
        h = t[9],
        c = t[10],
        d = t[11];
      return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * i - l * n, e[1] = o * i - h * n, e[2] = s * i - c * n, e[3] = u * i - d * n, e[8] = a * n + l * i, e[9] = o * n + h * i, e[10] = s * n + c * i, e[11] = u * n + d * i, e
    }, i.rotateZ = function (e, t, r) {
      var n = Math.sin(r),
        i = Math.cos(r),
        a = t[0],
        o = t[1],
        s = t[2],
        u = t[3],
        l = t[4],
        h = t[5],
        c = t[6],
        d = t[7];
      return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * i + l * n, e[1] = o * i + h * n, e[2] = s * i + c * n, e[3] = u * i + d * n, e[4] = l * i - a * n, e[5] = h * i - o * n, e[6] = c * i - s * n, e[7] = d * i - u * n, e
    }, i.fromRotationTranslation = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = n + n,
        u = i + i,
        l = a + a,
        h = n * s,
        c = n * u,
        d = n * l,
        f = i * u,
        p = i * l,
        m = a * l,
        g = o * s,
        _ = o * u,
        v = o * l;
      return e[0] = 1 - (f + m), e[1] = c + v, e[2] = d - _, e[3] = 0, e[4] = c - v, e[5] = 1 - (h + m), e[6] = p + g, e[7] = 0, e[8] = d + _, e[9] = p - g, e[10] = 1 - (h + f), e[11] = 0, e[12] = r[0], e[13] = r[1], e[14] = r[2], e[15] = 1, e
    }, i.fromQuat = function (e, t) {
      var r = t[0],
        n = t[1],
        i = t[2],
        a = t[3],
        o = r + r,
        s = n + n,
        u = i + i,
        l = r * o,
        h = n * o,
        c = n * s,
        d = i * o,
        f = i * s,
        p = i * u,
        m = a * o,
        g = a * s,
        _ = a * u;
      return e[0] = 1 - c - p, e[1] = h + _, e[2] = d - g, e[3] = 0, e[4] = h - _, e[5] = 1 - l - p, e[6] = f + m, e[7] = 0, e[8] = d + g, e[9] = f - m, e[10] = 1 - l - c, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, i.frustum = function (e, t, r, n, i, a, o) {
      var s = 1 / (r - t),
        u = 1 / (i - n),
        l = 1 / (a - o);
      return e[0] = 2 * a * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 2 * a * u, e[6] = 0, e[7] = 0, e[8] = (r + t) * s, e[9] = (i + n) * u, e[10] = (o + a) * l, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = o * a * 2 * l, e[15] = 0, e
    }, i.perspective = function (e, t, r, n, i) {
      var a = 1 / Math.tan(t / 2),
        o = 1 / (n - i);
      return e[0] = a / r, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = (i + n) * o, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = 2 * i * n * o, e[15] = 0, e
    }, i.ortho = function (e, t, r, n, i, a, o) {
      var s = 1 / (t - r),
        u = 1 / (n - i),
        l = 1 / (a - o);
      return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * u, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * l, e[11] = 0, e[12] = (t + r) * s, e[13] = (i + n) * u, e[14] = (o + a) * l, e[15] = 1, e
    }, i.lookAt = function (e, t, r, a) {
      var o, s, u, l, h, c, d, f, p, m, g = t[0],
        _ = t[1],
        v = t[2],
        y = a[0],
        x = a[1],
        T = a[2],
        b = r[0],
        w = r[1],
        E = r[2];
      return Math.abs(g - b) < n.b && Math.abs(_ - w) < n.b && Math.abs(v - E) < n.b ? i.identity(e) : (d = g - b, f = _ - w, p = v - E, m = 1 / Math.sqrt(d * d + f * f + p * p), d *= m, f *= m, p *= m, o = x * p - T * f, s = T * d - y * p, u = y * f - x * d, m = Math.sqrt(o * o + s * s + u * u), m ? (m = 1 / m, o *= m, s *= m, u *= m) : (o = 0, s = 0, u = 0), l = f * u - p * s, h = p * o - d * u, c = d * s - f * o, m = Math.sqrt(l * l + h * h + c * c), m ? (m = 1 / m, l *= m, h *= m, c *= m) : (l = 0, h = 0, c = 0), e[0] = o, e[1] = l, e[2] = d, e[3] = 0, e[4] = s, e[5] = h, e[6] = f, e[7] = 0, e[8] = u, e[9] = c, e[10] = p, e[11] = 0, e[12] = -(o * g + s * _ + u * v), e[13] = -(l * g + h * _ + c * v), e[14] = -(d * g + f * _ + p * v), e[15] = 1, e)
    }, i.frob = function (e) {
      return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + Math.pow(e[6], 2) + Math.pow(e[7], 2) + Math.pow(e[8], 2) + Math.pow(e[9], 2) + Math.pow(e[10], 2) + Math.pow(e[11], 2) + Math.pow(e[12], 2) + Math.pow(e[13], 2) + Math.pow(e[14], 2) + Math.pow(e[15], 2))
    }, t.a = i
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      e = e || "perspective", this.layer = null, this.scene = new o.a, this.rootNode = this.scene, this.viewport = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, this.setProjection(e), this._compositor = new p.a, this._temporalSS = new m.a, this._shadowMapPass = new s.a;
      for (var t = [], r = 0, n = 0; n < 30; n++) {
        for (var i = [], a = 0; a < 6; a++) i.push(4 * Object(g.a)(r, 2) - 2), i.push(4 * Object(g.a)(r, 3) - 2), r++;
        t.push(i)
      }
      this._pcfKernels = t, this.scene.on("beforerender", function (e, t, r) {
        this.needsTemporalSS() && this._temporalSS.jitterProjection(e, r)
      }, this)
    }
    var i = r(0),
      a = r.n(i),
      o = r(36),
      s = r(174),
      u = r(41),
      l = r(37),
      h = r(9),
      c = r(3),
      d = r(26),
      f = r(53),
      p = r(176),
      m = r(200),
      g = r(49);
    n.prototype.setProjection = function (e) {
      var t = this.camera;
      t && t.update(), "perspective" === e ? this.camera instanceof u.a || (this.camera = new u.a, t && this.camera.setLocalTransform(t.localTransform)) : this.camera instanceof l.a || (this.camera = new l.a, t && this.camera.setLocalTransform(t.localTransform)), this.camera.near = .1, this.camera.far = 2e3
    }, n.prototype.setViewport = function (e, t, r, n, i) {
      this.camera instanceof u.a && (this.camera.aspect = r / n), i = i || 1, this.viewport.x = e, this.viewport.y = t, this.viewport.width = r, this.viewport.height = n, this.viewport.devicePixelRatio = i, this._compositor.resize(r * i, n * i), this._temporalSS.resize(r * i, n * i)
    }, n.prototype.containPoint = function (e, t) {
      var r = this.viewport;
      return t = this.layer.renderer.getHeight() - t, e >= r.x && t >= r.y && e <= r.x + r.width && t <= r.y + r.height
    };
    var _ = new d.a;
    n.prototype.castRay = function (e, t, r) {
      var n = this.layer.renderer,
        i = n.viewport;
      return n.viewport = this.viewport, n.screenToNDC(e, t, _), this.camera.castRay(_, r), n.viewport = i, r
    }, n.prototype.prepareRender = function () {
      this.scene.update(), this.camera.update(), this.scene.updateLights();
      var e = this.scene.updateRenderList(this.camera);
      this._needsSortProgressively = !1;
      for (var t = 0; t < e.transparent.length; t++) {
        var r = e.transparent[t],
          n = r.geometry;
        n.needsSortVerticesProgressively && n.needsSortVerticesProgressively() && (this._needsSortProgressively = !0), n.needsSortTrianglesProgressively && n.needsSortTrianglesProgressively() && (this._needsSortProgressively = !0)
      }
      this._frame = 0, this._temporalSS.resetFrame()
    }, n.prototype.render = function (e, t) {
      this._doRender(e, t, this._frame), this._frame++
    }, n.prototype.needsAccumulate = function () {
      return this.needsTemporalSS() || this._needsSortProgressively
    }, n.prototype.needsTemporalSS = function () {
      var e = this._enableTemporalSS;
      return "auto" === e && (e = this._enablePostEffect), e
    }, n.prototype.hasDOF = function () {
      return this._enableDOF
    }, n.prototype.isAccumulateFinished = function () {
      return this.needsTemporalSS() ? this._temporalSS.isFinished() : this._frame > 30
    }, n.prototype._doRender = function (e, t, r) {
      var n = this.scene,
        i = this.camera;
      r = r || 0, this._updateTransparent(e, n, i, r), t || (this._shadowMapPass.kernelPCF = this._pcfKernels[0], this._shadowMapPass.render(e, n, i, !0)), this._updateShadowPCFKernel(r);
      var a = e.clearColor;
      if (e.gl.clearColor(a[0], a[1], a[2], a[3]), this._enablePostEffect && (this.needsTemporalSS() && this._temporalSS.jitterProjection(e, i), this._compositor.updateNormal(e, n, i, this._temporalSS.getFrame())), this._updateSSAO(e, n, i, this._temporalSS.getFrame()), this._enablePostEffect) {
        var o = this._compositor.getSourceFrameBuffer();
        o.bind(e), e.gl.clear(e.gl.DEPTH_BUFFER_BIT | e.gl.COLOR_BUFFER_BIT), e.render(n, i, !0, !0), o.unbind(e), this.needsTemporalSS() && t ? (this._compositor.composite(e, n, i, this._temporalSS.getSourceFrameBuffer(), this._temporalSS.getFrame()), e.setViewport(this.viewport), this._temporalSS.render(e)) : (e.setViewport(this.viewport), this._compositor.composite(e, n, i, null, 0))
      } else if (this.needsTemporalSS() && t) {
        var o = this._temporalSS.getSourceFrameBuffer();
        o.bind(e), e.saveClear(), e.clearBit = e.gl.DEPTH_BUFFER_BIT | e.gl.COLOR_BUFFER_BIT, e.render(n, i, !0, !0), e.restoreClear(), o.unbind(e), e.setViewport(this.viewport), this._temporalSS.render(e)
      } else e.setViewport(this.viewport), e.render(n, i, !0, !0)
    }, n.prototype._updateTransparent = function (e, t, r, n) {
      for (var i = new c.a, a = new h.a, o = r.getWorldPosition(), s = t.getRenderList(r).transparent, u = 0; u < s.length; u++) {
        var l = s[u],
          d = l.geometry;
        h.a.invert(a, l.worldTransform), c.a.transformMat4(i, o, a), d.needsSortTriangles && d.needsSortTriangles() && d.doSortTriangles(i, n), d.needsSortVertices && d.needsSortVertices() && d.doSortVertices(i, n)
      }
    }, n.prototype._updateSSAO = function (e, t, r) {
      var n = this._enableSSAO && this._enablePostEffect;
      n && this._compositor.updateSSAO(e, t, r, this._temporalSS.getFrame());
      for (var i = t.getRenderList(r), a = 0; a < i.opaque.length; a++) {
        var o = i.opaque[a];
        o.renderNormal && o.material[n ? "enableTexture" : "disableTexture"]("ssaoMap"), n && o.material.set("ssaoMap", this._compositor.getSSAOTexture())
      }
    }, n.prototype._updateShadowPCFKernel = function (e) {
      for (var t = this._pcfKernels[e % this._pcfKernels.length], r = this.scene.getRenderList(this.camera), n = r.opaque, i = 0; i < n.length; i++) n[i].receiveShadow && (n[i].material.set("pcfKernel", t), n[i].material.define("fragment", "PCF_KERNEL_SIZE", t.length / 2))
    }, n.prototype.dispose = function (e) {
      this._compositor.dispose(e.gl), this._temporalSS.dispose(e.gl), this._shadowMapPass.dispose(e)
    }, n.prototype.setPostEffect = function (e, t) {
      var r = this._compositor;
      this._enablePostEffect = e.get("enable");
      var n = e.getModel("bloom"),
        i = e.getModel("edge"),
        a = e.getModel("DOF", e.getModel("depthOfField")),
        o = e.getModel("SSAO", e.getModel("screenSpaceAmbientOcclusion")),
        s = e.getModel("SSR", e.getModel("screenSpaceReflection")),
        u = e.getModel("FXAA"),
        l = e.getModel("colorCorrection");
      n.get("enable") ? r.enableBloom() : r.disableBloom(), a.get("enable") ? r.enableDOF() : r.disableDOF(), s.get("enable") ? r.enableSSR() : r.disableSSR(), l.get("enable") ? r.enableColorCorrection() : r.disableColorCorrection(), i.get("enable") ? r.enableEdge() : r.disableEdge(), u.get("enable") ? r.enableFXAA() : r.disableFXAA(), this._enableDOF = a.get("enable"), this._enableSSAO = o.get("enable"), this._enableSSAO ? r.enableSSAO() : r.disableSSAO(), r.setBloomIntensity(n.get("intensity")), r.setEdgeColor(i.get("color")), r.setColorLookupTexture(l.get("lookupTexture"), t), r.setExposure(l.get("exposure")), ["radius", "quality", "intensity"].forEach(function (e) {
        r.setSSAOParameter(e, o.get(e))
      }), ["quality", "maxRoughness", "physical"].forEach(function (e) {
        r.setSSRParameter(e, s.get(e))
      }), ["quality", "focalDistance", "focalRange", "blurRadius", "fstop"].forEach(function (e) {
        r.setDOFParameter(e, a.get(e))
      }), ["brightness", "contrast", "saturation"].forEach(function (e) {
        r.setColorCorrection(e, l.get(e))
      })
    }, n.prototype.setDOFFocusOnPoint = function (e) {
      if (this._enablePostEffect) {
        if (e > this.camera.far || e < this.camera.near) return;
        return this._compositor.setDOFParameter("focalDistance", e), !0
      }
    }, n.prototype.setTemporalSuperSampling = function (e) {
      this._enableTemporalSS = e.get("enable")
    }, n.prototype.isLinearSpace = function () {
      return this._enablePostEffect
    }, n.prototype.setRootNode = function (e) {
      if (this.rootNode !== e) {
        for (var t = this.rootNode.children(), r = 0; r < t.length; r++) e.add(t[r]);
        e !== this.scene && this.scene.add(e), this.rootNode = e
      }
    }, n.prototype.add = function (e) {
      this.rootNode.add(e)
    }, n.prototype.remove = function (e) {
      this.rootNode.remove(e)
    }, n.prototype.removeAll = function (e) {
      this.rootNode.removeAll(e)
    }, a.a.util.extend(n.prototype, f.a), t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = 0,
      i = Array.prototype,
      a = i.forEach,
      o = {
        genGUID: function () {
          return ++n
        },
        relative2absolute: function (e, t) {
          if (!t || e.match(/^\//)) return e;
          for (var r = e.split("/"), n = t.split("/"), i = r[0];
            "." === i || ".." === i;) ".." === i && n.pop(), r.shift(), i = r[0];
          return n.join("/") + "/" + r.join("/")
        },
        extend: function (e, t) {
          if (t)
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          return e
        },
        defaults: function (e, t) {
          if (t)
            for (var r in t) void 0 === e[r] && (e[r] = t[r]);
          return e
        },
        extendWithPropList: function (e, t, r) {
          if (t)
            for (var n = 0; n < r.length; n++) {
              var i = r[n];
              e[i] = t[i]
            }
          return e
        },
        defaultsWithPropList: function (e, t, r) {
          if (t)
            for (var n = 0; n < r.length; n++) {
              var i = r[n];
              null == e[i] && (e[i] = t[i])
            }
          return e
        },
        each: function (e, t, r) {
          if (e && t)
            if (e.forEach && e.forEach === a) e.forEach(t, r);
            else if (e.length === +e.length)
            for (var n = 0, i = e.length; n < i; n++) t.call(r, e[n], n, e);
          else
            for (var o in e) e.hasOwnProperty(o) && t.call(r, e[o], o, e)
        },
        isObject: function (e) {
          return e === Object(e)
        },
        isArray: function (e) {
          return Array.isArray(e)
        },
        isArrayLike: function (e) {
          return !!e && e.length === +e.length
        },
        clone: function (e) {
          if (o.isObject(e)) {
            if (o.isArray(e)) return e.slice();
            if (o.isArrayLike(e)) {
              for (var t = new e.constructor(e.length), r = 0; r < e.length; r++) t[r] = e[r];
              return t
            }
            return o.extend({}, e)
          }
          return e
        }
      };
    t.a = o
  }, function (e, t, r) {
    "use strict";
    var n = r(35),
      i = r(8),
      a = r(119);
    i.a.import(a.a);
    var o = n.a.extend(function () {
      return {
        color: [1, 1, 1],
        intensity: 1,
        castShadow: !0,
        shadowResolution: 512,
        group: 0
      }
    }, {
      type: "",
      clone: function () {
        var e = n.a.prototype.clone.call(this);
        return e.color = Array.prototype.slice.call(this.color), e.intensity = this.intensity, e.castShadow = this.castShadow, e.shadowResolution = this.shadowResolution, e
      }
    });
    t.a = o
  }, function (e, t, r) {
    "use strict";
    var n = r(15),
      i = r(0),
      a = r.n(i),
      o = r(38),
      s = r(6),
      u = s.a.vec3,
      l = [
        [0, 0],
        [1, 1]
      ],
      h = n.a.extend(function () {
        return {
          segmentScale: 1,
          dynamic: !0,
          useNativeLine: !0,
          attributes: {
            position: new n.a.Attribute("position", "float", 3, "POSITION"),
            positionPrev: new n.a.Attribute("positionPrev", "float", 3),
            positionNext: new n.a.Attribute("positionNext", "float", 3),
            prevPositionPrev: new n.a.Attribute("prevPositionPrev", "float", 3),
            prevPosition: new n.a.Attribute("prevPosition", "float", 3),
            prevPositionNext: new n.a.Attribute("prevPositionNext", "float", 3),
            offset: new n.a.Attribute("offset", "float", 1),
            color: new n.a.Attribute("color", "float", 4, "COLOR")
          }
        }
      }, {
        resetOffset: function () {
          this._vertexOffset = 0, this._triangleOffset = 0, this._itemVertexOffsets = []
        },
        setVertexCount: function (e) {
          var t = this.attributes;
          this.vertexCount !== e && (t.position.init(e), t.color.init(e), this.useNativeLine || (t.positionPrev.init(e), t.positionNext.init(e), t.offset.init(e)), e > 65535 ? this.indices instanceof Uint16Array && (this.indices = new Uint32Array(this.indices)) : this.indices instanceof Uint32Array && (this.indices = new Uint16Array(this.indices)))
        },
        setTriangleCount: function (e) {
          this.triangleCount !== e && (this.indices = 0 === e ? null : this.vertexCount > 65535 ? new Uint32Array(3 * e) : new Uint16Array(3 * e))
        },
        _getCubicCurveApproxStep: function (e, t, r, n) {
          return 1 / (u.dist(e, t) + u.dist(r, t) + u.dist(n, r) + 1) * this.segmentScale
        },
        getCubicCurveVertexCount: function (e, t, r, n) {
          var i = this._getCubicCurveApproxStep(e, t, r, n),
            a = Math.ceil(1 / i);
          return this.useNativeLine ? 2 * a : 2 * a + 2
        },
        getCubicCurveTriangleCount: function (e, t, r, n) {
          var i = this._getCubicCurveApproxStep(e, t, r, n),
            a = Math.ceil(1 / i);
          return this.useNativeLine ? 0 : 2 * a
        },
        getLineVertexCount: function () {
          return this.getPolylineVertexCount(l)
        },
        getLineTriangleCount: function () {
          return this.getPolylineTriangleCount(l)
        },
        getPolylineVertexCount: function (e) {
          var t;
          if ("number" == typeof e) t = e;
          else {
            t = "number" != typeof e[0] ? e.length : e.length / 3
          }
          return this.useNativeLine ? 2 * (t - 1) : 2 * (t - 1) + 2
        },
        getPolylineTriangleCount: function (e) {
          var t;
          if ("number" == typeof e) t = e;
          else {
            t = "number" != typeof e[0] ? e.length : e.length / 3
          }
          return this.useNativeLine ? 0 : 2 * Math.max(t - 1, 0)
        },
        addCubicCurve: function (e, t, r, n, i, a) {
          null == a && (a = 1);
          for (var o = e[0], s = e[1], u = e[2], l = t[0], h = t[1], c = t[2], d = r[0], f = r[1], p = r[2], m = n[0], g = n[1], _ = n[2], v = this._getCubicCurveApproxStep(e, t, r, n), y = v * v, x = y * v, T = 3 * v, b = 3 * y, w = 6 * y, E = 6 * x, S = o - 2 * l + d, A = s - 2 * h + f, M = u - 2 * c + p, C = 3 * (l - d) - o + m, L = 3 * (h - f) - s + g, D = 3 * (c - p) - u + _, N = o, R = s, P = u, I = (l - o) * T + S * b + C * x, O = (h - s) * T + A * b + L * x, F = (c - u) * T + M * b + D * x, B = S * w + C * E, U = A * w + L * E, z = M * w + D * E, G = C * E, H = L * E, V = D * E, k = 0, W = 0, j = Math.ceil(1 / v), X = new Float32Array(3 * (j + 1)), X = [], q = 0, W = 0; W < j + 1; W++) X[q++] = N, X[q++] = R, X[q++] = P, N += I, R += O, P += F, I += B, O += U, F += z, B += G, U += H, z += V, (k += v) > 1 && (N = I > 0 ? Math.min(N, m) : Math.max(N, m), R = O > 0 ? Math.min(R, g) : Math.max(R, g), P = F > 0 ? Math.min(P, _) : Math.max(P, _));
          return this.addPolyline(X, i, a)
        },
        addLine: function (e, t, r, n) {
          return this.addPolyline([e, t], r, n)
        },
        addPolyline: function (e, t, r, n, i) {
          if (e.length) {
            var a = "number" != typeof e[0];
            if (null == i && (i = a ? e.length : e.length / 3), !(i < 2)) {
              null == n && (n = 0), null == r && (r = 1), this._itemVertexOffsets.push(this._vertexOffset);
              var o, s, a = "number" != typeof e[0],
                u = a ? "number" != typeof t[0] : t.length / 4 === i,
                l = this.attributes.position,
                h = this.attributes.positionPrev,
                c = this.attributes.positionNext,
                d = this.attributes.color,
                f = this.attributes.offset,
                p = this.indices,
                m = this._vertexOffset;
              r = Math.max(r, .01);
              for (var g = n; g < i; g++) {
                if (a) o = e[g], s = u ? t[g] : t;
                else {
                  var _ = 3 * g;
                  if (o = o || [], o[0] = e[_], o[1] = e[_ + 1], o[2] = e[_ + 2], u) {
                    var v = 4 * g;
                    s = s || [], s[0] = t[v], s[1] = t[v + 1], s[2] = t[v + 2], s[3] = t[v + 3]
                  } else s = t
                }
                if (this.useNativeLine ? g > 1 && (l.copy(m, m - 1), d.copy(m, m - 1), m++) : (g < i - 1 && (h.set(m + 2, o), h.set(m + 3, o)), g > 0 && (c.set(m - 2, o), c.set(m - 1, o)), l.set(m, o), l.set(m + 1, o), d.set(m, s), d.set(m + 1, s), f.set(m, r / 2), f.set(m + 1, -r / 2), m += 2), this.useNativeLine) d.set(m, s), l.set(m, o), m++;
                else if (g > 0) {
                  var y = 3 * this._triangleOffset,
                    p = this.indices;
                  p[y] = m - 4, p[y + 1] = m - 3, p[y + 2] = m - 2, p[y + 3] = m - 3, p[y + 4] = m - 1, p[y + 5] = m - 2, this._triangleOffset += 2
                }
              }
              if (!this.useNativeLine) {
                var x = this._vertexOffset,
                  T = this._vertexOffset + 2 * i;
                h.copy(x, x + 2), h.copy(x + 1, x + 3), c.copy(T - 1, T - 3), c.copy(T - 2, T - 4)
              }
              return this._vertexOffset = m, this._vertexOffset
            }
          }
        },
        setItemColor: function (e, t) {
          for (var r = this._itemVertexOffsets[e], n = e < this._itemVertexOffsets.length - 1 ? this._itemVertexOffsets[e + 1] : this._vertexOffset, i = r; i < n; i++) this.attributes.color.set(i, t);
          this.dirty("color")
        },
        currentTriangleOffset: function () {
          return this._triangleOffset
        },
        currentVertexOffset: function () {
          return this._vertexOffset
        }
      });
    a.a.util.defaults(h.prototype, o.a), t.a = h
  }, function (e, t, r) {
    "use strict";
    var n = r(70),
      i = function (e, t) {
        e = e || 0, t = t || 0, this.array = n.a.fromValues(e, t), this._dirty = !0
      };
    if (i.prototype = {
        constructor: i,
        add: function (e) {
          return n.a.add(this.array, this.array, e.array), this._dirty = !0, this
        },
        set: function (e, t) {
          return this.array[0] = e, this.array[1] = t, this._dirty = !0, this
        },
        setArray: function (e) {
          return this.array[0] = e[0], this.array[1] = e[1], this._dirty = !0, this
        },
        clone: function () {
          return new i(this.x, this.y)
        },
        copy: function (e) {
          return n.a.copy(this.array, e.array), this._dirty = !0, this
        },
        cross: function (e, t) {
          return n.a.cross(e.array, this.array, t.array), e._dirty = !0, this
        },
        dist: function (e) {
          return n.a.dist(this.array, e.array)
        },
        distance: function (e) {
          return n.a.distance(this.array, e.array)
        },
        div: function (e) {
          return n.a.div(this.array, this.array, e.array), this._dirty = !0, this
        },
        divide: function (e) {
          return n.a.divide(this.array, this.array, e.array), this._dirty = !0, this
        },
        dot: function (e) {
          return n.a.dot(this.array, e.array)
        },
        len: function () {
          return n.a.len(this.array)
        },
        length: function () {
          return n.a.length(this.array)
        },
        lerp: function (e, t, r) {
          return n.a.lerp(this.array, e.array, t.array, r), this._dirty = !0, this
        },
        min: function (e) {
          return n.a.min(this.array, this.array, e.array), this._dirty = !0, this
        },
        max: function (e) {
          return n.a.max(this.array, this.array, e.array), this._dirty = !0, this
        },
        mul: function (e) {
          return n.a.mul(this.array, this.array, e.array), this._dirty = !0, this
        },
        multiply: function (e) {
          return n.a.multiply(this.array, this.array, e.array), this._dirty = !0, this
        },
        negate: function () {
          return n.a.negate(this.array, this.array), this._dirty = !0, this
        },
        normalize: function () {
          return n.a.normalize(this.array, this.array), this._dirty = !0, this
        },
        random: function (e) {
          return n.a.random(this.array, e), this._dirty = !0, this
        },
        scale: function (e) {
          return n.a.scale(this.array, this.array, e), this._dirty = !0, this
        },
        scaleAndAdd: function (e, t) {
          return n.a.scaleAndAdd(this.array, this.array, e.array, t), this._dirty = !0, this
        },
        sqrDist: function (e) {
          return n.a.sqrDist(this.array, e.array)
        },
        squaredDistance: function (e) {
          return n.a.squaredDistance(this.array, e.array)
        },
        sqrLen: function () {
          return n.a.sqrLen(this.array)
        },
        squaredLength: function () {
          return n.a.squaredLength(this.array)
        },
        sub: function (e) {
          return n.a.sub(this.array, this.array, e.array), this._dirty = !0, this
        },
        subtract: function (e) {
          return n.a.subtract(this.array, this.array, e.array), this._dirty = !0, this
        },
        transformMat2: function (e) {
          return n.a.transformMat2(this.array, this.array, e.array), this._dirty = !0, this
        },
        transformMat2d: function (e) {
          return n.a.transformMat2d(this.array, this.array, e.array), this._dirty = !0, this
        },
        transformMat3: function (e) {
          return n.a.transformMat3(this.array, this.array, e.array), this._dirty = !0, this
        },
        transformMat4: function (e) {
          return n.a.transformMat4(this.array, this.array, e.array), this._dirty = !0, this
        },
        toString: function () {
          return "[" + Array.prototype.join.call(this.array, ",") + "]"
        },
        toArray: function () {
          return Array.prototype.slice.call(this.array)
        }
      }, Object.defineProperty) {
      var a = i.prototype;
      Object.defineProperty(a, "x", {
        get: function () {
          return this.array[0]
        },
        set: function (e) {
          this.array[0] = e, this._dirty = !0
        }
      }), Object.defineProperty(a, "y", {
        get: function () {
          return this.array[1]
        },
        set: function (e) {
          this.array[1] = e, this._dirty = !0
        }
      })
    }
    i.add = function (e, t, r) {
      return n.a.add(e.array, t.array, r.array), e._dirty = !0, e
    }, i.set = function (e, t, r) {
      return n.a.set(e.array, t, r), e._dirty = !0, e
    }, i.copy = function (e, t) {
      return n.a.copy(e.array, t.array), e._dirty = !0, e
    }, i.cross = function (e, t, r) {
      return n.a.cross(e.array, t.array, r.array), e._dirty = !0, e
    }, i.dist = function (e, t) {
      return n.a.distance(e.array, t.array)
    }, i.distance = i.dist, i.div = function (e, t, r) {
      return n.a.divide(e.array, t.array, r.array), e._dirty = !0, e
    }, i.divide = i.div, i.dot = function (e, t) {
      return n.a.dot(e.array, t.array)
    }, i.len = function (e) {
      return n.a.length(e.array)
    }, i.lerp = function (e, t, r, i) {
      return n.a.lerp(e.array, t.array, r.array, i), e._dirty = !0, e
    }, i.min = function (e, t, r) {
      return n.a.min(e.array, t.array, r.array), e._dirty = !0, e
    }, i.max = function (e, t, r) {
      return n.a.max(e.array, t.array, r.array), e._dirty = !0, e
    }, i.mul = function (e, t, r) {
      return n.a.multiply(e.array, t.array, r.array), e._dirty = !0, e
    }, i.multiply = i.mul, i.negate = function (e, t) {
      return n.a.negate(e.array, t.array), e._dirty = !0, e
    }, i.normalize = function (e, t) {
      return n.a.normalize(e.array, t.array), e._dirty = !0, e
    }, i.random = function (e, t) {
      return n.a.random(e.array, t), e._dirty = !0, e
    }, i.scale = function (e, t, r) {
      return n.a.scale(e.array, t.array, r), e._dirty = !0, e
    }, i.scaleAndAdd = function (e, t, r, i) {
      return n.a.scaleAndAdd(e.array, t.array, r.array, i), e._dirty = !0, e
    }, i.sqrDist = function (e, t) {
      return n.a.sqrDist(e.array, t.array)
    }, i.squaredDistance = i.sqrDist, i.sqrLen = function (e) {
      return n.a.sqrLen(e.array)
    }, i.squaredLength = i.sqrLen, i.sub = function (e, t, r) {
      return n.a.subtract(e.array, t.array, r.array), e._dirty = !0, e
    }, i.subtract = i.sub, i.transformMat2 = function (e, t, r) {
      return n.a.transformMat2(e.array, t.array, r.array), e._dirty = !0, e
    }, i.transformMat2d = function (e, t, r) {
      return n.a.transformMat2d(e.array, t.array, r.array), e._dirty = !0, e
    }, i.transformMat3 = function (e, t, r) {
      return n.a.transformMat3(e.array, t.array, r.array), e._dirty = !0, e
    }, i.transformMat4 = function (e, t, r) {
      return n.a.transformMat4(e.array, t.array, r.array), e._dirty = !0, e
    }, t.a = i
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return "CANVAS" === e.nodeName || "VIDEO" === e.nodeName || e.complete
    }
    var i = r(4),
      a = r(11),
      o = r(23),
      s = r(73),
      u = r(14),
      l = s.a.isPowerOfTwo,
      h = ["px", "nx", "py", "ny", "pz", "nz"],
      c = i.a.extend(function () {
        return {
          image: {
            px: null,
            nx: null,
            py: null,
            ny: null,
            pz: null,
            nz: null
          },
          pixels: {
            px: null,
            nx: null,
            py: null,
            ny: null,
            pz: null,
            nz: null
          },
          mipmaps: []
        }
      }, {
        textureType: "textureCube",
        update: function (e) {
          var t = e.gl;
          t.bindTexture(t.TEXTURE_CUBE_MAP, this._cache.get("webgl_texture")), this.updateCommon(e);
          var r = this.format,
            n = this.type;
          t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_WRAP_S, this.getAvailableWrapS()), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_WRAP_T, this.getAvailableWrapT()), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, this.getAvailableMagFilter()), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, this.getAvailableMinFilter());
          var i = e.getGLExtension("EXT_texture_filter_anisotropic");
          if (i && this.anisotropic > 1 && t.texParameterf(t.TEXTURE_CUBE_MAP, i.TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropic), 36193 === n) {
            e.getGLExtension("OES_texture_half_float") || (n = a.a.FLOAT)
          }
          if (this.mipmaps.length)
            for (var o = this.width, s = this.height, u = 0; u < this.mipmaps.length; u++) {
              var l = this.mipmaps[u];
              this._updateTextureData(t, l, u, o, s, r, n), o /= 2, s /= 2
            } else this._updateTextureData(t, this, 0, this.width, this.height, r, n), !this.NPOT && this.useMipmap && t.generateMipmap(t.TEXTURE_CUBE_MAP);
          t.bindTexture(t.TEXTURE_CUBE_MAP, null)
        },
        _updateTextureData: function (e, t, r, n, i, a, o) {
          for (var s = 0; s < 6; s++) {
            var u = h[s],
              l = t.image && t.image[u];
            l ? e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + s, r, a, a, o, l) : e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + s, r, a, n, i, 0, a, o, t.pixels && t.pixels[u])
          }
        },
        generateMipmap: function (e) {
          var t = e.gl;
          this.useMipmap && !this.NPOT && (t.bindTexture(t.TEXTURE_CUBE_MAP, this._cache.get("webgl_texture")), t.generateMipmap(t.TEXTURE_CUBE_MAP))
        },
        bind: function (e) {
          e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP, this.getWebGLTexture(e))
        },
        unbind: function (e) {
          e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP, null)
        },
        isPowerOfTwo: function () {
          return this.image.px ? l(this.image.px.width) && l(this.image.px.height) : l(this.width) && l(this.height)
        },
        isRenderable: function () {
          return this.image.px ? n(this.image.px) && n(this.image.nx) && n(this.image.py) && n(this.image.ny) && n(this.image.pz) && n(this.image.nz) : !(!this.width || !this.height)
        },
        load: function (e, t) {
          var r = 0,
            n = this;
          return o.a.each(e, function (e, i) {
            var a = u.a.createImage();
            t && (a.crossOrigin = t), a.onload = function () {
              r--, 0 === r && (n.dirty(), n.trigger("success", n)), a.onload = null
            }, a.onerror = function () {
              r--, a.onerror = null
            }, r++, a.src = e, n.image[i] = a
          }), this
        }
      });
    Object.defineProperty(c.prototype, "width", {
      get: function () {
        return this.image && this.image.px ? this.image.px.width : this._width
      },
      set: function (e) {
        this.image && this.image.px ? console.warn("Texture from image can't set width") : (this._width !== e && this.dirty(), this._width = e)
      }
    }), Object.defineProperty(c.prototype, "height", {
      get: function () {
        return this.image && this.image.px ? this.image.px.height : this._height
      },
      set: function (e) {
        this.image && this.image.px ? console.warn("Texture from image can't set height") : (this._height !== e && this.dirty(), this._height = e)
      }
    }), t.a = c
  }, function (e, t, r) {
    "use strict";
    t.a = {
      defaultOption: {
        postEffect: {
          enable: !1,
          bloom: {
            enable: !0,
            intensity: .1
          },
          depthOfField: {
            enable: !1,
            focalRange: 20,
            focalDistance: 50,
            blurRadius: 10,
            fstop: 2.8,
            quality: "medium"
          },
          screenSpaceAmbientOcclusion: {
            enable: !1,
            radius: 2,
            quality: "medium",
            intensity: 1
          },
          screenSpaceReflection: {
            enable: !1,
            quality: "medium",
            maxRoughness: .8
          },
          colorCorrection: {
            enable: !0,
            exposure: 0,
            brightness: 0,
            contrast: 1,
            saturation: 1,
            lookupTexture: ""
          },
          edge: {
            enable: !1
          },
          FXAA: {
            enable: !1
          }
        },
        temporalSuperSampling: {
          enable: "auto"
        }
      }
    }
  }, function (e, t, r) {
    "use strict";
    t.a = {
      defaultOption: {
        light: {
          main: {
            shadow: !1,
            shadowQuality: "high",
            color: "#fff",
            intensity: 1,
            alpha: 0,
            beta: 0
          },
          ambient: {
            color: "#fff",
            intensity: .2
          },
          ambientCubemap: {
            texture: null,
            exposure: 1,
            diffuseIntensity: .5,
            specularIntensity: .5
          }
        }
      }
    }
  }, function (e, t, r) {
    "use strict";

    function n() {}
    var i = r(1),
      a = r(42),
      o = r(0),
      s = r.n(o);
    n.prototype = {
      constructor: n,
      setScene: function (e) {
        this._scene = e, this._skybox && this._skybox.attachScene(this._scene)
      },
      initLight: function (e) {
        this._lightRoot = e, this.mainLight = new i.a.DirectionalLight({
          shadowBias: .005
        }), this.ambientLight = new i.a.AmbientLight, e.add(this.mainLight), e.add(this.ambientLight)
      },
      dispose: function () {
        this._lightRoot && (this._lightRoot.remove(this.mainLight), this._lightRoot.remove(this.ambientLight))
      },
      updateLight: function (e) {
        var t = this.mainLight,
          r = this.ambientLight,
          n = e.getModel("light"),
          a = n.getModel("main"),
          o = n.getModel("ambient");
        t.intensity = a.get("intensity"), r.intensity = o.get("intensity"), t.color = i.a.parseColor(a.get("color")).slice(0, 3), r.color = i.a.parseColor(o.get("color")).slice(0, 3);
        var s = a.get("alpha") || 0,
          u = a.get("beta") || 0;
        t.position.setArray(i.a.directionFromAlphaBeta(s, u)), t.lookAt(i.a.Vector3.ZERO), t.castShadow = a.get("shadow"), t.shadowResolution = i.a.getShadowResolution(a.get("shadowQuality"))
      },
      updateAmbientCubemap: function (e, t, r) {
        var n = t.getModel("light.ambientCubemap"),
          a = n.get("texture");
        if (a) {
          this._cubemapLightsCache = this._cubemapLightsCache || {};
          var o = this._cubemapLightsCache[a];
          if (!o) {
            var s = this;
            o = this._cubemapLightsCache[a] = i.a.createAmbientCubemap(n.option, e, r, function () {
              s._isSkyboxFromAmbientCubemap && s._skybox.setEnvironmentMap(o.specular.cubemap), r.getZr().refresh()
            })
          }
          this._lightRoot.add(o.diffuse), this._lightRoot.add(o.specular), this._currentCubemapLights = o
        } else this._currentCubemapLights && (this._lightRoot.remove(this._currentCubemapLights.diffuse), this._lightRoot.remove(this._currentCubemapLights.specular), this._currentCubemapLights = null)
      },
      updateSkybox: function (e, t, r) {
        var n = t.get("environment"),
          o = this,
          u = function () {
            return o._skybox = o._skybox || new a.a, o._skybox
          }();
        if (n && "none" !== n)
          if ("auto" === n)
            if (this._isSkyboxFromAmbientCubemap = !0, this._currentCubemapLights) {
              var l = this._currentCubemapLights.specular.cubemap;
              u.setEnvironmentMap(l), this._scene && u.attachScene(this._scene), u.material.set("lod", 3)
            } else this._skybox && this._skybox.detachScene();
        else if ("object" == typeof n && n.colorStops || "string" == typeof n && s.a.color.parse(n)) {
          this._isSkyboxFromAmbientCubemap = !1;
          var h = new i.a.Texture2D({
            anisotropic: 8,
            flipY: !1
          });
          u.setEnvironmentMap(h);
          var c = h.image = document.createElement("canvas");
          c.width = c.height = 16;
          var d = c.getContext("2d"),
            f = new s.a.graphic.Rect({
              shape: {
                x: 0,
                y: 0,
                width: 16,
                height: 16
              },
              style: {
                fill: n
              }
            });
          f.brush(d), u.attachScene(this._scene)
        } else {
          this._isSkyboxFromAmbientCubemap = !1;
          var h = i.a.loadTexture(n, r, {
            anisotropic: 8,
            flipY: !1
          });
          u.setEnvironmentMap(h), u.attachScene(this._scene)
        } else this._skybox && this._skybox.detachScene(this._scene), this._skybox = null;
        var p = t.coordinateSystem;
        if (this._skybox)
          if (!p || !p.viewGL || "auto" === n || n.match && n.match(/.hdr$/)) this._skybox.material.undefine("fragment", "SRGB_DECODE");
          else {
            var m = p.viewGL.isLinearSpace() ? "define" : "undefine";
            this._skybox.material[m]("fragment", "SRGB_DECODE")
          }
      }
    }, t.a = n
  }, function (e, t, r) {
    "use strict";
    t.a = {
      defaultOption: {
        shading: null,
        realisticMaterial: {
          textureTiling: 1,
          textureOffset: 0,
          detailTexture: null
        },
        lambertMaterial: {
          textureTiling: 1,
          textureOffset: 0,
          detailTexture: null
        },
        colorMaterial: {
          textureTiling: 1,
          textureOffset: 0,
          detailTexture: null
        },
        hatchingMaterial: {
          textureTiling: 1,
          textureOffset: 0,
          paperColor: "#fff"
        }
      }
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = {};
    a.getFormattedLabel = function (e, t, r, n, a) {
      r = r || "normal";
      var o = e.getData(n),
        s = o.getItemModel(t),
        u = e.getDataParams(t, n);
      null != a && u.value instanceof Array && (u.value = u.value[a]);
      var l = s.get("normal" === r ? ["label", "formatter"] : ["emphasis", "label", "formatter"]);
      null == l && (l = s.get(["label", "formatter"]));
      var h;
      return "function" == typeof l ? (u.status = r, h = l(u)) : "string" == typeof l && (h = i.a.format.formatTpl(l, u)), h
    }, a.normalizeToArray = function (e) {
      return e instanceof Array ? e : null == e ? [] : [e]
    }, t.a = a
  }, function (e, t, r) {
    "use strict";
    var n = r(20),
      i = {};
    i.create = function () {
      var e = new n.a(4);
      return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e
    }, i.clone = function (e) {
      var t = new n.a(4);
      return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }, i.fromValues = function (e, t, r, i) {
      var a = new n.a(4);
      return a[0] = e, a[1] = t, a[2] = r, a[3] = i, a
    }, i.copy = function (e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }, i.set = function (e, t, r, n, i) {
      return e[0] = t, e[1] = r, e[2] = n, e[3] = i, e
    }, i.add = function (e, t, r) {
      return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e
    }, i.subtract = function (e, t, r) {
      return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e[3] = t[3] - r[3], e
    }, i.sub = i.subtract, i.multiply = function (e, t, r) {
      return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e[2] = t[2] * r[2], e[3] = t[3] * r[3], e
    }, i.mul = i.multiply, i.divide = function (e, t, r) {
      return e[0] = t[0] / r[0], e[1] = t[1] / r[1], e[2] = t[2] / r[2], e[3] = t[3] / r[3], e
    }, i.div = i.divide, i.min = function (e, t, r) {
      return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e[2] = Math.min(t[2], r[2]), e[3] = Math.min(t[3], r[3]), e
    }, i.max = function (e, t, r) {
      return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e[2] = Math.max(t[2], r[2]), e[3] = Math.max(t[3], r[3]), e
    }, i.scale = function (e, t, r) {
      return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e
    }, i.scaleAndAdd = function (e, t, r, n) {
      return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e[2] = t[2] + r[2] * n, e[3] = t[3] + r[3] * n, e
    }, i.distance = function (e, t) {
      var r = t[0] - e[0],
        n = t[1] - e[1],
        i = t[2] - e[2],
        a = t[3] - e[3];
      return Math.sqrt(r * r + n * n + i * i + a * a)
    }, i.dist = i.distance, i.squaredDistance = function (e, t) {
      var r = t[0] - e[0],
        n = t[1] - e[1],
        i = t[2] - e[2],
        a = t[3] - e[3];
      return r * r + n * n + i * i + a * a
    }, i.sqrDist = i.squaredDistance, i.length = function (e) {
      var t = e[0],
        r = e[1],
        n = e[2],
        i = e[3];
      return Math.sqrt(t * t + r * r + n * n + i * i)
    }, i.len = i.length, i.squaredLength = function (e) {
      var t = e[0],
        r = e[1],
        n = e[2],
        i = e[3];
      return t * t + r * r + n * n + i * i
    }, i.sqrLen = i.squaredLength, i.negate = function (e, t) {
      return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e
    }, i.inverse = function (e, t) {
      return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e[3] = 1 / t[3], e
    }, i.normalize = function (e, t) {
      var r = t[0],
        n = t[1],
        i = t[2],
        a = t[3],
        o = r * r + n * n + i * i + a * a;
      return o > 0 && (o = 1 / Math.sqrt(o), e[0] = t[0] * o, e[1] = t[1] * o, e[2] = t[2] * o, e[3] = t[3] * o), e
    }, i.dot = function (e, t) {
      return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
    }, i.lerp = function (e, t, r, n) {
      var i = t[0],
        a = t[1],
        o = t[2],
        s = t[3];
      return e[0] = i + n * (r[0] - i), e[1] = a + n * (r[1] - a), e[2] = o + n * (r[2] - o), e[3] = s + n * (r[3] - s), e
    }, i.random = function (e, t) {
      return t = t || 1, e[0] = Object(n.c)(), e[1] = Object(n.c)(), e[2] = Object(n.c)(), e[3] = Object(n.c)(), i.normalize(e, e), i.scale(e, e, t), e
    }, i.transformMat4 = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3];
      return e[0] = r[0] * n + r[4] * i + r[8] * a + r[12] * o, e[1] = r[1] * n + r[5] * i + r[9] * a + r[13] * o, e[2] = r[2] * n + r[6] * i + r[10] * a + r[14] * o, e[3] = r[3] * n + r[7] * i + r[11] * a + r[15] * o, e
    }, i.transformQuat = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = r[0],
        s = r[1],
        u = r[2],
        l = r[3],
        h = l * n + s * a - u * i,
        c = l * i + u * n - o * a,
        d = l * a + o * i - s * n,
        f = -o * n - s * i - u * a;
      return e[0] = h * l + f * -o + c * -u - d * -s, e[1] = c * l + f * -s + d * -o - h * -u, e[2] = d * l + f * -u + h * -s - c * -o, e
    }, i.forEach = function () {
      var e = i.create();
      return function (t, r, n, i, a, o) {
        var s, u;
        for (r || (r = 4), n || (n = 0), u = i ? Math.min(i * r + n, t.length) : t.length, s = n; s < u; s += r) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], e[3] = t[s + 3], a(e, e, o), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2], t[s + 3] = e[3];
        return t
      }
    }(), t.a = i
  }, function (e, t, r) {
    "use strict";
    var n = r(20),
      i = {};
    i.create = function () {
      var e = new n.a(9);
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e
    }, i.fromMat4 = function (e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e
    }, i.clone = function (e) {
      var t = new n.a(9);
      return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
    }, i.copy = function (e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
    }, i.identity = function (e) {
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e
    }, i.transpose = function (e, t) {
      if (e === t) {
        var r = t[1],
          n = t[2],
          i = t[5];
        e[1] = t[3], e[2] = t[6], e[3] = r, e[5] = t[7], e[6] = n, e[7] = i
      } else e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8];
      return e
    }, i.invert = function (e, t) {
      var r = t[0],
        n = t[1],
        i = t[2],
        a = t[3],
        o = t[4],
        s = t[5],
        u = t[6],
        l = t[7],
        h = t[8],
        c = h * o - s * l,
        d = -h * a + s * u,
        f = l * a - o * u,
        p = r * c + n * d + i * f;
      return p ? (p = 1 / p, e[0] = c * p, e[1] = (-h * n + i * l) * p, e[2] = (s * n - i * o) * p, e[3] = d * p, e[4] = (h * r - i * u) * p, e[5] = (-s * r + i * a) * p, e[6] = f * p, e[7] = (-l * r + n * u) * p, e[8] = (o * r - n * a) * p, e) : null
    }, i.adjoint = function (e, t) {
      var r = t[0],
        n = t[1],
        i = t[2],
        a = t[3],
        o = t[4],
        s = t[5],
        u = t[6],
        l = t[7],
        h = t[8];
      return e[0] = o * h - s * l, e[1] = i * l - n * h, e[2] = n * s - i * o, e[3] = s * u - a * h, e[4] = r * h - i * u, e[5] = i * a - r * s, e[6] = a * l - o * u, e[7] = n * u - r * l, e[8] = r * o - n * a, e
    }, i.determinant = function (e) {
      var t = e[0],
        r = e[1],
        n = e[2],
        i = e[3],
        a = e[4],
        o = e[5],
        s = e[6],
        u = e[7],
        l = e[8];
      return t * (l * a - o * u) + r * (-l * i + o * s) + n * (u * i - a * s)
    }, i.multiply = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = t[4],
        u = t[5],
        l = t[6],
        h = t[7],
        c = t[8],
        d = r[0],
        f = r[1],
        p = r[2],
        m = r[3],
        g = r[4],
        _ = r[5],
        v = r[6],
        y = r[7],
        x = r[8];
      return e[0] = d * n + f * o + p * l, e[1] = d * i + f * s + p * h, e[2] = d * a + f * u + p * c, e[3] = m * n + g * o + _ * l, e[4] = m * i + g * s + _ * h, e[5] = m * a + g * u + _ * c, e[6] = v * n + y * o + x * l, e[7] = v * i + y * s + x * h, e[8] = v * a + y * u + x * c, e
    }, i.mul = i.multiply, i.translate = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = t[4],
        u = t[5],
        l = t[6],
        h = t[7],
        c = t[8],
        d = r[0],
        f = r[1];
      return e[0] = n, e[1] = i, e[2] = a, e[3] = o, e[4] = s, e[5] = u, e[6] = d * n + f * o + l, e[7] = d * i + f * s + h, e[8] = d * a + f * u + c, e
    }, i.rotate = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = t[4],
        u = t[5],
        l = t[6],
        h = t[7],
        c = t[8],
        d = Math.sin(r),
        f = Math.cos(r);
      return e[0] = f * n + d * o, e[1] = f * i + d * s, e[2] = f * a + d * u, e[3] = f * o - d * n, e[4] = f * s - d * i, e[5] = f * u - d * a, e[6] = l, e[7] = h, e[8] = c, e
    }, i.scale = function (e, t, r) {
      var n = r[0],
        i = r[1];
      return e[0] = n * t[0], e[1] = n * t[1], e[2] = n * t[2], e[3] = i * t[3], e[4] = i * t[4], e[5] = i * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
    }, i.fromMat2d = function (e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = 0, e[3] = t[2], e[4] = t[3], e[5] = 0, e[6] = t[4], e[7] = t[5], e[8] = 1, e
    }, i.fromQuat = function (e, t) {
      var r = t[0],
        n = t[1],
        i = t[2],
        a = t[3],
        o = r + r,
        s = n + n,
        u = i + i,
        l = r * o,
        h = n * o,
        c = n * s,
        d = i * o,
        f = i * s,
        p = i * u,
        m = a * o,
        g = a * s,
        _ = a * u;
      return e[0] = 1 - c - p, e[3] = h - _, e[6] = d + g, e[1] = h + _, e[4] = 1 - l - p, e[7] = f - m, e[2] = d - g, e[5] = f + m, e[8] = 1 - l - c, e
    }, i.normalFromMat4 = function (e, t) {
      var r = t[0],
        n = t[1],
        i = t[2],
        a = t[3],
        o = t[4],
        s = t[5],
        u = t[6],
        l = t[7],
        h = t[8],
        c = t[9],
        d = t[10],
        f = t[11],
        p = t[12],
        m = t[13],
        g = t[14],
        _ = t[15],
        v = r * s - n * o,
        y = r * u - i * o,
        x = r * l - a * o,
        T = n * u - i * s,
        b = n * l - a * s,
        w = i * l - a * u,
        E = h * m - c * p,
        S = h * g - d * p,
        A = h * _ - f * p,
        M = c * g - d * m,
        C = c * _ - f * m,
        L = d * _ - f * g,
        D = v * L - y * C + x * M + T * A - b * S + w * E;
      return D ? (D = 1 / D, e[0] = (s * L - u * C + l * M) * D, e[1] = (u * A - o * L - l * S) * D, e[2] = (o * C - s * A + l * E) * D, e[3] = (i * C - n * L - a * M) * D, e[4] = (r * L - i * A + a * S) * D, e[5] = (n * A - r * C - a * E) * D, e[6] = (m * w - g * b + _ * T) * D, e[7] = (g * x - p * w - _ * y) * D, e[8] = (p * b - m * x + _ * v) * D, e) : null
    }, i.frob = function (e) {
      return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + Math.pow(e[6], 2) + Math.pow(e[7], 2) + Math.pow(e[8], 2))
    }, t.a = i
  }, function (e, t, r) {
    "use strict";
    var n = r(7),
      i = r(3),
      a = r(56),
      o = r(9),
      s = r(21),
      u = r(18),
      l = 0,
      h = n.a.extend({
        name: "",
        position: null,
        rotation: null,
        scale: null,
        worldTransform: null,
        localTransform: null,
        autoUpdateLocalTransform: !0,
        _parent: null,
        _scene: null,
        _needsUpdateWorldTransform: !0,
        _inIterating: !1,
        __depth: 0
      }, function () {
        this.name || (this.name = (this.type || "NODE") + "_" + l++), this.position || (this.position = new i.a), this.rotation || (this.rotation = new a.a), this.scale || (this.scale = new i.a(1, 1, 1)), this.worldTransform = new o.a, this.localTransform = new o.a, this._children = []
      }, {
        target: null,
        invisible: !1,
        isSkinnedMesh: function () {
          return !1
        },
        isRenderable: function () {
          return !1
        },
        setName: function (e) {
          var t = this._scene;
          if (t) {
            var r = t._nodeRepository;
            delete r[this.name], r[e] = this
          }
          this.name = e
        },
        add: function (e) {
          var t = e._parent;
          if (t !== this) {
            t && t.remove(e), e._parent = this, this._children.push(e);
            var r = this._scene;
            r && r !== e.scene && e.traverse(this._addSelfToScene, this), e._needsUpdateWorldTransform = !0
          }
        },
        remove: function (e) {
          var t = this._children,
            r = t.indexOf(e);
          r < 0 || (t.splice(r, 1), e._parent = null, this._scene && e.traverse(this._removeSelfFromScene, this))
        },
        removeAll: function () {
          for (var e = this._children, t = 0; t < e.length; t++) e[t]._parent = null, this._scene && e[t].traverse(this._removeSelfFromScene, this);
          this._children = []
        },
        getScene: function () {
          return this._scene
        },
        getParent: function () {
          return this._parent
        },
        _removeSelfFromScene: function (e) {
          e._scene.removeFromScene(e), e._scene = null
        },
        _addSelfToScene: function (e) {
          this._scene.addToScene(e), e._scene = this._scene
        },
        isAncestor: function (e) {
          for (var t = e._parent; t;) {
            if (t === this) return !0;
            t = t._parent
          }
          return !1
        },
        children: function () {
          return this._children.slice()
        },
        childAt: function (e) {
          return this._children[e]
        },
        getChildByName: function (e) {
          for (var t = this._children, r = 0; r < t.length; r++)
            if (t[r].name === e) return t[r]
        },
        getDescendantByName: function (e) {
          for (var t = this._children, r = 0; r < t.length; r++) {
            var n = t[r];
            if (n.name === e) return n;
            var i = n.getDescendantByName(e);
            if (i) return i
          }
        },
        queryNode: function (e) {
          if (e) {
            for (var t = e.split("/"), r = this, n = 0; n < t.length; n++) {
              var i = t[n];
              if (i) {
                for (var a = !1, o = r._children, s = 0; s < o.length; s++) {
                  var u = o[s];
                  if (u.name === i) {
                    r = u, a = !0;
                    break
                  }
                }
                if (!a) return
              }
            }
            return r
          }
        },
        getPath: function (e) {
          if (!this._parent) return "/";
          for (var t = this._parent, r = this.name; t._parent && (r = t.name + "/" + r, t._parent != e);) t = t._parent;
          return !t._parent && e ? null : r
        },
        traverse: function (e, t) {
          e.call(t, this);
          for (var r = this._children, n = 0, i = r.length; n < i; n++) r[n].traverse(e, t)
        },
        eachChild: function (e, t) {
          for (var r = this._children, n = 0, i = r.length; n < i; n++) {
            var a = r[n];
            e.call(t, a, n)
          }
        },
        setLocalTransform: function (e) {
          s.a.copy(this.localTransform.array, e.array), this.decomposeLocalTransform()
        },
        decomposeLocalTransform: function (e) {
          var t = e ? null : this.scale;
          this.localTransform.decomposeMatrix(t, this.rotation, this.position)
        },
        setWorldTransform: function (e) {
          s.a.copy(this.worldTransform.array, e.array), this.decomposeWorldTransform()
        },
        decomposeWorldTransform: function () {
          var e = s.a.create();
          return function (t) {
            var r = this.localTransform,
              n = this.worldTransform;
            this._parent ? (s.a.invert(e, this._parent.worldTransform.array), s.a.multiply(r.array, e, n.array)) : s.a.copy(r.array, n.array);
            var i = t ? null : this.scale;
            r.decomposeMatrix(i, this.rotation, this.position)
          }
        }(),
        transformNeedsUpdate: function () {
          return this.position._dirty || this.rotation._dirty || this.scale._dirty
        },
        updateLocalTransform: function () {
          var e = this.position,
            t = this.rotation,
            r = this.scale;
          if (this.transformNeedsUpdate()) {
            var n = this.localTransform.array;
            s.a.fromRotationTranslation(n, t.array, e.array), s.a.scale(n, n, r.array), t._dirty = !1, r._dirty = !1, e._dirty = !1, this._needsUpdateWorldTransform = !0
          }
        },
        _updateWorldTransformTopDown: function () {
          var e = this.localTransform.array,
            t = this.worldTransform.array;
          this._parent ? s.a.multiplyAffine(t, this._parent.worldTransform.array, e) : s.a.copy(t, e)
        },
        updateWorldTransform: function () {
          for (var e = this; e && e.getParent() && e.getParent().transformNeedsUpdate();) e = e.getParent();
          e.update()
        },
        update: function (e) {
          this.autoUpdateLocalTransform ? this.updateLocalTransform() : e = !0, (e || this._needsUpdateWorldTransform) && (this._updateWorldTransformTopDown(), e = !0, this._needsUpdateWorldTransform = !1);
          for (var t = this._children, r = 0, n = t.length; r < n; r++) t[r].update(e)
        },
        getBoundingBox: function () {
          function e(e) {
            return !e.invisible && e.geometry
          }
          var t = new u.a,
            r = new o.a,
            n = new o.a;
          return function (i, a) {
            return a = a || new u.a, i = i || e, this._parent ? o.a.invert(n, this._parent.worldTransform) : o.a.identity(n), this.traverse(function (e) {
              e.geometry && e.geometry.boundingBox && (t.copy(e.geometry.boundingBox), o.a.multiply(r, n, e.worldTransform), t.applyTransform(r), a.union(t))
            }, this, e), a
          }
        }(),
        getWorldPosition: function (e) {
          this.transformNeedsUpdate() && this.updateWorldTransform();
          var t = this.worldTransform.array;
          if (e) {
            var r = e.array;
            return r[0] = t[12], r[1] = t[13], r[2] = t[14], e
          }
          return new i.a(t[12], t[13], t[14])
        },
        clone: function () {
          var e = new this.constructor,
            t = this._children;
          e.setName(this.name), e.position.copy(this.position), e.rotation.copy(this.rotation), e.scale.copy(this.scale);
          for (var r = 0; r < t.length; r++) e.add(t[r].clone());
          return e
        },
        rotateAround: function () {
          var e = new i.a,
            t = new o.a;
          return function (r, n, i) {
            e.copy(this.position).subtract(r);
            var a = this.localTransform;
            a.identity(), a.translate(r), a.rotate(i, n), t.fromRotationTranslation(this.rotation, e), a.multiply(t), a.scale(this.scale), this.decomposeLocalTransform(), this._needsUpdateWorldTransform = !0
          }
        }(),
        lookAt: function () {
          var e = new o.a;
          return function (t, r) {
            e.lookAt(this.position, t, r || this.localTransform.y).invert(), this.setLocalTransform(e), this.target = t
          }
        }()
      });
    t.a = h
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      var t = [],
        r = Object.keys(e);
      r.sort();
      for (var n = 0; n < r.length; n++) {
        var i = r[n];
        t.push(i + " " + e[i])
      }
      var a = t.join("\n");
      if (g[a]) return g[a];
      var o = h.a.genGUID();
      return g[a] = o, o
    }

    function i() {
      this.opaque = [], this.transparent = [], this._opaqueCount = 0, this._transparentCount = 0
    }

    function a(e, t) {
      if (t.castShadow && !e.castShadow) return !0
    }
    var o = r(35),
      s = r(24),
      u = r(58),
      l = r(18),
      h = r(23),
      c = r(21),
      d = r(69),
      f = r(9),
      p = c.a.create(),
      m = c.a.create(),
      g = {};
    i.prototype.startCount = function () {
      this._opaqueCount = 0, this._transparentCount = 0
    }, i.prototype.add = function (e, t) {
      t ? this.transparent[this._transparentCount++] = e : this.opaque[this._opaqueCount++] = e
    }, i.prototype.endCount = function () {
      this.transparent.length = this._transparentCount, this.opaque.length = this._opaqueCount
    };
    var _ = o.a.extend(function () {
      return {
        material: null,
        lights: [],
        viewBoundingBoxLastFrame: new l.a,
        shadowUniforms: {},
        _cameraList: [],
        _lightUniforms: {},
        _previousLightNumber: {},
        _lightNumber: {},
        _lightProgramKeys: {},
        _nodeRepository: {},
        _renderLists: new d.a(20)
      }
    }, function () {
      this._scene = this
    }, {
      addToScene: function (e) {
        e instanceof u.a ? (this._cameraList.length > 0 && console.warn("Found multiple camera in one scene. Use the fist one."), this._cameraList.push(e)) : e instanceof s.a && this.lights.push(e), e.name && (this._nodeRepository[e.name] = e)
      },
      removeFromScene: function (e) {
        var t;
        e instanceof u.a ? (t = this._cameraList.indexOf(e)) >= 0 && this._cameraList.splice(t, 1) : e instanceof s.a && (t = this.lights.indexOf(e)) >= 0 && this.lights.splice(t, 1), e.name && delete this._nodeRepository[e.name]
      },
      getNode: function (e) {
        return this._nodeRepository[e]
      },
      setMainCamera: function (e) {
        var t = this._cameraList.indexOf(e);
        t >= 0 && this._cameraList.splice(t, 1), this._cameraList.unshift(e)
      },
      getMainCamera: function () {
        return this._cameraList[0]
      },
      getLights: function () {
        return this.lights
      },
      updateLights: function () {
        var e = this.lights;
        this._previousLightNumber = this._lightNumber;
        for (var t = {}, r = 0; r < e.length; r++) {
          var i = e[r];
          if (!i.invisible) {
            var a = i.group;
            t[a] || (t[a] = {}), t[a][i.type] = t[a][i.type] || 0, t[a][i.type]++
          }
        }
        this._lightNumber = t;
        for (var o in t) this._lightProgramKeys[o] = n(t[o]);
        this._updateLightUniforms()
      },
      cloneNode: function (e) {
        function t(e, r) {
          n[e.__uid__] = r;
          for (var i = 0; i < e._children.length; i++) {
            t(e._children[i], r._children[i])
          }
        }
        var r = e.clone(),
          n = {};
        return t(e, r), r.traverse(function (e) {
          e.skeleton && (e.skeleton = e.skeleton.clone(n)), e.material && (e.material = e.material.clone())
        }), r
      },
      updateRenderList: function (e, t) {
        var r = e.__uid__,
          n = this._renderLists.get(r);
        n || (n = new i, this._renderLists.put(r, n)), n.startCount(), t && (this.viewBoundingBoxLastFrame.min.set(1 / 0, 1 / 0, 1 / 0), this.viewBoundingBoxLastFrame.max.set(-1 / 0, -1 / 0, -1 / 0));
        var a = this.material && this.material.transparent || !1;
        return this._doUpdateRenderList(this, e, a, n, t), n.endCount(), n
      },
      getRenderList: function (e) {
        return this._renderLists.get(e.__uid__)
      },
      _doUpdateRenderList: function (e, t, r, n, i) {
        if (!e.invisible)
          for (var a = 0; a < e._children.length; a++) {
            var o = e._children[a];
            if (o.isRenderable()) {
              var s = o.isSkinnedMesh() ? p : o.worldTransform.array,
                u = o.geometry;
              c.a.multiplyAffine(m, t.viewMatrix.array, s), (i && !u.boundingBox || !this.isFrustumCulled(o, t, m)) && n.add(o, o.material.transparent || r)
            }
            o._children.length > 0 && this._doUpdateRenderList(o, t, r, n, i)
          }
      },
      isFrustumCulled: function () {
        var e = new l.a,
          t = new f.a;
        return function (r, n, i) {
          var a = r.boundingBox;
          if (a || (a = r.skeleton && r.skeleton.boundingBox ? r.skeleton.boundingBox : r.geometry.boundingBox), !a) return !1;
          if (t.array = i, e.transformFrom(a, t), r.castShadow && this.viewBoundingBoxLastFrame.union(e), r.frustumCulling) {
            if (!e.intersectBoundingBox(n.frustum.boundingBox)) return !0;
            t.array = n.projectionMatrix.array, e.max.array[2] > 0 && e.min.array[2] < 0 && (e.max.array[2] = -1e-20), e.applyProjection(t);
            var o = e.min.array,
              s = e.max.array;
            if (s[0] < -1 || o[0] > 1 || s[1] < -1 || o[1] > 1 || s[2] < -1 || o[2] > 1) return !0
          }
          return !1
        }
      }(),
      _updateLightUniforms: function () {
        var e = this.lights;
        e.sort(a);
        var t = this._lightUniforms;
        for (var r in t)
          for (var n in t[r]) t[r][n].value.length = 0;
        for (var i = 0; i < e.length; i++) {
          var o = e[i];
          if (!o.invisible) {
            var r = o.group;
            for (var n in o.uniformTemplates) {
              var s = o.uniformTemplates[n],
                u = s.value(o);
              if (null != u) {
                t[r] || (t[r] = {}), t[r][n] || (t[r][n] = {
                  type: "",
                  value: []
                });
                var l = t[r][n];
                switch (l.type = s.type + "v", s.type) {
                  case "1i":
                  case "1f":
                  case "t":
                    l.value.push(u);
                    break;
                  case "2f":
                  case "3f":
                  case "4f":
                    for (var h = 0; h < u.length; h++) l.value.push(u[h]);
                    break;
                  default:
                    console.error("Unkown light uniform type " + s.type)
                }
              }
            }
          }
        }
      },
      getLightGroups: function () {
        var e = [];
        for (var t in this._lightNumber) e.push(t);
        return e
      },
      getNumberChangedLightGroups: function () {
        var e = [];
        for (var t in this._lightNumber) this.isLightNumberChanged(t) && e.push(t);
        return e
      },
      isLightNumberChanged: function (e) {
        var t = this._previousLightNumber,
          r = this._lightNumber;
        for (var n in r[e]) {
          if (!t[e]) return !0;
          if (r[e][n] !== t[e][n]) return !0
        }
        for (var n in t[e]) {
          if (!r[e]) return !0;
          if (r[e][n] !== t[e][n]) return !0
        }
        return !1
      },
      getLightsNumbers: function (e) {
        return this._lightNumber[e]
      },
      getProgramKey: function (e) {
        return this._lightProgramKeys[e]
      },
      setLightUniforms: function () {
        function e(e, t, r) {
          for (var n in e) {
            var i = e[n];
            if ("tv" === i.type) {
              if (!t.hasUniform(n)) continue;
              for (var a = [], o = 0; o < i.value.length; o++) {
                var s = i.value[o],
                  u = t.takeCurrentTextureSlot(r, s);
                a.push(u)
              }
              t.setUniform(r.gl, "1iv", n, a)
            } else t.setUniform(r.gl, i.type, n, i.value)
          }
        }
        return function (t, r, n) {
          e(this._lightUniforms[r], t, n), e(this.shadowUniforms, t, n)
        }
      }(),
      dispose: function () {
        this.material = null, this._opaqueList = [], this._transparentList = [], this.lights = [], this._lightUniforms = {}, this._lightNumber = {}, this._nodeRepository = {}
      }
    });
    t.a = _
  }, function (e, t, r) {
    "use strict";
    var n = r(58),
      i = n.a.extend({
        left: -1,
        right: 1,
        near: -1,
        far: 1,
        top: 1,
        bottom: -1
      }, {
        updateProjectionMatrix: function () {
          this.projectionMatrix.ortho(this.left, this.right, this.bottom, this.top, this.near, this.far)
        },
        decomposeProjectionMatrix: function () {
          var e = this.projectionMatrix.array;
          this.left = (-1 - e[12]) / e[0], this.right = (1 - e[12]) / e[0], this.top = (1 - e[13]) / e[5], this.bottom = (-1 - e[13]) / e[5], this.near = -(-1 - e[14]) / e[10], this.far = -(1 - e[14]) / e[10]
        },
        clone: function () {
          var e = n.a.prototype.clone.call(this);
          return e.left = this.left, e.right = this.right, e.near = this.near, e.far = this.far, e.top = this.top, e.bottom = this.bottom, e
        }
      });
    t.a = i
  }, function (e, t, r) {
    "use strict";
    t.a = {
      convertToDynamicArray: function (e) {
        e && this.resetOffset();
        var t = this.attributes;
        for (var r in t) e || !t[r].value ? t[r].value = [] : t[r].value = Array.prototype.slice.call(t[r].value);
        e || !this.indices ? this.indices = [] : this.indices = Array.prototype.slice.call(this.indices)
      },
      convertToTypedArray: function () {
        var e = this.attributes;
        for (var t in e) e[t].value && e[t].value.length > 0 ? e[t].value = new Float32Array(e[t].value) : e[t].value = null;
        this.indices && this.indices.length > 0 && (this.indices = this.vertexCount > 65535 ? new Uint32Array(this.indices) : new Uint16Array(this.indices)), this.dirty()
      }
    }
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      var r = [];
      return a.a.util.each(e.dimensions, function (n) {
        var i = e.getDimensionInfo(n),
          a = i.otherDims,
          o = a[t];
        null != o && !1 !== o && (r[o] = i.name)
      }), r
    }
    var i = r(0),
      a = r.n(i);
    t.a = function (e, t, r) {
      var i = e.getData(),
        o = e.getRawValue(t),
        s = a.a.util.isArray(o) ? function (e) {
          function o(e, t) {
            var n = i.getDimensionInfo(t);
            if (n && !1 !== n.otherDims.tooltip) {
              var o = n.type,
                l = (s ? "- " + (n.tooltipName || n.name) + ": " : "") + ("ordinal" === o ? e + "" : "time" === o ? r ? "" : a.a.format.formatTime("yyyy/MM/dd hh:mm:ss", e) : a.a.format.addCommas(e));
              l && u.push(a.a.format.encodeHTML(l))
            }
          }
          var s = !0,
            u = [],
            l = n(i, "tooltip");
          return l.length ? a.a.util.each(l, function (e) {
            o(i.get(e, t), e)
          }) : a.a.util.each(e, o), (s ? "<br/>" : "") + u.join(s ? "<br/>" : ", ")
        }(o) : a.a.format.encodeHTML(a.a.format.addCommas(o)),
        u = i.getName(t),
        l = i.getItemVisual(t, "color");
      a.a.util.isObject(l) && l.colorStops && (l = (l.colorStops[0] || {}).color), l = l || "transparent";
      var h = a.a.format.getTooltipMarker(l),
        c = e.name;
      return "\0-" === c && (c = ""), c = c ? a.a.format.encodeHTML(c) + (r ? ": " : "<br/>") : "", r ? h + c + s : c + h + (u ? a.a.format.encodeHTML(u) + ": " + s : s)
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(72),
      i = r(11),
      a = n.a.extend({
        skeleton: null,
        joints: null,
        useSkinMatricesTexture: !1
      }, function () {
        this.joints || (this.joints = [])
      }, {
        isSkinnedMesh: function () {
          return !!(this.skeleton && this.joints && this.joints.length > 0)
        },
        clone: function () {
          var e = n.a.prototype.clone.call(this);
          return e.skeleton = this.skeleton, this.joints && (e.joints = this.joints.slice()), e
        }
      });
    a.POINTS = i.a.POINTS, a.LINES = i.a.LINES, a.LINE_LOOP = i.a.LINE_LOOP, a.LINE_STRIP = i.a.LINE_STRIP, a.TRIANGLES = i.a.TRIANGLES, a.TRIANGLE_STRIP = i.a.TRIANGLE_STRIP, a.TRIANGLE_FAN = i.a.TRIANGLE_FAN, a.BACK = i.a.BACK, a.FRONT = i.a.FRONT, a.FRONT_AND_BACK = i.a.FRONT_AND_BACK, a.CW = i.a.CW, a.CCW = i.a.CCW, t.a = a
  }, function (e, t, r) {
    "use strict";
    var n = r(58),
      i = n.a.extend({
        fov: 50,
        aspect: 1,
        near: .1,
        far: 2e3
      }, {
        updateProjectionMatrix: function () {
          var e = this.fov / 180 * Math.PI;
          this.projectionMatrix.perspective(e, this.aspect, this.near, this.far)
        },
        decomposeProjectionMatrix: function () {
          var e = this.projectionMatrix.array,
            t = 2 * Math.atan(1 / e[5]);
          this.fov = t / Math.PI * 180, this.aspect = e[5] / e[0], this.near = e[14] / (e[10] - 1), this.far = e[14] / (e[10] + 1)
        },
        clone: function () {
          var e = n.a.prototype.clone.call(this);
          return e.fov = this.fov, e.aspect = this.aspect, e.near = this.near, e.far = this.far, e
        }
      });
    t.a = i
  }, function (e, t, r) {
    "use strict";
    var n = r(40),
      i = r(76),
      a = r(8),
      o = r(19),
      s = r(4),
      u = r(121);
    a.a.import(u.a);
    var l = n.a.extend(function () {
      var e = new a.a({
          vertex: a.a.source("clay.skybox.vertex"),
          fragment: a.a.source("clay.skybox.fragment")
        }),
        t = new o.a({
          shader: e,
          depthMask: !1
        });
      return {
        scene: null,
        geometry: new i.a,
        material: t,
        environmentMap: null,
        culling: !1
      }
    }, function () {
      var e = this.scene;
      e && this.attachScene(e), this.environmentMap && this.setEnvironmentMap(this.environmentMap)
    }, {
      attachScene: function (e) {
        this.scene && this.detachScene(), e.skybox = this, this.scene = e, e.on("beforerender", this._beforeRenderScene, this)
      },
      detachScene: function () {
        this.scene && (this.scene.off("beforerender", this._beforeRenderScene), this.scene.skybox = null), this.scene = null
      },
      dispose: function (e) {
        this.detachScene(), this.geometry.dispose(e)
      },
      setEnvironmentMap: function (e) {
        "texture2D" === e.textureType ? (this.material.define("EQUIRECTANGULAR"), e.minFilter = s.a.LINEAR) : this.material.undefine("EQUIRECTANGULAR"), this.material.set("environmentMap", e)
      },
      getEnvironmentMap: function () {
        return this.material.get("environmentMap")
      },
      _beforeRenderScene: function (e, t, r) {
        this.renderSkybox(e, r)
      },
      renderSkybox: function (e, t) {
        this.position.copy(t.getWorldPosition()), this.update(), e.gl.disable(e.gl.BLEND), this.material.get("lod") > 0 ? this.material.define("fragment", "LOD") : this.material.undefine("fragment", "LOD"), e.renderPass([this], t)
      }
    });
    t.a = l
  }, function (e, t, r) {
    "use strict";
    var n = r(15),
      i = r(18),
      a = n.a.extend({
        dynamic: !1,
        widthSegments: 1,
        heightSegments: 1
      }, function () {
        this.build()
      }, {
        build: function () {
          for (var e = this.heightSegments, t = this.widthSegments, r = this.attributes, n = [], a = [], o = [], s = [], u = 0; u <= e; u++)
            for (var l = u / e, h = 0; h <= t; h++) {
              var c = h / t;
              if (n.push([2 * c - 1, 2 * l - 1, 0]), a && a.push([c, l]), o && o.push([0, 0, 1]), h < t && u < e) {
                var d = h + u * (t + 1);
                s.push([d, d + 1, d + t + 1]), s.push([d + t + 1, d + 1, d + t + 2])
              }
            }
          r.position.fromArray(n), r.texcoord0.fromArray(a), r.normal.fromArray(o), this.initIndicesFromArray(s), this.boundingBox = new i.a, this.boundingBox.min.set(-1, -1, 0), this.boundingBox.max.set(1, 1, 0)
        }
      });
    t.a = a
  }, function (e, t, r) {
    "use strict";
    t.a = {
      defaultOption: {
        viewControl: {
          projection: "perspective",
          autoRotate: !1,
          autoRotateDirection: "cw",
          autoRotateSpeed: 10,
          autoRotateAfterStill: 3,
          damping: .8,
          rotateSensitivity: 1,
          zoomSensitivity: 1,
          panSensitivity: 1,
          panMouseButton: "middle",
          rotateMouseButton: "left",
          distance: 150,
          minDistance: 40,
          maxDistance: 400,
          orthographicSize: 150,
          maxOrthographicSize: 400,
          minOrthographicSize: 20,
          center: [0, 0, 0],
          alpha: 0,
          beta: 0,
          minAlpha: -90,
          maxAlpha: 90
        }
      },
      setView: function (e) {
        e = e || {}, this.option.viewControl = this.option.viewControl || {}, null != e.alpha && (this.option.viewControl.alpha = e.alpha), null != e.beta && (this.option.viewControl.beta = e.beta), null != e.distance && (this.option.viewControl.distance = e.distance), null != e.center && (this.option.viewControl.center = e.center)
      }
    }
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return e instanceof Array || (e = [e, e]), e
    }
    var i = r(7),
      a = r(26),
      o = r(3),
      s = (r(56), r(2)),
      u = s.a.firstNotNull,
      l = {
        left: 0,
        middle: 1,
        right: 2
      },
      h = i.a.extend(function () {
        return {
          zr: null,
          viewGL: null,
          _center: new o.a,
          minDistance: .5,
          maxDistance: 1.5,
          maxOrthographicSize: 300,
          minOrthographicSize: 30,
          minAlpha: -90,
          maxAlpha: 90,
          minBeta: -1 / 0,
          maxBeta: 1 / 0,
          autoRotateAfterStill: 0,
          autoRotateDirection: "cw",
          autoRotateSpeed: 60,
          damping: .8,
          rotateSensitivity: 1,
          zoomSensitivity: 1,
          panSensitivity: 1,
          panMouseButton: "middle",
          rotateMouseButton: "left",
          _mode: "rotate",
          _camera: null,
          _needsUpdate: !1,
          _rotating: !1,
          _phi: 0,
          _theta: 0,
          _mouseX: 0,
          _mouseY: 0,
          _rotateVelocity: new a.a,
          _panVelocity: new a.a,
          _distance: 500,
          _zoomSpeed: 0,
          _stillTimeout: 0,
          _animators: []
        }
      }, function () {
        ["_mouseDownHandler", "_mouseWheelHandler", "_mouseMoveHandler", "_mouseUpHandler", "_pinchHandler", "_contextMenuHandler", "_update"].forEach(function (e) {
          this[e] = this[e].bind(this)
        }, this)
      }, {
        init: function () {
          var e = this.zr;
          e && (e.on("mousedown", this._mouseDownHandler), e.on("globalout", this._mouseUpHandler), e.on("mousewheel", this._mouseWheelHandler), e.on("pinch", this._pinchHandler), e.animation.on("frame", this._update), e.dom.addEventListener("contextmenu", this._contextMenuHandler))
        },
        dispose: function () {
          var e = this.zr;
          e && (e.off("mousedown", this._mouseDownHandler), e.off("mousemove", this._mouseMoveHandler), e.off("mouseup", this._mouseUpHandler), e.off("mousewheel", this._mouseWheelHandler), e.off("pinch", this._pinchHandler), e.off("globalout", this._mouseUpHandler), e.dom.removeEventListener("contextmenu", this._contextMenuHandler), e.animation.off("frame", this._update)), this.stopAllAnimation()
        },
        getDistance: function () {
          return this._distance
        },
        setDistance: function (e) {
          this._distance = e, this._needsUpdate = !0
        },
        getOrthographicSize: function () {
          return this._orthoSize
        },
        setOrthographicSize: function (e) {
          this._orthoSize = e, this._needsUpdate = !0
        },
        getAlpha: function () {
          return this._theta / Math.PI * 180
        },
        getBeta: function () {
          return -this._phi / Math.PI * 180
        },
        getCenter: function () {
          return this._center.toArray()
        },
        setAlpha: function (e) {
          e = Math.max(Math.min(this.maxAlpha, e), this.minAlpha), this._theta = e / 180 * Math.PI, this._needsUpdate = !0
        },
        setBeta: function (e) {
          e = Math.max(Math.min(this.maxBeta, e), this.minBeta), this._phi = -e / 180 * Math.PI, this._needsUpdate = !0
        },
        setCenter: function (e) {
          this._center.setArray(e)
        },
        setViewGL: function (e) {
          this.viewGL = e
        },
        getCamera: function () {
          return this.viewGL.camera
        },
        setFromViewControlModel: function (e, t) {
          t = t || {};
          var r = t.baseDistance || 0,
            n = t.baseOrthoSize || 1,
            i = e.get("projection");
          "perspective" !== i && "orthographic" !== i && "isometric" !== i && (i = "perspective"), this._projection = i, this.viewGL.setProjection(i);
          var a = e.get("distance") + r,
            o = e.get("orthographicSize") + n;
          [
            ["damping", .8],
            ["autoRotate", !1],
            ["autoRotateAfterStill", 3],
            ["autoRotateDirection", "cw"],
            ["autoRotateSpeed", 10],
            ["minDistance", 30],
            ["maxDistance", 400],
            ["minOrthographicSize", 30],
            ["maxOrthographicSize", 300],
            ["minAlpha", -90],
            ["maxAlpha", 90],
            ["minBeta", -1 / 0],
            ["maxBeta", 1 / 0],
            ["rotateSensitivity", 1],
            ["zoomSensitivity", 1],
            ["panSensitivity", 1],
            ["panMouseButton", "left"],
            ["rotateMouseButton", "middle"]
          ].forEach(function (t) {
            this[t[0]] = u(e.get(t[0]), t[1])
          }, this), this.minDistance += r, this.maxDistance += r, this.minOrthographicSize += n, this.maxOrthographicSize += n;
          var s = e.ecModel,
            l = {};
          ["animation", "animationDurationUpdate", "animationEasingUpdate"].forEach(function (t) {
            l[t] = u(e.get(t), s && s.get(t))
          });
          var h = u(t.alpha, e.get("alpha")) || 0,
            c = u(t.beta, e.get("beta")) || 0,
            d = u(t.center, e.get("center")) || [0, 0, 0];
          l.animation && l.animationDurationUpdate > 0 && this._notFirst ? this.animateTo({
            alpha: h,
            beta: c,
            center: d,
            distance: a,
            targetOrthographicSize: o,
            easing: l.animationEasingUpdate,
            duration: l.animationDurationUpdate
          }) : (this.setDistance(a), this.setAlpha(h), this.setBeta(c), this.setCenter(d), this.setOrthographicSize(o)), this._notFirst = !0, this._validateProperties()
        },
        _validateProperties: function () {},
        animateTo: function (e) {
          var t = this.zr,
            r = this,
            n = {},
            i = {};
          return null != e.distance && (n.distance = this.getDistance(), i.distance = e.distance), null != e.orthographicSize && (n.orthographicSize = this.getOrthographicSize(), i.orthographicSize = e.orthographicSize), null != e.alpha && (n.alpha = this.getAlpha(), i.alpha = e.alpha), null != e.beta && (n.beta = this.getBeta(), i.beta = e.beta), null != e.center && (n.center = this.getCenter(), i.center = e.center), this._addAnimator(t.animation.animate(n).when(e.duration || 1e3, i).during(function () {
            null != n.alpha && r.setAlpha(n.alpha), null != n.beta && r.setBeta(n.beta), null != n.distance && r.setDistance(n.distance), null != n.center && r.setCenter(n.center), null != n.orthographicSize && r.setOrthographicSize(n.orthographicSize), r._needsUpdate = !0
          })).start(e.easing || "linear")
        },
        stopAllAnimation: function () {
          for (var e = 0; e < this._animators.length; e++) this._animators[e].stop();
          this._animators.length = 0
        },
        update: function () {
          this._needsUpdate = !0, this._update(20)
        },
        _isAnimating: function () {
          return this._animators.length > 0
        },
        _update: function (e) {
          if (this._rotating) {
            var t = ("cw" === this.autoRotateDirection ? 1 : -1) * this.autoRotateSpeed / 180 * Math.PI;
            this._phi -= t * e / 1e3, this._needsUpdate = !0
          } else this._rotateVelocity.len() > 0 && (this._needsUpdate = !0);
          (Math.abs(this._zoomSpeed) > .1 || this._panVelocity.len() > 0) && (this._needsUpdate = !0), this._needsUpdate && (e = Math.min(e, 50), this._updateDistanceOrSize(e), this._updatePan(e), this._updateRotate(e), this._updateTransform(), this.getCamera().update(), this.zr && this.zr.refresh(), this.trigger("update"), this._needsUpdate = !1)
        },
        _updateRotate: function (e) {
          var t = this._rotateVelocity;
          this._phi = t.y * e / 20 + this._phi, this._theta = t.x * e / 20 + this._theta, this.setAlpha(this.getAlpha()), this.setBeta(this.getBeta()), this._vectorDamping(t, Math.pow(this.damping, e / 16))
        },
        _updateDistanceOrSize: function (e) {
          "perspective" === this._projection ? this._setDistance(this._distance + this._zoomSpeed * e / 20) : this._setOrthoSize(this._orthoSize + this._zoomSpeed * e / 20), this._zoomSpeed *= Math.pow(this.damping, e / 16)
        },
        _setDistance: function (e) {
          this._distance = Math.max(Math.min(e, this.maxDistance), this.minDistance)
        },
        _setOrthoSize: function (e) {
          this._orthoSize = Math.max(Math.min(e, this.maxOrthographicSize), this.minOrthographicSize);
          var t = this.getCamera(),
            r = this._orthoSize,
            n = r / this.viewGL.viewport.height * this.viewGL.viewport.width;
          t.left = -n / 2, t.right = n / 2, t.top = r / 2, t.bottom = -r / 2
        },
        _updatePan: function (e) {
          var t = this._panVelocity,
            r = this._distance,
            n = this.getCamera(),
            i = n.worldTransform.y,
            a = n.worldTransform.x;
          this._center.scaleAndAdd(a, -t.x * r / 200).scaleAndAdd(i, -t.y * r / 200), this._vectorDamping(t, 0)
        },
        _updateTransform: function () {
          var e = this.getCamera(),
            t = new o.a,
            r = this._theta + Math.PI / 2,
            n = this._phi + Math.PI / 2,
            i = Math.sin(r);
          t.x = i * Math.cos(n), t.y = -Math.cos(r), t.z = i * Math.sin(n), e.position.copy(this._center).scaleAndAdd(t, this._distance), e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)
        },
        _startCountingStill: function () {
          clearTimeout(this._stillTimeout);
          var e = this.autoRotateAfterStill,
            t = this;
          !isNaN(e) && e > 0 && (this._stillTimeout = setTimeout(function () {
            t._rotating = !0
          }, 1e3 * e))
        },
        _vectorDamping: function (e, t) {
          var r = e.len();
          r *= t, r < 1e-4 && (r = 0), e.normalize().scale(r)
        },
        _decomposeTransform: function () {
          if (this.getCamera()) {
            this.getCamera().updateWorldTransform();
            var e = this.getCamera().worldTransform.z,
              t = Math.asin(e.y),
              r = Math.atan2(e.x, e.z);
            this._theta = t, this._phi = -r, this.setBeta(this.getBeta()), this.setAlpha(this.getAlpha()), this.getCamera().aspect ? this._setDistance(this.getCamera().position.dist(this._center)) : this._setOrthoSize(this.getCamera().top - this.getCamera().bottom)
          }
        },
        _mouseDownHandler: function (e) {
          if (!e.target && !this._isAnimating()) {
            var t = e.offsetX,
              r = e.offsetY;
            this.viewGL && !this.viewGL.containPoint(t, r) || (this.zr.on("mousemove", this._mouseMoveHandler), this.zr.on("mouseup", this._mouseUpHandler), e.event.targetTouches ? 1 === e.event.targetTouches.length && (this._mode = "rotate") : e.event.button === l[this.rotateMouseButton] ? this._mode = "rotate" : e.event.button === l[this.panMouseButton] ? this._mode = "pan" : this._mode = "", this._rotateVelocity.set(0, 0), this._rotating = !1, this.autoRotate && this._startCountingStill(), this._mouseX = e.offsetX, this._mouseY = e.offsetY)
          }
        },
        _mouseMoveHandler: function (e) {
          if (!(e.target && e.target.__isGLToZRProxy || this._isAnimating())) {
            var t = n(this.panSensitivity),
              r = n(this.rotateSensitivity);
            "rotate" === this._mode ? (this._rotateVelocity.y = (e.offsetX - this._mouseX) / this.zr.getHeight() * 2 * r[0], this._rotateVelocity.x = (e.offsetY - this._mouseY) / this.zr.getWidth() * 2 * r[1]) : "pan" === this._mode && (this._panVelocity.x = (e.offsetX - this._mouseX) / this.zr.getWidth() * t[0] * 400, this._panVelocity.y = (-e.offsetY + this._mouseY) / this.zr.getHeight() * t[1] * 400), this._mouseX = e.offsetX, this._mouseY = e.offsetY, e.event.preventDefault()
          }
        },
        _mouseWheelHandler: function (e) {
          if (!this._isAnimating()) {
            var t = e.event.wheelDelta || -e.event.detail;
            this._zoomHandler(e, t)
          }
        },
        _pinchHandler: function (e) {
          this._isAnimating() || (this._zoomHandler(e, e.pinchScale > 1 ? 1 : -1), this._mode = "")
        },
        _zoomHandler: function (e, t) {
          if (0 !== t) {
            var r = e.offsetX,
              n = e.offsetY;
            if (!this.viewGL || this.viewGL.containPoint(r, n)) {
              var i;
              i = "perspective" === this._projection ? Math.max(Math.max(Math.min(this._distance - this.minDistance, this.maxDistance - this._distance)) / 20, .5) : Math.max(Math.max(Math.min(this._orthoSize - this.minOrthographicSize, this.maxOrthographicSize - this._orthoSize)) / 20, .5), this._zoomSpeed = (t > 0 ? -1 : 1) * i * this.zoomSensitivity, this._rotating = !1, this.autoRotate && "rotate" === this._mode && this._startCountingStill(), e.event.preventDefault()
            }
          }
        },
        _mouseUpHandler: function () {
          this.zr.off("mousemove", this._mouseMoveHandler), this.zr.off("mouseup", this._mouseUpHandler)
        },
        _isRightMouseButtonUsed: function () {
          return "right" === this.rotateMouseButton || "right" === this.panMouseButton
        },
        _contextMenuHandler: function (e) {
          this._isRightMouseButtonUsed() && e.preventDefault()
        },
        _addAnimator: function (e) {
          var t = this._animators;
          return t.push(e), e.done(function () {
            var r = t.indexOf(e);
            r >= 0 && t.splice(r, 1)
          }), e
        }
      });
    Object.defineProperty(h.prototype, "autoRotate", {
      get: function (e) {
        return this._autoRotate
      },
      set: function (e) {
        this._autoRotate = e, this._rotating = e
      }
    }), t.a = h
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.lines3D.vertex\n\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\n\nattribute vec3 position: POSITION;\nattribute vec4 a_Color : COLOR;\nvarying vec4 v_Color;\n\nvoid main()\n{\n gl_Position = worldViewProjection * vec4(position, 1.0);\n v_Color = a_Color;\n}\n\n@end\n\n@export ecgl.lines3D.fragment\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\n\nvarying vec4 v_Color;\n\n@import clay.util.srgb\n\nvoid main()\n{\n#ifdef SRGB_DECODE\n gl_FragColor = sRGBToLinear(color * v_Color);\n#else\n gl_FragColor = color * v_Color;\n#endif\n}\n@end\n\n\n\n@export ecgl.lines3D.clipNear\n\nvec4 clipNear(vec4 p1, vec4 p2) {\n float n = (p1.w - near) / (p1.w - p2.w);\n return vec4(mix(p1.xy, p2.xy, n), -near, near);\n}\n\n@end\n\n@export ecgl.lines3D.expandLine\n#ifdef VERTEX_ANIMATION\n vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);\n vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);\n vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);\n#else\n vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);\n vec4 currProj = worldViewProjection * vec4(position, 1.0);\n vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);\n#endif\n\n if (currProj.w < 0.0) {\n if (nextProj.w > 0.0) {\n currProj = clipNear(currProj, nextProj);\n }\n else if (prevProj.w > 0.0) {\n currProj = clipNear(currProj, prevProj);\n }\n }\n\n vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;\n vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;\n vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;\n\n vec2 dir;\n float len = offset;\n if (position == positionPrev) {\n dir = normalize(nextScreen - currScreen);\n }\n else if (position == positionNext) {\n dir = normalize(currScreen - prevScreen);\n }\n else {\n vec2 dirA = normalize(currScreen - prevScreen);\n vec2 dirB = normalize(nextScreen - currScreen);\n\n vec2 tanget = normalize(dirA + dirB);\n\n float miter = 1.0 / max(dot(tanget, dirA), 0.5);\n len *= miter;\n dir = tanget;\n }\n\n dir = vec2(-dir.y, dir.x) * len;\n currScreen += dir;\n\n currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);\n@end\n\n\n@export ecgl.meshLines3D.vertex\n\nattribute vec3 position: POSITION;\nattribute vec3 positionPrev;\nattribute vec3 positionNext;\nattribute float offset;\nattribute vec4 a_Color : COLOR;\n\n#ifdef VERTEX_ANIMATION\nattribute vec3 prevPosition;\nattribute vec3 prevPositionPrev;\nattribute vec3 prevPositionNext;\nuniform float percent : 1.0;\n#endif\n\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform vec4 viewport : VIEWPORT;\nuniform float near : NEAR;\n\nvarying vec4 v_Color;\n\n@import ecgl.common.wireframe.vertexHeader\n\n@import ecgl.lines3D.clipNear\n\nvoid main()\n{\n @import ecgl.lines3D.expandLine\n\n gl_Position = currProj;\n\n v_Color = a_Color;\n\n @import ecgl.common.wireframe.vertexMain\n}\n@end\n\n\n@export ecgl.meshLines3D.fragment\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\n\nvarying vec4 v_Color;\n\n@import ecgl.common.wireframe.fragmentHeader\n\n@import clay.util.srgb\n\nvoid main()\n{\n#ifdef SRGB_DECODE\n gl_FragColor = sRGBToLinear(color * v_Color);\n#else\n gl_FragColor = color * v_Color;\n#endif\n\n @import ecgl.common.wireframe.fragmentMain\n}\n\n@end"
  }, function (e, t, r) {
    function n(e, t, r, n, i) {
      var a = 0,
        o = 0;
      null == n && (n = 1 / 0), null == i && (i = 1 / 0);
      var s = 0;
      t.eachChild(function (u, l) {
        var h, c, d = u.position,
          f = u.getBoundingRect(),
          p = t.childAt(l + 1),
          m = p && p.getBoundingRect();
        if ("horizontal" === e) {
          var g = f.width + (m ? -m.x + f.x : 0);
          h = a + g, h > n || u.newline ? (a = 0, h = g, o += s + r, s = f.height) : s = Math.max(s, f.height)
        } else {
          var _ = f.height + (m ? -m.y + f.y : 0);
          c = o + _, c > i || u.newline ? (a += s + r, o = 0, c = _, s = f.width) : s = Math.max(s, f.width)
        }
        u.newline || (d[0] = a, d[1] = o, "horizontal" === e ? a = h + r : o = c + r)
      })
    }

    function i(e, t, r) {
      var n = t.width,
        i = t.height,
        a = p(e.x, n),
        o = p(e.y, i),
        s = p(e.x2, n),
        u = p(e.y2, i);
      return (isNaN(a) || isNaN(parseFloat(e.x))) && (a = 0), (isNaN(s) || isNaN(parseFloat(e.x2))) && (s = n), (isNaN(o) || isNaN(parseFloat(e.y))) && (o = 0), (isNaN(u) || isNaN(parseFloat(e.y2))) && (u = i), r = m.normalizeCssArray(r || 0), {
        width: Math.max(s - a - r[1] - r[3], 0),
        height: Math.max(u - o - r[0] - r[2], 0)
      }
    }

    function a(e, t, r) {
      r = m.normalizeCssArray(r || 0);
      var n = t.width,
        i = t.height,
        a = p(e.left, n),
        o = p(e.top, i),
        s = p(e.right, n),
        u = p(e.bottom, i),
        l = p(e.width, n),
        h = p(e.height, i),
        c = r[2] + r[0],
        f = r[1] + r[3],
        g = e.aspect;
      switch (isNaN(l) && (l = n - s - f - a), isNaN(h) && (h = i - u - c - o), null != g && (isNaN(l) && isNaN(h) && (g > n / i ? l = .8 * n : h = .8 * i), isNaN(l) && (l = g * h), isNaN(h) && (h = l / g)), isNaN(a) && (a = n - s - l - f), isNaN(o) && (o = i - u - h - c), e.left || e.right) {
        case "center":
          a = n / 2 - l / 2 - r[3];
          break;
        case "right":
          a = n - l - f
      }
      switch (e.top || e.bottom) {
        case "middle":
        case "center":
          o = i / 2 - h / 2 - r[0];
          break;
        case "bottom":
          o = i - h - c
      }
      a = a || 0, o = o || 0, isNaN(l) && (l = n - f - a - (s || 0)), isNaN(h) && (h = i - c - o - (u || 0));
      var _ = new d(a + r[3], o + r[0], l, h);
      return _.margin = r, _
    }

    function o(e, t, r, n, i) {
      var o = !i || !i.hv || i.hv[0],
        s = !i || !i.hv || i.hv[1],
        u = i && i.boundingMode || "all";
      if (o || s) {
        var l;
        if ("raw" === u) l = "group" === e.type ? new d(0, 0, +t.width || 0, +t.height || 0) : e.getBoundingRect();
        else if (l = e.getBoundingRect(), e.needLocalTransform()) {
          var h = e.getLocalTransform();
          l = l.clone(), l.applyTransform(h)
        }
        t = a(c.defaults({
          width: l.width,
          height: l.height
        }, t), r, n);
        var f = e.position,
          p = o ? t.x - l.x : 0,
          m = s ? t.y - l.y : 0;
        e.attr("position", "raw" === u ? [p, m] : [f[0] + p, f[1] + m])
      }
    }

    function s(e, t) {
      return null != e[v[t][0]] || null != e[v[t][1]] && null != e[v[t][2]]
    }

    function u(e, t, r) {
      function n(r, n) {
        var o = {},
          u = 0,
          l = {},
          h = 0;
        if (g(r, function (t) {
            l[t] = e[t]
          }), g(r, function (e) {
            i(t, e) && (o[e] = l[e] = t[e]), a(o, e) && u++, a(l, e) && h++
          }), s[n]) return a(t, r[1]) ? l[r[2]] = null : a(t, r[2]) && (l[r[1]] = null), l;
        if (2 !== h && u) {
          if (u >= 2) return o;
          for (var c = 0; c < r.length; c++) {
            var d = r[c];
            if (!i(o, d) && i(e, d)) {
              o[d] = e[d];
              break
            }
          }
          return o
        }
        return l
      }

      function i(e, t) {
        return e.hasOwnProperty(t)
      }

      function a(e, t) {
        return null != e[t] && "auto" !== e[t]
      }

      function o(e, t, r) {
        g(e, function (e) {
          t[e] = r[e]
        })
      }!c.isObject(r) && (r = {});
      var s = r.ignoreSize;
      !c.isArray(s) && (s = [s, s]);
      var u = n(v[0], 0),
        l = n(v[1], 1);
      o(v[0], e, u), o(v[1], e, l)
    }

    function l(e) {
      return h({}, e)
    }

    function h(e, t) {
      return t && e && g(_, function (r) {
        t.hasOwnProperty(r) && (e[r] = t[r])
      }), e
    }
    var c = r(13),
      d = r(82),
      f = r(85),
      p = f.parsePercent,
      m = r(171),
      g = c.each,
      _ = ["left", "right", "top", "bottom", "width", "height"],
      v = [
        ["width", "left", "right"],
        ["height", "top", "bottom"]
      ],
      y = n,
      x = c.curry(n, "vertical"),
      T = c.curry(n, "horizontal");
    t.LOCATION_PARAMS = _, t.HV_NAMES = v, t.box = y, t.vbox = x, t.hbox = T, t.getAvailableSize = i, t.getLayoutRect = a, t.positionElement = o, t.sizeCalculable = s, t.mergeLayoutParam = u, t.getLayoutParams = l, t.copyLayoutParams = h
  }, function (e, t, r) {
    "use strict";
    var n = r(7),
      i = n.a.extend(function () {
        return {
          name: "",
          inputLinks: {},
          outputLinks: {},
          _prevOutputTextures: {},
          _outputTextures: {},
          _outputReferences: {},
          _rendering: !1,
          _rendered: !1,
          _compositor: null
        }
      }, {
        updateParameter: function (e, t) {
          var r = this.outputs[e],
            n = r.parameters,
            i = r._parametersCopy;
          if (i || (i = r._parametersCopy = {}), n)
            for (var a in n) "width" !== a && "height" !== a && (i[a] = n[a]);
          var o, s;
          return o = n.width instanceof Function ? n.width.call(this, t) : n.width, s = n.height instanceof Function ? n.height.call(this, t) : n.height, i.width === o && i.height === s || this._outputTextures[e] && this._outputTextures[e].dispose(t.gl), i.width = o, i.height = s, i
        },
        setParameter: function (e, t) {},
        getParameter: function (e) {},
        setParameters: function (e) {
          for (var t in e) this.setParameter(t, e[t])
        },
        render: function () {},
        getOutput: function (e, t) {
          if (null == t) return t = e, this._outputTextures[t];
          var r = this.outputs[t];
          if (r) return this._rendered ? r.outputLastFrame ? this._prevOutputTextures[t] : this._outputTextures[t] : this._rendering ? (this._prevOutputTextures[t] || (this._prevOutputTextures[t] = this._compositor.allocateTexture(r.parameters || {})), this._prevOutputTextures[t]) : (this.render(e), this._outputTextures[t])
        },
        removeReference: function (e) {
          if (0 === --this._outputReferences[e]) {
            this.outputs[e].keepLastFrame ? (this._prevOutputTextures[e] && this._compositor.releaseTexture(this._prevOutputTextures[e]), this._prevOutputTextures[e] = this._outputTextures[e]) : this._compositor.releaseTexture(this._outputTextures[e])
          }
        },
        link: function (e, t, r) {
          this.inputLinks[e] = {
            node: t,
            pin: r
          }, t.outputLinks[r] || (t.outputLinks[r] = []), t.outputLinks[r].push({
            node: this,
            pin: e
          }), this.pass.material.enableTexture(e)
        },
        clear: function () {
          this.inputLinks = {}, this.outputLinks = {}
        },
        updateReference: function (e) {
          if (!this._rendering) {
            this._rendering = !0;
            for (var t in this.inputLinks) {
              var r = this.inputLinks[t];
              r.node.updateReference(r.pin)
            }
            this._rendering = !1
          }
          e && this._outputReferences[e]++
        },
        beforeFrame: function () {
          this._rendered = !1;
          for (var e in this.outputLinks) this._outputReferences[e] = 0
        },
        afterFrame: function () {
          for (var e in this.outputLinks)
            if (this._outputReferences[e] > 0) {
              var t = this.outputs[e];
              t.keepLastFrame ? (this._prevOutputTextures[e] && this._compositor.releaseTexture(this._prevOutputTextures[e]), this._prevOutputTextures[e] = this._outputTextures[e]) : this._compositor.releaseTexture(this._outputTextures[e])
            }
        }
      });
    t.a = i
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      for (var r = 0, n = 1 / t, i = e; i > 0;) r += n * (i % t), i = Math.floor(i / t), n /= t;
      return r
    }
    t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n);
    t.a = function (e, t, r) {
      r = r || e.getSource();
      var n = t || i.a.getCoordinateSystemDimensions(e.get("coordinateSystem")) || ["x", "y", "z"],
        a = i.a.helper.createDimensions(r, {
          dimensionsDefine: r.dimensionsDefine || e.get("dimensions"),
          encodeDefine: r.encodeDefine || e.get("encode"),
          coordDimensions: n.map(function (t) {
            var r = e.getReferringComponents(t + "Axis3D")[0];
            return {
              type: r && "category" === r.get("type") ? "ordinal" : "float",
              name: t
            }
          })
        });
      "cartesian3D" === e.get("coordinateSystem") && a.forEach(function (t) {
        if (n.indexOf(t.coordDim) >= 0) {
          var r = e.getReferringComponents(t.coordDim + "Axis3D")[0];
          r && "category" === r.get("type") && (t.ordinalMeta = r.getOrdinalMeta())
        }
      });
      var o = i.a.helper.dataStack.enableDataStack(e, a, {
          byIndex: !0,
          stackedCoordDimension: "z"
        }),
        s = new i.a.List(a, e);
      return s.setCalculationInfo(o), s.initData(r), s
    }
  }, function (e, t) {
    function r(e, t, r) {
      return {
        seriesType: e,
        performRawSeries: !0,
        reset: function (e, n, i) {
          function a(t, r) {
            if ("function" == typeof u) {
              var n = e.getRawValue(r),
                i = e.getDataParams(r);
              t.setItemVisual(r, "symbolSize", u(n, i))
            }
            if (t.hasItemOption) {
              var a = t.getItemModel(r),
                o = a.getShallow("symbol", !0),
                s = a.getShallow("symbolSize", !0),
                l = a.getShallow("symbolKeepAspect", !0);
              null != o && t.setItemVisual(r, "symbol", o), null != s && t.setItemVisual(r, "symbolSize", s), null != l && t.setItemVisual(r, "symbolKeepAspect", l)
            }
          }
          var o = e.getData(),
            s = e.get("symbol") || t,
            u = e.get("symbolSize"),
            l = e.get("symbolKeepAspect");
          if (o.setVisual({
              legendSymbol: r || s,
              symbol: s,
              symbolSize: u,
              symbolKeepAspect: l
            }), !n.isSeriesFiltered(e)) {
            var h = "function" == typeof u;
            return {
              dataEach: o.hasItemOption || h ? a : null
            }
          }
        }
      }
    }
    e.exports = r
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return e.material
    }

    function i(e, t, r) {
      return t.uniforms[r].value
    }

    function a(e, t, r, n) {
      return r !== n
    }

    function o(e) {
      return !0
    }

    function s() {}

    function u(e, t, r) {
      this.availableAttributes = e, this.availableAttributeSymbols = t, this.indicesBuffer = r, this.vao = null
    }

    function l(e) {
      var t, r;
      this.bind = function (e) {
        t || (t = f.a.createCanvas(), t.width = t.height = 1, t.getContext("2d"));
        var n = e.gl,
          i = !r;
        i && (r = n.createTexture()), n.bindTexture(n.TEXTURE_2D, r), i && n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, t)
      }, this.unbind = function (e) {
        e.gl.bindTexture(e.gl.TEXTURE_2D, null)
      }, this.isRenderable = function () {
        return !0
      }
    }
    var h = r(7),
      c = r(111),
      d = r(11),
      f = r(14),
      p = r(19),
      m = r(26),
      g = r(115),
      _ = r(8),
      v = r(71),
      y = r(21),
      x = r(12);
    _.a.import(v.a);
    var T = y.a.create,
      b = {},
      w = {
        float: d.a.FLOAT,
        byte: d.a.BYTE,
        ubyte: d.a.UNSIGNED_BYTE,
        short: d.a.SHORT,
        ushort: d.a.UNSIGNED_SHORT
      },
      E = h.a.extend(function () {
        return {
          canvas: null,
          _width: 100,
          _height: 100,
          devicePixelRatio: "undefined" != typeof window && window.devicePixelRatio || 1,
          clearColor: [0, 0, 0, 0],
          clearBit: 17664,
          alpha: !0,
          depth: !0,
          stencil: !1,
          antialias: !0,
          premultipliedAlpha: !0,
          preserveDrawingBuffer: !1,
          throwError: !0,
          gl: null,
          viewport: {},
          __currentFrameBuffer: null,
          _viewportStack: [],
          _clearStack: [],
          _sceneRendering: null
        }
      }, function () {
        this.canvas || (this.canvas = f.a.createCanvas());
        var e = this.canvas;
        try {
          var t = {
            alpha: this.alpha,
            depth: this.depth,
            stencil: this.stencil,
            antialias: this.antialias,
            premultipliedAlpha: this.premultipliedAlpha,
            preserveDrawingBuffer: this.preserveDrawingBuffer
          };
          if (this.gl = e.getContext("webgl", t) || e.getContext("experimental-webgl", t), !this.gl) throw new Error;
          this._glinfo = new c.a(this.gl), this.gl.targetRenderer && console.error("Already created a renderer"), this.gl.targetRenderer = this, this.resize()
        } catch (e) {
          throw "Error creating WebGL Context " + e
        }
        this._programMgr = new g.a(this), this._placeholderTexture = new l(this)
      }, {
        resize: function (e, t) {
          var r = this.canvas,
            n = this.devicePixelRatio;
          null != e ? (r.style.width = e + "px", r.style.height = t + "px", r.width = e * n, r.height = t * n, this._width = e, this._height = t) : (this._width = r.width / n, this._height = r.height / n), this.setViewport(0, 0, this._width, this._height)
        },
        getWidth: function () {
          return this._width
        },
        getHeight: function () {
          return this._height
        },
        getViewportAspect: function () {
          var e = this.viewport;
          return e.width / e.height
        },
        setDevicePixelRatio: function (e) {
          this.devicePixelRatio = e, this.resize(this._width, this._height)
        },
        getDevicePixelRatio: function () {
          return this.devicePixelRatio
        },
        getGLExtension: function (e) {
          return this._glinfo.getExtension(e)
        },
        getGLParameter: function (e) {
          return this._glinfo.getParameter(e)
        },
        setViewport: function (e, t, r, n, i) {
          if ("object" == typeof e) {
            var a = e;
            e = a.x, t = a.y, r = a.width, n = a.height, i = a.devicePixelRatio
          }
          i = i || this.devicePixelRatio, this.gl.viewport(e * i, t * i, r * i, n * i), this.viewport = {
            x: e,
            y: t,
            width: r,
            height: n,
            devicePixelRatio: i
          }
        },
        saveViewport: function () {
          this._viewportStack.push(this.viewport)
        },
        restoreViewport: function () {
          this._viewportStack.length > 0 && this.setViewport(this._viewportStack.pop())
        },
        saveClear: function () {
          this._clearStack.push({
            clearBit: this.clearBit,
            clearColor: this.clearColor
          })
        },
        restoreClear: function () {
          if (this._clearStack.length > 0) {
            var e = this._clearStack.pop();
            this.clearColor = e.clearColor, this.clearBit = e.clearBit
          }
        },
        bindSceneRendering: function (e) {
          this._sceneRendering = e
        },
        render: function (e, t, r, n) {
          var i = this.gl,
            a = this.clearColor;
          if (this.clearBit) {
            i.colorMask(!0, !0, !0, !0), i.depthMask(!0);
            var o = this.viewport,
              s = !1,
              u = o.devicePixelRatio;
            (o.width !== this._width || o.height !== this._height || u && u !== this.devicePixelRatio || o.x || o.y) && (s = !0, i.enable(i.SCISSOR_TEST), i.scissor(o.x * u, o.y * u, o.width * u, o.height * u)), i.clearColor(a[0], a[1], a[2], a[3]), i.clear(this.clearBit), s && i.disable(i.SCISSOR_TEST)
          }
          if (r || e.update(!1), e.updateLights(), !(t = t || e.getMainCamera())) return void console.error("Can't find camera in the scene.");
          t.update();
          var l = e.updateRenderList(t, !0);
          this._sceneRendering = e;
          var h = l.opaque,
            c = l.transparent,
            d = e.material;
          e.trigger("beforerender", this, e, t, l), n ? (this.renderPreZ(h, e, t), i.depthFunc(i.LEQUAL)) : i.depthFunc(i.LESS);
          for (var f = T(), p = x.a.create(), m = 0; m < c.length; m++) {
            var g = c[m];
            y.a.multiplyAffine(f, t.viewMatrix.array, g.worldTransform.array), x.a.transformMat4(p, g.position.array, f), g.__depth = p[2]
          }
          this.renderPass(h, t, {
            getMaterial: function (e) {
              return d || e.material
            },
            sortCompare: this.opaqueSortCompare
          }), this.renderPass(c, t, {
            getMaterial: function (e) {
              return d || e.material
            },
            sortCompare: this.transparentSortCompare
          }), e.trigger("afterrender", this, e, t, l), this._sceneRendering = null
        },
        getProgram: function (e, t, r) {
          return t = t || e.material, this._programMgr.getProgram(e, t, r)
        },
        validateProgram: function (e) {
          if (e.__error) {
            var t = e.__error;
            if (b[e.__uid__]) return;
            if (b[e.__uid__] = !0, this.throwError) throw new Error(t);
            this.trigger("error", t)
          }
        },
        updatePrograms: function (e, t, r) {
          var i = r && r.getMaterial || n;
          t = t || null;
          for (var a = 0; a < e.length; a++) {
            var o = e[a],
              s = i.call(this, o);
            if (a > 0) {
              var u = e[a - 1],
                l = u.joints ? u.joints.length : 0;
              if ((o.joints ? o.joints.length : 0) === l && o.material === u.material && o.lightGroup === u.lightGroup) {
                o.__program = u.__program;
                continue
              }
            }
            var h = this._programMgr.getProgram(o, s, t);
            this.validateProgram(h), o.__program = h
          }
        },
        renderPass: function (e, t, r) {
          this.trigger("beforerenderpass", this, e, t, r), r = r || {}, r.getMaterial = r.getMaterial || n, r.getUniform = r.getUniform || i, r.isMaterialChanged = r.isMaterialChanged || a, r.beforeRender = r.beforeRender || s, r.afterRender = r.afterRender || s;
          var u = r.ifRender || o;
          this.updatePrograms(e, this._sceneRendering, r), r.sortCompare && e.sort(r.sortCompare);
          var l = this.viewport,
            h = l.devicePixelRatio,
            c = [l.x * h, l.y * h, l.width * h, l.height * h],
            d = this.devicePixelRatio,
            f = this.__currentFrameBuffer ? [this.__currentFrameBuffer.getTextureWidth(), this.__currentFrameBuffer.getTextureHeight()] : [this._width * d, this._height * d],
            p = [c[2], c[3]],
            m = Date.now();
          t ? (y.a.copy(S.VIEW, t.viewMatrix.array), y.a.copy(S.PROJECTION, t.projectionMatrix.array), y.a.copy(S.VIEWINVERSE, t.worldTransform.array)) : (y.a.identity(S.VIEW), y.a.identity(S.PROJECTION), y.a.identity(S.VIEWINVERSE)), y.a.multiply(S.VIEWPROJECTION, S.PROJECTION, S.VIEW), y.a.invert(S.PROJECTIONINVERSE, S.PROJECTION), y.a.invert(S.VIEWPROJECTIONINVERSE, S.VIEWPROJECTION);
          for (var g, _, v, x, T, b, w, E, A, M, C, L, D = this.gl, N = this._sceneRendering, R = this.getGLExtension("OES_vertex_array_object"), P = 0; P < e.length; P++) {
            var I, O = e[P],
              F = null != O.worldTransform;
            if (u(O)) {
              F && (I = O.isSkinnedMesh && O.isSkinnedMesh() ? S.IDENTITY : O.worldTransform.array);
              var B = O.geometry,
                U = r.getMaterial.call(this, O),
                z = O.__program,
                G = U.shader,
                H = B.__uid__ + "-" + z.__uid__,
                V = H !== M;
              M = H, V && R && R.bindVertexArrayOES(null), F && (y.a.copy(S.WORLD, I), y.a.multiply(S.WORLDVIEWPROJECTION, S.VIEWPROJECTION, I), y.a.multiplyAffine(S.WORLDVIEW, S.VIEW, I), (G.matrixSemantics.WORLDINVERSE || G.matrixSemantics.WORLDINVERSETRANSPOSE) && y.a.invert(S.WORLDINVERSE, I), (G.matrixSemantics.WORLDVIEWINVERSE || G.matrixSemantics.WORLDVIEWINVERSETRANSPOSE) && y.a.invert(S.WORLDVIEWINVERSE, S.WORLDVIEW), (G.matrixSemantics.WORLDVIEWPROJECTIONINVERSE || G.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE) && y.a.invert(S.WORLDVIEWPROJECTIONINVERSE, S.WORLDVIEWPROJECTION)), O.beforeRender && O.beforeRender(this), r.beforeRender.call(this, O, U, g);
              var k = z !== _;
              k ? (z.bind(this), z.setUniformOfSemantic(D, "VIEWPORT", c), z.setUniformOfSemantic(D, "WINDOW_SIZE", f), t && (z.setUniformOfSemantic(D, "NEAR", t.near), z.setUniformOfSemantic(D, "FAR", t.far)), z.setUniformOfSemantic(D, "DEVICEPIXELRATIO", h), z.setUniformOfSemantic(D, "TIME", m), z.setUniformOfSemantic(D, "VIEWPORT_SIZE", p), N && N.setLightUniforms(z, O.lightGroup, this)) : z = _, (k || r.isMaterialChanged(O, v, U, g)) && (U.depthTest !== x && (U.depthTest ? D.enable(D.DEPTH_TEST) : D.disable(D.DEPTH_TEST), x = U.depthTest), U.depthMask !== T && (D.depthMask(U.depthMask), T = U.depthMask), U.transparent !== A && (U.transparent ? D.enable(D.BLEND) : D.disable(D.BLEND), A = U.transparent), U.transparent && (U.blend ? U.blend(D) : (D.blendEquationSeparate(D.FUNC_ADD, D.FUNC_ADD), D.blendFuncSeparate(D.SRC_ALPHA, D.ONE_MINUS_SRC_ALPHA, D.ONE, D.ONE_MINUS_SRC_ALPHA))), L = this._bindMaterial(O, U, z, v || null, g || null, _ || null, r.getUniform), g = U);
              var W = G.matrixSemanticKeys;
              if (F)
                for (var j = 0; j < W.length; j++) {
                  var X = W[j],
                    q = G.matrixSemantics[X],
                    Z = S[X];
                  if (q.isTranspose) {
                    var Y = S[q.semanticNoTranspose];
                    y.a.transpose(Z, Y)
                  }
                  z.setUniform(D, q.type, q.symbol, Z)
                }
              O.cullFace !== w && (w = O.cullFace, D.cullFace(w)), O.frontFace !== E && (E = O.frontFace, D.frontFace(E)), O.culling !== b && (b = O.culling, b ? D.enable(D.CULL_FACE) : D.disable(D.CULL_FACE)), this._updateSkeleton(O, z, L), V && (C = this._bindVAO(R, G, B, z)), this._renderObject(O, C), r.afterRender(this, O), O.afterRender && O.afterRender(this), _ = z, v = O
            }
          }
          R && R.bindVertexArrayOES(null), this.trigger("afterrenderpass", this, e, t, r)
        },
        getMaxJointNumber: function () {
          return this._glinfo.getMaxJointNumber()
        },
        _updateSkeleton: function (e, t, r) {
          var n = this.gl,
            i = e.skeleton;
          if (i)
            if (i.update(), e.joints.length > this._glinfo.getMaxJointNumber()) {
              var a = i.getSubSkinMatricesTexture(e.__uid__, e.joints);
              t.useTextureSlot(this, a, r), t.setUniform(n, "1i", "skinMatricesTexture", r), t.setUniform(n, "1f", "skinMatricesTextureSize", a.width)
            } else {
              var o = i.getSubSkinMatrices(e.__uid__, e.joints);
              t.setUniformOfSemantic(n, "SKIN_MATRIX", o)
            }
        },
        _renderObject: function (e, t) {
          var r = this.gl,
            n = e.geometry,
            i = e.mode;
          if (null == i && (i = 4), t.indicesBuffer) {
            var a = this.getGLExtension("OES_element_index_uint"),
              o = a && n.indices instanceof Uint32Array,
              s = o ? r.UNSIGNED_INT : r.UNSIGNED_SHORT;
            r.drawElements(i, t.indicesBuffer.count, s, 0)
          } else r.drawArrays(i, 0, n.vertexCount)
        },
        _bindMaterial: function (e, t, r, n, i, a, o) {
          for (var s = this.gl, u = a === r, l = r.currentTextureSlot(), h = t.getEnabledUniforms(), c = t.getTextureUniforms(), d = this._placeholderTexture, f = 0; f < c.length; f++) {
            var p = c[f],
              m = o(e, t, p),
              g = t.uniforms[p].type;
            if ("t" === g && m) m.__slot = -1;
            else if ("tv" === g)
              for (var _ = 0; _ < m.length; _++) m[_] && (m[_].__slot = -1)
          }
          d.__slot = -1;
          for (var f = 0; f < h.length; f++) {
            var p = h[f],
              v = t.uniforms[p],
              m = o(e, t, p),
              g = v.type,
              y = "t" === g;
            if (y && (m && m.isRenderable() || (m = d)), i && u) {
              var x = o(n, i, p);
              if (y && (x && x.isRenderable() || (x = d)), x === m) {
                if (y) r.takeCurrentTextureSlot(this, null);
                else if ("tv" === g && m)
                  for (var _ = 0; _ < m.length; _++) r.takeCurrentTextureSlot(this, null);
                continue
              }
            }
            if (null != m)
              if (y)
                if (m.__slot < 0) {
                  var T = r.currentTextureSlot(),
                    b = r.setUniform(s, "1i", p, T);
                  b && (r.takeCurrentTextureSlot(this, m), m.__slot = T)
                } else r.setUniform(s, "1i", p, m.__slot);
            else if (Array.isArray(m)) {
              if (0 === m.length) continue;
              if ("tv" === g) {
                if (!r.hasUniform(p)) continue;
                for (var w = [], _ = 0; _ < m.length; _++) {
                  var E = m[_];
                  if (E.__slot < 0) {
                    var T = r.currentTextureSlot();
                    w.push(T), r.takeCurrentTextureSlot(this, E), E.__slot = T
                  } else w.push(E.__slot)
                }
                r.setUniform(s, "1iv", p, w)
              } else r.setUniform(s, v.type, p, m)
            } else r.setUniform(s, v.type, p, m)
          }
          var S = r.currentTextureSlot();
          return r.resetTextureSlot(l), S
        },
        _bindVAO: function (e, t, r, n) {
          var i = !r.dynamic,
            a = this.gl,
            o = this.__uid__ + "-" + n.__uid__,
            s = r.__vaoCache[o];
          if (!s) {
            var l = r.getBufferChunks(this);
            if (!l || !l.length) return;
            for (var h = l[0], c = h.attributeBuffers, d = h.indicesBuffer, f = [], p = [], m = 0; m < c.length; m++) {
              var g, _ = c[m],
                v = _.name,
                y = _.semantic;
              if (y) {
                var x = t.attributeSemantics[y];
                g = x && x.symbol
              } else g = v;
              g && n.attributes[g] && (f.push(_), p.push(g))
            }
            s = new u(f, p, d), i && (r.__vaoCache[o] = s)
          }
          var T = !0;
          e && i && (null == s.vao ? s.vao = e.createVertexArrayOES() : T = !1, e.bindVertexArrayOES(s.vao));
          var f = s.availableAttributes,
            d = s.indicesBuffer;
          if (T) {
            for (var b = n.enableAttributes(this, s.availableAttributeSymbols, e && i && s), m = 0; m < f.length; m++) {
              var E = b[m];
              if (-1 !== E) {
                var _ = f[m],
                  S = _.buffer,
                  A = _.size,
                  M = w[_.type] || a.FLOAT;
                a.bindBuffer(a.ARRAY_BUFFER, S), a.vertexAttribPointer(E, A, M, !1, 0, 0)
              }
            }
            r.isUseIndices() && a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, d.buffer)
          }
          return s
        },
        renderPreZ: function (e, t, r) {
          var n = this.gl,
            i = this._prezMaterial || new p.a({
              shader: new _.a(_.a.source("clay.prez.vertex"), _.a.source("clay.prez.fragment"))
            });
          this._prezMaterial = i, n.colorMask(!1, !1, !1, !1), n.depthMask(!0), this.renderPass(e, r, {
            ifRender: function (e) {
              return !e.ignorePreZ
            },
            isMaterialChanged: function (e, t) {
              var r = e.material,
                n = t.material;
              return r.get("diffuseMap") !== n.get("diffuseMap") || (r.get("alphaCutoff") || 0) !== (n.get("alphaCutoff") || 0)
            },
            getUniform: function (e, t, r) {
              if ("alphaMap" === r) return e.material.get("diffuseMap");
              if ("alphaCutoff" === r) {
                if (e.material.isDefined("fragment", "ALPHA_TEST") && e.material.get("diffuseMap")) {
                  return e.material.get("alphaCutoff") || 0
                }
                return 0
              }
              return t.get(r)
            },
            getMaterial: function () {
              return i
            },
            sort: this.opaqueSortCompare
          }), n.colorMask(!0, !0, !0, !0), n.depthMask(!0)
        },
        disposeScene: function (e) {
          this.disposeNode(e, !0, !0), e.dispose()
        },
        disposeNode: function (e, t, r) {
          e.getParent() && e.getParent().remove(e);
          var n = {};
          e.traverse(function (e) {
            var i = e.material;
            if (e.geometry && t && e.geometry.dispose(this), r && i && !n[i.__uid__]) {
              for (var a = i.getTextureUniforms(), o = 0; o < a.length; o++) {
                var s = a[o],
                  u = i.uniforms[s].value,
                  l = i.uniforms[s].type;
                if (u)
                  if ("t" === l) u.dispose && u.dispose(this);
                  else if ("tv" === l)
                  for (var h = 0; h < u.length; h++) u[h] && u[h].dispose && u[h].dispose(this)
              }
              n[i.__uid__] = !0
            }
            e.dispose && e.dispose(this)
          }, this)
        },
        disposeGeometry: function (e) {
          e.dispose(this)
        },
        disposeTexture: function (e) {
          e.dispose(this)
        },
        disposeFrameBuffer: function (e) {
          e.dispose(this)
        },
        dispose: function () {},
        screenToNDC: function (e, t, r) {
          r || (r = new m.a), t = this._height - t;
          var n = this.viewport,
            i = r.array;
          return i[0] = (e - n.x) / n.width, i[0] = 2 * i[0] - 1, i[1] = (t - n.y) / n.height, i[1] = 2 * i[1] - 1, r
        }
      });
    E.opaqueSortCompare = E.prototype.opaqueSortCompare = function (e, t) {
      return e.renderOrder === t.renderOrder ? e.__program === t.__program ? e.material === t.material ? e.geometry.__uid__ - t.geometry.__uid__ : e.material.__uid__ - t.material.__uid__ : e.__program && t.__program ? e.__program.__uid__ - t.__program.__uid__ : 0 : e.renderOrder - t.renderOrder
    }, E.transparentSortCompare = E.prototype.transparentSortCompare = function (e, t) {
      return e.renderOrder === t.renderOrder ? e.__depth === t.__depth ? e.__program === t.__program ? e.material === t.material ? e.geometry.__uid__ - t.geometry.__uid__ : e.material.__uid__ - t.material.__uid__ : e.__program && t.__program ? e.__program.__uid__ - t.__program.__uid__ : 0 : e.__depth - t.__depth : e.renderOrder - t.renderOrder
    };
    var S = {
      IDENTITY: T(),
      WORLD: T(),
      VIEW: T(),
      PROJECTION: T(),
      WORLDVIEW: T(),
      VIEWPROJECTION: T(),
      WORLDVIEWPROJECTION: T(),
      WORLDINVERSE: T(),
      VIEWINVERSE: T(),
      PROJECTIONINVERSE: T(),
      WORLDVIEWINVERSE: T(),
      VIEWPROJECTIONINVERSE: T(),
      WORLDVIEWPROJECTIONINVERSE: T(),
      WORLDTRANSPOSE: T(),
      VIEWTRANSPOSE: T(),
      PROJECTIONTRANSPOSE: T(),
      WORLDVIEWTRANSPOSE: T(),
      VIEWPROJECTIONTRANSPOSE: T(),
      WORLDVIEWPROJECTIONTRANSPOSE: T(),
      WORLDINVERSETRANSPOSE: T(),
      VIEWINVERSETRANSPOSE: T(),
      PROJECTIONINVERSETRANSPOSE: T(),
      WORLDVIEWINVERSETRANSPOSE: T(),
      VIEWPROJECTIONINVERSETRANSPOSE: T(),
      WORLDVIEWPROJECTIONINVERSETRANSPOSE: T()
    };
    E.COLOR_BUFFER_BIT = d.a.COLOR_BUFFER_BIT, E.DEPTH_BUFFER_BIT = d.a.DEPTH_BUFFER_BIT, E.STENCIL_BUFFER_BIT = d.a.STENCIL_BUFFER_BIT, t.a = E
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      this.action = e, this.context = t
    }
    var i = {
      trigger: function (e) {
        if (this.hasOwnProperty("__handlers__") && this.__handlers__.hasOwnProperty(e)) {
          var t = this.__handlers__[e],
            r = t.length,
            n = -1,
            i = arguments;
          switch (i.length) {
            case 1:
              for (; ++n < r;) t[n].action.call(t[n].context);
              return;
            case 2:
              for (; ++n < r;) t[n].action.call(t[n].context, i[1]);
              return;
            case 3:
              for (; ++n < r;) t[n].action.call(t[n].context, i[1], i[2]);
              return;
            case 4:
              for (; ++n < r;) t[n].action.call(t[n].context, i[1], i[2], i[3]);
              return;
            case 5:
              for (; ++n < r;) t[n].action.call(t[n].context, i[1], i[2], i[3], i[4]);
              return;
            default:
              for (; ++n < r;) t[n].action.apply(t[n].context, Array.prototype.slice.call(i, 1));
              return
          }
        }
      },
      on: function (e, t, r) {
        if (e && t) {
          var i = this.__handlers__ || (this.__handlers__ = {});
          if (i[e]) {
            if (this.has(e, t)) return
          } else i[e] = [];
          var a = new n(t, r || this);
          return i[e].push(a), this
        }
      },
      once: function (e, t, r) {
        function n() {
          i.off(e, n), t.apply(this, arguments)
        }
        if (e && t) {
          var i = this;
          return this.on(e, n, r)
        }
      },
      before: function (e, t, r) {
        if (e && t) return e = "before" + e, this.on(e, t, r)
      },
      after: function (e, t, r) {
        if (e && t) return e = "after" + e, this.on(e, t, r)
      },
      success: function (e, t) {
        return this.once("success", e, t)
      },
      error: function (e, t) {
        return this.once("error", e, t)
      },
      off: function (e, t) {
        var r = this.__handlers__ || (this.__handlers__ = {});
        if (!t) return void(r[e] = []);
        if (r[e]) {
          for (var n = r[e], i = [], a = 0; a < n.length; a++) t && n[a].action !== t && i.push(n[a]);
          r[e] = i
        }
        return this
      },
      has: function (e, t) {
        var r = this.__handlers__;
        if (!r || !r[e]) return !1;
        for (var n = r[e], i = 0; i < n.length; i++)
          if (n[i].action === t) return !0
      }
    };
    t.a = i
  }, function (e, t, r) {
    "use strict";
    var n = r(3),
      i = r(12),
      a = function (e, t) {
        this.origin = e || new n.a, this.direction = t || new n.a
      };
    a.prototype = {
      constructor: a,
      intersectPlane: function (e, t) {
        var r = e.normal.array,
          a = e.distance,
          o = this.origin.array,
          s = this.direction.array,
          u = i.a.dot(r, s);
        if (0 === u) return null;
        t || (t = new n.a);
        var l = (i.a.dot(r, o) - a) / u;
        return i.a.scaleAndAdd(t.array, o, s, -l), t._dirty = !0, t
      },
      mirrorAgainstPlane: function (e) {
        var t = i.a.dot(e.normal.array, this.direction.array);
        i.a.scaleAndAdd(this.direction.array, this.direction.array, e.normal.array, 2 * -t), this.direction._dirty = !0
      },
      distanceToPoint: function () {
        var e = i.a.create();
        return function (t) {
          i.a.sub(e, t, this.origin.array);
          var r = i.a.dot(e, this.direction.array);
          if (r < 0) return i.a.distance(this.origin.array, t);
          var n = i.a.lenSquared(e);
          return Math.sqrt(n - r * r)
        }
      }(),
      intersectSphere: function () {
        var e = i.a.create();
        return function (t, r, a) {
          var o = this.origin.array,
            s = this.direction.array;
          t = t.array, i.a.sub(e, t, o);
          var u = i.a.dot(e, s),
            l = i.a.squaredLength(e),
            h = l - u * u,
            c = r * r;
          if (!(h > c)) {
            var d = Math.sqrt(c - h),
              f = u - d,
              p = u + d;
            return a || (a = new n.a), f < 0 ? p < 0 ? null : (i.a.scaleAndAdd(a.array, o, s, p), a) : (i.a.scaleAndAdd(a.array, o, s, f), a)
          }
        }
      }(),
      intersectBoundingBox: function (e, t) {
        var r, a, o, s, u, l, h = this.direction.array,
          c = this.origin.array,
          d = e.min.array,
          f = e.max.array,
          p = 1 / h[0],
          m = 1 / h[1],
          g = 1 / h[2];
        if (p >= 0 ? (r = (d[0] - c[0]) * p, a = (f[0] - c[0]) * p) : (a = (d[0] - c[0]) * p, r = (f[0] - c[0]) * p), m >= 0 ? (o = (d[1] - c[1]) * m, s = (f[1] - c[1]) * m) : (s = (d[1] - c[1]) * m, o = (f[1] - c[1]) * m), r > s || o > a) return null;
        if ((o > r || r !== r) && (r = o), (s < a || a !== a) && (a = s), g >= 0 ? (u = (d[2] - c[2]) * g, l = (f[2] - c[2]) * g) : (l = (d[2] - c[2]) * g, u = (f[2] - c[2]) * g), r > l || u > a) return null;
        if ((u > r || r !== r) && (r = u), (l < a || a !== a) && (a = l), a < 0) return null;
        var _ = r >= 0 ? r : a;
        return t || (t = new n.a), i.a.scaleAndAdd(t.array, c, h, _), t
      },
      intersectTriangle: function () {
        var e = i.a.create(),
          t = i.a.create(),
          r = i.a.create(),
          a = i.a.create();
        return function (o, s, u, l, h, c) {
          var d = this.direction.array,
            f = this.origin.array;
          o = o.array, s = s.array, u = u.array, i.a.sub(e, s, o), i.a.sub(t, u, o), i.a.cross(a, t, d);
          var p = i.a.dot(e, a);
          if (l) {
            if (p > -1e-5) return null
          } else if (p > -1e-5 && p < 1e-5) return null;
          i.a.sub(r, f, o);
          var m = i.a.dot(a, r) / p;
          if (m < 0 || m > 1) return null;
          i.a.cross(a, e, r);
          var g = i.a.dot(d, a) / p;
          if (g < 0 || g > 1 || m + g > 1) return null;
          i.a.cross(a, e, t);
          var _ = -i.a.dot(r, a) / p;
          return _ < 0 ? null : (h || (h = new n.a), c && n.a.set(c, 1 - m - g, m, g), i.a.scaleAndAdd(h.array, f, d, _), h)
        }
      }(),
      applyTransform: function (e) {
        n.a.add(this.direction, this.direction, this.origin), n.a.transformMat4(this.origin, this.origin, e), n.a.transformMat4(this.direction, this.direction, e), n.a.sub(this.direction, this.direction, this.origin), n.a.normalize(this.direction, this.direction)
      },
      copy: function (e) {
        n.a.copy(this.origin, e.origin), n.a.copy(this.direction, e.direction)
      },
      clone: function () {
        var e = new a;
        return e.copy(this), e
      }
    }, t.a = a
  }, function (e, t, r) {
    "use strict";
    var n = r(20),
      i = r(12),
      a = r(33),
      o = r(34),
      s = {};
    s.create = function () {
      var e = new n.a(4);
      return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e
    }, s.rotationTo = function () {
      var e = i.a.create(),
        t = i.a.fromValues(1, 0, 0),
        r = i.a.fromValues(0, 1, 0);
      return function (n, a, o) {
        var u = i.a.dot(a, o);
        return u < -.999999 ? (i.a.cross(e, t, a), i.a.length(e) < 1e-6 && i.a.cross(e, r, a), i.a.normalize(e, e), s.setAxisAngle(n, e, Math.PI), n) : u > .999999 ? (n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1, n) : (i.a.cross(e, a, o), n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = 1 + u, s.normalize(n, n))
      }
    }(), s.setAxes = function () {
      var e = o.a.create();
      return function (t, r, n, i) {
        return e[0] = n[0], e[3] = n[1], e[6] = n[2], e[1] = i[0], e[4] = i[1], e[7] = i[2], e[2] = -r[0], e[5] = -r[1], e[8] = -r[2], s.normalize(t, s.fromMat3(t, e))
      }
    }(), s.clone = a.a.clone, s.fromValues = a.a.fromValues, s.copy = a.a.copy, s.set = a.a.set, s.identity = function (e) {
      return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e
    }, s.setAxisAngle = function (e, t, r) {
      r *= .5;
      var n = Math.sin(r);
      return e[0] = n * t[0], e[1] = n * t[1], e[2] = n * t[2], e[3] = Math.cos(r), e
    }, s.add = a.a.add, s.multiply = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = r[0],
        u = r[1],
        l = r[2],
        h = r[3];
      return e[0] = n * h + o * s + i * l - a * u, e[1] = i * h + o * u + a * s - n * l, e[2] = a * h + o * l + n * u - i * s, e[3] = o * h - n * s - i * u - a * l, e
    }, s.mul = s.multiply, s.scale = a.a.scale, s.rotateX = function (e, t, r) {
      r *= .5;
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = Math.sin(r),
        u = Math.cos(r);
      return e[0] = n * u + o * s, e[1] = i * u + a * s, e[2] = a * u - i * s, e[3] = o * u - n * s, e
    }, s.rotateY = function (e, t, r) {
      r *= .5;
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = Math.sin(r),
        u = Math.cos(r);
      return e[0] = n * u - a * s, e[1] = i * u + o * s, e[2] = a * u + n * s, e[3] = o * u - i * s, e
    }, s.rotateZ = function (e, t, r) {
      r *= .5;
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = Math.sin(r),
        u = Math.cos(r);
      return e[0] = n * u + i * s, e[1] = i * u - n * s, e[2] = a * u + o * s, e[3] = o * u - a * s, e
    }, s.calculateW = function (e, t) {
      var r = t[0],
        n = t[1],
        i = t[2];
      return e[0] = r, e[1] = n, e[2] = i, e[3] = Math.sqrt(Math.abs(1 - r * r - n * n - i * i)), e
    }, s.dot = a.a.dot, s.lerp = a.a.lerp, s.slerp = function (e, t, r, n) {
      var i, a, o, s, u, l = t[0],
        h = t[1],
        c = t[2],
        d = t[3],
        f = r[0],
        p = r[1],
        m = r[2],
        g = r[3];
      return a = l * f + h * p + c * m + d * g, a < 0 && (a = -a, f = -f, p = -p, m = -m, g = -g), 1 - a > 1e-6 ? (i = Math.acos(a), o = Math.sin(i), s = Math.sin((1 - n) * i) / o, u = Math.sin(n * i) / o) : (s = 1 - n, u = n), e[0] = s * l + u * f, e[1] = s * h + u * p, e[2] = s * c + u * m, e[3] = s * d + u * g, e
    }, s.invert = function (e, t) {
      var r = t[0],
        n = t[1],
        i = t[2],
        a = t[3],
        o = r * r + n * n + i * i + a * a,
        s = o ? 1 / o : 0;
      return e[0] = -r * s, e[1] = -n * s, e[2] = -i * s, e[3] = a * s, e
    }, s.conjugate = function (e, t) {
      return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e
    }, s.length = a.a.length, s.len = s.length, s.squaredLength = a.a.squaredLength, s.sqrLen = s.squaredLength, s.normalize = a.a.normalize, s.fromMat3 = function (e, t) {
      var r, n = t[0] + t[4] + t[8];
      if (n > 0) r = Math.sqrt(n + 1), e[3] = .5 * r, r = .5 / r, e[0] = (t[5] - t[7]) * r, e[1] = (t[6] - t[2]) * r, e[2] = (t[1] - t[3]) * r;
      else {
        var i = 0;
        t[4] > t[0] && (i = 1), t[8] > t[3 * i + i] && (i = 2);
        var a = (i + 1) % 3,
          o = (i + 2) % 3;
        r = Math.sqrt(t[3 * i + i] - t[3 * a + a] - t[3 * o + o] + 1), e[i] = .5 * r, r = .5 / r, e[3] = (t[3 * a + o] - t[3 * o + a]) * r, e[a] = (t[3 * a + i] + t[3 * i + a]) * r, e[o] = (t[3 * o + i] + t[3 * i + o]) * r
      }
      return e
    }, t.a = s
  }, function (e, t, r) {
    "use strict";
    var n = r(55),
      i = r(34),
      a = function (e, t, r, i) {
        e = e || 0, t = t || 0, r = r || 0, i = void 0 === i ? 1 : i, this.array = n.a.fromValues(e, t, r, i), this._dirty = !0
      };
    a.prototype = {
      constructor: a,
      add: function (e) {
        return n.a.add(this.array, this.array, e.array), this._dirty = !0, this
      },
      calculateW: function () {
        return n.a.calculateW(this.array, this.array), this._dirty = !0, this
      },
      set: function (e, t, r, n) {
        return this.array[0] = e, this.array[1] = t, this.array[2] = r, this.array[3] = n, this._dirty = !0, this
      },
      setArray: function (e) {
        return this.array[0] = e[0], this.array[1] = e[1], this.array[2] = e[2], this.array[3] = e[3], this._dirty = !0, this
      },
      clone: function () {
        return new a(this.x, this.y, this.z, this.w)
      },
      conjugate: function () {
        return n.a.conjugate(this.array, this.array), this._dirty = !0, this
      },
      copy: function (e) {
        return n.a.copy(this.array, e.array), this._dirty = !0, this
      },
      dot: function (e) {
        return n.a.dot(this.array, e.array)
      },
      fromMat3: function (e) {
        return n.a.fromMat3(this.array, e.array), this._dirty = !0, this
      },
      fromMat4: function () {
        var e = i.a.create();
        return function (t) {
          return i.a.fromMat4(e, t.array), i.a.transpose(e, e), n.a.fromMat3(this.array, e), this._dirty = !0, this
        }
      }(),
      identity: function () {
        return n.a.identity(this.array), this._dirty = !0, this
      },
      invert: function () {
        return n.a.invert(this.array, this.array), this._dirty = !0, this
      },
      len: function () {
        return n.a.len(this.array)
      },
      length: function () {
        return n.a.length(this.array)
      },
      lerp: function (e, t, r) {
        return n.a.lerp(this.array, e.array, t.array, r), this._dirty = !0, this
      },
      mul: function (e) {
        return n.a.mul(this.array, this.array, e.array), this._dirty = !0, this
      },
      mulLeft: function (e) {
        return n.a.multiply(this.array, e.array, this.array), this._dirty = !0, this
      },
      multiply: function (e) {
        return n.a.multiply(this.array, this.array, e.array), this._dirty = !0, this
      },
      multiplyLeft: function (e) {
        return n.a.multiply(this.array, e.array, this.array), this._dirty = !0, this
      },
      normalize: function () {
        return n.a.normalize(this.array, this.array), this._dirty = !0, this
      },
      rotateX: function (e) {
        return n.a.rotateX(this.array, this.array, e), this._dirty = !0, this
      },
      rotateY: function (e) {
        return n.a.rotateY(this.array, this.array, e), this._dirty = !0, this
      },
      rotateZ: function (e) {
        return n.a.rotateZ(this.array, this.array, e), this._dirty = !0, this
      },
      rotationTo: function (e, t) {
        return n.a.rotationTo(this.array, e.array, t.array), this._dirty = !0, this
      },
      setAxes: function (e, t, r) {
        return n.a.setAxes(this.array, e.array, t.array, r.array), this._dirty = !0, this
      },
      setAxisAngle: function (e, t) {
        return n.a.setAxisAngle(this.array, e.array, t), this._dirty = !0, this
      },
      slerp: function (e, t, r) {
        return n.a.slerp(this.array, e.array, t.array, r), this._dirty = !0, this
      },
      sqrLen: function () {
        return n.a.sqrLen(this.array)
      },
      squaredLength: function () {
        return n.a.squaredLength(this.array)
      },
      fromEuler: function (e, t) {
        return a.fromEuler(this, e, t)
      },
      toString: function () {
        return "[" + Array.prototype.join.call(this.array, ",") + "]"
      },
      toArray: function () {
        return Array.prototype.slice.call(this.array)
      }
    };
    var o = Object.defineProperty;
    if (o) {
      var s = a.prototype;
      o(s, "x", {
        get: function () {
          return this.array[0]
        },
        set: function (e) {
          this.array[0] = e, this._dirty = !0
        }
      }), o(s, "y", {
        get: function () {
          return this.array[1]
        },
        set: function (e) {
          this.array[1] = e, this._dirty = !0
        }
      }), o(s, "z", {
        get: function () {
          return this.array[2]
        },
        set: function (e) {
          this.array[2] = e, this._dirty = !0
        }
      }), o(s, "w", {
        get: function () {
          return this.array[3]
        },
        set: function (e) {
          this.array[3] = e, this._dirty = !0
        }
      })
    }
    a.add = function (e, t, r) {
      return n.a.add(e.array, t.array, r.array), e._dirty = !0, e
    }, a.set = function (e, t, r, i, a) {
      n.a.set(e.array, t, r, i, a), e._dirty = !0
    }, a.copy = function (e, t) {
      return n.a.copy(e.array, t.array), e._dirty = !0, e
    }, a.calculateW = function (e, t) {
      return n.a.calculateW(e.array, t.array), e._dirty = !0, e
    }, a.conjugate = function (e, t) {
      return n.a.conjugate(e.array, t.array), e._dirty = !0, e
    }, a.identity = function (e) {
      return n.a.identity(e.array), e._dirty = !0, e
    }, a.invert = function (e, t) {
      return n.a.invert(e.array, t.array), e._dirty = !0, e
    }, a.dot = function (e, t) {
      return n.a.dot(e.array, t.array)
    }, a.len = function (e) {
      return n.a.length(e.array)
    }, a.lerp = function (e, t, r, i) {
      return n.a.lerp(e.array, t.array, r.array, i), e._dirty = !0, e
    }, a.slerp = function (e, t, r, i) {
      return n.a.slerp(e.array, t.array, r.array, i), e._dirty = !0, e
    }, a.mul = function (e, t, r) {
      return n.a.multiply(e.array, t.array, r.array), e._dirty = !0, e
    }, a.multiply = a.mul, a.rotateX = function (e, t, r) {
      return n.a.rotateX(e.array, t.array, r), e._dirty = !0, e
    }, a.rotateY = function (e, t, r) {
      return n.a.rotateY(e.array, t.array, r), e._dirty = !0, e
    }, a.rotateZ = function (e, t, r) {
      return n.a.rotateZ(e.array, t.array, r), e._dirty = !0, e
    }, a.setAxisAngle = function (e, t, r) {
      return n.a.setAxisAngle(e.array, t.array, r), e._dirty = !0, e
    }, a.normalize = function (e, t) {
      return n.a.normalize(e.array, t.array), e._dirty = !0, e
    }, a.sqrLen = function (e) {
      return n.a.sqrLen(e.array)
    }, a.squaredLength = a.sqrLen, a.fromMat3 = function (e, t) {
      return n.a.fromMat3(e.array, t.array), e._dirty = !0, e
    }, a.setAxes = function (e, t, r, i) {
      return n.a.setAxes(e.array, t.array, r.array, i.array), e._dirty = !0, e
    }, a.rotationTo = function (e, t, r) {
      return n.a.rotationTo(e.array, t.array, r.array), e._dirty = !0, e
    }, a.fromEuler = function (e, t, r) {
      e._dirty = !0, t = t.array;
      var n = e.array,
        i = Math.cos(t[0] / 2),
        a = Math.cos(t[1] / 2),
        o = Math.cos(t[2] / 2),
        s = Math.sin(t[0] / 2),
        u = Math.sin(t[1] / 2),
        l = Math.sin(t[2] / 2),
        r = (r || "XYZ").toUpperCase();
      switch (r) {
        case "XYZ":
          n[0] = s * a * o + i * u * l, n[1] = i * u * o - s * a * l, n[2] = i * a * l + s * u * o, n[3] = i * a * o - s * u * l;
          break;
        case "YXZ":
          n[0] = s * a * o + i * u * l, n[1] = i * u * o - s * a * l, n[2] = i * a * l - s * u * o, n[3] = i * a * o + s * u * l;
          break;
        case "ZXY":
          n[0] = s * a * o - i * u * l, n[1] = i * u * o + s * a * l, n[2] = i * a * l + s * u * o, n[3] = i * a * o - s * u * l;
          break;
        case "ZYX":
          n[0] = s * a * o - i * u * l, n[1] = i * u * o + s * a * l, n[2] = i * a * l - s * u * o, n[3] = i * a * o + s * u * l;
          break;
        case "YZX":
          n[0] = s * a * o + i * u * l, n[1] = i * u * o + s * a * l, n[2] = i * a * l - s * u * o, n[3] = i * a * o - s * u * l;
          break;
        case "XZY":
          n[0] = s * a * o - i * u * l, n[1] = i * u * o - s * a * l, n[2] = i * a * l + s * u * o, n[3] = i * a * o + s * u * l
      }
    }, t.a = a
  }, function (e, t, r) {
    "use strict";
    var n = function () {
      this._contextId = 0, this._caches = [], this._context = {}
    };
    n.prototype = {
      use: function (e, t) {
        var r = this._caches;
        r[e] || (r[e] = {}, t && (r[e] = t())), this._contextId = e, this._context = r[e]
      },
      put: function (e, t) {
        this._context[e] = t
      },
      get: function (e) {
        return this._context[e]
      },
      dirty: function (e) {
        e = e || "";
        var t = "__dt__" + e;
        this.put(t, !0)
      },
      dirtyAll: function (e) {
        e = e || "";
        for (var t = "__dt__" + e, r = this._caches, n = 0; n < r.length; n++) r[n] && (r[n][t] = !0)
      },
      fresh: function (e) {
        e = e || "";
        var t = "__dt__" + e;
        this.put(t, !1)
      },
      freshAll: function (e) {
        e = e || "";
        for (var t = "__dt__" + e, r = this._caches, n = 0; n < r.length; n++) r[n] && (r[n][t] = !1)
      },
      isDirty: function (e) {
        e = e || "";
        var t = "__dt__" + e,
          r = this._context;
        return !r.hasOwnProperty(t) || !0 === r[t]
      },
      deleteContext: function (e) {
        delete this._caches[e], this._context = {}
      },
      delete: function (e) {
        delete this._context[e]
      },
      clearAll: function () {
        this._caches = {}
      },
      getContext: function () {
        return this._context
      },
      eachContext: function (e, t) {
        Object.keys(this._caches).forEach(function (r) {
          e && e.call(t, r)
        })
      },
      miss: function (e) {
        return !this._context.hasOwnProperty(e)
      }
    }, n.prototype.constructor = n, t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(35),
      i = r(9),
      a = r(59),
      o = r(54),
      s = r(33),
      u = r(12),
      l = n.a.extend(function () {
        return {
          projectionMatrix: new i.a,
          invProjectionMatrix: new i.a,
          viewMatrix: new i.a,
          frustum: new a.a
        }
      }, function () {
        this.update(!0)
      }, {
        update: function (e) {
          n.a.prototype.update.call(this, e), i.a.invert(this.viewMatrix, this.worldTransform), this.updateProjectionMatrix(), i.a.invert(this.invProjectionMatrix, this.projectionMatrix), this.frustum.setFromProjection(this.projectionMatrix)
        },
        setViewMatrix: function (e) {
          i.a.copy(this.viewMatrix, e), i.a.invert(this.worldTransform, e), this.decomposeWorldTransform()
        },
        decomposeProjectionMatrix: function () {},
        setProjectionMatrix: function (e) {
          i.a.copy(this.projectionMatrix, e), i.a.invert(this.invProjectionMatrix, e), this.decomposeProjectionMatrix()
        },
        updateProjectionMatrix: function () {},
        castRay: function () {
          var e = s.a.create();
          return function (t, r) {
            var n = void 0 !== r ? r : new o.a,
              i = t.array[0],
              a = t.array[1];
            return s.a.set(e, i, a, -1, 1), s.a.transformMat4(e, e, this.invProjectionMatrix.array), s.a.transformMat4(e, e, this.worldTransform.array), u.a.scale(n.origin.array, e, 1 / e[3]), s.a.set(e, i, a, 1, 1), s.a.transformMat4(e, e, this.invProjectionMatrix.array), s.a.transformMat4(e, e, this.worldTransform.array), u.a.scale(e, e, 1 / e[3]), u.a.sub(n.direction.array, e, n.origin.array), u.a.normalize(n.direction.array, n.direction.array), n.direction._dirty = !0, n.origin._dirty = !0, n
          }
        }()
      });
    t.a = l
  }, function (e, t, r) {
    "use strict";
    var n = r(18),
      i = r(74),
      a = r(12),
      o = a.a.set,
      s = a.a.copy,
      u = a.a.transformMat4,
      l = Math.min,
      h = Math.max,
      c = function () {
        this.planes = [];
        for (var e = 0; e < 6; e++) this.planes.push(new i.a);
        this.boundingBox = new n.a, this.vertices = [];
        for (var e = 0; e < 8; e++) this.vertices[e] = a.a.fromValues(0, 0, 0)
      };
    c.prototype = {
      setFromProjection: function (e) {
        var t = this.planes,
          r = e.array,
          n = r[0],
          i = r[1],
          a = r[2],
          s = r[3],
          u = r[4],
          l = r[5],
          h = r[6],
          c = r[7],
          d = r[8],
          f = r[9],
          p = r[10],
          m = r[11],
          g = r[12],
          _ = r[13],
          v = r[14],
          y = r[15];
        o(t[0].normal.array, s - n, c - u, m - d), t[0].distance = -(y - g), t[0].normalize(), o(t[1].normal.array, s + n, c + u, m + d), t[1].distance = -(y + g), t[1].normalize(), o(t[2].normal.array, s + i, c + l, m + f), t[2].distance = -(y + _), t[2].normalize(), o(t[3].normal.array, s - i, c - l, m - f), t[3].distance = -(y - _), t[3].normalize(), o(t[4].normal.array, s - a, c - h, m - p), t[4].distance = -(y - v), t[4].normalize(), o(t[5].normal.array, s + a, c + h, m + p), t[5].distance = -(y + v), t[5].normalize();
        var x = this.boundingBox,
          T = this.vertices;
        if (0 === y) {
          var b = l / n,
            w = -v / (p - 1),
            E = -v / (p + 1),
            S = -E / l,
            A = -w / l;
          x.min.set(-S * b, -S, E), x.max.set(S * b, S, w), o(T[0], -S * b, -S, E), o(T[1], -S * b, S, E), o(T[2], S * b, -S, E), o(T[3], S * b, S, E), o(T[4], -A * b, -A, w), o(T[5], -A * b, A, w), o(T[6], A * b, -A, w), o(T[7], A * b, A, w)
        } else {
          var M = (-1 - g) / n,
            C = (1 - g) / n,
            L = (1 - _) / l,
            D = (-1 - _) / l,
            N = (-1 - v) / p,
            R = (1 - v) / p;
          x.min.set(Math.min(M, C), Math.min(D, L), Math.min(R, N)), x.max.set(Math.max(C, M), Math.max(L, D), Math.max(N, R));
          var P = x.min.array,
            I = x.max.array;
          o(T[0], P[0], P[1], P[2]), o(T[1], P[0], I[1], P[2]), o(T[2], I[0], P[1], P[2]), o(T[3], I[0], I[1], P[2]), o(T[4], P[0], P[1], I[2]), o(T[5], P[0], I[1], I[2]), o(T[6], I[0], P[1], I[2]), o(T[7], I[0], I[1], I[2])
        }
      },
      getTransformedBoundingBox: function () {
        var e = a.a.create();
        return function (t, r) {
          var n = this.vertices,
            i = r.array,
            a = t.min,
            o = t.max,
            c = a.array,
            d = o.array,
            f = n[0];
          u(e, f, i), s(c, e), s(d, e);
          for (var p = 1; p < 8; p++) f = n[p], u(e, f, i), c[0] = l(e[0], c[0]), c[1] = l(e[1], c[1]), c[2] = l(e[2], c[2]), d[0] = h(e[0], d[0]), d[1] = h(e[1], d[1]), d[2] = h(e[2], d[2]);
          return a._dirty = !0, o._dirty = !0, t
        }
      }()
    }, t.a = c
  }, function (e, t) {
    var r = function () {
        this.head = null, this.tail = null, this._len = 0
      },
      n = r.prototype;
    n.insert = function (e) {
      var t = new i(e);
      return this.insertEntry(t), t
    }, n.insertEntry = function (e) {
      this.head ? (this.tail.next = e, e.prev = this.tail, e.next = null, this.tail = e) : this.head = this.tail = e, this._len++
    }, n.remove = function (e) {
      var t = e.prev,
        r = e.next;
      t ? t.next = r : this.head = r, r ? r.prev = t : this.tail = t, e.next = e.prev = null, this._len--
    }, n.len = function () {
      return this._len
    }, n.clear = function () {
      this.head = this.tail = null, this._len = 0
    };
    var i = function (e) {
        this.value = e, this.next, this.prev
      },
      a = function (e) {
        this._list = new r, this._map = {}, this._maxSize = e || 10, this._lastRemovedEntry = null
      },
      o = a.prototype;
    o.put = function (e, t) {
      var r = this._list,
        n = this._map,
        a = null;
      if (null == n[e]) {
        var o = r.len(),
          s = this._lastRemovedEntry;
        if (o >= this._maxSize && o > 0) {
          var u = r.head;
          r.remove(u), delete n[u.key], a = u.value, this._lastRemovedEntry = u
        }
        s ? s.value = t : s = new i(t), s.key = e, r.insertEntry(s), n[e] = s
      }
      return a
    }, o.get = function (e) {
      var t = this._map[e],
        r = this._list;
      if (null != t) return t !== r.tail && (r.remove(t), r.insertEntry(t)), t.value
    }, o.clear = function () {
      this._list.clear(), this._map = {}
    };
    var s = a;
    e.exports = s
  }, function (e, t, r) {
    "use strict";
    var n = r(5),
      i = r(27),
      a = r(14),
      o = r(62),
      s = r(75),
      u = r(36),
      l = r(122),
      h = r(123),
      c = {
        loadTexture: function (e, t, r, a) {
          var o;
          if ("function" == typeof t ? (r = t, a = r, t = {}) : t = t || {}, "string" == typeof e) {
            if (e.match(/.hdr$/) || "hdr" === t.fileType) return o = new n.a({
              width: 0,
              height: 0,
              sRGB: !1
            }), c._fetchTexture(e, function (e) {
              h.a.parseRGBE(e, o, t.exposure), o.dirty(), r && r(o)
            }, a), o;
            e.match(/.dds$/) || "dds" === t.fileType ? (o = new n.a({
              width: 0,
              height: 0
            }), c._fetchTexture(e, function (e) {
              l.a.parse(e, o), o.dirty(), r && r(o)
            }, a)) : (o = new n.a, o.load(e), o.success(r), o.error(a))
          } else "object" == typeof e && void 0 !== e.px && (o = new i.a, o.load(e), o.success(r), o.error(a));
          return o
        },
        loadPanorama: function (e, t, r, n, i, a) {
          var o = this;
          "function" == typeof n ? (i = n, a = i, n = {}) : n = n || {}, c.loadTexture(t, n, function (t) {
            t.flipY = n.flipY || !1, o.panoramaToCubeMap(e, t, r, n), t.dispose(e), i && i(r)
          }, a)
        },
        panoramaToCubeMap: function (e, t, r, n) {
          var i = new o.a,
            a = new s.a({
              scene: new u.a
            });
          return a.setEnvironmentMap(t), n = n || {}, n.encodeRGBM && a.material.define("fragment", "RGBM_ENCODE"), r.sRGB = t.sRGB, i.texture = r, i.render(e, a.scene), i.texture = null, i.dispose(e), r
        },
        heightToNormal: function (e, t) {
          var r = document.createElement("canvas"),
            n = r.width = e.width,
            i = r.height = e.height,
            a = r.getContext("2d");
          a.drawImage(e, 0, 0, n, i), t = t || !1;
          for (var o = a.getImageData(0, 0, n, i), s = a.createImageData(n, i), u = 0; u < o.data.length; u += 4) {
            if (t) {
              var l = o.data[u],
                h = o.data[u + 1],
                c = o.data[u + 2];
              if (Math.abs(l - h) + Math.abs(h - c) > 20) return console.warn("Given image is not a height map"), e
            }
            var d, f, p, m;
            u % (4 * n) == 0 ? (d = o.data[u], p = o.data[u + 4]) : u % (4 * n) == 4 * (n - 1) ? (d = o.data[u - 4], p = o.data[u]) : (d = o.data[u - 4], p = o.data[u + 4]), u < 4 * n ? (f = o.data[u], m = o.data[u + 4 * n]) : u > n * (i - 1) * 4 ? (f = o.data[u - 4 * n], m = o.data[u]) : (f = o.data[u - 4 * n], m = o.data[u + 4 * n]), s.data[u] = d - p + 127, s.data[u + 1] = f - m + 127, s.data[u + 2] = 255, s.data[u + 3] = 255
          }
          return a.putImageData(s, 0, 0), r
        },
        isHeightImage: function (e, t, r) {
          if (!e || !e.width || !e.height) return !1;
          var n = document.createElement("canvas"),
            i = n.getContext("2d"),
            a = t || 32;
          r = r || 20, n.width = n.height = a, i.drawImage(e, 0, 0, a, a);
          for (var o = i.getImageData(0, 0, a, a), s = 0; s < o.data.length; s += 4) {
            var u = o.data[s],
              l = o.data[s + 1],
              h = o.data[s + 2];
            if (Math.abs(u - l) + Math.abs(l - h) > r) return !1
          }
          return !0
        },
        _fetchTexture: function (e, t, r) {
          a.a.request.get({
            url: e,
            responseType: "arraybuffer",
            onload: t,
            onerror: r
          })
        },
        createChessboard: function (e, t, r, i) {
          e = e || 512, t = t || 64, r = r || "black", i = i || "white";
          var a = Math.ceil(e / t),
            o = document.createElement("canvas");
          o.width = e, o.height = e;
          var s = o.getContext("2d");
          s.fillStyle = i, s.fillRect(0, 0, e, e), s.fillStyle = r;
          for (var u = 0; u < a; u++)
            for (var l = 0; l < a; l++) {
              var h = l % 2 ? u % 2 : u % 2 - 1;
              h && s.fillRect(u * t, l * t, t, t)
            }
          return new n.a({
            image: o,
            anisotropic: 8
          })
        },
        createBlank: function (e) {
          var t = document.createElement("canvas");
          t.width = 1, t.height = 1;
          var r = t.getContext("2d");
          return r.fillStyle = e, r.fillRect(0, 0, 1, 1), new n.a({
            image: t
          })
        }
      };
    t.a = c
  }, function (e, t, r) {
    "use strict";
    var n = r(7),
      i = r(3),
      a = r(41),
      o = r(10),
      s = ["px", "nx", "py", "ny", "pz", "nz"],
      u = n.a.extend(function () {
        var e = {
            position: new i.a,
            far: 1e3,
            near: .1,
            texture: null,
            shadowMapPass: null
          },
          t = e._cameras = {
            px: new a.a({
              fov: 90
            }),
            nx: new a.a({
              fov: 90
            }),
            py: new a.a({
              fov: 90
            }),
            ny: new a.a({
              fov: 90
            }),
            pz: new a.a({
              fov: 90
            }),
            nz: new a.a({
              fov: 90
            })
          };
        return t.px.lookAt(i.a.POSITIVE_X, i.a.NEGATIVE_Y), t.nx.lookAt(i.a.NEGATIVE_X, i.a.NEGATIVE_Y), t.py.lookAt(i.a.POSITIVE_Y, i.a.POSITIVE_Z), t.ny.lookAt(i.a.NEGATIVE_Y, i.a.NEGATIVE_Z), t.pz.lookAt(i.a.POSITIVE_Z, i.a.NEGATIVE_Y), t.nz.lookAt(i.a.NEGATIVE_Z, i.a.NEGATIVE_Y), e._frameBuffer = new o.a, e
      }, {
        getCamera: function (e) {
          return this._cameras[e]
        },
        render: function (e, t, r) {
          var n = e.gl;
          r || t.update();
          for (var a = this.texture.width, o = 2 * Math.atan(a / (a - .5)) / Math.PI * 180, u = 0; u < 6; u++) {
            var l = s[u],
              h = this._cameras[l];
            if (i.a.copy(h.position, this.position), h.far = this.far, h.near = this.near, h.fov = o, this.shadowMapPass) {
              h.update();
              var c = t.getBoundingBox();
              c.applyTransform(h.viewMatrix), t.viewBoundingBoxLastFrame.copy(c), this.shadowMapPass.render(e, t, h, !0)
            }
            this._frameBuffer.attach(this.texture, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + u), this._frameBuffer.bind(e), e.render(t, h, !0), this._frameBuffer.unbind(e)
          }
        },
        dispose: function (e) {
          this._frameBuffer.dispose(e)
        }
      });
    t.a = u
  }, function (e, t, r) {
    "use strict";
    var n = r(1),
      i = r(165),
      a = r(166);
    n.a.Shader.import(a.a), t.a = n.a.Mesh.extend(function () {
      return {
        geometry: new i.a({
          dynamic: !0
        }),
        material: new n.a.Material({
          shader: n.a.createShader("ecgl.labels"),
          transparent: !0,
          depthMask: !1
        }),
        culling: !1,
        castShadow: !1,
        ignorePicking: !0
      }
    })
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      this.rootNode = new o.a.Node, this._triangulationResults = {}, this._shadersMap = o.a.COMMON_SHADERS.reduce(function (e, t) {
        return e[t] = o.a.createShader("ecgl." + t), e
      }, {}), this._linesShader = o.a.createShader("ecgl.meshLines3D");
      var t = {};
      o.a.COMMON_SHADERS.forEach(function (e) {
        t[e] = new o.a.Material({
          shader: o.a.createShader("ecgl." + e)
        })
      }), this._groundMaterials = t, this._groundMesh = new o.a.Mesh({
        geometry: new o.a.PlaneGeometry({
          dynamic: !0
        }),
        castShadow: !1,
        renderNormal: !0,
        $ignorePicking: !0
      }), this._groundMesh.rotation.rotateX(-Math.PI / 2), this._labelsBuilder = new d.a(512, 512, e), this._labelsBuilder.getMesh().renderOrder = 100, this._labelsBuilder.getMesh().material.depthTest = !1, this.rootNode.add(this._labelsBuilder.getMesh()), this._initMeshes(), this._api = e
    }
    var i = r(0),
      a = r.n(i),
      o = r(1),
      s = r(204),
      u = r(25),
      l = r(2),
      h = r(6),
      c = r(65),
      d = r(66),
      f = r(46),
      p = h.a.vec3;
    o.a.Shader.import(f.a), n.prototype = {
      constructor: n,
      extrudeY: !0,
      update: function (e, t, r, n, i) {
        var a = e.getData();
        null == n && (n = 0), null == i && (i = a.count()), this._startIndex = n, this._endIndex = i - 1, this._triangulation(e, n, i);
        var o = this._getShader(e.get("shading"));
        this._prepareMesh(e, o, r, n, i), this.rootNode.updateWorldTransform(), this._updateRegionMesh(e, r, n, i);
        var s = e.coordinateSystem;
        "geo3D" === s.type && this._updateGroundPlane(e, s, r);
        var u = this;
        this._labelsBuilder.updateData(a, n, i), this._labelsBuilder.getLabelPosition = function (e, t, r) {
          var n, i = a.getName(e),
            o = r;
          if ("geo3D" === s.type) {
            var l = s.getRegion(i);
            if (!l) return [NaN, NaN, NaN];
            n = l.center;
            return s.dataToPoint([n[0], n[1], o])
          }
          var h = u._triangulationResults[e - u._startIndex],
            n = u.extrudeY ? [(h.max[0] + h.min[0]) / 2, h.max[1] + o, (h.max[2] + h.min[2]) / 2] : [(h.max[0] + h.min[0]) / 2, (h.max[1] + h.min[1]) / 2, h.max[2] + o]
        }, this._data = a, this._labelsBuilder.updateLabels(), this._updateDebugWireframe(e), this._lastHoverDataIndex = 0
      },
      _initMeshes: function () {
        var e = this,
          t = function () {
            var t = new o.a.Mesh({
              name: "Polygon",
              material: new o.a.Material({
                shader: e._shadersMap.lambert
              }),
              geometry: new o.a.Geometry({
                sortTriangles: !0,
                dynamic: !0
              }),
              culling: !1,
              ignorePicking: !0,
              renderNormal: !0
            });
            return a.a.util.extend(t.geometry, c.a), t
          }(),
          r = new o.a.Mesh({
            material: new o.a.Material({
              shader: this._linesShader
            }),
            castShadow: !1,
            ignorePicking: !0,
            $ignorePicking: !0,
            geometry: new u.a({
              useNativeLine: !1
            })
          });
        this.rootNode.add(t), this.rootNode.add(r), t.material.define("both", "VERTEX_COLOR"), t.material.define("fragment", "DOUBLE_SIDED"), this._polygonMesh = t, this._linesMesh = r, this.rootNode.add(this._groundMesh)
      },
      _getShader: function (e) {
        var t = this._shadersMap[e];
        return t || (t = this._shadersMap.lambert), t.__shading = e, t
      },
      _prepareMesh: function (e, t, r, n, i) {
        for (var a = 0, s = 0, u = 0, l = 0, h = n; h < i; h++) {
          var c = this._getRegionPolygonInfo(h),
            d = this._getRegionLinesInfo(h, e, this._linesMesh.geometry);
          a += c.vertexCount, s += c.triangleCount, u += d.vertexCount, l += d.triangleCount
        }
        var f = this._polygonMesh,
          p = f.geometry;
        ["position", "normal", "texcoord0", "color"].forEach(function (e) {
          p.attributes[e].init(a)
        }), p.indices = a > 65535 ? new Uint32Array(3 * s) : new Uint16Array(3 * s), f.material.shader !== t && f.material.attachShader(t, !0), o.a.setMaterialFromModel(t.__shading, f.material, e, r), u > 0 && (this._linesMesh.geometry.resetOffset(), this._linesMesh.geometry.setVertexCount(u), this._linesMesh.geometry.setTriangleCount(l)), this._dataIndexOfVertex = new Uint32Array(a), this._vertexRangeOfDataIndex = new Uint32Array(2 * (i - n))
      },
      _updateRegionMesh: function (e, t, r, n) {
        for (var i = e.getData(), a = 0, s = 0, u = !1, h = this._polygonMesh, c = this._linesMesh, d = r; d < n; d++) {
          var f = e.getRegionModel(d),
            p = f.getModel("itemStyle"),
            m = p.get("color"),
            g = l.a.firstNotNull(p.get("opacity"), 1),
            _ = i.getItemVisual(d, "color", !0);
          null != _ && i.hasValue(d) && (m = _), i.setItemVisual(d, "color", m), i.setItemVisual(d, "opacity", g), m = o.a.parseColor(m);
          var v = o.a.parseColor(p.get("borderColor"));
          m[3] *= g, v[3] *= g;
          var y = m[3] < .99;
          h.material.set("color", [1, 1, 1, 1]), u = u || y;
          for (var x = l.a.firstNotNull(f.get("height", !0), e.get("regionHeight")), T = this._updatePolygonGeometry(e, h.geometry, d, x, a, s, m), b = a; b < T.vertexOffset; b++) this._dataIndexOfVertex[b] = d;
          this._vertexRangeOfDataIndex[2 * (d - r)] = a, this._vertexRangeOfDataIndex[2 * (d - r) + 1] = T.vertexOffset, a = T.vertexOffset, s = T.triangleOffset;
          var w = p.get("borderWidth"),
            E = w > 0;
          E && (w *= t.getDevicePixelRatio(), this._updateLinesGeometry(c.geometry, e, d, x, w, e.coordinateSystem.transform)), c.invisible = !E, c.material.set({
            color: v
          })
        }
        var h = this._polygonMesh;
        h.material.transparent = u, h.material.depthMask = !u, h.geometry.updateBoundingBox(), h.frontFace = this.extrudeY ? o.a.Mesh.CCW : o.a.Mesh.CW, h.material.get("normalMap") && h.geometry.generateTangents(), h.seriesIndex = e.seriesIndex, h.on("mousemove", this._onmousemove, this), h.on("mouseout", this._onmouseout, this)
      },
      _updateDebugWireframe: function (e) {
        var t = e.getModel("debug.wireframe");
        if (t.get("show")) {
          var r = o.a.parseColor(t.get("lineStyle.color") || "rgba(0,0,0,0.5)"),
            n = l.a.firstNotNull(t.get("lineStyle.width"), 1),
            i = this._polygonMesh;
          i.geometry.generateBarycentric(), i.material.define("both", "WIREFRAME_TRIANGLE"), i.material.set("wireframeLineColor", r), i.material.set("wireframeLineWidth", n)
        }
      },
      _onmousemove: function (e) {
        var t = this._dataIndexOfVertex[e.triangle[0]];
        null == t && (t = -1), t !== this._lastHoverDataIndex && (this.downplay(this._lastHoverDataIndex), this.highlight(t), this._labelsBuilder.updateLabels([t])), this._lastHoverDataIndex = t, this._polygonMesh.dataIndex = t
      },
      _onmouseout: function (e) {
        e.target && (this.downplay(this._lastHoverDataIndex), this._lastHoverDataIndex = -1, this._polygonMesh.dataIndex = -1), this._labelsBuilder.updateLabels([])
      },
      _updateGroundPlane: function (e, t, r) {
        var n = e.getModel("groundPlane", e);
        if (this._groundMesh.invisible = !n.get("show", !0), !this._groundMesh.invisible) {
          var i = e.get("shading"),
            a = this._groundMaterials[i];
          a || (a = this._groundMaterials.lambert), o.a.setMaterialFromModel(i, a, n, r), a.get("normalMap") && this._groundMesh.geometry.generateTangents(), this._groundMesh.material = a, this._groundMesh.material.set("color", o.a.parseColor(n.get("color"))), this._groundMesh.scale.set(t.size[0], t.size[2], 1)
        }
      },
      _triangulation: function (e, t, r) {
        this._triangulationResults = [];
        for (var n = [1 / 0, 1 / 0, 1 / 0], i = [-1 / 0, -1 / 0, -1 / 0], a = e.coordinateSystem, o = t; o < r; o++) {
          for (var u = [], l = e.getRegionPolygonCoords(o), h = 0; h < l.length; h++) {
            var c = l[h].exterior,
              d = l[h].interiors,
              f = [],
              m = [];
            if (!(c.length < 3)) {
              for (var g = 0, _ = 0; _ < c.length; _++) {
                var v = c[_];
                f[g++] = v[0], f[g++] = v[1]
              }
              for (var _ = 0; _ < d.length; _++)
                if (!(d[_].length < 3)) {
                  for (var y = f.length / 2, x = 0; x < d[_].length; x++) {
                    var v = d[_][x];
                    f.push(v[0]), f.push(v[1])
                  }
                  m.push(y)
                } for (var T = Object(s.a)(f, m), b = new Float64Array(f.length / 2 * 3), w = [], E = [1 / 0, 1 / 0, 1 / 0], S = [-1 / 0, -1 / 0, -1 / 0], A = 0, _ = 0; _ < f.length;) p.set(w, f[_++], 0, f[_++]), a && a.transform && p.transformMat4(w, w, a.transform), p.min(E, E, w), p.max(S, S, w), b[A++] = w[0], b[A++] = w[1], b[A++] = w[2];
              p.min(n, n, E), p.max(i, i, S), u.push({
                points: b,
                indices: T,
                min: E,
                max: S
              })
            }
          }
          this._triangulationResults.push(u)
        }
        this._geoBoundingBox = [n, i]
      },
      _getRegionPolygonInfo: function (e) {
        for (var t = this._triangulationResults[e - this._startIndex], r = 0, n = 0, i = 0; i < t.length; i++) r += t[i].points.length / 3, n += t[i].indices.length / 3;
        return {
          vertexCount: 2 * r + 4 * r,
          triangleCount: 2 * n + 2 * r
        }
      },
      _updatePolygonGeometry: function (e, t, r, n, i, a, o) {
        function s(e, t, r) {
          for (var n = e.points, a = n.length, s = [], u = [], l = 0; l < a; l += 3) s[0] = n[l], s[v] = t, s[y] = n[l + 2], u[0] = (n[l] * x[0] - T[0]) / w, u[1] = (n[l + 2] * x[y] - T[2]) / w, h.set(i, s), g && f.set(i, o), d.set(i++, u)
        }

        function u(e, t, r) {
          var n = i;
          s(e, t, r);
          for (var o = e.indices.length, u = 0; u < o; u++) _[3 * a + u] = e.indices[u] + n;
          a += e.indices.length / 3
        }
        for (var l = e.get("projectUVOnGround"), h = t.attributes.position, c = t.attributes.normal, d = t.attributes.texcoord0, f = t.attributes.color, m = this._triangulationResults[r - this._startIndex], g = f.value && o, _ = t.indices, v = this.extrudeY ? 1 : 2, y = this.extrudeY ? 2 : 1, x = [this.rootNode.worldTransform.x.len(), this.rootNode.worldTransform.y.len(), this.rootNode.worldTransform.z.len()], T = p.mul([], this._geoBoundingBox[0], x), b = p.mul([], this._geoBoundingBox[1], x), w = Math.max(b[0] - T[0], b[2] - T[2]), E = this.extrudeY ? [0, 1, 0] : [0, 0, 1], S = p.negate([], E), A = 0; A < m.length; A++) {
          var M = i,
            C = m[A];
          u(C, 0, 0), u(C, n, 0);
          for (var L = C.points.length / 3, D = 0; D < L; D++) c.set(M + D, S), c.set(M + D + L, E);
          for (var N = [0, 3, 1, 1, 3, 2], R = [
              [],
              [],
              [],
              []
            ], P = [], I = [], O = [], F = [], B = 0, D = 0; D < L; D++) {
            for (var U = (D + 1) % L, z = (C.points[3 * U] - C.points[3 * D]) * x[0], G = (C.points[3 * U + 2] - C.points[3 * D + 2]) * x[y], H = Math.sqrt(z * z + G * G), V = 0; V < 4; V++) {
              var k = 0 === V || 3 === V,
                W = 3 * (k ? D : U);
              R[V][0] = C.points[W], R[V][v] = V > 1 ? n : 0, R[V][y] = C.points[W + 2], h.set(i + V, R[V]), l ? (F[0] = (C.points[W] * x[0] - T[0]) / w, F[1] = (C.points[W + 2] * x[y] - T[y]) / w) : (F[0] = (k ? B : B + H) / w, F[1] = (R[V][v] * x[v] - T[v]) / w), d.set(i + V, F)
            }
            p.sub(P, R[1], R[0]), p.sub(I, R[3], R[0]), p.cross(O, P, I), p.normalize(O, O);
            for (var V = 0; V < 4; V++) c.set(i + V, O), g && f.set(i + V, o);
            for (var V = 0; V < 6; V++) _[3 * a + V] = N[V] + i;
            i += 4, a += 2, B += H
          }
        }
        return t.dirty(), {
          vertexOffset: i,
          triangleOffset: a
        }
      },
      _getRegionLinesInfo: function (e, t, r) {
        var n = 0,
          i = 0;
        t.getRegionModel(e).getModel("itemStyle").get("borderWidth") > 0 && t.getRegionPolygonCoords(e).forEach(function (e) {
          var t = e.exterior,
            a = e.interiors;
          n += r.getPolylineVertexCount(t), i += r.getPolylineTriangleCount(t);
          for (var o = 0; o < a.length; o++) n += r.getPolylineVertexCount(a[o]), i += r.getPolylineTriangleCount(a[o])
        }, this);
        return {
          vertexCount: n,
          triangleCount: i
        }
      },
      _updateLinesGeometry: function (e, t, r, n, i, a) {
        function o(e) {
          for (var t = new Float64Array(3 * e.length), r = 0, i = [], o = 0; o < e.length; o++) i[0] = e[o][0], i[1] = n + .1, i[2] = e[o][1], a && p.transformMat4(i, i, a), t[r++] = i[0], t[r++] = i[1], t[r++] = i[2];
          return t
        }
        var s = [1, 1, 1, 1];
        t.getRegionPolygonCoords(r).forEach(function (t) {
          var r = t.exterior,
            n = t.interiors;
          e.addPolyline(o(r), s, i);
          for (var a = 0; a < n.length; a++) e.addPolyline(o(n[a]), s, i)
        })
      },
      highlight: function (e) {
        var t = this._data;
        if (t) {
          var r = t.getItemModel(e),
            n = r.getModel("emphasis.itemStyle"),
            i = n.get("color"),
            s = l.a.firstNotNull(n.get("opacity"), t.getItemVisual(e, "opacity"), 1);
          if (null == i) {
            var u = t.getItemVisual(e, "color");
            i = a.a.color.lift(u, -.4)
          }
          null == s && (s = t.getItemVisual(e, "opacity"));
          var h = o.a.parseColor(i);
          h[3] *= s, this._setColorOfDataIndex(t, e, h)
        }
      },
      downplay: function (e) {
        var t = this._data;
        if (t) {
          var r = t.getItemVisual(e, "color"),
            n = l.a.firstNotNull(t.getItemVisual(e, "opacity"), 1),
            i = o.a.parseColor(r);
          i[3] *= n, this._setColorOfDataIndex(t, e, i)
        }
      },
      _setColorOfDataIndex: function (e, t, r) {
        if (!(t < this._startIndex && t > this._endIndex)) {
          t -= this._startIndex;
          for (var n = this._vertexRangeOfDataIndex[2 * t]; n < this._vertexRangeOfDataIndex[2 * t + 1]; n++) this._polygonMesh.geometry.attributes.color.set(n, r);
          this._polygonMesh.geometry.dirty(), this._api.getZr().refresh()
        }
      }
    }, t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(97),
      i = r(6),
      a = i.a.vec3,
      o = a.create(),
      s = a.create(),
      u = a.create();
    t.a = {
      needsSortTriangles: function () {
        return this.indices && this.sortTriangles
      },
      needsSortTrianglesProgressively: function () {
        return this.needsSortTriangles() && this.triangleCount >= 2e4
      },
      doSortTriangles: function (e, t) {
        var r = this.indices;
        if (0 === t) {
          var n = this.attributes.position,
            e = e.array;
          this._triangleZList && this._triangleZList.length === this.triangleCount || (this._triangleZList = new Float32Array(this.triangleCount), this._sortedTriangleIndices = new Uint32Array(this.triangleCount), this._indicesTmp = new r.constructor(r.length), this._triangleZListTmp = new Float32Array(this.triangleCount));
          for (var i, l = 0, h = 0; h < r.length;) {
            n.get(r[h++], o), n.get(r[h++], s), n.get(r[h++], u);
            var c = a.sqrDist(o, e),
              d = a.sqrDist(s, e),
              f = a.sqrDist(u, e),
              p = Math.min(c, d);
            p = Math.min(p, f), 3 === h ? (i = p, p = 0) : p -= i, this._triangleZList[l++] = p
          }
        }
        for (var m = this._sortedTriangleIndices, h = 0; h < m.length; h++) m[h] = h;
        if (this.triangleCount < 2e4) 0 === t && this._simpleSort(!0);
        else
          for (var h = 0; h < 3; h++) this._progressiveQuickSort(3 * t + h);
        for (var g = this._indicesTmp, _ = this._triangleZListTmp, v = this._triangleZList, h = 0; h < this.triangleCount; h++) {
          var y = 3 * m[h],
            x = 3 * h;
          g[x++] = r[y++], g[x++] = r[y++], g[x] = r[y], _[h] = v[m[h]]
        }
        var T = this._indicesTmp;
        this._indicesTmp = this.indices, this.indices = T;
        var T = this._triangleZListTmp;
        this._triangleZListTmp = this._triangleZList, this._triangleZList = T, this.dirtyIndices()
      },
      _simpleSort: function (e) {
        function t(e, t) {
          return r[t] - r[e]
        }
        var r = this._triangleZList,
          i = this._sortedTriangleIndices;
        e ? Array.prototype.sort.call(i, t) : n.a.sort(i, t, 0, i.length - 1)
      },
      _progressiveQuickSort: function (e) {
        var t = this._triangleZList,
          r = this._sortedTriangleIndices;
        this._quickSort = this._quickSort || new n.a, this._quickSort.step(r, function (e, r) {
          return t[r] - t[e]
        }, e)
      }
    }
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r) {
      this._labelsMesh = new s.a, this._labelTextureSurface = new o.a({
        width: 512,
        height: 512,
        devicePixelRatio: r.getDevicePixelRatio(),
        onupdate: function () {
          r.getZr().refresh()
        }
      }), this._api = r, this._labelsMesh.material.set("textureAtlas", this._labelTextureSurface.getTexture())
    }
    var i = r(0),
      a = r.n(i),
      o = r(81),
      s = r(63),
      u = r(2);
    n.prototype.getLabelPosition = function (e, t, r) {
      return [0, 0, 0]
    }, n.prototype.getLabelDistance = function (e, t, r) {
      return 0
    }, n.prototype.getMesh = function () {
      return this._labelsMesh
    }, n.prototype.updateData = function (e, t, r) {
      null == t && (t = 0), null == r && (r = e.count()), this._labelsVisibilitiesBits && this._labelsVisibilitiesBits.length === r - t || (this._labelsVisibilitiesBits = new Uint8Array(r - t));
      for (var n = ["label", "show"], i = ["emphasis", "label", "show"], a = t; a < r; a++) {
        var o = e.getItemModel(a),
          s = o.get(n),
          u = o.get(i);
        null == u && (u = s);
        var l = (s ? 1 : 0) | (u ? 2 : 0);
        this._labelsVisibilitiesBits[a - t] = l
      }
      this._start = t, this._end = r, this._data = e
    }, n.prototype.updateLabels = function (e) {
      if (this._data) {
        e = e || [];
        for (var t = e.length > 0, r = {}, n = 0; n < e.length; n++) r[e[n]] = !0;
        this._labelsMesh.geometry.convertToDynamicArray(!0), this._labelTextureSurface.clear();
        for (var i = ["label"], o = ["emphasis", "label"], s = this._data.hostModel, l = this._data, h = s.getModel(i), c = s.getModel(o, h), d = {
            left: "right",
            right: "left",
            top: "center",
            bottom: "center"
          }, f = {
            left: "middle",
            right: "middle",
            top: "bottom",
            bottom: "top"
          }, p = this._start; p < this._end; p++) {
          var m = !1;
          t && r[p] && (m = !0);
          if (this._labelsVisibilitiesBits[p - this._start] & (m ? 2 : 1)) {
            var g = l.getItemModel(p),
              _ = g.getModel(m ? o : i, m ? c : h),
              v = _.get("distance") || 0,
              y = _.get("position"),
              x = _.getModel("textStyle"),
              T = this._api.getDevicePixelRatio(),
              b = s.getFormattedLabel(p, m ? "emphasis" : "normal");
            if (null == b || "" === b) return;
            var w = new a.a.graphic.Text;
            a.a.graphic.setTextStyle(w.style, x, {
              text: b,
              textFill: x.get("color") || l.getItemVisual(p, "color") || "#000",
              textAlign: "left",
              textVerticalAlign: "top",
              opacity: u.a.firstNotNull(x.get("opacity"), l.getItemVisual(p, "opacity"), 1)
            });
            var E = w.getBoundingRect();
            E.height *= 1.2;
            var S = this._labelTextureSurface.add(w),
              A = d[y] || "center",
              M = f[y] || "bottom";
            this._labelsMesh.geometry.addSprite(this.getLabelPosition(p, y, v), [E.width * T, E.height * T], S, A, M, this.getLabelDistance(p, y, v) * T)
          }
        }
        this._labelsMesh.material.set("uvScale", this._labelTextureSurface.getCoordsScale()), this._labelTextureSurface.getZr().refreshImmediately(), this._labelsMesh.geometry.convertToTypedArray(), this._labelsMesh.geometry.dirty()
      }
    }, t.a = n
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      return e && t && e[0] === t[0] && e[1] === t[1]
    }

    function i(e, t) {
      this.rootNode = new s.a.Node, this.is2D = e, this._labelsBuilder = new h.a(256, 256, t), this._labelsBuilder.getMesh().renderOrder = 100, this.rootNode.add(this._labelsBuilder.getMesh()), this._api = t, this._spriteImageCanvas = document.createElement("canvas"), this._startDataIndex = 0, this._endDataIndex = 0, this._sizeScale = 1
    }
    var a = r(0),
      o = r.n(a),
      s = r(1),
      u = r(239),
      l = r(240),
      h = r(66),
      c = r(9),
      d = r(2);
    i.prototype = {
      constructor: i,
      highlightOnMouseover: !0,
      update: function (e, t, r, n, i) {
        var a = this._prevMesh;
        this._prevMesh = this._mesh, this._mesh = a;
        var o = e.getData();
        if (null == n && (n = 0), null == i && (i = o.count()), this._startDataIndex = n, this._endDataIndex = i - 1, !this._mesh) {
          var u = this._prevMesh && this._prevMesh.material;
          this._mesh = new l.a({
            renderOrder: 10,
            frustumCulling: !1
          }), u && (this._mesh.material = u)
        }
        var u = this._mesh.material,
          h = this._mesh.geometry,
          c = h.attributes;
        this.rootNode.remove(this._prevMesh), this.rootNode.add(this._mesh), this._setPositionTextureToMesh(this._mesh, this._positionTexture);
        var d = this._getSymbolInfo(e, n, i),
          f = r.getDevicePixelRatio(),
          p = e.getModel("itemStyle").getItemStyle(),
          m = e.get("large"),
          g = 1;
        d.maxSize > 2 ? (g = this._updateSymbolSprite(e, p, d, f), u.enableTexture("sprite")) : u.disableTexture("sprite"), c.position.init(i - n);
        var _ = [];
        if (m) {
          u.undefine("VERTEX_SIZE"), u.undefine("VERTEX_COLOR");
          var v = o.getVisual("color"),
            y = o.getVisual("opacity");
          s.a.parseColor(v, _), _[3] *= y, u.set({
            color: _,
            u_Size: d.maxSize * this._sizeScale
          })
        } else u.set({
          color: [1, 1, 1, 1]
        }), u.define("VERTEX_SIZE"), u.define("VERTEX_COLOR"), c.size.init(i - n), c.color.init(i - n), this._originalOpacity = new Float32Array(i - n);
        for (var x = o.getLayout("points"), T = c.position.value, b = 0; b < i - n; b++) {
          var w = 3 * b,
            E = 2 * b;
          if (this.is2D ? (T[w] = x[E], T[w + 1] = x[E + 1], T[w + 2] = -10) : (T[w] = x[w], T[w + 1] = x[w + 1], T[w + 2] = x[w + 2]), !m) {
            var v = o.getItemVisual(b, "color"),
              y = o.getItemVisual(b, "opacity");
            s.a.parseColor(v, _), _[3] *= y, c.color.set(b, _), _[3] < .99 && !0;
            var S = o.getItemVisual(b, "symbolSize");
            S = S instanceof Array ? Math.max(S[0], S[1]) : S, isNaN(S) && (S = 0), c.size.value[b] = S * g * this._sizeScale, this._originalOpacity[b] = _[3]
          }
        }
        this._mesh.sizeScale = g, h.updateBoundingBox(), h.dirty(), this._updateMaterial(e, p);
        var A = e.coordinateSystem;
        if (A && A.viewGL) {
          u[A.viewGL.isLinearSpace() ? "define" : "undefine"]("fragment", "SRGB_DECODE")
        }
        m || this._updateLabelBuilder(e, n, i), this._updateHandler(e, t, r), this._updateAnimation(e), this._api = r
      },
      getPointsMesh: function () {
        return this._mesh
      },
      updateLabels: function (e) {
        this._labelsBuilder.updateLabels(e)
      },
      hideLabels: function () {
        this.rootNode.remove(this._labelsBuilder.getMesh())
      },
      showLabels: function () {
        this.rootNode.add(this._labelsBuilder.getMesh())
      },
      _updateSymbolSprite: function (e, t, r, i) {
        r.maxSize = Math.min(2 * r.maxSize, 200);
        var a = [];
        return r.aspect > 1 ? (a[0] = r.maxSize, a[1] = r.maxSize / r.aspect) : (a[1] = r.maxSize, a[0] = r.maxSize * r.aspect), a[0] = a[0] || 1, a[1] = a[1] || 1, this._symbolType === r.type && n(this._symbolSize, a) && this._lineWidth === t.lineWidth || (u.a.createSymbolSprite(r.type, a, {
          fill: "#fff",
          lineWidth: t.lineWidth,
          stroke: "transparent",
          shadowColor: "transparent",
          minMargin: Math.min(a[0] / 2, 10)
        }, this._spriteImageCanvas), u.a.createSDFFromCanvas(this._spriteImageCanvas, Math.min(this._spriteImageCanvas.width, 32), 20, this._mesh.material.get("sprite").image), this._symbolType = r.type, this._symbolSize = a, this._lineWidth = t.lineWidth), this._spriteImageCanvas.width / r.maxSize * i
      },
      _updateMaterial: function (e, t) {
        var r = "lighter" === e.get("blendMode") ? s.a.additiveBlend : null,
          n = this._mesh.material;
        n.blend = r, n.set("lineWidth", t.lineWidth / 20);
        var i = s.a.parseColor(t.stroke);
        n.set("strokeColor", i), n.transparent = !0, n.depthMask = !1, n.depthTest = !this.is2D, n.sortVertices = !this.is2D
      },
      _updateLabelBuilder: function (e, t, r) {
        var n = e.getData(),
          i = this._mesh.geometry,
          a = i.attributes.position.value,
          t = this._startDataIndex,
          o = this._mesh.sizeScale;
        this._labelsBuilder.updateData(n, t, r), this._labelsBuilder.getLabelPosition = function (e, r, n) {
          var i = 3 * (e - t);
          return [a[i], a[i + 1], a[i + 2]]
        }, this._labelsBuilder.getLabelDistance = function (e, r, n) {
          return i.attributes.size.get(e - t) / o / 2 + n
        }, this._labelsBuilder.updateLabels()
      },
      _updateAnimation: function (e) {
        s.a.updateVertexAnimation([
          ["prevPosition", "position"],
          ["prevSize", "size"]
        ], this._prevMesh, this._mesh, e)
      },
      _updateHandler: function (e, t, r) {
        var n, i = e.getData(),
          a = this._mesh,
          o = this,
          s = -1,
          u = e.coordinateSystem && "cartesian3D" === e.coordinateSystem.type;
        u && (n = e.coordinateSystem.model), a.seriesIndex = e.seriesIndex, a.off("mousemove"), a.off("mouseout"), a.on("mousemove", function (t) {
          var l = t.vertexIndex + o._startDataIndex;
          l !== s && (this.highlightOnMouseover && (this.downplay(i, s), this.highlight(i, l), this._labelsBuilder.updateLabels([l])), u && r.dispatchAction({
            type: "grid3DShowAxisPointer",
            value: [i.get(e.coordDimToDataDim("x")[0], l), i.get(e.coordDimToDataDim("y")[0], l), i.get(e.coordDimToDataDim("z")[0], l)],
            grid3DIndex: n.componentIndex
          })), a.dataIndex = l, s = l
        }, this), a.on("mouseout", function (e) {
          var t = e.vertexIndex + o._startDataIndex;
          this.highlightOnMouseover && (this.downplay(i, t), this._labelsBuilder.updateLabels()), s = -1, a.dataIndex = -1, u && r.dispatchAction({
            type: "grid3DHideAxisPointer",
            grid3DIndex: n.componentIndex
          })
        }, this)
      },
      updateLayout: function (e, t, r) {
        var n = e.getData();
        if (this._mesh) {
          var i = this._mesh.geometry.attributes.position.value,
            a = n.getLayout("points");
          if (this.is2D)
            for (var o = 0; o < a.length / 2; o++) {
              var s = 3 * o,
                u = 2 * o;
              i[s] = a[u], i[s + 1] = a[u + 1], i[s + 2] = -10
            } else
              for (var o = 0; o < a.length; o++) i[o] = a[o];
          this._mesh.geometry.dirty(), r.getZr().refresh()
        }
      },
      updateView: function (e) {
        if (this._mesh) {
          var t = new c.a;
          c.a.mul(t, e.viewMatrix, this._mesh.worldTransform), c.a.mul(t, e.projectionMatrix, t), this._mesh.updateNDCPosition(t, this.is2D, this._api)
        }
      },
      highlight: function (e, t) {
        if (!(t > this._endDataIndex || t < this._startDataIndex)) {
          var r = e.getItemModel(t),
            n = r.getModel("emphasis.itemStyle"),
            i = n.get("color"),
            a = n.get("opacity");
          if (null == i) {
            var u = e.getItemVisual(t, "color");
            i = o.a.color.lift(u, -.4)
          }
          null == a && (a = e.getItemVisual(t, "opacity"));
          var l = s.a.parseColor(i);
          l[3] *= a, this._mesh.geometry.attributes.color.set(t - this._startDataIndex, l), this._mesh.geometry.dirtyAttribute("color"), this._api.getZr().refresh()
        }
      },
      downplay: function (e, t) {
        if (!(t > this._endDataIndex || t < this._startDataIndex)) {
          var r = e.getItemVisual(t, "color"),
            n = e.getItemVisual(t, "opacity"),
            i = s.a.parseColor(r);
          i[3] *= n, this._mesh.geometry.attributes.color.set(t - this._startDataIndex, i), this._mesh.geometry.dirtyAttribute("color"), this._api.getZr().refresh()
        }
      },
      fadeOutAll: function (e) {
        if (this._originalOpacity) {
          for (var t = this._mesh.geometry, r = 0; r < t.vertexCount; r++) {
            var n = this._originalOpacity[r] * e;
            t.attributes.color.value[4 * r + 3] = n
          }
          t.dirtyAttribute("color"), this._api.getZr().refresh()
        }
      },
      fadeInAll: function () {
        this.fadeOutAll(1)
      },
      setPositionTexture: function (e) {
        this._mesh && this._setPositionTextureToMesh(this._mesh, e), this._positionTexture = e
      },
      removePositionTexture: function () {
        this._positionTexture = null, this._mesh && this._setPositionTextureToMesh(this._mesh, null)
      },
      setSizeScale: function (e) {
        if (e !== this._sizeScale) {
          if (this._mesh) {
            var t = this._mesh.material.get("u_Size");
            this._mesh.material.set("u_Size", t / this._sizeScale * e);
            var r = this._mesh.geometry.attributes;
            if (r.size.value)
              for (var n = 0; n < r.size.value.length; n++) r.size.value[n] = r.size.value[n] / this._sizeScale * e
          }
          this._sizeScale = e
        }
      },
      _setPositionTextureToMesh: function (e, t) {
        t && e.material.set("positionTexture", t), e.material[t ? "enableTexture" : "disableTexture"]("positionTexture")
      },
      _getSymbolInfo: function (e, t, r) {
        if (e.get("large")) {
          var n, i, a = d.a.firstNotNull(e.get("symbolSize"), 1);
          return a instanceof Array ? (n = Math.max(a[0], a[1]), i = a[0] / a[1]) : (n = a, i = 1), {
            maxSize: a,
            type: e.get("symbol"),
            aspect: i
          }
        }
        for (var i, o = e.getData(), s = o.getItemVisual(0, "symbol") || "circle", n = 0, u = t; u < r; u++) {
          var l, a = o.getItemVisual(u, "symbolSize"),
            h = o.getItemVisual(u, "symbol");
          if (a instanceof Array) l = a[0] / a[1], n = Math.max(Math.max(a[0], a[1]), n);
          else {
            if (isNaN(a)) return;
            l = 1, n = Math.max(a, n)
          }
          s = h, i = l
        }
        return {
          maxSize: n,
          type: s,
          aspect: i
        }
      }
    }, t.a = i
  }, function (e, t) {
    var r;
    r = function () {
      return this
    }();
    try {
      r = r || Function("return this")() || (0, eval)("this")
    } catch (e) {
      "object" == typeof window && (r = window)
    }
    e.exports = r
  }, function (e, t, r) {
    "use strict";
    var n = r(114),
      i = function (e) {
        this._list = new n.a, this._map = {}, this._maxSize = e || 10
      };
    i.prototype.setMaxSize = function (e) {
      this._maxSize = e
    }, i.prototype.put = function (e, t) {
      if (!this._map.hasOwnProperty(e)) {
        var r = this._list.length();
        if (r >= this._maxSize && r > 0) {
          var n = this._list.head;
          this._list.remove(n), delete this._map[n.key]
        }
        var i = this._list.insert(t);
        i.key = e, this._map[e] = i
      }
    }, i.prototype.get = function (e) {
      var t = this._map[e];
      if (this._map.hasOwnProperty(e)) return t !== this._list.tail && (this._list.remove(t), this._list.insertEntry(t)), t.value
    }, i.prototype.remove = function (e) {
      var t = this._map[e];
      void 0 !== t && (delete this._map[e], this._list.remove(t))
    }, i.prototype.clear = function () {
      this._list.clear(), this._map = {}
    }, t.a = i
  }, function (e, t, r) {
    "use strict";
    var n = r(20),
      i = {};
    i.create = function () {
      var e = new n.a(2);
      return e[0] = 0, e[1] = 0, e
    }, i.clone = function (e) {
      var t = new n.a(2);
      return t[0] = e[0], t[1] = e[1], t
    }, i.fromValues = function (e, t) {
      var r = new n.a(2);
      return r[0] = e, r[1] = t, r
    }, i.copy = function (e, t) {
      return e[0] = t[0], e[1] = t[1], e
    }, i.set = function (e, t, r) {
      return e[0] = t, e[1] = r, e
    }, i.add = function (e, t, r) {
      return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e
    }, i.subtract = function (e, t, r) {
      return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e
    }, i.sub = i.subtract, i.multiply = function (e, t, r) {
      return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e
    }, i.mul = i.multiply, i.divide = function (e, t, r) {
      return e[0] = t[0] / r[0], e[1] = t[1] / r[1], e
    }, i.div = i.divide, i.min = function (e, t, r) {
      return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e
    }, i.max = function (e, t, r) {
      return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e
    }, i.scale = function (e, t, r) {
      return e[0] = t[0] * r, e[1] = t[1] * r, e
    }, i.scaleAndAdd = function (e, t, r, n) {
      return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e
    }, i.distance = function (e, t) {
      var r = t[0] - e[0],
        n = t[1] - e[1];
      return Math.sqrt(r * r + n * n)
    }, i.dist = i.distance, i.squaredDistance = function (e, t) {
      var r = t[0] - e[0],
        n = t[1] - e[1];
      return r * r + n * n
    }, i.sqrDist = i.squaredDistance, i.length = function (e) {
      var t = e[0],
        r = e[1];
      return Math.sqrt(t * t + r * r)
    }, i.len = i.length, i.squaredLength = function (e) {
      var t = e[0],
        r = e[1];
      return t * t + r * r
    }, i.sqrLen = i.squaredLength, i.negate = function (e, t) {
      return e[0] = -t[0], e[1] = -t[1], e
    }, i.inverse = function (e, t) {
      return e[0] = 1 / t[0], e[1] = 1 / t[1], e
    }, i.normalize = function (e, t) {
      var r = t[0],
        n = t[1],
        i = r * r + n * n;
      return i > 0 && (i = 1 / Math.sqrt(i), e[0] = t[0] * i, e[1] = t[1] * i), e
    }, i.dot = function (e, t) {
      return e[0] * t[0] + e[1] * t[1]
    }, i.cross = function (e, t, r) {
      var n = t[0] * r[1] - t[1] * r[0];
      return e[0] = e[1] = 0, e[2] = n, e
    }, i.lerp = function (e, t, r, n) {
      var i = t[0],
        a = t[1];
      return e[0] = i + n * (r[0] - i), e[1] = a + n * (r[1] - a), e
    }, i.random = function (e, t) {
      t = t || 1;
      var r = 2 * GLMAT_RANDOM() * Math.PI;
      return e[0] = Math.cos(r) * t, e[1] = Math.sin(r) * t, e
    }, i.transformMat2 = function (e, t, r) {
      var n = t[0],
        i = t[1];
      return e[0] = r[0] * n + r[2] * i, e[1] = r[1] * n + r[3] * i, e
    }, i.transformMat2d = function (e, t, r) {
      var n = t[0],
        i = t[1];
      return e[0] = r[0] * n + r[2] * i + r[4], e[1] = r[1] * n + r[3] * i + r[5], e
    }, i.transformMat3 = function (e, t, r) {
      var n = t[0],
        i = t[1];
      return e[0] = r[0] * n + r[3] * i + r[6], e[1] = r[1] * n + r[4] * i + r[7], e
    }, i.transformMat4 = function (e, t, r) {
      var n = t[0],
        i = t[1];
      return e[0] = r[0] * n + r[4] * i + r[12], e[1] = r[1] * n + r[5] * i + r[13], e
    }, i.forEach = function () {
      var e = i.create();
      return function (t, r, n, i, a, o) {
        var s, u;
        for (r || (r = 2), n || (n = 0), u = i ? Math.min(i * r + n, t.length) : t.length, s = n; s < u; s += r) e[0] = t[s], e[1] = t[s + 1], a(e, e, o), t[s] = e[0], t[s + 1] = e[1];
        return t
      }
    }(), t.a = i
  }, function (e, t, r) {
    "use strict";
    t.a = "@export clay.prez.vertex\nuniform mat4 WVP : WORLDVIEWPROJECTION;\nattribute vec3 pos : POSITION;\nattribute vec2 uv : TEXCOORD_0;\n@import clay.chunk.skinning_header\nvarying vec2 v_Texcoord;\nvoid main()\n{\n vec3 P = pos;\n#ifdef SKINNING\n @import clay.chunk.skin_matrix\n P = (skinMatrixWS * vec4(pos, 1.0)).xyz;\n#endif\n gl_Position = WVP * vec4(P, 1.0);\n v_Texcoord = uv;\n}\n@end\n@export clay.prez.fragment\nuniform sampler2D alphaMap;\nuniform float alphaCutoff: 0.0;\nvarying vec2 v_Texcoord;\nvoid main()\n{\n if (alphaCutoff > 0.0) {\n if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {\n discard;\n }\n }\n gl_FragColor = vec4(0.0,0.0,0.0,1.0);\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    var n = r(35),
      i = r(11),
      a = n.a.extend({
        material: null,
        geometry: null,
        mode: i.a.TRIANGLES,
        _renderInfo: null
      }, {
        __program: null,
        lightGroup: 0,
        renderOrder: 0,
        culling: !0,
        cullFace: i.a.BACK,
        frontFace: i.a.CCW,
        frustumCulling: !0,
        receiveShadow: !0,
        castShadow: !0,
        ignorePicking: !1,
        ignorePreZ: !1,
        ignoreGBuffer: !1,
        isRenderable: function () {
          return this.geometry && this.material && this.material.shader && !this.invisible && this.geometry.vertexCount > 0
        },
        beforeRender: function (e) {},
        afterRender: function (e, t) {},
        getBoundingBox: function (e, t) {
          return t = n.a.prototype.getBoundingBox.call(this, e, t), this.geometry && this.geometry.boundingBox && t.union(this.geometry.boundingBox), t
        },
        clone: function () {
          var e = ["castShadow", "receiveShadow", "mode", "culling", "cullFace", "frontFace", "frustumCulling", "renderOrder", "lineWidth", "ignorePicking", "ignorePreZ", "ignoreGBuffer"];
          return function () {
            var t = n.a.prototype.clone.call(this);
            t.geometry = this.geometry, t.material = this.material;
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              t[i] !== this[i] && (t[i] = this[i])
            }
            return t
          }
        }()
      });
    a.POINTS = i.a.POINTS, a.LINES = i.a.LINES, a.LINE_LOOP = i.a.LINE_LOOP, a.LINE_STRIP = i.a.LINE_STRIP, a.TRIANGLES = i.a.TRIANGLES, a.TRIANGLE_STRIP = i.a.TRIANGLE_STRIP, a.TRIANGLE_FAN = i.a.TRIANGLE_FAN, a.BACK = i.a.BACK, a.FRONT = i.a.FRONT, a.FRONT_AND_BACK = i.a.FRONT_AND_BACK, a.CW = i.a.CW, a.CCW = i.a.CCW, t.a = a
  }, function (e, t, r) {
    "use strict";
    var n = {};
    n.isPowerOfTwo = function (e) {
      return 0 == (e & e - 1)
    }, n.nextPowerOfTwo = function (e) {
      return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, ++e
    }, n.nearestPowerOfTwo = function (e) {
      return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
    }, t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(3),
      i = r(21),
      a = r(12),
      o = r(33),
      s = function (e, t) {
        this.normal = e || new n.a(0, 1, 0), this.distance = t || 0
      };
    s.prototype = {
      constructor: s,
      distanceToPoint: function (e) {
        return a.a.dot(e.array, this.normal.array) - this.distance
      },
      projectPoint: function (e, t) {
        t || (t = new n.a);
        var r = this.distanceToPoint(e);
        return a.a.scaleAndAdd(t.array, e.array, this.normal.array, -r), t._dirty = !0, t
      },
      normalize: function () {
        var e = 1 / a.a.len(this.normal.array);
        a.a.scale(this.normal.array, e), this.distance *= e
      },
      intersectFrustum: function (e) {
        for (var t = e.vertices, r = this.normal.array, n = a.a.dot(t[0].array, r) > this.distance, i = 1; i < 8; i++)
          if (a.a.dot(t[i].array, r) > this.distance != n) return !0
      },
      intersectLine: function () {
        var e = a.a.create();
        return function (t, r, i) {
          var o = this.distanceToPoint(t),
            s = this.distanceToPoint(r);
          if (o > 0 && s > 0 || o < 0 && s < 0) return null;
          var u = this.normal.array,
            l = this.distance,
            h = t.array;
          a.a.sub(e, r.array, t.array), a.a.normalize(e, e);
          var c = a.a.dot(u, e);
          if (0 === c) return null;
          i || (i = new n.a);
          var d = (a.a.dot(u, h) - l) / c;
          return a.a.scaleAndAdd(i.array, h, e, -d), i._dirty = !0, i
        }
      }(),
      applyTransform: function () {
        var e = i.a.create(),
          t = o.a.create(),
          r = o.a.create();
        return r[3] = 1,
          function (n) {
            n = n.array, a.a.scale(r, this.normal.array, this.distance), o.a.transformMat4(r, r, n), this.distance = a.a.dot(r, this.normal.array), i.a.invert(e, n), i.a.transpose(e, e), t[3] = 0, a.a.copy(t, this.normal.array), o.a.transformMat4(t, t, e), a.a.copy(this.normal.array, t)
          }
      }(),
      copy: function (e) {
        a.a.copy(this.normal.array, e.normal.array), this.normal._dirty = !0, this.distance = e.distance
      },
      clone: function () {
        var e = new s;
        return e.copy(this), e
      }
    }, t.a = s
  }, function (e, t, r) {
    "use strict";
    var n = r(42);
    t.a = n.a
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r) {
      h.identity();
      var n = new a.a({
        widthSegments: t,
        heightSegments: r
      });
      switch (e) {
        case "px":
          o.a.translate(h, h, s.a.POSITIVE_X), o.a.rotateY(h, h, Math.PI / 2);
          break;
        case "nx":
          o.a.translate(h, h, s.a.NEGATIVE_X), o.a.rotateY(h, h, -Math.PI / 2);
          break;
        case "py":
          o.a.translate(h, h, s.a.POSITIVE_Y), o.a.rotateX(h, h, -Math.PI / 2);
          break;
        case "ny":
          o.a.translate(h, h, s.a.NEGATIVE_Y), o.a.rotateX(h, h, Math.PI / 2);
          break;
        case "pz":
          o.a.translate(h, h, s.a.POSITIVE_Z);
          break;
        case "nz":
          o.a.translate(h, h, s.a.NEGATIVE_Z), o.a.rotateY(h, h, Math.PI)
      }
      return n.applyTransform(h), n
    }
    var i = r(15),
      a = r(43),
      o = r(9),
      s = r(3),
      u = r(18),
      l = r(14),
      h = new o.a,
      c = i.a.extend({
        dynamic: !1,
        widthSegments: 1,
        heightSegments: 1,
        depthSegments: 1,
        inside: !1
      }, function () {
        this.build()
      }, {
        build: function () {
          var e = {
              px: n("px", this.depthSegments, this.heightSegments),
              nx: n("nx", this.depthSegments, this.heightSegments),
              py: n("py", this.widthSegments, this.depthSegments),
              ny: n("ny", this.widthSegments, this.depthSegments),
              pz: n("pz", this.widthSegments, this.heightSegments),
              nz: n("nz", this.widthSegments, this.heightSegments)
            },
            t = ["position", "texcoord0", "normal"],
            r = 0,
            i = 0;
          for (var a in e) r += e[a].vertexCount, i += e[a].indices.length;
          for (var o = 0; o < t.length; o++) this.attributes[t[o]].init(r);
          this.indices = new l.a.Uint16Array(i);
          var s = 0,
            h = 0;
          for (var a in e) {
            for (var c = e[a], o = 0; o < t.length; o++)
              for (var d = t[o], f = c.attributes[d].value, p = c.attributes[d].size, m = "normal" === d, g = 0; g < f.length; g++) {
                var _ = f[g];
                this.inside && m && (_ = -_), this.attributes[d].value[g + p * h] = _
              }
            for (var v = c.indices.length, g = 0; g < c.indices.length; g++) this.indices[g + s] = h + c.indices[this.inside ? v - g - 1 : g];
            s += c.indices.length, h += c.vertexCount
          }
          this.boundingBox = new u.a, this.boundingBox.max.set(1, 1, 1), this.boundingBox.min.set(-1, -1, -1)
        }
      });
    t.a = c
  }, function (e, t, r) {
    "use strict";
    var n = r(5),
      i = r(27),
      a = r(4),
      o = r(10),
      s = r(16),
      u = r(19),
      l = r(8),
      h = r(42),
      c = r(36),
      d = r(62),
      f = r(14),
      p = r(61),
      m = r(127),
      g = r(128),
      _ = {},
      v = ["px", "nx", "py", "ny", "pz", "nz"];
    _.prefilterEnvironmentMap = function (e, t, r, s, m) {
      m && s || (s = _.generateNormalDistribution(), m = _.integrateBRDF(e, s)), r = r || {};
      var y = r.width || 64,
        x = r.height || 64,
        T = r.type || t.type,
        b = new i.a({
          width: y,
          height: x,
          type: T,
          flipY: !1,
          mipmaps: []
        });
      b.isPowerOfTwo() || console.warn("Width and height must be power of two to enable mipmap.");
      var w = Math.min(y, x),
        E = Math.log(w) / Math.log(2) + 1,
        S = new u.a({
          shader: new l.a({
            vertex: l.a.source("clay.skybox.vertex"),
            fragment: g.a
          })
        });
      S.set("normalDistribution", s), r.encodeRGBM && S.define("fragment", "RGBM_ENCODE"), r.decodeRGBM && S.define("fragment", "RGBM_DECODE");
      var A, M = new c.a;
      if ("texture2D" === t.textureType) {
        var C = new i.a({
          width: y,
          height: x,
          type: T === a.a.FLOAT ? a.a.HALF_FLOAT : T
        });
        p.a.panoramaToCubeMap(e, t, C, {
          encodeRGBM: r.decodeRGBM
        }), t = C
      }
      A = new h.a({
        scene: M,
        material: S
      }), A.material.set("environmentMap", t);
      var L = new d.a({
        texture: b
      });
      r.encodeRGBM && (T = b.type = a.a.UNSIGNED_BYTE);
      for (var D = new n.a({
          width: y,
          height: x,
          type: T
        }), N = new o.a({
          depthBuffer: !1
        }), R = f.a[T === a.a.UNSIGNED_BYTE ? "Uint8Array" : "Float32Array"], P = 0; P < E; P++) {
        b.mipmaps[P] = {
          pixels: {}
        }, A.material.set("roughness", P / (E - 1));
        for (var I = D.width, O = 2 * Math.atan(I / (I - .5)) / Math.PI * 180, F = 0; F < v.length; F++) {
          var B = new R(D.width * D.height * 4);
          N.attach(D), N.bind(e);
          var U = L.getCamera(v[F]);
          U.fov = O, e.render(M, U), e.gl.readPixels(0, 0, D.width, D.height, a.a.RGBA, T, B), N.unbind(e), b.mipmaps[P].pixels[v[F]] = B
        }
        D.width /= 2, D.height /= 2, D.dirty()
      }
      return N.dispose(e), D.dispose(e), A.dispose(e), s.dispose(e), {
        environmentMap: b,
        brdfLookup: m,
        normalDistribution: s,
        maxMipmapLevel: E
      }
    }, _.integrateBRDF = function (e, t) {
      t = t || _.generateNormalDistribution();
      var r = new o.a({
          depthBuffer: !1
        }),
        i = new s.a({
          fragment: m.a
        }),
        u = new n.a({
          width: 512,
          height: 256,
          type: a.a.HALF_FLOAT,
          wrapS: a.a.CLAMP_TO_EDGE,
          wrapT: a.a.CLAMP_TO_EDGE,
          minFilter: a.a.NEAREST,
          magFilter: a.a.NEAREST,
          useMipmap: !1
        });
      return i.setUniform("normalDistribution", t), i.setUniform("viewportSize", [512, 256]), i.attachOutput(u), i.render(e, r), r.dispose(e), u
    }, _.generateNormalDistribution = function (e, t) {
      for (var e = e || 256, t = t || 1024, r = new n.a({
          width: e,
          height: t,
          type: a.a.FLOAT,
          minFilter: a.a.NEAREST,
          magFilter: a.a.NEAREST,
          wrapS: a.a.CLAMP_TO_EDGE,
          wrapT: a.a.CLAMP_TO_EDGE,
          useMipmap: !1
        }), i = new Float32Array(t * e * 4), o = [], s = 0; s < e; s++) {
        for (var u = s / e, l = u * u, h = 0; h < t; h++) {
          var c = (h << 16 | h >>> 16) >>> 0;
          c = ((1431655765 & c) << 1 | (2863311530 & c) >>> 1) >>> 0, c = ((858993459 & c) << 2 | (3435973836 & c) >>> 2) >>> 0, c = ((252645135 & c) << 4 | (4042322160 & c) >>> 4) >>> 0, c = (((16711935 & c) << 8 | (4278255360 & c) >>> 8) >>> 0) / 4294967296;
          var d = Math.sqrt((1 - c) / (1 + (l * l - 1) * c));
          o[h] = d
        }
        for (var h = 0; h < t; h++) {
          var f = 4 * (h * e + s),
            d = o[h],
            p = Math.sqrt(1 - d * d),
            m = h / t,
            g = 2 * Math.PI * m;
          i[f] = p * Math.cos(g), i[f + 1] = d, i[f + 2] = p * Math.sin(g), i[f + 3] = 1
        }
      }
      return r.pixels = i, r
    }, t.a = _
  }, function (e, t, r) {
    "use strict";
    var n = r(20),
      i = {};
    i.create = function () {
      var e = new n.a(4);
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e
    }, i.clone = function (e) {
      var t = new n.a(4);
      return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }, i.copy = function (e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }, i.identity = function (e) {
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e
    }, i.transpose = function (e, t) {
      if (e === t) {
        var r = t[1];
        e[1] = t[2], e[2] = r
      } else e[0] = t[0], e[1] = t[2], e[2] = t[1], e[3] = t[3];
      return e
    }, i.invert = function (e, t) {
      var r = t[0],
        n = t[1],
        i = t[2],
        a = t[3],
        o = r * a - i * n;
      return o ? (o = 1 / o, e[0] = a * o, e[1] = -n * o, e[2] = -i * o, e[3] = r * o, e) : null
    }, i.adjoint = function (e, t) {
      var r = t[0];
      return e[0] = t[3], e[1] = -t[1], e[2] = -t[2], e[3] = r, e
    }, i.determinant = function (e) {
      return e[0] * e[3] - e[2] * e[1]
    }, i.multiply = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = r[0],
        u = r[1],
        l = r[2],
        h = r[3];
      return e[0] = n * s + a * u, e[1] = i * s + o * u, e[2] = n * l + a * h, e[3] = i * l + o * h, e
    }, i.mul = i.multiply, i.rotate = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = Math.sin(r),
        u = Math.cos(r);
      return e[0] = n * u + a * s, e[1] = i * u + o * s, e[2] = n * -s + a * u, e[3] = i * -s + o * u, e
    }, i.scale = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = r[0],
        u = r[1];
      return e[0] = n * s, e[1] = i * s, e[2] = a * u, e[3] = o * u, e
    }, i.frob = function (e) {
      return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2))
    }, i.LDU = function (e, t, r, n) {
      return e[2] = n[2] / n[0], r[0] = n[0], r[1] = n[1], r[3] = n[3] - e[2] * r[1], [e, t, r]
    }, t.a = i
  }, function (e, t, r) {
    "use strict";
    var n = r(20),
      i = {};
    i.create = function () {
      var e = new n.a(6);
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e
    }, i.clone = function (e) {
      var t = new n.a(6);
      return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
    }, i.copy = function (e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
    }, i.identity = function (e) {
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e
    }, i.invert = function (e, t) {
      var r = t[0],
        n = t[1],
        i = t[2],
        a = t[3],
        o = t[4],
        s = t[5],
        u = r * a - n * i;
      return u ? (u = 1 / u, e[0] = a * u, e[1] = -n * u, e[2] = -i * u, e[3] = r * u, e[4] = (i * s - a * o) * u, e[5] = (n * o - r * s) * u, e) : null
    }, i.determinant = function (e) {
      return e[0] * e[3] - e[1] * e[2]
    }, i.multiply = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = t[4],
        u = t[5],
        l = r[0],
        h = r[1],
        c = r[2],
        d = r[3],
        f = r[4],
        p = r[5];
      return e[0] = n * l + a * h, e[1] = i * l + o * h, e[2] = n * c + a * d, e[3] = i * c + o * d, e[4] = n * f + a * p + s, e[5] = i * f + o * p + u, e
    }, i.mul = i.multiply, i.rotate = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = t[4],
        u = t[5],
        l = Math.sin(r),
        h = Math.cos(r);
      return e[0] = n * h + a * l, e[1] = i * h + o * l, e[2] = n * -l + a * h, e[3] = i * -l + o * h, e[4] = s, e[5] = u, e
    }, i.scale = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = t[4],
        u = t[5],
        l = r[0],
        h = r[1];
      return e[0] = n * l, e[1] = i * l, e[2] = a * h, e[3] = o * h, e[4] = s, e[5] = u, e
    }, i.translate = function (e, t, r) {
      var n = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = t[4],
        u = t[5],
        l = r[0],
        h = r[1];
      return e[0] = n, e[1] = i, e[2] = a, e[3] = o, e[4] = n * l + a * h + s, e[5] = i * l + o * h + u, e
    }, i.frob = function (e) {
      return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + 1)
    }, t.a = i
  }, function (e, t) {
    var r = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (e) {
      setTimeout(e, 16)
    };
    e.exports = r
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r, n, i, a, o) {
      this._zr = e, this._x = 0, this._y = 0, this._rowHeight = 0, this.width = n, this.height = i, this.offsetX = t, this.offsetY = r, this.dpr = o, this.gap = a
    }

    function i(e) {
      e = e || {}, e.width = e.width || 512, e.height = e.height || 512, e.devicePixelRatio = e.devicePixelRatio || 1, e.gap = null == e.gap ? 2 : e.gap;
      var t = document.createElement("canvas");
      t.width = e.width * e.devicePixelRatio, t.height = e.height * e.devicePixelRatio, this._canvas = t, this._texture = new s.a({
        image: t,
        flipY: !1
      });
      var r = this;
      this._zr = o.a.zrender.init(t);
      var i = this._zr.refreshImmediately;
      this._zr.refreshImmediately = function () {
        i.call(this), r._texture.dirty(), r.onupdate && r.onupdate()
      }, this._dpr = e.devicePixelRatio, this._coords = {}, this.onupdate = e.onupdate, this._gap = e.gap, this._textureAtlasNodes = [new n(this._zr, 0, 0, e.width, e.height, this._gap, this._dpr)], this._nodeWidth = e.width, this._nodeHeight = e.height, this._currentNodeIdx = 0
    }
    var a = r(0),
      o = r.n(a),
      s = r(5);
    n.prototype = {
      constructor: n,
      clear: function () {
        this._x = 0, this._y = 0, this._rowHeight = 0
      },
      add: function (e, t, r) {
        var n = e.getBoundingRect();
        null == t && (t = n.width), null == r && (r = n.height), t *= this.dpr, r *= this.dpr, this._fitElement(e, t, r);
        var i = this._x,
          a = this._y,
          o = this.width * this.dpr,
          s = this.height * this.dpr,
          u = this.gap;
        if (i + t + u > o && (i = this._x = 0, a += this._rowHeight + u, this._y = a, this._rowHeight = 0), this._x += t + u, this._rowHeight = Math.max(this._rowHeight, r), a + r + u > s) return null;
        e.position[0] += this.offsetX * this.dpr + i, e.position[1] += this.offsetY * this.dpr + a, this._zr.add(e);
        var l = [this.offsetX / this.width, this.offsetY / this.height];
        return [
          [i / o + l[0], a / s + l[1]],
          [(i + t) / o + l[0], (a + r) / s + l[1]]
        ]
      },
      _fitElement: function (e, t, r) {
        var n = e.getBoundingRect(),
          i = t / n.width,
          a = r / n.height;
        e.position = [-n.x * i, -n.y * a], e.scale = [i, a], e.update()
      }
    }, i.prototype = {
      clear: function () {
        for (var e = 0; e < this._textureAtlasNodes.length; e++) this._textureAtlasNodes[e].clear();
        this._currentNodeIdx = 0, this._zr.clear(), this._coords = {}
      },
      getWidth: function () {
        return this._width
      },
      getHeight: function () {
        return this._height
      },
      getTexture: function () {
        return this._texture
      },
      getDevicePixelRatio: function () {
        return this._dpr
      },
      getZr: function () {
        return this._zr
      },
      _getCurrentNode: function () {
        return this._textureAtlasNodes[this._currentNodeIdx]
      },
      _expand: function () {
        if (this._currentNodeIdx++, this._textureAtlasNodes[this._currentNodeIdx]) return this._textureAtlasNodes[this._currentNodeIdx];
        var e = 4096 / this._dpr,
          t = this._textureAtlasNodes,
          r = t.length,
          i = r * this._nodeWidth % e,
          a = Math.floor(r * this._nodeWidth / e) * this._nodeHeight;
        if (!(a >= e)) {
          var o = (i + this._nodeWidth) * this._dpr,
            s = (a + this._nodeHeight) * this._dpr;
          try {
            this._zr.resize({
              width: o,
              height: s
            })
          } catch (e) {
            this._canvas.width = o, this._canvas.height = s
          }
          var u = new n(this._zr, i, a, this._nodeWidth, this._nodeHeight, this._gap, this._dpr);
          return this._textureAtlasNodes.push(u), u
        }
      },
      add: function (e, t, r) {
        if (this._coords[e.id]) return this._coords[e.id];
        var n = this._getCurrentNode().add(e, t, r);
        if (!n) {
          var i = this._expand();
          if (!i) return;
          n = i.add(e, t, r)
        }
        return this._coords[e.id] = n, n
      },
      getCoordsScale: function () {
        var e = this._dpr;
        return [this._nodeWidth / this._canvas.width * e, this._nodeHeight / this._canvas.height * e]
      },
      getCoords: function (e) {
        return this._coords[e]
      }
    }, t.a = i
  }, function (e, t, r) {
    function n(e, t, r, n) {
      r < 0 && (e += r, r = -r), n < 0 && (t += n, n = -n), this.x = e, this.y = t, this.width = r, this.height = n
    }
    var i = r(83),
      a = r(84),
      o = i.applyTransform,
      s = Math.min,
      u = Math.max;
    n.prototype = {
      constructor: n,
      union: function (e) {
        var t = s(e.x, this.x),
          r = s(e.y, this.y);
        this.width = u(e.x + e.width, this.x + this.width) - t, this.height = u(e.y + e.height, this.y + this.height) - r, this.x = t, this.y = r
      },
      applyTransform: function () {
        var e = [],
          t = [],
          r = [],
          n = [];
        return function (i) {
          if (i) {
            e[0] = r[0] = this.x, e[1] = n[1] = this.y, t[0] = n[0] = this.x + this.width, t[1] = r[1] = this.y + this.height, o(e, e, i), o(t, t, i), o(r, r, i), o(n, n, i), this.x = s(e[0], t[0], r[0], n[0]), this.y = s(e[1], t[1], r[1], n[1]);
            var a = u(e[0], t[0], r[0], n[0]),
              l = u(e[1], t[1], r[1], n[1]);
            this.width = a - this.x, this.height = l - this.y
          }
        }
      }(),
      calculateTransform: function (e) {
        var t = this,
          r = e.width / t.width,
          n = e.height / t.height,
          i = a.create();
        return a.translate(i, i, [-t.x, -t.y]), a.scale(i, i, [r, n]), a.translate(i, i, [e.x, e.y]), i
      },
      intersect: function (e) {
        if (!e) return !1;
        e instanceof n || (e = n.create(e));
        var t = this,
          r = t.x,
          i = t.x + t.width,
          a = t.y,
          o = t.y + t.height,
          s = e.x,
          u = e.x + e.width,
          l = e.y,
          h = e.y + e.height;
        return !(i < s || u < r || o < l || h < a)
      },
      contain: function (e, t) {
        var r = this;
        return e >= r.x && e <= r.x + r.width && t >= r.y && t <= r.y + r.height
      },
      clone: function () {
        return new n(this.x, this.y, this.width, this.height)
      },
      copy: function (e) {
        this.x = e.x, this.y = e.y, this.width = e.width, this.height = e.height
      },
      plain: function () {
        return {
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height
        }
      }
    }, n.create = function (e) {
      return new n(e.x, e.y, e.width, e.height)
    };
    var l = n;
    e.exports = l
  }, function (e, t) {
    function r(e, t) {
      var r = new w(2);
      return null == e && (e = 0), null == t && (t = 0), r[0] = e, r[1] = t, r
    }

    function n(e, t) {
      return e[0] = t[0], e[1] = t[1], e
    }

    function i(e) {
      var t = new w(2);
      return t[0] = e[0], t[1] = e[1], t
    }

    function a(e, t, r) {
      return e[0] = t, e[1] = r, e
    }

    function o(e, t, r) {
      return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e
    }

    function s(e, t, r, n) {
      return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e
    }

    function u(e, t, r) {
      return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e
    }

    function l(e) {
      return Math.sqrt(h(e))
    }

    function h(e) {
      return e[0] * e[0] + e[1] * e[1]
    }

    function c(e, t, r) {
      return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e
    }

    function d(e, t, r) {
      return e[0] = t[0] / r[0], e[1] = t[1] / r[1], e
    }

    function f(e, t) {
      return e[0] * t[0] + e[1] * t[1]
    }

    function p(e, t, r) {
      return e[0] = t[0] * r, e[1] = t[1] * r, e
    }

    function m(e, t) {
      var r = l(t);
      return 0 === r ? (e[0] = 0, e[1] = 0) : (e[0] = t[0] / r, e[1] = t[1] / r), e
    }

    function g(e, t) {
      return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))
    }

    function _(e, t) {
      return (e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1])
    }

    function v(e, t) {
      return e[0] = -t[0], e[1] = -t[1], e
    }

    function y(e, t, r, n) {
      return e[0] = t[0] + n * (r[0] - t[0]), e[1] = t[1] + n * (r[1] - t[1]), e
    }

    function x(e, t, r) {
      var n = t[0],
        i = t[1];
      return e[0] = r[0] * n + r[2] * i + r[4], e[1] = r[1] * n + r[3] * i + r[5], e
    }

    function T(e, t, r) {
      return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e
    }

    function b(e, t, r) {
      return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e
    }
    var w = "undefined" == typeof Float32Array ? Array : Float32Array,
      E = l,
      S = h,
      A = g,
      M = _;
    t.create = r, t.copy = n, t.clone = i, t.set = a, t.add = o, t.scaleAndAdd = s, t.sub = u, t.len = l, t.length = E, t.lenSquare = h, t.lengthSquare = S, t.mul = c, t.div = d, t.dot = f, t.scale = p, t.normalize = m, t.distance = g, t.dist = A, t.distanceSquare = _, t.distSquare = M, t.negate = v, t.lerp = y, t.applyTransform = x, t.min = T, t.max = b
  }, function (e, t) {
    function r() {
      var e = new c(6);
      return n(e), e
    }

    function n(e) {
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e
    }

    function i(e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
    }

    function a(e, t, r) {
      var n = t[0] * r[0] + t[2] * r[1],
        i = t[1] * r[0] + t[3] * r[1],
        a = t[0] * r[2] + t[2] * r[3],
        o = t[1] * r[2] + t[3] * r[3],
        s = t[0] * r[4] + t[2] * r[5] + t[4],
        u = t[1] * r[4] + t[3] * r[5] + t[5];
      return e[0] = n, e[1] = i, e[2] = a, e[3] = o, e[4] = s, e[5] = u, e
    }

    function o(e, t, r) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4] + r[0], e[5] = t[5] + r[1], e
    }

    function s(e, t, r) {
      var n = t[0],
        i = t[2],
        a = t[4],
        o = t[1],
        s = t[3],
        u = t[5],
        l = Math.sin(r),
        h = Math.cos(r);
      return e[0] = n * h + o * l, e[1] = -n * l + o * h, e[2] = i * h + s * l, e[3] = -i * l + h * s, e[4] = h * a + l * u, e[5] = h * u - l * a, e
    }

    function u(e, t, r) {
      var n = r[0],
        i = r[1];
      return e[0] = t[0] * n, e[1] = t[1] * i, e[2] = t[2] * n, e[3] = t[3] * i, e[4] = t[4] * n, e[5] = t[5] * i, e
    }

    function l(e, t) {
      var r = t[0],
        n = t[2],
        i = t[4],
        a = t[1],
        o = t[3],
        s = t[5],
        u = r * o - a * n;
      return u ? (u = 1 / u, e[0] = o * u, e[1] = -a * u, e[2] = -n * u, e[3] = r * u, e[4] = (n * s - o * i) * u, e[5] = (a * i - r * s) * u, e) : null
    }

    function h(e) {
      var t = r();
      return i(t, e), t
    }
    var c = "undefined" == typeof Float32Array ? Array : Float32Array;
    t.create = r, t.identity = n, t.copy = i, t.mul = a, t.translate = o, t.rotate = s, t.scale = u, t.invert = l, t.clone = h
  }, function (e, t, r) {
    function n(e) {
      return e.replace(/^\s+/, "").replace(/\s+$/, "")
    }

    function i(e, t, r, n) {
      var i = t[1] - t[0],
        a = r[1] - r[0];
      if (0 === i) return 0 === a ? r[0] : (r[0] + r[1]) / 2;
      if (n)
        if (i > 0) {
          if (e <= t[0]) return r[0];
          if (e >= t[1]) return r[1]
        } else {
          if (e >= t[0]) return r[0];
          if (e <= t[1]) return r[1]
        }
      else {
        if (e === t[0]) return r[0];
        if (e === t[1]) return r[1]
      }
      return (e - t[0]) / i * a + r[0]
    }

    function a(e, t) {
      switch (e) {
        case "center":
        case "middle":
          e = "50%";
          break;
        case "left":
        case "top":
          e = "0%";
          break;
        case "right":
        case "bottom":
          e = "100%"
      }
      return "string" == typeof e ? n(e).match(/%$/) ? parseFloat(e) / 100 * t : parseFloat(e) : null == e ? NaN : +e
    }

    function o(e, t, r) {
      return null == t && (t = 10), t = Math.min(Math.max(0, t), 20), e = (+e).toFixed(t), r ? e : +e
    }

    function s(e) {
      return e.sort(function (e, t) {
        return e - t
      }), e
    }

    function u(e) {
      if (e = +e, isNaN(e)) return 0;
      for (var t = 1, r = 0; Math.round(e * t) / t !== e;) t *= 10, r++;
      return r
    }

    function l(e) {
      var t = e.toString(),
        r = t.indexOf("e");
      if (r > 0) {
        var n = +t.slice(r + 1);
        return n < 0 ? -n : 0
      }
      var i = t.indexOf(".");
      return i < 0 ? 0 : t.length - 1 - i
    }

    function h(e, t) {
      var r = Math.log,
        n = Math.LN10,
        i = Math.floor(r(e[1] - e[0]) / n),
        a = Math.round(r(Math.abs(t[1] - t[0])) / n),
        o = Math.min(Math.max(-i + a, 0), 20);
      return isFinite(o) ? o : 20
    }

    function c(e, t, r) {
      if (!e[t]) return 0;
      var n = x.reduce(e, function (e, t) {
        return e + (isNaN(t) ? 0 : t)
      }, 0);
      if (0 === n) return 0;
      for (var i = Math.pow(10, r), a = x.map(e, function (e) {
          return (isNaN(e) ? 0 : e) / n * i * 100
        }), o = 100 * i, s = x.map(a, function (e) {
          return Math.floor(e)
        }), u = x.reduce(s, function (e, t) {
          return e + t
        }, 0), l = x.map(a, function (e, t) {
          return e - s[t]
        }); u < o;) {
        for (var h = Number.NEGATIVE_INFINITY, c = null, d = 0, f = l.length; d < f; ++d) l[d] > h && (h = l[d], c = d);
        ++s[c], l[c] = 0, ++u
      }
      return s[t] / i
    }

    function d(e) {
      var t = 2 * Math.PI;
      return (e % t + t) % t
    }

    function f(e) {
      return e > -T && e < T
    }

    function p(e) {
      if (e instanceof Date) return e;
      if ("string" == typeof e) {
        var t = b.exec(e);
        if (!t) return new Date(NaN);
        if (t[8]) {
          var r = +t[4] || 0;
          return "Z" !== t[8].toUpperCase() && (r -= t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, r, +(t[5] || 0), +t[6] || 0, +t[7] || 0))
        }
        return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, +t[7] || 0)
      }
      return null == e ? new Date(NaN) : new Date(Math.round(e))
    }

    function m(e) {
      return Math.pow(10, g(e))
    }

    function g(e) {
      return Math.floor(Math.log(e) / Math.LN10)
    }

    function _(e, t) {
      var r, n = g(e),
        i = Math.pow(10, n),
        a = e / i;
      return r = t ? a < 1.5 ? 1 : a < 2.5 ? 2 : a < 4 ? 3 : a < 7 ? 5 : 10 : a < 1 ? 1 : a < 2 ? 2 : a < 3 ? 3 : a < 5 ? 5 : 10, e = r * i, n >= -20 ? +e.toFixed(n < 0 ? -n : 0) : e
    }

    function v(e) {
      function t(e, r, n) {
        return e.interval[n] < r.interval[n] || e.interval[n] === r.interval[n] && (e.close[n] - r.close[n] == (n ? -1 : 1) || !n && t(e, r, 1))
      }
      e.sort(function (e, r) {
        return t(e, r, 0) ? -1 : 1
      });
      for (var r = -1 / 0, n = 1, i = 0; i < e.length;) {
        for (var a = e[i].interval, o = e[i].close, s = 0; s < 2; s++) a[s] <= r && (a[s] = r, o[s] = s ? 1 : 1 - n), r = a[s], n = o[s];
        a[0] === a[1] && o[0] * o[1] != 1 ? e.splice(i, 1) : i++
      }
      return e
    }

    function y(e) {
      return e - parseFloat(e) >= 0
    }
    var x = r(13),
      T = 1e-4,
      b = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
    t.linearMap = i, t.parsePercent = a, t.round = o, t.asc = s, t.getPrecision = u, t.getPrecisionSafe = l, t.getPixelPrecision = h, t.getPercentWithPrecision = c, t.MAX_SAFE_INTEGER = 9007199254740991, t.remRadian = d, t.isRadianAroundZero = f, t.parseDate = p, t.quantity = m, t.nice = _, t.reformIntervals = v, t.isNumeric = y
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      u.a.defaultsWithPropList(e, h, c), i(e);
      for (var t = "", r = 0; r < c.length; r++) {
        t += e[c[r]].toString()
      }
      return t
    }

    function i(e) {
      var t = a(e.width, e.height);
      e.format === s.a.DEPTH_COMPONENT && (e.useMipmap = !1), t && e.useMipmap || (e.minFilter == s.a.NEAREST_MIPMAP_NEAREST || e.minFilter == s.a.NEAREST_MIPMAP_LINEAR ? e.minFilter = s.a.NEAREST : e.minFilter != s.a.LINEAR_MIPMAP_LINEAR && e.minFilter != s.a.LINEAR_MIPMAP_NEAREST || (e.minFilter = s.a.LINEAR)), t || (e.wrapS = s.a.CLAMP_TO_EDGE, e.wrapT = s.a.CLAMP_TO_EDGE)
    }

    function a(e, t) {
      return 0 == (e & e - 1) && 0 == (t & t - 1)
    }
    var o = r(5),
      s = r(11),
      u = r(23),
      l = function () {
        this._pool = {}, this._allocatedTextures = []
      };
    l.prototype = {
      constructor: l,
      get: function (e) {
        var t = n(e);
        this._pool.hasOwnProperty(t) || (this._pool[t] = []);
        var r = this._pool[t];
        if (!r.length) {
          var i = new o.a(e);
          return this._allocatedTextures.push(i), i
        }
        return r.pop()
      },
      put: function (e) {
        var t = n(e);
        this._pool.hasOwnProperty(t) || (this._pool[t] = []), this._pool[t].push(e)
      },
      clear: function (e) {
        for (var t = 0; t < this._allocatedTextures.length; t++) this._allocatedTextures[t].dispose(e);
        this._pool = {}, this._allocatedTextures = []
      }
    };
    var h = {
        width: 512,
        height: 512,
        type: s.a.UNSIGNED_BYTE,
        format: s.a.RGBA,
        wrapS: s.a.CLAMP_TO_EDGE,
        wrapT: s.a.CLAMP_TO_EDGE,
        minFilter: s.a.LINEAR_MIPMAP_LINEAR,
        magFilter: s.a.LINEAR,
        useMipmap: !0,
        anisotropic: 1,
        flipY: !0,
        unpackAlignment: 4,
        premultiplyAlpha: !1
      },
      c = Object.keys(h);
    t.a = l
  }, function (e, t, r) {
    "use strict";
    t.a = "@export clay.compositor.kernel.gaussian_9\nfloat gaussianKernel[9];\ngaussianKernel[0] = 0.07;\ngaussianKernel[1] = 0.09;\ngaussianKernel[2] = 0.12;\ngaussianKernel[3] = 0.14;\ngaussianKernel[4] = 0.16;\ngaussianKernel[5] = 0.14;\ngaussianKernel[6] = 0.12;\ngaussianKernel[7] = 0.09;\ngaussianKernel[8] = 0.07;\n@end\n@export clay.compositor.kernel.gaussian_13\nfloat gaussianKernel[13];\ngaussianKernel[0] = 0.02;\ngaussianKernel[1] = 0.03;\ngaussianKernel[2] = 0.06;\ngaussianKernel[3] = 0.08;\ngaussianKernel[4] = 0.11;\ngaussianKernel[5] = 0.13;\ngaussianKernel[6] = 0.14;\ngaussianKernel[7] = 0.13;\ngaussianKernel[8] = 0.11;\ngaussianKernel[9] = 0.08;\ngaussianKernel[10] = 0.06;\ngaussianKernel[11] = 0.03;\ngaussianKernel[12] = 0.02;\n@end\n@export clay.compositor.gaussian_blur\n#define SHADER_NAME gaussian_blur\nuniform sampler2D texture;varying vec2 v_Texcoord;\nuniform float blurSize : 2.0;\nuniform vec2 textureSize : [512.0, 512.0];\nuniform float blurDir : 0.0;\n@import clay.util.rgbm\n@import clay.util.clamp_sample\nvoid main (void)\n{\n @import clay.compositor.kernel.gaussian_9\n vec2 off = blurSize / textureSize;\n off *= vec2(1.0 - blurDir, blurDir);\n vec4 sum = vec4(0.0);\n float weightAll = 0.0;\n for (int i = 0; i < 9; i++) {\n float w = gaussianKernel[i];\n vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));\n sum += texel * w;\n weightAll += w;\n }\n gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));\n}\n@end\n"
  }, function (e, t, r) {
    "use strict";
    t.a = "\n@export clay.compositor.lut\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform sampler2D lookup;\nvoid main()\n{\n vec4 tex = texture2D(texture, v_Texcoord);\n float blueColor = tex.b * 63.0;\n vec2 quad1;\n quad1.y = floor(floor(blueColor) / 8.0);\n quad1.x = floor(blueColor) - (quad1.y * 8.0);\n vec2 quad2;\n quad2.y = floor(ceil(blueColor) / 8.0);\n quad2.x = ceil(blueColor) - (quad2.y * 8.0);\n vec2 texPos1;\n texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);\n texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);\n vec2 texPos2;\n texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);\n texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);\n vec4 newColor1 = texture2D(lookup, texPos1);\n vec4 newColor2 = texture2D(lookup, texPos2);\n vec4 newColor = mix(newColor1, newColor2, fract(blueColor));\n gl_FragColor = vec4(newColor.rgb, tex.w);\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export clay.compositor.output\n#define OUTPUT_ALPHA\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\n@import clay.util.rgbm\nvoid main()\n{\n vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));\n gl_FragColor.rgb = tex.rgb;\n#ifdef OUTPUT_ALPHA\n gl_FragColor.a = tex.a;\n#else\n gl_FragColor.a = 1.0;\n#endif\n gl_FragColor = encodeHDR(gl_FragColor);\n#ifdef PREMULTIPLY_ALPHA\n gl_FragColor.rgb *= gl_FragColor.a;\n#endif\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export clay.compositor.bright\nuniform sampler2D texture;\nuniform float threshold : 1;\nuniform float scale : 1.0;\nuniform vec2 textureSize: [512, 512];\nvarying vec2 v_Texcoord;\nconst vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);\n@import clay.util.rgbm\nvec4 median(vec4 a, vec4 b, vec4 c)\n{\n return a + b + c - min(min(a, b), c) - max(max(a, b), c);\n}\nvoid main()\n{\n vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));\n#ifdef ANTI_FLICKER\n vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);\n vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));\n vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));\n vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));\n vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));\n texel = median(median(texel, s1, s2), s3, s4);\n#endif\n float lum = dot(texel.rgb , lumWeight);\n vec4 color;\n if (lum > threshold && texel.a > 0.0)\n {\n color = vec4(texel.rgb * scale, texel.a * scale);\n }\n else\n {\n color = vec4(0.0);\n }\n gl_FragColor = encodeHDR(color);\n}\n@end\n"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export clay.compositor.downsample\nuniform sampler2D texture;\nuniform vec2 textureSize : [512, 512];\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\nfloat brightness(vec3 c)\n{\n return max(max(c.r, c.g), c.b);\n}\n@import clay.util.clamp_sample\nvoid main()\n{\n vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;\n#ifdef ANTI_FLICKER\n vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;\n vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;\n vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;\n vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;\n float s1w = 1.0 / (brightness(s1) + 1.0);\n float s2w = 1.0 / (brightness(s2) + 1.0);\n float s3w = 1.0 / (brightness(s3) + 1.0);\n float s4w = 1.0 / (brightness(s4) + 1.0);\n float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);\n vec4 color = vec4(\n (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,\n 1.0\n );\n#else\n vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));\n color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));\n color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));\n color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));\n color *= 0.25;\n#endif\n gl_FragColor = encodeHDR(color);\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "\n@export clay.compositor.upsample\n#define HIGH_QUALITY\nuniform sampler2D texture;\nuniform vec2 textureSize : [512, 512];\nuniform float sampleScale: 0.5;\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\n@import clay.util.clamp_sample\nvoid main()\n{\n#ifdef HIGH_QUALITY\n vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;\n vec4 s;\n s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));\n s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;\n s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));\n s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;\n s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;\n s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;\n s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));\n s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;\n s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));\n gl_FragColor = encodeHDR(s / 16.0);\n#else\n vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;\n vec4 s;\n s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));\n s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));\n s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));\n s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));\n gl_FragColor = encodeHDR(s / 4.0);\n#endif\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export clay.compositor.hdr.composite\n#define TONEMAPPING\nuniform sampler2D texture;\n#ifdef BLOOM_ENABLED\nuniform sampler2D bloom;\n#endif\n#ifdef LENSFLARE_ENABLED\nuniform sampler2D lensflare;\nuniform sampler2D lensdirt;\n#endif\n#ifdef LUM_ENABLED\nuniform sampler2D lum;\n#endif\n#ifdef LUT_ENABLED\nuniform sampler2D lut;\n#endif\n#ifdef COLOR_CORRECTION\nuniform float brightness : 0.0;\nuniform float contrast : 1.0;\nuniform float saturation : 1.0;\n#endif\n#ifdef VIGNETTE\nuniform float vignetteDarkness: 1.0;\nuniform float vignetteOffset: 1.0;\n#endif\nuniform float exposure : 1.0;\nuniform float bloomIntensity : 0.25;\nuniform float lensflareIntensity : 1;\nvarying vec2 v_Texcoord;\n@import clay.util.srgb\nvec3 ACESToneMapping(vec3 color)\n{\n const float A = 2.51;\n const float B = 0.03;\n const float C = 2.43;\n const float D = 0.59;\n const float E = 0.14;\n return (color * (A * color + B)) / (color * (C * color + D) + E);\n}\nfloat eyeAdaption(float fLum)\n{\n return mix(0.2, fLum, 0.5);\n}\n#ifdef LUT_ENABLED\nvec3 lutTransform(vec3 color) {\n float blueColor = color.b * 63.0;\n vec2 quad1;\n quad1.y = floor(floor(blueColor) / 8.0);\n quad1.x = floor(blueColor) - (quad1.y * 8.0);\n vec2 quad2;\n quad2.y = floor(ceil(blueColor) / 8.0);\n quad2.x = ceil(blueColor) - (quad2.y * 8.0);\n vec2 texPos1;\n texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);\n texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);\n vec2 texPos2;\n texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);\n texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);\n vec4 newColor1 = texture2D(lut, texPos1);\n vec4 newColor2 = texture2D(lut, texPos2);\n vec4 newColor = mix(newColor1, newColor2, fract(blueColor));\n return newColor.rgb;\n}\n#endif\n@import clay.util.rgbm\nvoid main()\n{\n vec4 texel = vec4(0.0);\n vec4 originalTexel = vec4(0.0);\n#ifdef TEXTURE_ENABLED\n texel = decodeHDR(texture2D(texture, v_Texcoord));\n originalTexel = texel;\n#endif\n#ifdef BLOOM_ENABLED\n vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));\n texel.rgb += bloomTexel.rgb * bloomIntensity;\n texel.a += bloomTexel.a * bloomIntensity;\n#endif\n#ifdef LENSFLARE_ENABLED\n texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;\n#endif\n texel.a = min(texel.a, 1.0);\n#ifdef LUM_ENABLED\n float fLum = texture2D(lum, vec2(0.5, 0.5)).r;\n float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));\n float exposureBias = adaptedLumDest * exposure;\n#else\n float exposureBias = exposure;\n#endif\n#ifdef TONEMAPPING\n texel.rgb *= exposureBias;\n texel.rgb = ACESToneMapping(texel.rgb);\n#endif\n texel = linearTosRGB(texel);\n#ifdef LUT_ENABLED\n texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));\n#endif\n#ifdef COLOR_CORRECTION\n texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);\n texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);\n float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));\n texel.rgb = mix(vec3(lum), texel.rgb, saturation);\n#endif\n#ifdef VIGNETTE\n vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);\n texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));\n#endif\n gl_FragColor = encodeHDR(texel);\n#ifdef DEBUG\n #if DEBUG == 1\n gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));\n #elif DEBUG == 2\n gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);\n #elif DEBUG == 3\n gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));\n #endif\n#endif\n if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {\n gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));\n }\n#ifdef PREMULTIPLY_ALPHA\n gl_FragColor.rgb *= gl_FragColor.a;\n#endif\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export clay.compositor.blend\n#define SHADER_NAME blend\n#ifdef TEXTURE1_ENABLED\nuniform sampler2D texture1;\nuniform float weight1 : 1.0;\n#endif\n#ifdef TEXTURE2_ENABLED\nuniform sampler2D texture2;\nuniform float weight2 : 1.0;\n#endif\n#ifdef TEXTURE3_ENABLED\nuniform sampler2D texture3;\nuniform float weight3 : 1.0;\n#endif\n#ifdef TEXTURE4_ENABLED\nuniform sampler2D texture4;\nuniform float weight4 : 1.0;\n#endif\n#ifdef TEXTURE5_ENABLED\nuniform sampler2D texture5;\nuniform float weight5 : 1.0;\n#endif\n#ifdef TEXTURE6_ENABLED\nuniform sampler2D texture6;\nuniform float weight6 : 1.0;\n#endif\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\nvoid main()\n{\n vec4 tex = vec4(0.0);\n#ifdef TEXTURE1_ENABLED\n tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;\n#endif\n#ifdef TEXTURE2_ENABLED\n tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;\n#endif\n#ifdef TEXTURE3_ENABLED\n tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;\n#endif\n#ifdef TEXTURE4_ENABLED\n tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;\n#endif\n#ifdef TEXTURE5_ENABLED\n tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;\n#endif\n#ifdef TEXTURE6_ENABLED\n tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;\n#endif\n gl_FragColor = encodeHDR(tex);\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export clay.compositor.fxaa\nuniform sampler2D texture;\nuniform vec4 viewport : VIEWPORT;\nvarying vec2 v_Texcoord;\n#define FXAA_REDUCE_MIN (1.0/128.0)\n#define FXAA_REDUCE_MUL (1.0/8.0)\n#define FXAA_SPAN_MAX 8.0\n@import clay.util.rgbm\nvoid main()\n{\n vec2 resolution = 1.0 / viewport.zw;\n vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;\n vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;\n vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;\n vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;\n vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );\n vec3 rgbM = rgbaM.xyz;\n float opacity = rgbaM.w;\n vec3 luma = vec3( 0.299, 0.587, 0.114 );\n float lumaNW = dot( rgbNW, luma );\n float lumaNE = dot( rgbNE, luma );\n float lumaSW = dot( rgbSW, luma );\n float lumaSE = dot( rgbSE, luma );\n float lumaM = dot( rgbM, luma );\n float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );\n float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );\n vec2 dir;\n dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );\n float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );\n dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n dir * rcpDirMin)) * resolution;\n vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;\n rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;\n rgbA *= 0.5;\n vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;\n rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;\n rgbB *= 0.25;\n rgbB += rgbA * 0.5;\n float lumaB = dot( rgbB, luma );\n if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )\n {\n gl_FragColor = vec4( rgbA, opacity );\n }\n else {\n gl_FragColor = vec4( rgbB, opacity );\n }\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n);
    t.a = {
      getFilledRegions: function (e, t) {
        var r, n = (e || []).slice();
        if ("string" == typeof t ? (t = i.a.getMap(t), r = t && t.geoJson) : t && t.features && (r = t), !r) return [];
        for (var a = {}, o = r.features, s = 0; s < n.length; s++) a[n[s].name] = n[s];
        for (var s = 0; s < o.length; s++) {
          var u = o[s].properties.name;
          a[u] || n.push({
            name: u
          })
        }
        return n
      },
      defaultOption: {
        show: !0,
        zlevel: -10,
        map: "",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        boxWidth: 100,
        boxHeight: 10,
        boxDepth: "auto",
        regionHeight: 3,
        environment: "auto",
        groundPlane: {
          show: !1,
          color: "#aaa"
        },
        shading: "lambert",
        light: {
          main: {
            alpha: 40,
            beta: 30
          }
        },
        viewControl: {
          alpha: 40,
          beta: 0,
          distance: 100,
          orthographicSize: 60,
          minAlpha: 5,
          minBeta: -80,
          maxBeta: 80
        },
        label: {
          show: !1,
          distance: 2,
          textStyle: {
            fontSize: 20,
            color: "#000",
            backgroundColor: "rgba(255,255,255,0.7)",
            padding: 3,
            borderRadius: 4
          }
        },
        itemStyle: {
          color: "#fff",
          borderWidth: 0,
          borderColor: "#333"
        },
        emphasis: {
          itemStyle: {
            color: "#639fc0"
          },
          label: {
            show: !0
          }
        }
      }
    }
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r) {
      var n = e[t];
      e[t] = e[r], e[r] = n
    }

    function i(e, t, r, i, a) {
      var o = r,
        s = e[t];
      n(e, t, i);
      for (var u = r; u < i; u++) a(e[u], s) < 0 && (n(e, u, o), o++);
      return n(e, i, o), o
    }

    function a(e, t, r, n) {
      if (r < n) {
        var o = Math.floor((r + n) / 2),
          s = i(e, o, r, n, t);
        a(e, t, r, s - 1), a(e, t, s + 1, n)
      }
    }

    function o() {
      this._parts = []
    }
    o.prototype.step = function (e, t, r) {
      var n = e.length;
      if (0 === r) {
        this._parts = [], this._sorted = !1;
        var o = Math.floor(n / 2);
        this._parts.push({
          pivot: o,
          left: 0,
          right: n - 1
        }), this._currentSortPartIdx = 0
      }
      if (!this._sorted) {
        var s = this._parts;
        if (0 === s.length) return this._sorted = !0, !0;
        if (s.length < 512) {
          for (var u = 0; u < s.length; u++) s[u].pivot = i(e, s[u].pivot, s[u].left, s[u].right, t);
          for (var l = [], u = 0; u < s.length; u++) {
            var h = s[u].left,
              c = s[u].pivot - 1;
            c > h && l.push({
              pivot: Math.floor((c + h) / 2),
              left: h,
              right: c
            });
            var h = s[u].pivot + 1,
              c = s[u].right;
            c > h && l.push({
              pivot: Math.floor((c + h) / 2),
              left: h,
              right: c
            })
          }
          s = this._parts = l
        } else
          for (var u = 0; u < Math.floor(s.length / 10); u++) {
            var d = s.length - 1 - this._currentSortPartIdx;
            if (a(e, t, s[d].left, s[d].right), ++this._currentSortPartIdx === s.length) return this._sorted = !0, !0
          }
        return !1
      }
    }, o.sort = a, t.a = o
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      var r = e.getBoxLayoutParams(),
        n = l.a.getLayoutRect(r, {
          width: t.getWidth(),
          height: t.getHeight()
        });
      n.y = t.getHeight() - n.y - n.height, this.viewGL.setViewport(n.x, n.y, n.width, n.height, t.getDevicePixelRatio());
      var i = this.getGeoBoundingRect(),
        a = i.width / i.height * (e.get("aspectScale") || .75),
        o = e.get("boxWidth"),
        s = e.get("boxDepth"),
        u = e.get("boxHeight");
      null == u && (u = 5), isNaN(o) && isNaN(s) && (o = 100), isNaN(s) ? s = o / a : isNaN(o) && (o = s / a), this.setSize(o, u, s), this.regionHeight = e.get("regionHeight"), this.altitudeAxis && this.altitudeAxis.setExtent(0, Math.max(u - this.regionHeight, 0))
    }

    function i(e, t) {
      var r = [1 / 0, -1 / 0];
      if (e.eachSeries(function (e) {
          if (e.coordinateSystem === this && "series.map3D" !== e.type) {
            var t = e.getData(),
              n = e.coordDimToDataDim("alt"),
              i = n && n[0];
            if (i) {
              var a = t.getDataExtent(i, !0);
              r[0] = Math.min(r[0], a[0]), r[1] = Math.max(r[1], a[1])
            }
          }
        }, this), r && isFinite(r[1] - r[0])) {
        var n = s.a.helper.createScale(r, {
          type: "value",
          min: "dataMin",
          max: "dataMax"
        });
        this.altitudeAxis = new s.a.Axis("altitude", n), this.resize(this.model, t)
      }
    }
    var a = r(99),
      o = r(0),
      s = r.n(o),
      u = r(47),
      l = r.n(u),
      h = r(22),
      c = r(2),
      d = 0,
      f = {
        dimensions: a.a.prototype.dimensions,
        create: function (e, t) {
          function r(e, r) {
            var o = f.createGeo3D(e);
            e.__viewGL = e.__viewGL || new h.a, o.viewGL = e.__viewGL, e.coordinateSystem = o, o.model = e, a.push(o), o.resize = n, o.resize(e, t), o.update = i
          }
          var a = [];
          if (!s.a.getMap) throw new Error("geo3D component depends on geo component");
          return e.eachComponent("geo3D", function (e, t) {
            r(e, t)
          }), e.eachSeriesByType("map3D", function (e, t) {
            var n = e.get("coordinateSystem");
            null == n && (n = "geo3D"), "geo3D" === n && r(e, t)
          }), e.eachSeries(function (t) {
            if ("geo3D" === t.get("coordinateSystem")) {
              if ("series.map3D" === t.type) return;
              var r = t.getReferringComponents("geo3D")[0];
              if (r || (r = e.getComponent("geo3D")), !r) throw new Error('geo "' + c.a.firstNotNull(t.get("geo3DIndex"), t.get("geo3DId"), 0) + '" not found');
              t.coordinateSystem = r.coordinateSystem
            }
          }), a
        },
        createGeo3D: function (e) {
          var t, r = e.get("map");
          return "string" == typeof r ? (t = r, r = s.a.getMap(r)) : r && r.features && (r = {
            geoJson: r
          }), null == t && (t = "GEO_ANONYMOUS_" + d++), new a.a(t + d++, t, r && r.geoJson, r && r.specialAreas, e.get("nameMap"))
        }
      };
    s.a.registerCoordinateSystem("geo3D", f), t.a = f
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r, n, i) {
      this.name = e, this.map = t, this.regionHeight = 0, this.regions = [], this._nameCoordMap = {}, this.loadGeoJson(r, n, i), this.transform = d.identity(new Float64Array(16)), this.invTransform = d.identity(new Float64Array(16)), this.extrudeY = !0, this.altitudeAxis
    }
    var i = r(0),
      a = r.n(i),
      o = r(6),
      s = r(205),
      u = r.n(s),
      l = r(206),
      h = r.n(l),
      c = o.a.vec3,
      d = o.a.mat4,
      f = [u.a, h.a];
    n.prototype = {
      constructor: n,
      type: "geo3D",
      dimensions: ["lng", "lat", "alt"],
      containPoint: function () {},
      loadGeoJson: function (e, t, r) {
        var n = a.a.parseGeoJSON || a.a.parseGeoJson;
        try {
          this.regions = e ? n(e) : []
        } catch (e) {
          throw "Invalid geoJson format\n" + e
        }
        t = t || {}, r = r || {};
        for (var i = this.regions, o = {}, s = 0; s < i.length; s++) {
          var u = i[s].name;
          u = r[u] || u, i[s].name = u, o[u] = i[s], this.addGeoCoord(u, i[s].center);
          var l = t[u];
          l && i[s].transformTo(l.left, l.top, l.width, l.height)
        }
        this._regionsMap = o, this._geoRect = null, f.forEach(function (e) {
          e(this)
        }, this)
      },
      getGeoBoundingRect: function () {
        if (this._geoRect) return this._geoRect;
        for (var e, t = this.regions, r = 0; r < t.length; r++) {
          var n = t[r].getBoundingRect();
          e = e || n.clone(), e.union(n)
        }
        return this._geoRect = e || new a.a.graphic.BoundingRect(0, 0, 0, 0)
      },
      addGeoCoord: function (e, t) {
        this._nameCoordMap[e] = t
      },
      getRegion: function (e) {
        return this._regionsMap[e]
      },
      getRegionByCoord: function (e) {
        for (var t = this.regions, r = 0; r < t.length; r++)
          if (t[r].contain(e)) return t[r]
      },
      setSize: function (e, t, r) {
        this.size = [e, t, r];
        var n = this.getGeoBoundingRect(),
          i = e / n.width,
          a = -r / n.height,
          o = -e / 2 - n.x * i,
          s = r / 2 - n.y * a,
          u = this.extrudeY ? [o, 0, s] : [o, s, 0],
          l = this.extrudeY ? [i, 1, a] : [i, a, 1],
          h = this.transform;
        d.identity(h), d.translate(h, h, u), d.scale(h, h, l), d.invert(this.invTransform, h)
      },
      dataToPoint: function (e, t) {
        t = t || [];
        var r = this.extrudeY ? 1 : 2,
          n = this.extrudeY ? 2 : 1,
          i = e[2];
        return isNaN(i) && (i = 0), t[0] = e[0], t[n] = e[1], this.altitudeAxis ? t[r] = this.altitudeAxis.dataToCoord(i) : t[r] = 0, t[r] += this.regionHeight, c.transformMat4(t, t, this.transform), t
      },
      pointToData: function (e, t) {}
    }, t.a = n
  }, function (e, t, r) {
    "use strict";

    function n() {
      this.width = 0, this.height = 0, this.altitudeScale = 1, this.boxHeight = "auto", this.altitudeExtent, this.bearing = 0, this.pitch = 0, this.center = [0, 0], this._origin, this.zoom = 0, this._initialZoom, this.maxPitch = 60, this.zoomOffset = 0
    }
    var i = r(6),
      a = i.a.mat4,
      o = .6435011087932844,
      s = Math.PI;
    n.prototype = {
      constructor: n,
      dimensions: ["lng", "lat", "alt"],
      containPoint: function () {},
      setCameraOption: function (e) {
        this.bearing = e.bearing, this.pitch = e.pitch, this.center = e.center, this.zoom = e.zoom, this._origin || (this._origin = this.projectOnTileWithScale(this.center, 512)), null == this._initialZoom && (this._initialZoom = this.zoom), this.updateTransform()
      },
      updateTransform: function () {
        if (this.height) {
          var e = .5 / Math.tan(o / 2) * this.height * .1,
            t = Math.max(Math.min(this.pitch, this.maxPitch), 0) / 180 * Math.PI,
            r = Math.PI / 2 + t,
            n = Math.sin(.3217505543966422) * e / Math.sin(Math.PI - r - .3217505543966422),
            i = Math.cos(Math.PI / 2 - t) * n + e,
            s = 1.1 * i;
          this.pitch > 50 && (s = 1e3);
          var u = [];
          a.perspective(u, o, this.width / this.height, 1, s), this.viewGL.camera.projectionMatrix.setArray(u), this.viewGL.camera.decomposeProjectionMatrix();
          var u = a.identity([]),
            l = this.dataToPoint(this.center);
          a.scale(u, u, [1, -1, 1]), a.translate(u, u, [0, 0, -e]), a.rotateX(u, u, t), a.rotateZ(u, u, -this.bearing / 180 * Math.PI), a.translate(u, u, [-l[0] * this.getScale() * .1, -l[1] * this.getScale() * .1, 0]), this.viewGL.camera.viewMatrix.array = u;
          var h = [];
          a.invert(h, u), this.viewGL.camera.worldTransform.array = h, this.viewGL.camera.decomposeWorldTransform();
          var c, d = 512 * this.getScale();
          if (this.altitudeExtent && !isNaN(this.boxHeight)) {
            var f = this.altitudeExtent[1] - this.altitudeExtent[0];
            c = this.boxHeight / f * this.getScale() / Math.pow(2, this._initialZoom - this.zoomOffset)
          } else c = d / (2 * Math.PI * 6378e3 * Math.abs(Math.cos(this.center[1] * (Math.PI / 180)))) * this.altitudeScale * .1;
          this.viewGL.rootNode.scale.set(.1 * this.getScale(), .1 * this.getScale(), c)
        }
      },
      getScale: function () {
        return Math.pow(2, this.zoom - this.zoomOffset)
      },
      projectOnTile: function (e, t) {
        return this.projectOnTileWithScale(e, 512 * this.getScale(), t)
      },
      projectOnTileWithScale: function (e, t, r) {
        var n = e[0],
          i = e[1],
          a = n * s / 180,
          o = i * s / 180,
          u = t * (a + s) / (2 * s),
          l = t * (s - Math.log(Math.tan(s / 4 + .5 * o))) / (2 * s);
        return r = r || [], r[0] = u, r[1] = l, r
      },
      unprojectFromTile: function (e, t) {
        return this.unprojectOnTileWithScale(e, 512 * this.getScale(), t)
      },
      unprojectOnTileWithScale: function (e, t, r) {
        var n = e[0],
          i = e[1],
          a = n / t * (2 * s) - s,
          o = 2 * (Math.atan(Math.exp(s - i / t * (2 * s))) - s / 4);
        return r = r || [], r[0] = 180 * a / s, r[1] = 180 * o / s, r
      },
      dataToPoint: function (e, t) {
        return t = this.projectOnTileWithScale(e, 512, t), t[0] -= this._origin[0], t[1] -= this._origin[1], t[2] = isNaN(e[2]) ? 0 : e[2], isNaN(e[2]) || (t[2] = e[2], this.altitudeExtent && (t[2] -= this.altitudeExtent[0])), t
      }
    }, t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(2),
      i = r(1),
      a = r(22);
    t.a = function (e, t, r) {
      function o(e, t) {
        var r = t.getWidth(),
          n = t.getHeight(),
          i = t.getDevicePixelRatio();
        this.viewGL.setViewport(0, 0, r, n, i), this.width = r, this.height = n, this.altitudeScale = e.get("altitudeScale"), this.boxHeight = e.get("boxHeight")
      }

      function s(e, t) {
        if ("auto" !== this.model.get("boxHeight")) {
          var r = [1 / 0, -1 / 0];
          e.eachSeries(function (e) {
            if (e.coordinateSystem === this) {
              var t = e.getData(),
                n = e.coordDimToDataDim("alt")[0];
              if (n) {
                var i = t.getDataExtent(n, !0);
                r[0] = Math.min(r[0], i[0]), r[1] = Math.max(r[1], i[1])
              }
            }
          }, this), r && isFinite(r[1] - r[0]) && (this.altitudeExtent = r)
        }
      }
      return {
        dimensions: t.prototype.dimensions,
        create: function (u, l) {
          var h = [];
          return u.eachComponent(e, function (e) {
            var r = e.__viewGL;
            r || (r = e.__viewGL = new a.a, r.setRootNode(new i.a.Node));
            var n = new t;
            n.viewGL = e.__viewGL, n.resize = o, n.resize(e, l), h.push(n), e.coordinateSystem = n, n.model = e, n.update = s
          }), u.eachSeries(function (t) {
            if (t.get("coordinateSystem") === e) {
              var r = t.getReferringComponents(e)[0];
              if (r || (r = u.getComponent(e)), !r) throw new Error(e + ' "' + n.a.firstNotNull(t.get(e + "Index"), t.get(e + "Id"), 0) + '" not found');
              t.coordinateSystem = r.coordinateSystem
            }
          }), r && r(h, u, l), h
        }
      }
    }
  }, function (e, t, r) {
    "use strict";
    t.a = "\n@export ecgl.displayShadow.vertex\n\n@import ecgl.common.transformUniforms\n\n@import ecgl.common.uv.header\n\n@import ecgl.common.attributes\n\nvarying vec3 v_WorldPosition;\n\nvarying vec3 v_Normal;\n\nvoid main()\n{\n @import ecgl.common.uv.main\n v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);\n\n v_WorldPosition = (world * vec4(position, 1.0)).xyz;\n gl_Position = worldViewProjection * vec4(position, 1.0);\n}\n\n@end\n\n\n@export ecgl.displayShadow.fragment\n\n@import ecgl.common.uv.fragmentHeader\n\nvarying vec3 v_Normal;\nvarying vec3 v_WorldPosition;\n\nuniform float roughness: 0.2;\n\n#ifdef DIRECTIONAL_LIGHT_COUNT\n@import clay.header.directional_light\n#endif\n\n@import ecgl.common.ssaoMap.header\n\n@import clay.plugin.compute_shadow_map\n\nvoid main()\n{\n float shadow = 1.0;\n\n @import ecgl.common.ssaoMap.main\n\n#if defined(DIRECTIONAL_LIGHT_COUNT) && defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];\n if(shadowEnabled)\n {\n computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);\n }\n for (int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++) {\n shadow = min(shadow, shadowContribsDir[i] * 0.5 + 0.5);\n }\n#endif\n\n shadow *= 0.5 + ao * 0.5;\n shadow = clamp(shadow, 0.0, 1.0);\n\n gl_FragColor = vec4(vec3(0.0), 1.0 - shadow);\n}\n\n@end"
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      this.viewGL = e
    }
    var i = r(84),
      a = r.n(i),
      o = r(83),
      s = r.n(o);
    n.prototype.reset = function (e, t) {
      this._updateCamera(t.getWidth(), t.getHeight(), t.getDevicePixelRatio()), this._viewTransform = a.a.create(), this.updateTransform(e, t)
    }, n.prototype.updateTransform = function (e, t) {
      var r = e.coordinateSystem;
      r.getRoamTransform && (a.a.invert(this._viewTransform, r.getRoamTransform()), this._setCameraTransform(this._viewTransform), t.getZr().refresh())
    }, n.prototype.dataToPoint = function (e, t, r) {
      r = e.dataToPoint(t, null, r);
      var n = this._viewTransform;
      n && s.a.applyTransform(r, r, n)
    }, n.prototype.removeTransformInPoint = function (e) {
      return this._viewTransform && s.a.applyTransform(e, e, this._viewTransform), e
    }, n.prototype.getZoom = function () {
      if (this._viewTransform) {
        var e = this._viewTransform;
        return 1 / Math.max(Math.sqrt(e[0] * e[0] + e[1] * e[1]), Math.sqrt(e[2] * e[2] + e[3] * e[3]))
      }
      return 1
    }, n.prototype._setCameraTransform = function (e) {
      var t = this.viewGL.camera;
      t.position.set(e[4], e[5], 0), t.scale.set(Math.sqrt(e[0] * e[0] + e[1] * e[1]), Math.sqrt(e[2] * e[2] + e[3] * e[3]), 1)
    }, n.prototype._updateCamera = function (e, t, r) {
      this.viewGL.setViewport(0, 0, e, t, r);
      var n = this.viewGL.camera;
      n.left = n.top = 0, n.bottom = t, n.right = e, n.near = 0, n.far = 100
    }, t.a = n
  }, function (e, t, r) {
    (function (e) {
      var r;
      "undefined" != typeof window ? r = window.__DEV__ : void 0 !== e && (r = e.__DEV__), void 0 === r && (r = !0);
      var n = r;
      t.__DEV__ = n
    }).call(t, r(68))
  }, function (e, t, r) {
    "use strict";
    var n = r(15),
      i = r(0),
      a = r.n(i),
      o = r(38),
      s = r(6),
      u = s.a.vec2,
      l = [
        [0, 0],
        [1, 1]
      ],
      h = n.a.extend(function () {
        return {
          segmentScale: 4,
          dynamic: !0,
          useNativeLine: !0,
          attributes: {
            position: new n.a.Attribute("position", "float", 2, "POSITION"),
            normal: new n.a.Attribute("normal", "float", 2),
            offset: new n.a.Attribute("offset", "float", 1),
            color: new n.a.Attribute("color", "float", 4, "COLOR")
          }
        }
      }, {
        resetOffset: function () {
          this._vertexOffset = 0, this._faceOffset = 0, this._itemVertexOffsets = []
        },
        setVertexCount: function (e) {
          var t = this.attributes;
          this.vertexCount !== e && (t.position.init(e), t.color.init(e), this.useNativeLine || (t.offset.init(e), t.normal.init(e)), e > 65535 ? this.indices instanceof Uint16Array && (this.indices = new Uint32Array(this.indices)) : this.indices instanceof Uint32Array && (this.indices = new Uint16Array(this.indices)))
        },
        setTriangleCount: function (e) {
          this.triangleCount !== e && (this.indices = 0 === e ? null : this.vertexCount > 65535 ? new Uint32Array(3 * e) : new Uint16Array(3 * e))
        },
        _getCubicCurveApproxStep: function (e, t, r, n) {
          return 1 / (u.dist(e, t) + u.dist(r, t) + u.dist(n, r) + 1) * this.segmentScale
        },
        getCubicCurveVertexCount: function (e, t, r, n) {
          var i = this._getCubicCurveApproxStep(e, t, r, n),
            a = Math.ceil(1 / i);
          return this.useNativeLine ? 2 * a : 2 * a + 2
        },
        getCubicCurveTriangleCount: function (e, t, r, n) {
          var i = this._getCubicCurveApproxStep(e, t, r, n),
            a = Math.ceil(1 / i);
          return this.useNativeLine ? 0 : 2 * a
        },
        getLineVertexCount: function () {
          return this.getPolylineVertexCount(l)
        },
        getLineTriangleCount: function () {
          return this.getPolylineTriangleCount(l)
        },
        getPolylineVertexCount: function (e) {
          var t;
          if ("number" == typeof e) t = e;
          else {
            t = "number" != typeof e[0] ? e.length : e.length / 2
          }
          return this.useNativeLine ? 2 * (t - 1) : 2 * (t - 1) + 2
        },
        getPolylineTriangleCount: function (e) {
          var t;
          if ("number" == typeof e) t = e;
          else {
            t = "number" != typeof e[0] ? e.length : e.length / 2
          }
          return this.useNativeLine ? 0 : 2 * (t - 1)
        },
        addCubicCurve: function (e, t, r, n, i, a) {
          null == a && (a = 1);
          for (var o = e[0], s = e[1], u = t[0], l = t[1], h = r[0], c = r[1], d = n[0], f = n[1], p = this._getCubicCurveApproxStep(e, t, r, n), m = p * p, g = m * p, _ = 3 * p, v = 3 * m, y = 6 * m, x = 6 * g, T = o - 2 * u + h, b = s - 2 * l + c, w = 3 * (u - h) - o + d, E = 3 * (l - c) - s + f, S = o, A = s, M = (u - o) * _ + T * v + w * g, C = (l - s) * _ + b * v + E * g, L = T * y + w * x, D = b * y + E * x, N = w * x, R = E * x, P = 0, I = 0, O = Math.ceil(1 / p), F = new Float32Array(3 * (O + 1)), F = [], B = 0, I = 0; I < O + 1; I++) F[B++] = S, F[B++] = A, S += M, A += C, M += L, C += D, L += N, D += R, (P += p) > 1 && (S = M > 0 ? Math.min(S, d) : Math.max(S, d), A = C > 0 ? Math.min(A, f) : Math.max(A, f));
          this.addPolyline(F, i, a)
        },
        addLine: function (e, t, r, n) {
          this.addPolyline([e, t], r, n)
        },
        addPolyline: function () {
          var e = u.create(),
            t = u.create(),
            r = u.create(),
            n = u.create(),
            i = [],
            a = [],
            o = [];
          return function (s, l, h, c, d) {
            if (s.length) {
              var f = "number" != typeof s[0];
              if (null == d && (d = f ? s.length : s.length / 2), !(d < 2)) {
                null == c && (c = 0), null == h && (h = 1), this._itemVertexOffsets.push(this._vertexOffset);
                for (var p, m = f ? "number" != typeof l[0] : l.length / 4 === d, g = this.attributes.position, _ = this.attributes.color, v = this.attributes.offset, y = this.attributes.normal, x = this.indices, T = this._vertexOffset, b = 0; b < d; b++) {
                  if (f) i = s[b + c], p = m ? l[b + c] : l;
                  else {
                    var w = 2 * b + c;
                    if (i = i || [], i[0] = s[w], i[1] = s[w + 1], m) {
                      var E = 4 * b + c;
                      p = p || [], p[0] = l[E], p[1] = l[E + 1], p[2] = l[E + 2], p[3] = l[E + 3]
                    } else p = l
                  }
                  if (this.useNativeLine) b > 1 && (g.copy(T, T - 1), _.copy(T, T - 1), T++);
                  else {
                    var S;
                    if (b < d - 1) {
                      if (f) u.copy(a, s[b + 1]);
                      else {
                        var w = 2 * (b + 1) + c;
                        a = a || [], a[0] = s[w], a[1] = s[w + 1]
                      }
                      if (b > 0) {
                        u.sub(e, i, o), u.sub(t, a, i), u.normalize(e, e), u.normalize(t, t), u.add(n, e, t), u.normalize(n, n);
                        var A = h / 2 * Math.min(1 / u.dot(e, n), 2);
                        r[0] = -n[1], r[1] = n[0], S = A
                      } else u.sub(e, a, i), u.normalize(e, e), r[0] = -e[1], r[1] = e[0], S = h / 2
                    } else u.sub(e, i, o), u.normalize(e, e), r[0] = -e[1], r[1] = e[0], S = h / 2;
                    y.set(T, r), y.set(T + 1, r), v.set(T, S), v.set(T + 1, -S), u.copy(o, i), g.set(T, i), g.set(T + 1, i), _.set(T, p), _.set(T + 1, p), T += 2
                  }
                  if (this.useNativeLine) _.set(T, p), g.set(T, i), T++;
                  else if (b > 0) {
                    var M = 3 * this._faceOffset,
                      x = this.indices;
                    x[M] = T - 4, x[M + 1] = T - 3, x[M + 2] = T - 2, x[M + 3] = T - 3, x[M + 4] = T - 1, x[M + 5] = T - 2, this._faceOffset += 2
                  }
                }
                this._vertexOffset = T
              }
            }
          }
        }(),
        setItemColor: function (e, t) {
          for (var r = this._itemVertexOffsets[e], n = e < this._itemVertexOffsets.length - 1 ? this._itemVertexOffsets[e + 1] : this._vertexOffset, i = r; i < n; i++) this.attributes.color.set(i, t);
          this.dirty("color")
        }
      });
    a.a.util.defaults(h.prototype, o.a), t.a = h
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    r(107), r(154), r(201), r(207), r(213), r(219), r(225), r(232), r(236), r(243), r(249), r(252), r(256), r(259), r(262), r(275), r(281)
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      throw new Error(e + " version is too old, needs " + f[e] + " or higher")
    }

    function i(e, t) {
      e.replace(".", "") - 0 < f[t].replace(".", "") - 0 && n(t), console.log("Loaded " + t + ", version " + e)
    }

    function a(e) {
      this._layers = {}, this._zr = e
    }
    var o = r(0),
      s = r.n(o),
      u = r(108),
      l = r(109),
      h = r(153),
      c = r(1),
      d = {
        version: "1.1.1",
        dependencies: {
          echarts: "4.1.0",
          claygl: "1.2.1"
        }
      },
      f = d.dependencies;
    i(u.a, "claygl"), i(s.a.version, "echarts"), a.prototype.update = function (e, t) {
      function r(e) {
        var t;
        e.coordinateSystem && e.coordinateSystem.model, t = e.get("zlevel");
        var r = i._layers,
          n = r[t];
        if (!n) {
          if (n = r[t] = new l.a("gl-" + t, a), a.painter.isSingleCanvas()) {
            n.virtual = !0;
            var o = new s.a.graphic.Image({
              z: 1e4,
              style: {
                image: n.renderer.canvas
              },
              silent: !0
            });
            n.__hostImage = o, a.add(o)
          }
          a.painter.insertLayer(t, n)
        }
        return n.__hostImage && n.__hostImage.setStyle({
          width: n.renderer.getWidth(),
          height: n.renderer.getHeight()
        }), n
      }

      function n(e, t) {
        e && e.traverse(function (e) {
          e.isRenderable && e.isRenderable() && (e.ignorePicking = null != e.$ignorePicking ? e.$ignorePicking : t)
        })
      }
      var i = this,
        a = t.getZr();
      if (!a.getWidth() || !a.getHeight()) return void console.warn("Dom has no width or height");
      for (var o in this._layers) this._layers[o].removeViewsAll();
      e.eachComponent(function (i, a) {
        if ("series" !== i) {
          var o = t.getViewOfComponentModel(a),
            s = a.coordinateSystem;
          if (o.__ecgl__) {
            var u;
            if (s) {
              if (!s.viewGL) return void console.error("Can't find viewGL in coordinateSystem of component " + a.id);
              u = s.viewGL
            } else {
              if (!a.viewGL) return void console.error("Can't find viewGL of component " + a.id);
              u = s.viewGL
            }
            var u = s.viewGL,
              l = r(a);
            l.addView(u), o.afterRender && o.afterRender(a, e, t, l), n(o.groupGL, a.get("silent"))
          }
        }
      }), e.eachSeries(function (i) {
        var a = t.getViewOfSeriesModel(i),
          o = i.coordinateSystem;
        if (a.__ecgl__) {
          if (o && !o.viewGL && !a.viewGL) return void console.error("Can't find viewGL of series " + a.id);
          var s = o && o.viewGL || a.viewGL,
            u = r(i);
          u.addView(s), a.afterRender && a.afterRender(i, e, t, u), n(a.groupGL, i.get("silent"))
        }
      })
    };
    var p = s.a.init;
    s.a.init = function () {
      var e = p.apply(this, arguments);
      return e.getZr().painter.getRenderedCanvas = function (e) {
        function t(e, t) {
          var r = u._zlevelList;
          null == e && (e = -1 / 0);
          for (var n, a = 0; a < r.length; a++) {
            var o = r[a],
              s = u._layers[o];
            if (!s.__builtin__ && o > e && o < t) {
              n = s;
              break
            }
          }
          n && n.renderToCanvas && (i.save(), n.renderToCanvas(i), i.restore())
        }
        if (e = e || {}, this._singleCanvas) return this._layers[0].dom;
        var r = document.createElement("canvas"),
          n = e.pixelRatio || this.dpr;
        r.width = this.getWidth() * n, r.height = this.getHeight() * n;
        var i = r.getContext("2d");
        i.dpr = n, i.clearRect(0, 0, r.width, r.height), e.backgroundColor && (i.fillStyle = e.backgroundColor, i.fillRect(0, 0, r.width, r.height));
        for (var a, o = this.storage.getDisplayList(!0), s = {}, u = this, l = {
            ctx: i
          }, h = 0; h < o.length; h++) {
          var c = o[h];
          c.zlevel !== a && (t(a, c.zlevel), a = c.zlevel), this._doPaintEl(c, l, !0, s)
        }
        return t(a, 1 / 0), r
      }, e
    }, s.a.registerPostUpdate(function (e, t) {
      var r = t.getZr();
      (r.__egl = r.__egl || new a(r)).update(e, t)
    }), s.a.registerPreprocessor(h.a), s.a.graphicGL = c.a
  }, function (e, t, r) {
    "use strict";
    t.a = "1.2.1"
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      var t = e.__zr;
      e.__zr = null, t && e.removeAnimatorsFromZr && e.removeAnimatorsFromZr(t)
    }

    function i(e) {
      for (var t = 0; t < e.length; t++) e[t].__used__ = 0
    }

    function a(e, t) {
      for (var r = 0; r < t.length; r++) t[r].__used__ || t[r].dispose(e)
    }

    function o(e, t) {
      e.__used__ = e.__used__ || 0, 1 === ++e.__used__ && t.push(e)
    }

    function s(e, t, r) {
      var n, i;
      e.traverse(function (e) {
        if (e.isRenderable()) {
          var a = e.geometry,
            s = e.material;
          if (s !== n)
            for (var u = s.getTextureUniforms(), l = 0; l < u.length; l++) {
              var h = u[l],
                c = s.uniforms[h].value;
              if (c)
                if (c instanceof d.a) o(c, t);
                else if (c instanceof Array)
                for (var f = 0; f < c.length; f++) c[f] instanceof d.a && o(c[f], t)
            }
          a !== i && o(a, r), n = s, i = a
        }
      });
      for (var a = 0; a < e.lights.length; a++) e.lights[a].cubemap && o(e.lights[a].cubemap, t)
    }
    var u = r(0),
      l = r.n(u),
      h = r(52),
      c = r(117),
      d = r(4),
      f = r(1),
      p = r(53),
      m = r(80),
      g = r.n(m),
      _ = function (e, t) {
        this.id = e, this.zr = t;
        try {
          this.renderer = new h.a({
            clearBit: 0,
            devicePixelRatio: t.painter.dpr,
            preserveDrawingBuffer: !0,
            premultipliedAlpha: !0
          }), this.renderer.resize(t.painter.getWidth(), t.painter.getHeight())
        } catch (e) {
          return this.renderer = null, this.dom = document.createElement("div"), this.dom.style.cssText = "position:absolute; left: 0; top: 0; right: 0; bottom: 0;", this.dom.className = "ecgl-nowebgl", this.dom.innerHTML = "Sorry, your browser does not support WebGL", void console.error(e)
        }
        this.onglobalout = this.onglobalout.bind(this), t.on("globalout", this.onglobalout), this.dom = this.renderer.canvas;
        var r = this.dom.style;
        r.position = "absolute", r.left = "0", r.top = "0", this.views = [], this._picking = new c.a({
          renderer: this.renderer
        }), this._viewsToDispose = [], this._accumulatingId = 0, this._zrEventProxy = new l.a.graphic.Rect({
          shape: {
            x: -1,
            y: -1,
            width: 2,
            height: 2
          },
          __isGLToZRProxy: !0
        }), this._backgroundColor = null
      };
    _.prototype.addView = function (e) {
      if (e.layer !== this) {
        var t = this._viewsToDispose.indexOf(e);
        t >= 0 && this._viewsToDispose.splice(t, 1), this.views.push(e), e.layer = this;
        var r = this.zr;
        e.scene.traverse(function (e) {
          e.__zr = r, e.addAnimatorsToZr && e.addAnimatorsToZr(r)
        })
      }
    }, _.prototype.removeView = function (e) {
      if (e.layer === this) {
        var t = this.views.indexOf(e);
        t >= 0 && (this.views.splice(t, 1), e.scene.traverse(n, this), e.layer = null, this._viewsToDispose.push(e))
      }
    }, _.prototype.removeViewsAll = function () {
      this.views.forEach(function (e) {
        e.scene.traverse(n, this), e.layer = null, this._viewsToDispose.push(e)
      }, this), this.views.length = 0
    }, _.prototype.resize = function (e, t) {
      this.renderer.resize(e, t)
    }, _.prototype.clear = function () {
      var e = this.renderer.gl,
        t = this._backgroundColor || [0, 0, 0, 0];
      e.clearColor(t[0], t[1], t[2], t[3]), e.depthMask(!0), e.colorMask(!0, !0, !0, !0), e.clear(e.DEPTH_BUFFER_BIT | e.COLOR_BUFFER_BIT)
    }, _.prototype.clearDepth = function () {
      var e = this.renderer.gl;
      e.clear(e.DEPTH_BUFFER_BIT)
    }, _.prototype.clearColor = function () {
      var e = this.renderer.gl;
      e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT)
    }, _.prototype.needsRefresh = function () {
      this.zr.refresh()
    }, _.prototype.refresh = function (e) {
      this._backgroundColor = e ? f.a.parseColor(e) : [0, 0, 0, 0], this.renderer.clearColor = this._backgroundColor;
      for (var t = 0; t < this.views.length; t++) this.views[t].prepareRender(this.renderer);
      this._doRender(!1), this._trackAndClean();
      for (var t = 0; t < this._viewsToDispose.length; t++) this._viewsToDispose[t].dispose(this.renderer);
      this._viewsToDispose.length = 0, this._startAccumulating()
    }, _.prototype.renderToCanvas = function (e) {
      this._startAccumulating(!0), e.drawImage(this.dom, 0, 0, e.canvas.width, e.canvas.height)
    }, _.prototype._doRender = function (e) {
      this.clear(), this.renderer.saveViewport();
      for (var t = 0; t < this.views.length; t++) this.views[t].render(this.renderer, e);
      this.renderer.restoreViewport()
    }, _.prototype._stopAccumulating = function () {
      this._accumulatingId = 0, clearTimeout(this._accumulatingTimeout)
    };
    var v = 1;
    _.prototype._startAccumulating = function (e) {
      function t(i) {
        if (r._accumulatingId && i === r._accumulatingId) {
          for (var a = !0, o = 0; o < r.views.length; o++) a = r.views[o].isAccumulateFinished() && n;
          a || (r._doRender(!0), e ? t(i) : g()(function () {
            t(i)
          }))
        }
      }
      var r = this;
      this._stopAccumulating();
      for (var n = !1, i = 0; i < this.views.length; i++) n = this.views[i].needsAccumulate() || n;
      n && (this._accumulatingId = v++, e ? t(r._accumulatingId) : this._accumulatingTimeout = setTimeout(function () {
        t(r._accumulatingId)
      }, 50))
    }, _.prototype._trackAndClean = function () {
      var e = [],
        t = [];
      this._textureList && (i(this._textureList), i(this._geometriesList));
      for (var r = 0; r < this.views.length; r++) s(this.views[r].scene, e, t);
      this._textureList && (a(this.renderer, this._textureList), a(this.renderer, this._geometriesList)), this._textureList = e, this._geometriesList = t
    }, _.prototype.dispose = function () {
      this._stopAccumulating(), this.renderer.disposeScene(this.scene), this.zr.off("globalout", this.onglobalout)
    }, _.prototype.onmousedown = function (e) {
      if (!e.target || !e.target.__isGLToZRProxy) {
        e = e.event;
        var t = this.pickObject(e.offsetX, e.offsetY);
        t && (this._dispatchEvent("mousedown", e, t), this._dispatchDataEvent("mousedown", e, t)), this._downX = e.offsetX, this._downY = e.offsetY
      }
    }, _.prototype.onmousemove = function (e) {
      if (!e.target || !e.target.__isGLToZRProxy) {
        e = e.event;
        var t = this.pickObject(e.offsetX, e.offsetY),
          r = t && t.target,
          n = this._hovered;
        this._hovered = t, n && r !== n.target && (n.relatedTarget = r, this._dispatchEvent("mouseout", e, n), this.zr.setCursorStyle("default")), this._dispatchEvent("mousemove", e, t), t && (this.zr.setCursorStyle("pointer"), n && r === n.target || this._dispatchEvent("mouseover", e, t)), this._dispatchDataEvent("mousemove", e, t)
      }
    }, _.prototype.onmouseup = function (e) {
      if (!e.target || !e.target.__isGLToZRProxy) {
        e = e.event;
        var t = this.pickObject(e.offsetX, e.offsetY);
        t && (this._dispatchEvent("mouseup", e, t), this._dispatchDataEvent("mouseup", e, t)), this._upX = e.offsetX, this._upY = e.offsetY
      }
    }, _.prototype.onclick = _.prototype.dblclick = function (e) {
      if (!e.target || !e.target.__isGLToZRProxy) {
        var t = this._upX - this._downX,
          r = this._upY - this._downY;
        if (!(Math.sqrt(t * t + r * r) > 20)) {
          e = e.event;
          var n = this.pickObject(e.offsetX, e.offsetY);
          n && (this._dispatchEvent(e.type, e, n), this._dispatchDataEvent(e.type, e, n));
          var i = this._clickToSetFocusPoint(e);
          if (i) {
            i.view.setDOFFocusOnPoint(i.distance) && this.zr.refresh()
          }
        }
      }
    }, _.prototype._clickToSetFocusPoint = function (e) {
      for (var t = this.renderer, r = t.viewport, n = this.views.length - 1; n >= 0; n--) {
        var i = this.views[n];
        if (i.hasDOF() && i.containPoint(e.offsetX, e.offsetY)) {
          this._picking.scene = i.scene, this._picking.camera = i.camera, t.viewport = i.viewport;
          var a = this._picking.pick(e.offsetX, e.offsetY, !0);
          if (a) return a.view = i, a
        }
      }
      t.viewport = r
    }, _.prototype.onglobalout = function (e) {
      var t = this._hovered;
      t && this._dispatchEvent("mouseout", e, {
        target: t.target
      })
    }, _.prototype.pickObject = function (e, t) {
      for (var r = [], n = this.renderer, i = n.viewport, a = 0; a < this.views.length; a++) {
        var o = this.views[a];
        o.containPoint(e, t) && (this._picking.scene = o.scene, this._picking.camera = o.camera, n.viewport = o.viewport, this._picking.pickAll(e, t, r))
      }
      return n.viewport = i, r.sort(function (e, t) {
        return e.distance - t.distance
      }), r[0]
    }, _.prototype._dispatchEvent = function (e, t, r) {
      r || (r = {});
      var n = r.target;
      for (r.cancelBubble = !1, r.event = t, r.type = e, r.offsetX = t.offsetX, r.offsetY = t.offsetY; n && (n.trigger(e, r), n = n.getParent(), !r.cancelBubble););
      this._dispatchToView(e, r)
    }, _.prototype._dispatchDataEvent = function (e, t, r) {
      var n = r && r.target,
        i = n && n.dataIndex,
        a = n && n.seriesIndex,
        o = n && n.eventData,
        s = !1,
        u = this._zrEventProxy;
      u.position = [t.offsetX, t.offsetY], u.update();
      var l = {
        target: u
      };
      "mousemove" === e && (null != i ? i !== this._lastDataIndex && (parseInt(this._lastDataIndex, 10) >= 0 && (u.dataIndex = this._lastDataIndex, u.seriesIndex = this._lastSeriesIndex, this.zr.handler.dispatchToElement(l, "mouseout", t)), s = !0) : null != o && o !== this._lastEventData && (null != this._lastEventData && (u.eventData = this._lastEventData, this.zr.handler.dispatchToElement(l, "mouseout", t)), s = !0), this._lastEventData = o, this._lastDataIndex = i, this._lastSeriesIndex = a), u.eventData = o, u.dataIndex = i, u.seriesIndex = a, (null != o || parseInt(i, 10) >= 0 && parseInt(a, 10) >= 0) && (this.zr.handler.dispatchToElement(l, e, t), s && this.zr.handler.dispatchToElement(l, "mouseover", t))
    }, _.prototype._dispatchToView = function (e, t) {
      for (var r = 0; r < this.views.length; r++) this.views[r].containPoint(t.offsetX, t.offsetY) && this.views[r].trigger(e, t)
    }, l.a.util.extend(_.prototype, p.a), t.a = _
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r) {
      "object" == typeof t && (r = t, t = null);
      var n, o = this;
      if (!(e instanceof Function)) {
        n = [];
        for (var s in e) e.hasOwnProperty(s) && n.push(s)
      }
      var u = function (t) {
        if (o.apply(this, arguments), e instanceof Function ? i(this, e.call(this, t)) : a(this, e, n), this.constructor === u)
          for (var r = u.__initializers__, s = 0; s < r.length; s++) r[s].apply(this, arguments)
      };
      u.__super__ = o, o.__initializers__ ? u.__initializers__ = o.__initializers__.slice() : u.__initializers__ = [], t && u.__initializers__.push(t);
      var l = function () {};
      return l.prototype = o.prototype, u.prototype = new l, u.prototype.constructor = u, i(u.prototype, r), u.extend = o.extend, u.derive = o.extend, u
    }

    function i(e, t) {
      if (t)
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
    }

    function a(e, t, r) {
      for (var n = 0; n < r.length; n++) {
        var i = r[n];
        e[i] = t[i]
      }
    }
    t.a = {
      extend: n,
      derive: n
    }
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      function t(t) {
        var n = e.getExtension(t);
        n || (n = e.getExtension("MOZ_" + t)), n || (n = e.getExtension("WEBKIT_" + t)), r[t] = n
      }
      for (var r = {}, n = {}, o = 0; o < i.length; o++) {
        t(i[o])
      }
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        n[s] = e.getParameter(e[s])
      }
      this.getExtension = function (e) {
        return e in r || t(e), r[e]
      }, this.getParameter = function (e) {
        return n[e]
      }, this.getMaxJointNumber = function () {
        return 15
      }
    }
    var i = ["OES_texture_float", "OES_texture_half_float", "OES_texture_float_linear", "OES_texture_half_float_linear", "OES_standard_derivatives", "OES_vertex_array_object", "OES_element_index_uint", "WEBGL_compressed_texture_s3tc", "WEBGL_depth_texture", "EXT_texture_filter_anisotropic", "EXT_shader_texture_lod", "WEBGL_draw_buffers", "EXT_frag_depth", "EXT_sRGB"],
      a = ["MAX_TEXTURE_SIZE", "MAX_CUBE_MAP_TEXTURE_SIZE"];
    t.a = n
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      var t = new XMLHttpRequest;
      t.open("get", e.url), t.responseType = e.responseType || "text", e.onprogress && (t.onprogress = function (t) {
        if (t.lengthComputable) {
          var r = t.loaded / t.total;
          e.onprogress(r, t.loaded, t.total)
        } else e.onprogress(null)
      }), t.onload = function (r) {
        t.status >= 400 ? e.onerror && e.onerror() : e.onload && e.onload(t.response)
      }, e.onerror && (t.onerror = e.onerror), t.send(null)
    }
    t.a = {
      get: n
    }
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return e = Math.round(e), e < 0 ? 0 : e > 255 ? 255 : e
    }

    function i(e) {
      return e = Math.round(e), e < 0 ? 0 : e > 360 ? 360 : e
    }

    function a(e) {
      return e < 0 ? 0 : e > 1 ? 1 : e
    }

    function o(e) {
      return n(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 * 255 : parseInt(e, 10))
    }

    function s(e) {
      return a(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 : parseFloat(e))
    }

    function u(e, t, r) {
      return r < 0 ? r += 1 : r > 1 && (r -= 1), 6 * r < 1 ? e + (t - e) * r * 6 : 2 * r < 1 ? t : 3 * r < 2 ? e + (t - e) * (2 / 3 - r) * 6 : e
    }

    function l(e, t, r) {
      return e + (t - e) * r
    }

    function h(e, t, r, n, i) {
      return e[0] = t, e[1] = r, e[2] = n, e[3] = i, e
    }

    function c(e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }

    function d(e, t) {
      y && c(y, t), y = v.put(e, y || t.slice())
    }

    function f(e, t) {
      var r = (parseFloat(e[0]) % 360 + 360) % 360 / 360,
        i = s(e[1]),
        a = s(e[2]),
        o = a <= .5 ? a * (i + 1) : a + i - a * i,
        l = 2 * a - o;
      return t = t || [], h(t, n(255 * u(l, o, r + 1 / 3)), n(255 * u(l, o, r)), n(255 * u(l, o, r - 1 / 3)), 1), 4 === e.length && (t[3] = e[3]), t
    }

    function p(e) {
      if (e) {
        var t, r, n = e[0] / 255,
          i = e[1] / 255,
          a = e[2] / 255,
          o = Math.min(n, i, a),
          s = Math.max(n, i, a),
          u = s - o,
          l = (s + o) / 2;
        if (0 === u) t = 0, r = 0;
        else {
          r = l < .5 ? u / (s + o) : u / (2 - s - o);
          var h = ((s - n) / 6 + u / 2) / u,
            c = ((s - i) / 6 + u / 2) / u,
            d = ((s - a) / 6 + u / 2) / u;
          n === s ? t = d - c : i === s ? t = 1 / 3 + h - d : a === s && (t = 2 / 3 + c - h), t < 0 && (t += 1), t > 1 && (t -= 1)
        }
        var f = [360 * t, r, l];
        return null != e[3] && f.push(e[3]), f
      }
    }
    var m = r(69),
      g = {},
      _ = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
      },
      v = new m.a(20),
      y = null;
    g.parse = function (e, t) {
      if (e) {
        t = t || [];
        var r = v.get(e);
        if (r) return c(t, r);
        e += "";
        var n = e.replace(/ /g, "").toLowerCase();
        if (n in _) return c(t, _[n]), d(e, t), t;
        if ("#" !== n.charAt(0)) {
          var i = n.indexOf("("),
            a = n.indexOf(")");
          if (-1 !== i && a + 1 === n.length) {
            var u = n.substr(0, i),
              l = n.substr(i + 1, a - (i + 1)).split(","),
              p = 1;
            switch (u) {
              case "rgba":
                if (4 !== l.length) return void h(t, 0, 0, 0, 1);
                p = s(l.pop());
              case "rgb":
                return 3 !== l.length ? void h(t, 0, 0, 0, 1) : (h(t, o(l[0]), o(l[1]), o(l[2]), p), d(e, t), t);
              case "hsla":
                return 4 !== l.length ? void h(t, 0, 0, 0, 1) : (l[3] = s(l[3]), f(l, t), d(e, t), t);
              case "hsl":
                return 3 !== l.length ? void h(t, 0, 0, 0, 1) : (f(l, t), d(e, t), t);
              default:
                return
            }
          }
          h(t, 0, 0, 0, 1)
        } else {
          if (4 === n.length) {
            var m = parseInt(n.substr(1), 16);
            return m >= 0 && m <= 4095 ? (h(t, (3840 & m) >> 4 | (3840 & m) >> 8, 240 & m | (240 & m) >> 4, 15 & m | (15 & m) << 4, 1), d(e, t), t) : void h(t, 0, 0, 0, 1)
          }
          if (7 === n.length) {
            var m = parseInt(n.substr(1), 16);
            return m >= 0 && m <= 16777215 ? (h(t, (16711680 & m) >> 16, (65280 & m) >> 8, 255 & m, 1), d(e, t), t) : void h(t, 0, 0, 0, 1)
          }
        }
      }
    }, g.parseToFloat = function (e, t) {
      if (t = g.parse(e, t)) return t[0] /= 255, t[1] /= 255, t[2] /= 255, t
    }, g.lift = function (e, t) {
      var r = g.parse(e);
      if (r) {
        for (var n = 0; n < 3; n++) r[n] = t < 0 ? r[n] * (1 - t) | 0 : (255 - r[n]) * t + r[n] | 0;
        return g.stringify(r, 4 === r.length ? "rgba" : "rgb")
      }
    }, g.toHex = function (e) {
      var t = g.parse(e);
      if (t) return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2]).toString(16).slice(1)
    }, g.fastLerp = function (e, t, r) {
      if (t && t.length && e >= 0 && e <= 1) {
        r = r || [];
        var i = e * (t.length - 1),
          o = Math.floor(i),
          s = Math.ceil(i),
          u = t[o],
          h = t[s],
          c = i - o;
        return r[0] = n(l(u[0], h[0], c)), r[1] = n(l(u[1], h[1], c)), r[2] = n(l(u[2], h[2], c)), r[3] = a(l(u[3], h[3], c)), r
      }
    }, g.fastMapToColor = g.fastLerp, g.lerp = function (e, t, r) {
      if (t && t.length && e >= 0 && e <= 1) {
        var i = e * (t.length - 1),
          o = Math.floor(i),
          s = Math.ceil(i),
          u = g.parse(t[o]),
          h = g.parse(t[s]),
          c = i - o,
          d = g.stringify([n(l(u[0], h[0], c)), n(l(u[1], h[1], c)), n(l(u[2], h[2], c)), a(l(u[3], h[3], c))], "rgba");
        return r ? {
          color: d,
          leftIndex: o,
          rightIndex: s,
          value: i
        } : d
      }
    }, g.mapToColor = g.lerp, g.modifyHSL = function (e, t, r, n) {
      if (e = g.parse(e)) return e = p(e), null != t && (e[0] = i(t)), null != r && (e[1] = s(r)), null != n && (e[2] = s(n)), g.stringify(f(e), "rgba")
    }, g.modifyAlpha = function (e, t) {
      if ((e = g.parse(e)) && null != t) return e[3] = a(t), g.stringify(e, "rgba")
    }, g.stringify = function (e, t) {
      if (e && e.length) {
        var r = e[0] + "," + e[1] + "," + e[2];
        return "rgba" !== t && "hsva" !== t && "hsla" !== t || (r += "," + e[3]), t + "(" + r + ")"
      }
    }, t.a = g
  }, function (e, t, r) {
    "use strict";
    var n = function () {
      this.head = null, this.tail = null, this._length = 0
    };
    n.prototype.insert = function (e) {
      var t = new n.Entry(e);
      return this.insertEntry(t), t
    }, n.prototype.insertAt = function (e, t) {
      if (!(e < 0)) {
        for (var r = this.head, i = 0; r && i != e;) r = r.next, i++;
        if (r) {
          var a = new n.Entry(t),
            o = r.prev;
          o ? (o.next = a, a.prev = o) : this.head = a, a.next = r, r.prev = a
        } else this.insert(t)
      }
    }, n.prototype.insertBeforeEntry = function (e, t) {
      var r = new n.Entry(e),
        i = t.prev;
      i ? (i.next = r, r.prev = i) : this.head = r, r.next = t, t.prev = r, this._length++
    }, n.prototype.insertEntry = function (e) {
      this.head ? (this.tail.next = e, e.prev = this.tail, this.tail = e) : this.head = this.tail = e, this._length++
    }, n.prototype.remove = function (e) {
      var t = e.prev,
        r = e.next;
      t ? t.next = r : this.head = r, r ? r.prev = t : this.tail = t, e.next = e.prev = null, this._length--
    }, n.prototype.removeAt = function (e) {
      if (!(e < 0)) {
        for (var t = this.head, r = 0; t && r != e;) t = t.next, r++;
        return t ? (this.remove(t), t.value) : void 0
      }
    }, n.prototype.getHead = function () {
      if (this.head) return this.head.value
    }, n.prototype.getTail = function () {
      if (this.tail) return this.tail.value
    }, n.prototype.getAt = function (e) {
      if (!(e < 0)) {
        for (var t = this.head, r = 0; t && r != e;) t = t.next, r++;
        return t.value
      }
    }, n.prototype.indexOf = function (e) {
      for (var t = this.head, r = 0; t;) {
        if (t.value === e) return r;
        t = t.next, r++
      }
    }, n.prototype.length = function () {
      return this._length
    }, n.prototype.isEmpty = function () {
      return 0 === this._length
    }, n.prototype.forEach = function (e, t) {
      for (var r = this.head, n = 0, i = void 0 !== t; r;) i ? e.call(t, r.value, n) : e(r.value, n), r = r.next, n++
    }, n.prototype.clear = function () {
      this.tail = this.head = null, this._length = 0
    }, n.Entry = function (e) {
      this.value = e, this.next = null, this.prev = null
    }, t.a = n
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r) {
      function n(e, r, n, a) {
        var o = "";
        isNaN(r) && (r = r in t ? t[r] : i[r]), isNaN(n) && (n = n in t ? t[n] : i[n]);
        for (var s = parseInt(r); s < parseInt(n); s++) o += "{" + a.replace(/float\s*\(\s*_idx_\s*\)/g, s.toFixed(1)).replace(/_idx_/g, s) + "}";
        return o
      }
      var i = {};
      for (var a in r) i[a + "_COUNT"] = r[a];
      return e.replace(l, n)
    }

    function i(e, t, r) {
      var n = [];
      if (t)
        for (var i in t) {
          var a = t[i];
          a > 0 && n.push("#define " + i.toUpperCase() + "_COUNT " + a)
        }
      if (r)
        for (var o = 0; o < r.length; o++) {
          var s = r[o];
          n.push("#define " + s.toUpperCase() + "_ENABLED")
        }
      for (var s in e) {
        var u = e[s];
        null === u ? n.push("#define " + s) : n.push("#define " + s + " " + u.toString())
      }
      return n.join("\n")
    }

    function a(e) {
      for (var t = [], r = 0; r < e.length; r++) t.push("#extension GL_" + e[r] + " : enable");
      return t.join("\n")
    }

    function o(e) {
      return ["precision", e, "float"].join(" ") + ";\n" + ["precision", e, "int"].join(" ") + ";\n" + ["precision", e, "sampler2D"].join(" ") + ";\n"
    }

    function s(e) {
      this._renderer = e, this._cache = {}
    }
    var u = r(116),
      l = /for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;
    s.prototype.getProgram = function (e, t, r) {
      var s = this._cache,
        l = e.isSkinnedMesh && e.isSkinnedMesh(),
        h = "s" + t.shader.shaderID + "m" + t.getProgramKey();
      r && (h += "se" + r.getProgramKey(e.lightGroup)), l && (h += "," + e.joints.length);
      var c = s[h];
      if (c) return c;
      var d = r ? r.getLightsNumbers(e.lightGroup) : {},
        f = this._renderer,
        p = f.gl,
        m = t.getEnabledTextures(),
        g = "";
      if (l) {
        var _ = {
          SKINNING: null,
          JOINT_COUNT: e.joints.length
        };
        e.joints.length > f.getMaxJointNumber() && (_.USE_SKIN_MATRICES_TEXTURE = null), g = "\n" + i(_) + "\n"
      }
      var v = g + i(t.vertexDefines, d, m),
        y = g + i(t.fragmentDefines, d, m),
        x = v + "\n" + t.shader.vertex,
        T = ["OES_standard_derivatives", "EXT_shader_texture_lod"].filter(function (e) {
          return null != f.getGLExtension(e)
        });
      T.indexOf("EXT_shader_texture_lod") >= 0 && (y += "\n#define SUPPORT_TEXTURE_LOD"), T.indexOf("OES_standard_derivatives") >= 0 && (y += "\n#define SUPPORT_STANDARD_DERIVATIVES");
      var b = a(T) + "\n" + o(t.precision) + "\n" + y + "\n" + t.shader.fragment,
        w = n(x, t.vertexDefines, d),
        E = n(b, t.fragmentDefines, d),
        c = new u.a;
      c.uniformSemantics = t.shader.uniformSemantics, c.attributes = t.shader.attributes;
      var S = c.buildProgram(p, t.shader, w, E);
      return c.__error = S, s[h] = c, c
    }, t.a = s
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      for (var t = e.split("\n"), r = 0, n = t.length; r < n; r++) t[r] = r + 1 + ": " + t[r];
      return t.join("\n")
    }

    function i(e, t, r) {
      if (!e.getShaderParameter(t, e.COMPILE_STATUS)) return [e.getShaderInfoLog(t), n(r)].join("\n")
    }
    var a = r(14),
      o = r(7),
      s = {},
      u = new a.a.Float32Array(16),
      l = o.a.extend({
        uniformSemantics: {},
        attributes: {}
      }, function () {
        this._locations = {}, this._textureSlot = 0, this._program = null
      }, {
        bind: function (e) {
          this._textureSlot = 0, e.gl.useProgram(this._program)
        },
        hasUniform: function (e) {
          var t = this._locations[e];
          return null !== t && void 0 !== t
        },
        useTextureSlot: function (e, t, r) {
          t && (e.gl.activeTexture(e.gl.TEXTURE0 + r), t.isRenderable() ? t.bind(e) : t.unbind(e))
        },
        currentTextureSlot: function () {
          return this._textureSlot
        },
        resetTextureSlot: function (e) {
          this._textureSlot = e || 0
        },
        takeCurrentTextureSlot: function (e, t) {
          var r = this._textureSlot;
          return this.useTextureSlot(e, t, r), this._textureSlot++, r
        },
        setUniform: function (e, t, r, n) {
          var i = this._locations,
            o = i[r];
          if (null === o || void 0 === o) return !1;
          switch (t) {
            case "m4":
              if (!(n instanceof Float32Array)) {
                for (var s = 0; s < n.length; s++) u[s] = n[s];
                n = u
              }
              e.uniformMatrix4fv(o, !1, n);
              break;
            case "2i":
              e.uniform2i(o, n[0], n[1]);
              break;
            case "2f":
              e.uniform2f(o, n[0], n[1]);
              break;
            case "3i":
              e.uniform3i(o, n[0], n[1], n[2]);
              break;
            case "3f":
              e.uniform3f(o, n[0], n[1], n[2]);
              break;
            case "4i":
              e.uniform4i(o, n[0], n[1], n[2], n[3]);
              break;
            case "4f":
              e.uniform4f(o, n[0], n[1], n[2], n[3]);
              break;
            case "1i":
              e.uniform1i(o, n);
              break;
            case "1f":
              e.uniform1f(o, n);
              break;
            case "1fv":
              e.uniform1fv(o, n);
              break;
            case "1iv":
              e.uniform1iv(o, n);
              break;
            case "2iv":
              e.uniform2iv(o, n);
              break;
            case "2fv":
              e.uniform2fv(o, n);
              break;
            case "3iv":
              e.uniform3iv(o, n);
              break;
            case "3fv":
              e.uniform3fv(o, n);
              break;
            case "4iv":
              e.uniform4iv(o, n);
              break;
            case "4fv":
              e.uniform4fv(o, n);
              break;
            case "m2":
            case "m2v":
              e.uniformMatrix2fv(o, !1, n);
              break;
            case "m3":
            case "m3v":
              e.uniformMatrix3fv(o, !1, n);
              break;
            case "m4v":
              if (Array.isArray(n) && Array.isArray(n[0])) {
                for (var l = new a.a.Float32Array(16 * n.length), h = 0, s = 0; s < n.length; s++)
                  for (var c = n[s], d = 0; d < 16; d++) l[h++] = c[d];
                e.uniformMatrix4fv(o, !1, l)
              } else e.uniformMatrix4fv(o, !1, n)
          }
          return !0
        },
        setUniformOfSemantic: function (e, t, r) {
          var n = this.uniformSemantics[t];
          return !!n && this.setUniform(e, n.type, n.symbol, r)
        },
        enableAttributes: function (e, t, r) {
          var n, i = e.gl,
            a = this._program,
            o = this._locations;
          (n = r ? r.__enabledAttributeList : s[e.__uid__]) || (n = r ? r.__enabledAttributeList = [] : s[e.__uid__] = []);
          for (var u = [], l = 0; l < t.length; l++) {
            var h = t[l];
            if (this.attributes[h]) {
              var c = o[h];
              if (null == c) {
                if (-1 === (c = i.getAttribLocation(a, h))) {
                  u[l] = -1;
                  continue
                }
                o[h] = c
              }
              u[l] = c, n[c] ? n[c] = 2 : n[c] = 1
            } else u[l] = -1
          }
          for (var l = 0; l < n.length; l++) switch (n[l]) {
            case 1:
              i.enableVertexAttribArray(l), n[l] = 3;
              break;
            case 2:
              n[l] = 3;
              break;
            case 3:
              i.disableVertexAttribArray(l), n[l] = 0
          }
          return u
        },
        buildProgram: function (e, t, r, n) {
          var a = e.createShader(e.VERTEX_SHADER),
            o = e.createProgram();
          e.shaderSource(a, r), e.compileShader(a);
          var s = e.createShader(e.FRAGMENT_SHADER);
          e.shaderSource(s, n), e.compileShader(s);
          var u = i(e, a, r);
          if (u) return u;
          if (u = i(e, s, n)) return u;
          if (e.attachShader(o, a), e.attachShader(o, s), t.attributeSemantics.POSITION) e.bindAttribLocation(o, 0, t.attributeSemantics.POSITION.symbol);
          else {
            var l = Object.keys(this.attributes);
            e.bindAttribLocation(o, 0, l[0])
          }
          if (e.linkProgram(o), !e.getProgramParameter(o, e.LINK_STATUS)) return "Could not link program\n" + e.getProgramInfoLog(o);
          for (var h = 0; h < t.uniforms.length; h++) {
            var c = t.uniforms[h];
            this._locations[c] = e.getUniformLocation(o, c)
          }
          e.deleteShader(a), e.deleteShader(s), this._program = o, this.vertexCode = r, this.fragmentCode = n
        }
      });
    t.a = l
  }, function (e, t, r) {
    "use strict";
    var n = r(7),
      i = r(54),
      a = r(26),
      o = r(3),
      s = r(9),
      u = r(72),
      l = r(11),
      h = r(12),
      c = n.a.extend({
        scene: null,
        camera: null,
        renderer: null
      }, function () {
        this._ray = new i.a, this._ndc = new a.a
      }, {
        pick: function (e, t, r) {
          return this.pickAll(e, t, [], r)[0] || null
        },
        pickAll: function (e, t, r, n) {
          return this.renderer.screenToNDC(e, t, this._ndc), this.camera.castRay(this._ndc, this._ray), r = r || [], this._intersectNode(this.scene, r, n || !1), r.sort(this._intersectionCompareFunc), r
        },
        _intersectNode: function (e, t, r) {
          e instanceof u.a && e.isRenderable() && (e.ignorePicking && !r || !(e.mode === l.a.TRIANGLES && e.geometry.isUseIndices() || e.geometry.pickByRay || e.geometry.pick) || this._intersectRenderable(e, t));
          for (var n = 0; n < e._children.length; n++) this._intersectNode(e._children[n], t, r)
        },
        _intersectRenderable: function () {
          var e = new o.a,
            t = new o.a,
            r = new o.a,
            n = new i.a,
            a = new s.a;
          return function (i, u) {
            var d = i.isSkinnedMesh();
            n.copy(this._ray), s.a.invert(a, i.worldTransform), d || n.applyTransform(a);
            var f = i.geometry,
              p = d ? i.skeleton.boundingBox : f.boundingBox;
            if (!p || n.intersectBoundingBox(p)) {
              if (f.pick) return void f.pick(this._ndc.x, this._ndc.y, this.renderer, this.camera, i, u);
              if (f.pickByRay) return void f.pickByRay(n, i, u);
              var m, g, _ = i.cullFace === l.a.BACK && i.frontFace === l.a.CCW || i.cullFace === l.a.FRONT && i.frontFace === l.a.CW,
                v = f.indices,
                y = f.attributes.position,
                x = f.attributes.weight,
                T = f.attributes.joint,
                b = [];
              if (y && y.value && v) {
                if (d) {
                  g = i.skeleton.getSubSkinMatrices(i.__uid__, i.joints);
                  for (var w = 0; w < i.joints.length; w++) {
                    b[w] = b[w] || [];
                    for (var E = 0; E < 16; E++) b[w][E] = g[16 * w + E]
                  }
                  var S = [],
                    A = [],
                    M = [],
                    C = [],
                    L = [],
                    D = f.attributes.skinnedPosition;
                  D && D.value || (f.createAttribute("skinnedPosition", "f", 3), D = f.attributes.skinnedPosition, D.init(f.vertexCount));
                  for (var w = 0; w < f.vertexCount; w++) {
                    y.get(w, S), x.get(w, A), T.get(w, M), A[3] = 1 - A[0] - A[1] - A[2], h.a.set(C, 0, 0, 0);
                    for (var E = 0; E < 4; E++) M[E] >= 0 && A[E] > 1e-4 && (h.a.transformMat4(L, S, b[M[E]]), h.a.scaleAndAdd(C, C, L, A[E]));
                    D.set(w, C)
                  }
                }
                for (var w = 0; w < v.length; w += 3) {
                  var N = v[w],
                    R = v[w + 1],
                    P = v[w + 2],
                    I = d ? f.attributes.skinnedPosition : y;
                  if (I.get(N, e.array), I.get(R, t.array), I.get(P, r.array), m = _ ? n.intersectTriangle(e, t, r, i.culling) : n.intersectTriangle(e, r, t, i.culling)) {
                    var O = new o.a;
                    d ? o.a.copy(O, m) : o.a.transformMat4(O, m, i.worldTransform), u.push(new c.Intersection(m, O, i, [N, R, P], w / 3, o.a.dist(O, this._ray.origin)))
                  }
                }
              }
            }
          }
        }(),
        _intersectionCompareFunc: function (e, t) {
          return e.distance - t.distance
        }
      });
    c.Intersection = function (e, t, r, n, i, a) {
      this.point = e, this.pointWorld = t, this.target = r, this.triangle = n, this.triangleIndex = i, this.distance = a
    }, t.a = c
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return {
        byte: c.a.Int8Array,
        ubyte: c.a.Uint8Array,
        short: c.a.Int16Array,
        ushort: c.a.Uint16Array
      } [e] || c.a.Float32Array
    }

    function i(e) {
      return "attr_" + e
    }

    function a(e, t, r, n) {
      switch (this.name = e, this.type = t, this.size = r, this.semantic = n || "", this.value = null, r) {
        case 1:
          this.get = function (e) {
            return this.value[e]
          }, this.set = function (e, t) {
            this.value[e] = t
          }, this.copy = function (e, t) {
            this.value[e] = this.value[e]
          };
          break;
        case 2:
          this.get = function (e, t) {
            var r = this.value;
            return t[0] = r[2 * e], t[1] = r[2 * e + 1], t
          }, this.set = function (e, t) {
            var r = this.value;
            r[2 * e] = t[0], r[2 * e + 1] = t[1]
          }, this.copy = function (e, t) {
            var r = this.value;
            t *= 2, e *= 2, r[e] = r[t], r[e + 1] = r[t + 1]
          };
          break;
        case 3:
          this.get = function (e, t) {
            var r = 3 * e,
              n = this.value;
            return t[0] = n[r], t[1] = n[r + 1], t[2] = n[r + 2], t
          }, this.set = function (e, t) {
            var r = 3 * e,
              n = this.value;
            n[r] = t[0], n[r + 1] = t[1], n[r + 2] = t[2]
          }, this.copy = function (e, t) {
            var r = this.value;
            t *= 3, e *= 3, r[e] = r[t], r[e + 1] = r[t + 1], r[e + 2] = r[t + 2]
          };
          break;
        case 4:
          this.get = function (e, t) {
            var r = this.value,
              n = 4 * e;
            return t[0] = r[n], t[1] = r[n + 1], t[2] = r[n + 2], t[3] = r[n + 3], t
          }, this.set = function (e, t) {
            var r = this.value,
              n = 4 * e;
            r[n] = t[0], r[n + 1] = t[1], r[n + 2] = t[2], r[n + 3] = t[3]
          }, this.copy = function (e, t) {
            var r = this.value;
            t *= 4, e *= 4, r[e] = r[t], r[e + 1] = r[t + 1], r[e + 2] = r[t + 2], r[e + 3] = r[t + 3]
          }
      }
    }

    function o(e, t, r, n, i) {
      this.name = e, this.type = t, this.buffer = r, this.size = n, this.semantic = i, this.symbol = "", this.needsRemove = !1
    }

    function s(e) {
      this.buffer = e, this.count = 0
    }
    var u = r(7),
      l = r(11),
      h = r(57),
      c = r(14);
    a.prototype.init = function (e) {
      if (!this.value || this.value.length != e * this.size) {
        var t = n(this.type);
        this.value = new t(e * this.size)
      }
    }, a.prototype.fromArray = function (e) {
      var t, r = n(this.type);
      if (e[0] && e[0].length) {
        var i = 0,
          a = this.size;
        t = new r(e.length * a);
        for (var o = 0; o < e.length; o++)
          for (var s = 0; s < a; s++) t[i++] = e[o][s]
      } else t = new r(e);
      this.value = t
    }, a.prototype.clone = function (e) {
      var t = new a(this.name, this.type, this.size, this.semantic);
      return e && console.warn("todo"), t
    };
    var d = u.a.extend(function () {
      return {
        attributes: {},
        indices: null,
        dynamic: !0,
        _enabledAttributes: null,
        __used: 0
      }
    }, function () {
      this._cache = new h.a, this._attributeList = Object.keys(this.attributes), this.__vaoCache = {}
    }, {
      mainAttribute: "",
      pick: null,
      pickByRay: null,
      dirty: function () {
        for (var e = this.getEnabledAttributes(), t = 0; t < e.length; t++) this.dirtyAttribute(e[t]);
        this.dirtyIndices(), this._enabledAttributes = null, this._cache.dirty("any")
      },
      dirtyIndices: function () {
        this._cache.dirtyAll("indices")
      },
      dirtyAttribute: function (e) {
        this._cache.dirtyAll(i(e)), this._cache.dirtyAll("attributes")
      },
      getTriangleIndices: function (e, t) {
        if (e < this.triangleCount && e >= 0) {
          t || (t = []);
          var r = this.indices;
          return t[0] = r[3 * e], t[1] = r[3 * e + 1], t[2] = r[3 * e + 2], t
        }
      },
      setTriangleIndices: function (e, t) {
        var r = this.indices;
        r[3 * e] = t[0], r[3 * e + 1] = t[1], r[3 * e + 2] = t[2]
      },
      isUseIndices: function () {
        return !!this.indices
      },
      initIndicesFromArray: function (e) {
        var t, r = this.vertexCount > 65535 ? c.a.Uint32Array : c.a.Uint16Array;
        if (e[0] && e[0].length) {
          var n = 0;
          t = new r(3 * e.length);
          for (var i = 0; i < e.length; i++)
            for (var a = 0; a < 3; a++) t[n++] = e[i][a]
        } else t = new r(e);
        this.indices = t
      },
      createAttribute: function (e, t, r, n) {
        var i = new a(e, t, r, n);
        return this.attributes[e] && this.removeAttribute(e), this.attributes[e] = i, this._attributeList.push(e), i
      },
      removeAttribute: function (e) {
        var t = this._attributeList,
          r = t.indexOf(e);
        return r >= 0 && (t.splice(r, 1), delete this.attributes[e], !0)
      },
      getAttribute: function (e) {
        return this.attributes[e]
      },
      getEnabledAttributes: function () {
        var e = this._enabledAttributes,
          t = this._attributeList;
        if (e) return e;
        for (var r = [], n = this.vertexCount, i = 0; i < t.length; i++) {
          var a = t[i],
            o = this.attributes[a];
          o.value && o.value.length === n * o.size && r.push(a)
        }
        return this._enabledAttributes = r, r
      },
      getBufferChunks: function (e) {
        var t = this._cache;
        t.use(e.__uid__);
        var r = t.isDirty("attributes"),
          n = t.isDirty("indices");
        if (r || n) {
          this._updateBuffer(e.gl, r, n);
          for (var a = this.getEnabledAttributes(), o = 0; o < a.length; o++) t.fresh(i(a[o]));
          t.fresh("attributes"), t.fresh("indices")
        }
        return t.fresh("any"), t.get("chunks")
      },
      _updateBuffer: function (e, t, r) {
        var n = this._cache,
          a = n.get("chunks"),
          u = !1;
        a || (a = [], a[0] = {
          attributeBuffers: [],
          indicesBuffer: null
        }, n.put("chunks", a), u = !0);
        var h = a[0],
          c = h.attributeBuffers,
          d = h.indicesBuffer;
        if (t || u) {
          var f = this.getEnabledAttributes(),
            p = {};
          if (!u)
            for (var m = 0; m < c.length; m++) p[c[m].name] = c[m];
          for (var g = 0; g < f.length; g++) {
            var _, v = f[g],
              y = this.attributes[v];
            u || (_ = p[v]);
            var x;
            x = _ ? _.buffer : e.createBuffer(), n.isDirty(i(v)) && (e.bindBuffer(e.ARRAY_BUFFER, x), e.bufferData(e.ARRAY_BUFFER, y.value, this.dynamic ? l.a.DYNAMIC_DRAW : l.a.STATIC_DRAW)), c[g] = new o(v, y.type, x, y.size, y.semantic)
          }
          for (var m = g; m < c.length; m++) e.deleteBuffer(c[m].buffer);
          c.length = g
        }
        this.isUseIndices() && (r || u) && (d || (d = new s(e.createBuffer()), h.indicesBuffer = d), d.count = this.indices.length, e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, d.buffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, this.dynamic ? l.a.DYNAMIC_DRAW : l.a.STATIC_DRAW))
      },
      dispose: function (e) {
        var t = this._cache;
        t.use(e.__uid__);
        var r = t.get("chunks");
        if (r)
          for (var n = 0; n < r.length; n++) {
            for (var i = r[n], a = 0; a < i.attributeBuffers.length; a++) {
              var o = i.attributeBuffers[a];
              e.gl.deleteBuffer(o.buffer)
            }
            i.indicesBuffer && e.gl.deleteBuffer(i.indicesBuffer.buffer)
          }
        if (this.__vaoCache) {
          var s = e.getGLExtension("OES_vertex_array_object");
          for (var u in this.__vaoCache) {
            var l = this.__vaoCache[u].vao;
            l && s.deleteVertexArrayOES(l)
          }
        }
        this.__vaoCache = {}, t.deleteContext(e.__uid__)
      }
    });
    Object.defineProperty && (Object.defineProperty(d.prototype, "vertexCount", {
      enumerable: !1,
      get: function () {
        var e = this.attributes[this.mainAttribute];
        return e || (e = this.attributes[this._attributeList[0]]), e && e.value ? e.value.length / e.size : 0
      }
    }), Object.defineProperty(d.prototype, "triangleCount", {
      enumerable: !1,
      get: function () {
        var e = this.indices;
        return e ? e.length / 3 : 0
      }
    })), d.STATIC_DRAW = l.a.STATIC_DRAW, d.DYNAMIC_DRAW = l.a.DYNAMIC_DRAW, d.STREAM_DRAW = l.a.STREAM_DRAW, d.AttributeBuffer = o, d.IndicesBuffer = s, d.Attribute = a, t.a = d
  }, function (e, t, r) {
    "use strict";
    var n = r(120),
      i = ":unconfigurable;";
    t.a = ["@export clay.header.directional_light", "uniform vec3 directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]" + i, "uniform vec3 directionalLightColor[DIRECTIONAL_LIGHT_COUNT]" + i, "@end", "@export clay.header.ambient_light", "uniform vec3 ambientLightColor[AMBIENT_LIGHT_COUNT]" + i, "@end", "@export clay.header.ambient_sh_light", "uniform vec3 ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]" + i, "uniform vec3 ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]" + i, n.a, "@end", "@export clay.header.ambient_cubemap_light", "uniform vec3 ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]" + i, "uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]" + i, "uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]" + i, "@end", "@export clay.header.point_light", "uniform vec3 pointLightPosition[POINT_LIGHT_COUNT]" + i, "uniform float pointLightRange[POINT_LIGHT_COUNT]" + i, "uniform vec3 pointLightColor[POINT_LIGHT_COUNT]" + i, "@end", "@export clay.header.spot_light", "uniform vec3 spotLightPosition[SPOT_LIGHT_COUNT]" + i, "uniform vec3 spotLightDirection[SPOT_LIGHT_COUNT]" + i, "uniform float spotLightRange[SPOT_LIGHT_COUNT]" + i, "uniform float spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]" + i, "uniform float spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]" + i, "uniform float spotLightFalloffFactor[SPOT_LIGHT_COUNT]" + i, "uniform vec3 spotLightColor[SPOT_LIGHT_COUNT]" + i, "@end"].join("\n")
  }, function (e, t, r) {
    "use strict";
    t.a = "vec3 calcAmbientSHLight(int idx, vec3 N) {\n int offset = 9 * idx;\n return ambientSHLightCoefficients[0]\n + ambientSHLightCoefficients[1] * N.x\n + ambientSHLightCoefficients[2] * N.y\n + ambientSHLightCoefficients[3] * N.z\n + ambientSHLightCoefficients[4] * N.x * N.z\n + ambientSHLightCoefficients[5] * N.z * N.y\n + ambientSHLightCoefficients[6] * N.y * N.x\n + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)\n + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);\n}"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export clay.skybox.vertex\n#define SHADER_NAME skybox\nuniform mat4 world : WORLD;\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nattribute vec3 position : POSITION;\nvarying vec3 v_WorldPosition;\nvoid main()\n{\n v_WorldPosition = (world * vec4(position, 1.0)).xyz;\n gl_Position = worldViewProjection * vec4(position, 1.0);\n}\n@end\n@export clay.skybox.fragment\n#define PI 3.1415926\nuniform mat4 viewInverse : VIEWINVERSE;\n#ifdef EQUIRECTANGULAR\nuniform sampler2D environmentMap;\n#else\nuniform samplerCube environmentMap;\n#endif\nuniform float lod: 0.0;\nvarying vec3 v_WorldPosition;\n@import clay.util.rgbm\n@import clay.util.srgb\n@import clay.util.ACES\nvoid main()\n{\n vec3 eyePos = viewInverse[3].xyz;\n vec3 V = normalize(v_WorldPosition - eyePos);\n#ifdef EQUIRECTANGULAR\n float phi = acos(V.y);\n float theta = atan(-V.x, V.z) + PI * 0.5;\n vec2 uv = vec2(theta / 2.0 / PI, phi / PI);\n vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));\n#else\n #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)\n vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));\n #else\n vec4 texel = decodeHDR(textureCube(environmentMap, V));\n #endif\n#endif\n#ifdef SRGB_DECODE\n texel = sRGBToLinear(texel);\n#endif\n#ifdef TONEMAPPING\n texel.rgb = ACESToneMapping(texel.rgb);\n#endif\n#ifdef SRGB_ENCODE\n texel = linearTosRGB(texel);\n#endif\n gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));\n}\n@end"
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return e.charCodeAt(0) + (e.charCodeAt(1) << 8) + (e.charCodeAt(2) << 16) + (e.charCodeAt(3) << 24)
    }
    var i = r(4),
      a = r(5),
      o = (r(27), n("DXT1")),
      s = n("DXT3"),
      u = n("DXT5"),
      l = {
        parse: function (e, t) {
          var r = new Int32Array(e, 0, 31);
          if (542327876 !== r[0]) return null;
          if (4 & !r(20)) return null;
          var n, l, h = r(21),
            c = r[4],
            d = r[3],
            f = 512 & r[28],
            p = 131072 & r[2];
          switch (h) {
            case o:
              n = 8, l = i.a.COMPRESSED_RGB_S3TC_DXT1_EXT;
              break;
            case s:
              n = 16, l = i.a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
              break;
            case u:
              n = 16, l = i.a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
              break;
            default:
              return null
          }
          var m = r[1] + 4,
            g = f ? 6 : 1,
            _ = 1;
          p && (_ = Math.max(1, r[7]));
          for (var v = [], y = 0; y < g; y++) {
            var x = c,
              T = d;
            v[y] = new a.a({
              width: x,
              height: T,
              format: l
            });
            for (var b = [], w = 0; w < _; w++) {
              var E = Math.max(4, x) / 4 * Math.max(4, T) / 4 * n,
                S = new Uint8Array(e, m, E);
              m += E, x *= .5, T *= .5, b[w] = S
            }
            v[y].pixels = b[0], p && (v[y].mipmaps = b)
          }
          if (!t) return v[0];
          t.width = v[0].width, t.height = v[0].height, t.format = v[0].format, t.pixels = v[0].pixels, t.mipmaps = v[0].mipmaps
        }
      };
    t.a = l
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r, n) {
      if (e[3] > 0) {
        var i = Math.pow(2, e[3] - 128 - 8 + n);
        t[r + 0] = e[0] * i, t[r + 1] = e[1] * i, t[r + 2] = e[2] * i
      } else t[r + 0] = 0, t[r + 1] = 0, t[r + 2] = 0;
      return t[r + 3] = 1, t
    }

    function i(e, t, r) {
      for (var n = "", i = t; i < r; i++) n += h(e[i]);
      return n
    }

    function a(e, t) {
      t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3]
    }

    function o(e, t, r, n) {
      for (var i = 0, o = 0, s = n; s > 0;)
        if (e[o][0] = t[r++], e[o][1] = t[r++], e[o][2] = t[r++], e[o][3] = t[r++], 1 === e[o][0] && 1 === e[o][1] && 1 === e[o][2]) {
          for (var u = e[o][3] << i >>> 0; u > 0; u--) a(e[o - 1], e[o]), o++, s--;
          i += 8
        } else o++, s--, i = 0;
      return r
    }

    function s(e, t, r, n) {
      if (n < c | n > d) return o(e, t, r, n);
      var i = t[r++];
      if (2 != i) return o(e, t, r - 1, n);
      if (e[0][1] = t[r++], e[0][2] = t[r++], i = t[r++], (e[0][2] << 8 >>> 0 | i) >>> 0 !== n) return null;
      for (var i = 0; i < 4; i++)
        for (var a = 0; a < n;) {
          var s = t[r++];
          if (s > 128) {
            s = (127 & s) >>> 0;
            for (var u = t[r++]; s--;) e[a++][i] = u
          } else
            for (; s--;) e[a++][i] = t[r++]
        }
      return r
    }
    var u = r(4),
      l = r(5),
      h = String.fromCharCode,
      c = 8,
      d = 32767,
      f = {
        parseRGBE: function (e, t, r) {
          null == r && (r = 0);
          var a = new Uint8Array(e),
            o = a.length;
          if ("#?" === i(a, 0, 2)) {
            for (var c = 2; c < o && ("\n" !== h(a[c]) || "\n" !== h(a[c + 1])); c++);
            if (!(c >= o)) {
              c += 2;
              for (var d = ""; c < o; c++) {
                var f = h(a[c]);
                if ("\n" === f) break;
                d += f
              }
              var p = d.split(" "),
                m = parseInt(p[1]),
                g = parseInt(p[3]);
              if (g && m) {
                for (var _ = c + 1, v = [], y = 0; y < g; y++) {
                  v[y] = [];
                  for (var x = 0; x < 4; x++) v[y][x] = 0
                }
                for (var T = new Float32Array(g * m * 4), b = 0, w = 0; w < m; w++) {
                  var _ = s(v, a, _, g);
                  if (!_) return null;
                  for (var y = 0; y < g; y++) n(v[y], T, b, r), b += 4
                }
                return t || (t = new l.a), t.width = g, t.height = m, t.pixels = T, t.type = u.a.FLOAT, t
              }
            }
          }
        },
        parseRGBEFromPNG: function (e) {}
      };
    t.a = f
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return "_on" + e
    }
    var i = r(5),
      a = r(3),
      o = r(26),
      s = ["mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "click", "dblclick", "contextmenu"],
      u = function (e) {
        var t = this;
        this._texture = new i.a({
          anisotropic: 32,
          flipY: !1,
          surface: this,
          dispose: function (e) {
            t.dispose(), i.a.prototype.dispose.call(this, e)
          }
        }), s.forEach(function (e) {
          this[n(e)] = function (t) {
            t.triangle && this._meshes.forEach(function (r) {
              this.dispatchEvent(e, r, t.triangle, t.point)
            }, this)
          }
        }, this), this._meshes = [], e && this.setECharts(e), this.onupdate = null
      };
    u.prototype = {
      constructor: u,
      getTexture: function () {
        return this._texture
      },
      setECharts: function (e) {
        this._chart = e;
        var t = e.getDom();
        if (t instanceof HTMLCanvasElement) {
          var r = this,
            n = e.getZr(),
            i = n.__oldRefreshImmediately || n.refreshImmediately;
          n.refreshImmediately = function () {
            i.call(this), r._texture.dirty(), r.onupdate && r.onupdate()
          }, n.__oldRefreshImmediately = i
        } else console.error("ECharts must init on canvas if it is used as texture."), t = document.createElement("canvas");
        this._texture.image = t, this._texture.dirty(), this.onupdate && this.onupdate()
      },
      dispatchEvent: function () {
        var e = new a.a,
          t = new a.a,
          r = new a.a,
          n = new o.a,
          i = new o.a,
          s = new o.a,
          u = new o.a,
          l = new a.a;
        return function (h, c, d, f) {
          var p = c.geometry,
            m = p.attributes.position,
            g = p.attributes.texcoord0,
            _ = a.a.dot,
            v = a.a.cross;
          m.get(d[0], e.array), m.get(d[1], t.array), m.get(d[2], r.array), g.get(d[0], n.array), g.get(d[1], i.array), g.get(d[2], s.array), v(l, t, r);
          var y = _(e, l),
            x = _(f, l) / y;
          v(l, r, e);
          var T = _(f, l) / y;
          v(l, e, t);
          var b = _(f, l) / y;
          o.a.scale(u, n, x), o.a.scaleAndAdd(u, u, i, T), o.a.scaleAndAdd(u, u, s, b);
          var w = u.x * this._chart.getWidth(),
            E = u.y * this._chart.getHeight();
          this._chart.getZr().handler.dispatch(h, {
            zrX: w,
            zrY: E
          })
        }
      }(),
      attachToMesh: function (e) {
        this._meshes.indexOf(e) >= 0 || (s.forEach(function (t) {
          e.on(t, this[n(t)], this)
        }, this), this._meshes.push(e))
      },
      detachFromMesh: function (e) {
        var t = this._meshes.indexOf(e);
        t >= 0 && this._meshes.splice(t, 1), s.forEach(function (t) {
          e.off(t, this[n(t)])
        }, this)
      },
      dispose: function () {
        this._meshes.forEach(function (e) {
          this.detachFromMesh(e)
        }, this)
      }
    }, t.a = u
  }, function (e, t, r) {
    "use strict";
    var n = r(24),
      i = r(77),
      a = n.a.extend({
        cubemap: null,
        castShadow: !1,
        _normalDistribution: null,
        _brdfLookup: null
      }, {
        type: "AMBIENT_CUBEMAP_LIGHT",
        prefilter: function (e, t) {
          if (!e.getGLExtension("EXT_shader_texture_lod")) return void console.warn("Device not support textureCubeLodEXT");
          this._brdfLookup || (this._normalDistribution = i.a.generateNormalDistribution(), this._brdfLookup = i.a.integrateBRDF(e, this._normalDistribution));
          var r = this.cubemap;
          if (!r.__prefiltered) {
            var n = i.a.prefilterEnvironmentMap(e, r, {
              encodeRGBM: !0,
              width: t,
              height: t
            }, this._normalDistribution, this._brdfLookup);
            this.cubemap = n.environmentMap, this.cubemap.__prefiltered = !0, r.dispose(e)
          }
        },
        getBRDFLookup: function () {
          return this._brdfLookup
        },
        uniformTemplates: {
          ambientCubemapLightColor: {
            type: "3f",
            value: function (e) {
              var t = e.color,
                r = e.intensity;
              return [t[0] * r, t[1] * r, t[2] * r]
            }
          },
          ambientCubemapLightCubemap: {
            type: "t",
            value: function (e) {
              return e.cubemap
            }
          },
          ambientCubemapLightBRDFLookup: {
            type: "t",
            value: function (e) {
              return e._brdfLookup
            }
          }
        }
      });
    t.a = a
  }, function (e, t, r) {
    "use strict";
    t.a = "\n@export clay.compositor.vertex\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nattribute vec3 position : POSITION;\nattribute vec2 texcoord : TEXCOORD_0;\nvarying vec2 v_Texcoord;\nvoid main()\n{\n v_Texcoord = texcoord;\n gl_Position = worldViewProjection * vec4(position, 1.0);\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "#define SAMPLE_NUMBER 1024\n#define PI 3.14159265358979\nuniform sampler2D normalDistribution;\nuniform vec2 viewportSize : [512, 256];\nconst vec3 N = vec3(0.0, 0.0, 1.0);\nconst float fSampleNumber = float(SAMPLE_NUMBER);\nvec3 importanceSampleNormal(float i, float roughness, vec3 N) {\n vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;\n vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);\n vec3 tangentX = normalize(cross(N, upVector));\n vec3 tangentZ = cross(N, tangentX);\n return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);\n}\nfloat G_Smith(float roughness, float NoV, float NoL) {\n float k = roughness * roughness / 2.0;\n float G1V = NoV / (NoV * (1.0 - k) + k);\n float G1L = NoL / (NoL * (1.0 - k) + k);\n return G1L * G1V;\n}\nvoid main() {\n vec2 uv = gl_FragCoord.xy / viewportSize;\n float NoV = uv.x;\n float roughness = uv.y;\n vec3 V;\n V.x = sqrt(1.0 - NoV * NoV);\n V.y = 0.0;\n V.z = NoV;\n float A = 0.0;\n float B = 0.0;\n for (int i = 0; i < SAMPLE_NUMBER; i++) {\n vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);\n vec3 L = reflect(-V, H);\n float NoL = clamp(L.z, 0.0, 1.0);\n float NoH = clamp(H.z, 0.0, 1.0);\n float VoH = clamp(dot(V, H), 0.0, 1.0);\n if (NoL > 0.0) {\n float G = G_Smith(roughness, NoV, NoL);\n float G_Vis = G * VoH / (NoH * NoV);\n float Fc = pow(1.0 - VoH, 5.0);\n A += (1.0 - Fc) * G_Vis;\n B += Fc * G_Vis;\n }\n }\n gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);\n}\n"
  }, function (e, t, r) {
    "use strict";
    t.a = "#define SHADER_NAME prefilter\n#define SAMPLE_NUMBER 1024\n#define PI 3.14159265358979\nuniform mat4 viewInverse : VIEWINVERSE;\nuniform samplerCube environmentMap;\nuniform sampler2D normalDistribution;\nuniform float roughness : 0.5;\nvarying vec2 v_Texcoord;\nvarying vec3 v_WorldPosition;\n@import clay.util.rgbm\nvec3 importanceSampleNormal(float i, float roughness, vec3 N) {\n vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;\n vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);\n vec3 tangentX = normalize(cross(N, upVector));\n vec3 tangentZ = cross(N, tangentX);\n return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);\n}\nvoid main() {\n vec3 eyePos = viewInverse[3].xyz;\n vec3 V = normalize(v_WorldPosition - eyePos);\n vec3 N = V;\n vec3 prefilteredColor = vec3(0.0);\n float totalWeight = 0.0;\n float fMaxSampleNumber = float(SAMPLE_NUMBER);\n for (int i = 0; i < SAMPLE_NUMBER; i++) {\n vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);\n vec3 L = reflect(-V, H);\n float NoL = clamp(dot(N, L), 0.0, 1.0);\n if (NoL > 0.0) {\n prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;\n totalWeight += NoL;\n }\n }\n gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));\n}\n"
  }, function (e, t, r) {
    "use strict";
    var n = r(24),
      i = r(14),
      a = n.a.extend({
        castShadow: !1,
        coefficients: []
      }, function () {
        this._coefficientsTmpArr = new i.a.Float32Array(27)
      }, {
        type: "AMBIENT_SH_LIGHT",
        uniformTemplates: {
          ambientSHLightColor: {
            type: "3f",
            value: function (e) {
              var t = e.color,
                r = e.intensity;
              return [t[0] * r, t[1] * r, t[2] * r]
            }
          },
          ambientSHLightCoefficients: {
            type: "3f",
            value: function (e) {
              for (var t = e._coefficientsTmpArr, r = 0; r < e.coefficients.length; r++) t[r] = e.coefficients[r];
              return t
            }
          }
        }
      });
    t.a = a
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      var r = e[0],
        n = e[1],
        i = e[2];
      return 0 === t ? 1 : 1 === t ? r : 2 === t ? n : 3 === t ? i : 4 === t ? r * i : 5 === t ? n * i : 6 === t ? r * n : 7 === t ? 3 * i * i - 1 : r * r - n * n
    }

    function i(e, t, r, i) {
      for (var a = new u.a.Float32Array(27), o = f.a.create(), s = f.a.create(), l = f.a.create(), h = 0; h < 9; h++) {
        for (var c = f.a.create(), d = 0; d < m.length; d++) {
          for (var p = t[m[d]], _ = f.a.create(), v = 0, y = 0, x = g[m[d]], T = 0; T < i; T++)
            for (var b = 0; b < r; b++) {
              o[0] = b / (r - 1) * 2 - 1, o[1] = T / (i - 1) * 2 - 1, o[2] = -1, f.a.normalize(o, o), l[0] = o[x[0]] * x[3], l[1] = o[x[1]] * x[4], l[2] = o[x[2]] * x[5], s[0] = p[y++] / 255, s[1] = p[y++] / 255, s[2] = p[y++] / 255;
              var w = p[y++] / 255 * 8.12;
              s[0] *= w, s[1] *= w, s[2] *= w, f.a.scaleAndAdd(_, _, s, n(l, h) * -o[2]), v += -o[2]
            }
          f.a.scaleAndAdd(c, c, _, 1 / v)
        }
        a[3 * h] = c[0] / 6, a[3 * h + 1] = c[1] / 6, a[3 * h + 2] = c[2] / 6
      }
      return a
    }
    var a = r(4),
      o = r(10),
      s = r(5),
      u = (r(16), r(14)),
      l = r(42),
      h = r(75),
      c = r(62),
      d = r(36),
      f = r(12),
      p = (r(131), {}),
      m = ["px", "nx", "py", "ny", "pz", "nz"],
      g = {
        px: [2, 1, 0, -1, -1, 1],
        nx: [2, 1, 0, 1, -1, -1],
        py: [0, 2, 1, 1, -1, -1],
        ny: [0, 2, 1, 1, 1, 1],
        pz: [0, 1, 2, -1, -1, -1],
        nz: [0, 1, 2, 1, -1, 1]
      };
    p.projectEnvironmentMap = function (e, t, r) {
      r = r || {}, r.lod = r.lod || 0;
      var n, u = new d.a,
        f = 64;
      "texture2D" === t.textureType ? n = new h.a({
        scene: u,
        environmentMap: t
      }) : (f = t.image && t.image.px ? t.image.px.width : t.width, n = new l.a({
        scene: u,
        environmentMap: t
      }));
      var p = Math.ceil(f / Math.pow(2, r.lod)),
        g = Math.ceil(f / Math.pow(2, r.lod)),
        _ = new s.a({
          width: p,
          height: g
        }),
        v = new o.a;
      n.material.define("fragment", "RGBM_ENCODE"), r.decodeRGBM && n.material.define("fragment", "RGBM_DECODE"), n.material.set("lod", r.lod);
      for (var y = new c.a({
          texture: _
        }), x = {}, T = 0; T < m.length; T++) {
        x[m[T]] = new Uint8Array(p * g * 4);
        var b = y.getCamera(m[T]);
        b.fov = 90, v.attach(_), v.bind(e), e.render(u, b), e.gl.readPixels(0, 0, p, g, a.a.RGBA, a.a.UNSIGNED_BYTE, x[m[T]]), v.unbind(e)
      }
      return n.dispose(e), v.dispose(e), _.dispose(e), i(e, x, p, g)
    }, t.a = p
  }, function (e, t, r) {
    "use strict";
    t.a = "uniform samplerCube environmentMap;\nvarying vec2 v_Texcoord;\n#define TEXTURE_SIZE 16\nmat3 front = mat3(\n 1.0, 0.0, 0.0,\n 0.0, 1.0, 0.0,\n 0.0, 0.0, 1.0\n);\nmat3 back = mat3(\n -1.0, 0.0, 0.0,\n 0.0, 1.0, 0.0,\n 0.0, 0.0, -1.0\n);\nmat3 left = mat3(\n 0.0, 0.0, -1.0,\n 0.0, 1.0, 0.0,\n 1.0, 0.0, 0.0\n);\nmat3 right = mat3(\n 0.0, 0.0, 1.0,\n 0.0, 1.0, 0.0,\n -1.0, 0.0, 0.0\n);\nmat3 up = mat3(\n 1.0, 0.0, 0.0,\n 0.0, 0.0, 1.0,\n 0.0, -1.0, 0.0\n);\nmat3 down = mat3(\n 1.0, 0.0, 0.0,\n 0.0, 0.0, -1.0,\n 0.0, 1.0, 0.0\n);\nfloat harmonics(vec3 normal){\n int index = int(gl_FragCoord.x);\n float x = normal.x;\n float y = normal.y;\n float z = normal.z;\n if(index==0){\n return 1.0;\n }\n else if(index==1){\n return x;\n }\n else if(index==2){\n return y;\n }\n else if(index==3){\n return z;\n }\n else if(index==4){\n return x*z;\n }\n else if(index==5){\n return y*z;\n }\n else if(index==6){\n return x*y;\n }\n else if(index==7){\n return 3.0*z*z - 1.0;\n }\n else{\n return x*x - y*y;\n }\n}\nvec3 sampleSide(mat3 rot)\n{\n vec3 result = vec3(0.0);\n float divider = 0.0;\n for (int i = 0; i < TEXTURE_SIZE * TEXTURE_SIZE; i++) {\n float x = mod(float(i), float(TEXTURE_SIZE));\n float y = float(i / TEXTURE_SIZE);\n vec2 sidecoord = ((vec2(x, y) + vec2(0.5, 0.5)) / vec2(TEXTURE_SIZE)) * 2.0 - 1.0;\n vec3 normal = normalize(vec3(sidecoord, -1.0));\n vec3 fetchNormal = rot * normal;\n vec3 texel = textureCube(environmentMap, fetchNormal).rgb;\n result += harmonics(fetchNormal) * texel * -normal.z;\n divider += -normal.z;\n }\n return result / divider;\n}\nvoid main()\n{\n vec3 result = (\n sampleSide(front) +\n sampleSide(back) +\n sampleSide(left) +\n sampleSide(right) +\n sampleSide(up) +\n sampleSide(down)\n ) / 6.0;\n gl_FragColor = vec4(result, 1.0);\n}"
  }, function (e, t, r) {
    "use strict";
    var n = r(15),
      i = r(18),
      a = n.a.extend({
        dynamic: !1,
        widthSegments: 40,
        heightSegments: 20,
        phiStart: 0,
        phiLength: 2 * Math.PI,
        thetaStart: 0,
        thetaLength: Math.PI,
        radius: 1
      }, function () {
        this.build()
      }, {
        build: function () {
          var e = this.heightSegments,
            t = this.widthSegments,
            r = this.attributes.position,
            n = this.attributes.texcoord0,
            a = this.attributes.normal,
            o = (t + 1) * (e + 1);
          r.init(o), n.init(o), a.init(o);
          var s, u, l, h, c, d, f, p = o > 65535 ? Uint32Array : Uint16Array,
            m = this.indices = new p(t * e * 6),
            g = this.radius,
            _ = this.phiStart,
            v = this.phiLength,
            y = this.thetaStart,
            x = this.thetaLength,
            g = this.radius,
            T = [],
            b = [],
            w = 0,
            E = 1 / g;
          for (f = 0; f <= e; f++)
            for (d = 0; d <= t; d++) h = d / t, c = f / e, s = -g * Math.cos(_ + h * v) * Math.sin(y + c * x), u = g * Math.cos(y + c * x), l = g * Math.sin(_ + h * v) * Math.sin(y + c * x), T[0] = s, T[1] = u, T[2] = l, b[0] = h, b[1] = c, r.set(w, T), n.set(w, b), T[0] *= E, T[1] *= E, T[2] *= E, a.set(w, T), w++;
          var S, A, M, C, L = t + 1,
            D = 0;
          for (f = 0; f < e; f++)
            for (d = 0; d < t; d++) A = f * L + d, S = f * L + d + 1, C = (f + 1) * L + d + 1, M = (f + 1) * L + d, m[D++] = S, m[D++] = A, m[D++] = C, m[D++] = A, m[D++] = M, m[D++] = C;
          this.boundingBox = new i.a, this.boundingBox.max.set(g, g, g), this.boundingBox.min.set(-g, -g, -g)
        }
      });
    t.a = a
  }, function (e, t, r) {
    "use strict";
    var n = r(24),
      i = n.a.extend({
        castShadow: !1
      }, {
        type: "AMBIENT_LIGHT",
        uniformTemplates: {
          ambientLightColor: {
            type: "3f",
            value: function (e) {
              var t = e.color,
                r = e.intensity;
              return [t[0] * r, t[1] * r, t[2] * r]
            }
          }
        }
      });
    t.a = i
  }, function (e, t, r) {
    "use strict";
    var n = r(24),
      i = r(3),
      a = n.a.extend({
        shadowBias: .001,
        shadowSlopeScale: 2,
        shadowCascade: 1,
        cascadeSplitLogFactor: .2
      }, {
        type: "DIRECTIONAL_LIGHT",
        uniformTemplates: {
          directionalLightDirection: {
            type: "3f",
            value: function (e) {
              return e.__dir = e.__dir || new i.a, e.__dir.copy(e.worldTransform.z).normalize().negate().array
            }
          },
          directionalLightColor: {
            type: "3f",
            value: function (e) {
              var t = e.color,
                r = e.intensity;
              return [t[0] * r, t[1] * r, t[2] * r]
            }
          }
        },
        clone: function () {
          var e = n.a.prototype.clone.call(this);
          return e.shadowBias = this.shadowBias, e.shadowSlopeScale = this.shadowSlopeScale, e
        }
      });
    t.a = a
  }, function (e, t, r) {
    "use strict";
    var n = r(24),
      i = n.a.extend({
        range: 100,
        castShadow: !1
      }, {
        type: "POINT_LIGHT",
        uniformTemplates: {
          pointLightPosition: {
            type: "3f",
            value: function (e) {
              return e.getWorldPosition().array
            }
          },
          pointLightRange: {
            type: "1f",
            value: function (e) {
              return e.range
            }
          },
          pointLightColor: {
            type: "3f",
            value: function (e) {
              var t = e.color,
                r = e.intensity;
              return [t[0] * r, t[1] * r, t[2] * r]
            }
          }
        },
        clone: function () {
          var e = n.a.prototype.clone.call(this);
          return e.range = this.range, e
        }
      });
    t.a = i
  }, function (e, t, r) {
    "use strict";
    var n = r(24),
      i = r(3),
      a = n.a.extend({
        range: 20,
        umbraAngle: 30,
        penumbraAngle: 45,
        falloffFactor: 2,
        shadowBias: .001,
        shadowSlopeScale: 2
      }, {
        type: "SPOT_LIGHT",
        uniformTemplates: {
          spotLightPosition: {
            type: "3f",
            value: function (e) {
              return e.getWorldPosition().array
            }
          },
          spotLightRange: {
            type: "1f",
            value: function (e) {
              return e.range
            }
          },
          spotLightUmbraAngleCosine: {
            type: "1f",
            value: function (e) {
              return Math.cos(e.umbraAngle * Math.PI / 180)
            }
          },
          spotLightPenumbraAngleCosine: {
            type: "1f",
            value: function (e) {
              return Math.cos(e.penumbraAngle * Math.PI / 180)
            }
          },
          spotLightFalloffFactor: {
            type: "1f",
            value: function (e) {
              return e.falloffFactor
            }
          },
          spotLightDirection: {
            type: "3f",
            value: function (e) {
              return e.__dir = e.__dir || new i.a, e.__dir.copy(e.worldTransform.z).negate().array
            }
          },
          spotLightColor: {
            type: "3f",
            value: function (e) {
              var t = e.color,
                r = e.intensity;
              return [t[0] * r, t[1] * r, t[2] * r]
            }
          }
        },
        clone: function () {
          var e = n.a.prototype.clone.call(this);
          return e.range = this.range, e.umbraAngle = this.umbraAngle, e.penumbraAngle = this.penumbraAngle, e.falloffFactor = this.falloffFactor, e.shadowBias = this.shadowBias, e.shadowSlopeScale = this.shadowSlopeScale, e
        }
      });
    t.a = a
  }, function (e, t, r) {
    "use strict";
    var n = r(33),
      i = function (e, t, r, i) {
        e = e || 0, t = t || 0, r = r || 0, i = i || 0, this.array = n.a.fromValues(e, t, r, i), this._dirty = !0
      };
    i.prototype = {
      constructor: i,
      add: function (e) {
        return n.a.add(this.array, this.array, e.array), this._dirty = !0, this
      },
      set: function (e, t, r, n) {
        return this.array[0] = e, this.array[1] = t, this.array[2] = r, this.array[3] = n, this._dirty = !0, this
      },
      setArray: function (e) {
        return this.array[0] = e[0], this.array[1] = e[1], this.array[2] = e[2], this.array[3] = e[3], this._dirty = !0, this
      },
      clone: function () {
        return new i(this.x, this.y, this.z, this.w)
      },
      copy: function (e) {
        return n.a.copy(this.array, e.array), this._dirty = !0, this
      },
      dist: function (e) {
        return n.a.dist(this.array, e.array)
      },
      distance: function (e) {
        return n.a.distance(this.array, e.array)
      },
      div: function (e) {
        return n.a.div(this.array, this.array, e.array), this._dirty = !0, this
      },
      divide: function (e) {
        return n.a.divide(this.array, this.array, e.array), this._dirty = !0, this
      },
      dot: function (e) {
        return n.a.dot(this.array, e.array)
      },
      len: function () {
        return n.a.len(this.array)
      },
      length: function () {
        return n.a.length(this.array)
      },
      lerp: function (e, t, r) {
        return n.a.lerp(this.array, e.array, t.array, r), this._dirty = !0, this
      },
      min: function (e) {
        return n.a.min(this.array, this.array, e.array), this._dirty = !0, this
      },
      max: function (e) {
        return n.a.max(this.array, this.array, e.array), this._dirty = !0, this
      },
      mul: function (e) {
        return n.a.mul(this.array, this.array, e.array), this._dirty = !0, this
      },
      multiply: function (e) {
        return n.a.multiply(this.array, this.array, e.array), this._dirty = !0, this
      },
      negate: function () {
        return n.a.negate(this.array, this.array), this._dirty = !0, this
      },
      normalize: function () {
        return n.a.normalize(this.array, this.array), this._dirty = !0, this
      },
      random: function (e) {
        return n.a.random(this.array, e), this._dirty = !0, this
      },
      scale: function (e) {
        return n.a.scale(this.array, this.array, e), this._dirty = !0, this
      },
      scaleAndAdd: function (e, t) {
        return n.a.scaleAndAdd(this.array, this.array, e.array, t), this._dirty = !0, this
      },
      sqrDist: function (e) {
        return n.a.sqrDist(this.array, e.array)
      },
      squaredDistance: function (e) {
        return n.a.squaredDistance(this.array, e.array)
      },
      sqrLen: function () {
        return n.a.sqrLen(this.array)
      },
      squaredLength: function () {
        return n.a.squaredLength(this.array)
      },
      sub: function (e) {
        return n.a.sub(this.array, this.array, e.array), this._dirty = !0, this
      },
      subtract: function (e) {
        return n.a.subtract(this.array, this.array, e.array), this._dirty = !0, this
      },
      transformMat4: function (e) {
        return n.a.transformMat4(this.array, this.array, e.array), this._dirty = !0, this
      },
      transformQuat: function (e) {
        return n.a.transformQuat(this.array, this.array, e.array), this._dirty = !0, this
      },
      toString: function () {
        return "[" + Array.prototype.join.call(this.array, ",") + "]"
      },
      toArray: function () {
        return Array.prototype.slice.call(this.array)
      }
    };
    var a = Object.defineProperty;
    if (a) {
      var o = i.prototype;
      a(o, "x", {
        get: function () {
          return this.array[0]
        },
        set: function (e) {
          this.array[0] = e, this._dirty = !0
        }
      }), a(o, "y", {
        get: function () {
          return this.array[1]
        },
        set: function (e) {
          this.array[1] = e, this._dirty = !0
        }
      }), a(o, "z", {
        get: function () {
          return this.array[2]
        },
        set: function (e) {
          this.array[2] = e, this._dirty = !0
        }
      }), a(o, "w", {
        get: function () {
          return this.array[3]
        },
        set: function (e) {
          this.array[3] = e, this._dirty = !0
        }
      })
    }
    i.add = function (e, t, r) {
      return n.a.add(e.array, t.array, r.array), e._dirty = !0, e
    }, i.set = function (e, t, r, i, a) {
      n.a.set(e.array, t, r, i, a), e._dirty = !0
    }, i.copy = function (e, t) {
      return n.a.copy(e.array, t.array), e._dirty = !0, e
    }, i.dist = function (e, t) {
      return n.a.distance(e.array, t.array)
    }, i.distance = i.dist, i.div = function (e, t, r) {
      return n.a.divide(e.array, t.array, r.array), e._dirty = !0, e
    }, i.divide = i.div, i.dot = function (e, t) {
      return n.a.dot(e.array, t.array)
    }, i.len = function (e) {
      return n.a.length(e.array)
    }, i.lerp = function (e, t, r, i) {
      return n.a.lerp(e.array, t.array, r.array, i), e._dirty = !0, e
    }, i.min = function (e, t, r) {
      return n.a.min(e.array, t.array, r.array), e._dirty = !0, e
    }, i.max = function (e, t, r) {
      return n.a.max(e.array, t.array, r.array), e._dirty = !0, e
    }, i.mul = function (e, t, r) {
      return n.a.multiply(e.array, t.array, r.array), e._dirty = !0, e
    }, i.multiply = i.mul, i.negate = function (e, t) {
      return n.a.negate(e.array, t.array), e._dirty = !0, e
    }, i.normalize = function (e, t) {
      return n.a.normalize(e.array, t.array), e._dirty = !0, e
    }, i.random = function (e, t) {
      return n.a.random(e.array, t), e._dirty = !0, e
    }, i.scale = function (e, t, r) {
      return n.a.scale(e.array, t.array, r), e._dirty = !0, e
    }, i.scaleAndAdd = function (e, t, r, i) {
      return n.a.scaleAndAdd(e.array, t.array, r.array, i), e._dirty = !0, e
    }, i.sqrDist = function (e, t) {
      return n.a.sqrDist(e.array, t.array)
    }, i.squaredDistance = i.sqrDist, i.sqrLen = function (e) {
      return n.a.sqrLen(e.array)
    }, i.squaredLength = i.sqrLen, i.sub = function (e, t, r) {
      return n.a.subtract(e.array, t.array, r.array), e._dirty = !0, e
    }, i.subtract = i.sub, i.transformMat4 = function (e, t, r) {
      return n.a.transformMat4(e.array, t.array, r.array), e._dirty = !0, e
    }, i.transformQuat = function (e, t, r) {
      return n.a.transformQuat(e.array, t.array, r.array), e._dirty = !0, e
    }, t.a = i
  }, function (e, t, r) {
    "use strict";
    var n = r(78),
      i = function () {
        this.array = n.a.create(), this._dirty = !0
      };
    i.prototype = {
      constructor: i,
      setArray: function (e) {
        for (var t = 0; t < this.array.length; t++) this.array[t] = e[t];
        return this._dirty = !0, this
      },
      clone: function () {
        return (new i).copy(this)
      },
      copy: function (e) {
        return n.a.copy(this.array, e.array), this._dirty = !0, this
      },
      adjoint: function () {
        return n.a.adjoint(this.array, this.array), this._dirty = !0, this
      },
      determinant: function () {
        return n.a.determinant(this.array)
      },
      identity: function () {
        return n.a.identity(this.array), this._dirty = !0, this
      },
      invert: function () {
        return n.a.invert(this.array, this.array), this._dirty = !0, this
      },
      mul: function (e) {
        return n.a.mul(this.array, this.array, e.array), this._dirty = !0, this
      },
      mulLeft: function (e) {
        return n.a.mul(this.array, e.array, this.array), this._dirty = !0, this
      },
      multiply: function (e) {
        return n.a.multiply(this.array, this.array, e.array), this._dirty = !0, this
      },
      multiplyLeft: function (e) {
        return n.a.multiply(this.array, e.array, this.array), this._dirty = !0, this
      },
      rotate: function (e) {
        return n.a.rotate(this.array, this.array, e), this._dirty = !0, this
      },
      scale: function (e) {
        return n.a.scale(this.array, this.array, e.array), this._dirty = !0, this
      },
      transpose: function () {
        return n.a.transpose(this.array, this.array), this._dirty = !0, this
      },
      toString: function () {
        return "[" + Array.prototype.join.call(this.array, ",") + "]"
      },
      toArray: function () {
        return Array.prototype.slice.call(this.array)
      }
    }, i.adjoint = function (e, t) {
      return n.a.adjoint(e.array, t.array), e._dirty = !0, e
    }, i.copy = function (e, t) {
      return n.a.copy(e.array, t.array), e._dirty = !0, e
    }, i.determinant = function (e) {
      return n.a.determinant(e.array)
    }, i.identity = function (e) {
      return n.a.identity(e.array), e._dirty = !0, e
    }, i.invert = function (e, t) {
      return n.a.invert(e.array, t.array), e._dirty = !0, e
    }, i.mul = function (e, t, r) {
      return n.a.mul(e.array, t.array, r.array), e._dirty = !0, e
    }, i.multiply = i.mul, i.rotate = function (e, t, r) {
      return n.a.rotate(e.array, t.array, r), e._dirty = !0, e
    }, i.scale = function (e, t, r) {
      return n.a.scale(e.array, t.array, r.array), e._dirty = !0, e
    }, i.transpose = function (e, t) {
      return n.a.transpose(e.array, t.array), e._dirty = !0, e
    }, t.a = i
  }, function (e, t, r) {
    "use strict";
    var n = r(79),
      i = function () {
        this.array = n.a.create(), this._dirty = !0
      };
    i.prototype = {
      constructor: i,
      setArray: function (e) {
        for (var t = 0; t < this.array.length; t++) this.array[t] = e[t];
        return this._dirty = !0, this
      },
      clone: function () {
        return (new i).copy(this)
      },
      copy: function (e) {
        return n.a.copy(this.array, e.array), this._dirty = !0, this
      },
      determinant: function () {
        return n.a.determinant(this.array)
      },
      identity: function () {
        return n.a.identity(this.array), this._dirty = !0, this
      },
      invert: function () {
        return n.a.invert(this.array, this.array), this._dirty = !0, this
      },
      mul: function (e) {
        return n.a.mul(this.array, this.array, e.array), this._dirty = !0, this
      },
      mulLeft: function (e) {
        return n.a.mul(this.array, e.array, this.array), this._dirty = !0, this
      },
      multiply: function (e) {
        return n.a.multiply(this.array, this.array, e.array), this._dirty = !0, this
      },
      multiplyLeft: function (e) {
        return n.a.multiply(this.array, e.array, this.array), this._dirty = !0, this
      },
      rotate: function (e) {
        return n.a.rotate(this.array, this.array, e), this._dirty = !0, this
      },
      scale: function (e) {
        return n.a.scale(this.array, this.array, e.array), this._dirty = !0, this
      },
      translate: function (e) {
        return n.a.translate(this.array, this.array, e.array), this._dirty = !0, this
      },
      toString: function () {
        return "[" + Array.prototype.join.call(this.array, ",") + "]"
      },
      toArray: function () {
        return Array.prototype.slice.call(this.array)
      }
    }, i.copy = function (e, t) {
      return n.a.copy(e.array, t.array), e._dirty = !0, e
    }, i.determinant = function (e) {
      return n.a.determinant(e.array)
    }, i.identity = function (e) {
      return n.a.identity(e.array), e._dirty = !0, e
    }, i.invert = function (e, t) {
      return n.a.invert(e.array, t.array), e._dirty = !0, e
    }, i.mul = function (e, t, r) {
      return n.a.mul(e.array, t.array, r.array), e._dirty = !0, e
    }, i.multiply = i.mul, i.rotate = function (e, t, r) {
      return n.a.rotate(e.array, t.array, r), e._dirty = !0, e
    }, i.scale = function (e, t, r) {
      return n.a.scale(e.array, t.array, r.array), e._dirty = !0, e
    }, i.translate = function (e, t, r) {
      return n.a.translate(e.array, t.array, r.array), e._dirty = !0, e
    }, t.a = i
  }, function (e, t, r) {
    "use strict";
    var n = r(34),
      i = function () {
        this.array = n.a.create(), this._dirty = !0
      };
    i.prototype = {
      constructor: i,
      setArray: function (e) {
        for (var t = 0; t < this.array.length; t++) this.array[t] = e[t];
        return this._dirty = !0, this
      },
      adjoint: function () {
        return n.a.adjoint(this.array, this.array), this._dirty = !0, this
      },
      clone: function () {
        return (new i).copy(this)
      },
      copy: function (e) {
        return n.a.copy(this.array, e.array), this._dirty = !0, this
      },
      determinant: function () {
        return n.a.determinant(this.array)
      },
      fromMat2d: function (e) {
        return n.a.fromMat2d(this.array, e.array), this._dirty = !0, this
      },
      fromMat4: function (e) {
        return n.a.fromMat4(this.array, e.array), this._dirty = !0, this
      },
      fromQuat: function (e) {
        return n.a.fromQuat(this.array, e.array), this._dirty = !0, this
      },
      identity: function () {
        return n.a.identity(this.array), this._dirty = !0, this
      },
      invert: function () {
        return n.a.invert(this.array, this.array), this._dirty = !0, this
      },
      mul: function (e) {
        return n.a.mul(this.array, this.array, e.array), this._dirty = !0, this
      },
      mulLeft: function (e) {
        return n.a.mul(this.array, e.array, this.array), this._dirty = !0, this
      },
      multiply: function (e) {
        return n.a.multiply(this.array, this.array, e.array), this._dirty = !0, this
      },
      multiplyLeft: function (e) {
        return n.a.multiply(this.array, e.array, this.array), this._dirty = !0, this
      },
      rotate: function (e) {
        return n.a.rotate(this.array, this.array, e), this._dirty = !0, this
      },
      scale: function (e) {
        return n.a.scale(this.array, this.array, e.array), this._dirty = !0, this
      },
      translate: function (e) {
        return n.a.translate(this.array, this.array, e.array), this._dirty = !0, this
      },
      normalFromMat4: function (e) {
        return n.a.normalFromMat4(this.array, e.array), this._dirty = !0, this
      },
      transpose: function () {
        return n.a.transpose(this.array, this.array), this._dirty = !0, this
      },
      toString: function () {
        return "[" + Array.prototype.join.call(this.array, ",") + "]"
      },
      toArray: function () {
        return Array.prototype.slice.call(this.array)
      }
    }, i.adjoint = function (e, t) {
      return n.a.adjoint(e.array, t.array), e._dirty = !0, e
    }, i.copy = function (e, t) {
      return n.a.copy(e.array, t.array), e._dirty = !0, e
    }, i.determinant = function (e) {
      return n.a.determinant(e.array)
    }, i.identity = function (e) {
      return n.a.identity(e.array), e._dirty = !0, e
    }, i.invert = function (e, t) {
      return n.a.invert(e.array, t.array), e
    }, i.mul = function (e, t, r) {
      return n.a.mul(e.array, t.array, r.array), e._dirty = !0, e
    }, i.multiply = i.mul, i.fromMat2d = function (e, t) {
      return n.a.fromMat2d(e.array, t.array), e._dirty = !0, e
    }, i.fromMat4 = function (e, t) {
      return n.a.fromMat4(e.array, t.array), e._dirty = !0, e
    }, i.fromQuat = function (e, t) {
      return n.a.fromQuat(e.array, t.array), e._dirty = !0, e
    }, i.normalFromMat4 = function (e, t) {
      return n.a.normalFromMat4(e.array, t.array), e._dirty = !0, e
    }, i.rotate = function (e, t, r) {
      return n.a.rotate(e.array, t.array, r), e._dirty = !0, e
    }, i.scale = function (e, t, r) {
      return n.a.scale(e.array, t.array, r.array), e._dirty = !0, e
    }, i.transpose = function (e, t) {
      return n.a.transpose(e.array, t.array), e._dirty = !0, e
    }, i.translate = function (e, t, r) {
      return n.a.translate(e.array, t.array, r.array), e._dirty = !0, e
    }, t.a = i
  }, function (e, t, r) {
    "use strict";
    var n = r(142),
      i = r.n(n),
      a = {
        _animators: null,
        getAnimators: function () {
          return this._animators = this._animators || [], this._animators
        },
        animate: function (e, t) {
          this._animators = this._animators || [];
          var r, n = this;
          if (e) {
            for (var a = e.split("."), o = n, s = 0, u = a.length; s < u; s++) o && (o = o[a[s]]);
            o && (r = o)
          } else r = n;
          if (null == r) throw new Error("Target " + e + " not exists");
          var l = this._animators,
            h = new i.a(r, t),
            c = this;
          return h.during(function () {
            c.__zr && c.__zr.refresh()
          }).done(function () {
            var e = l.indexOf(h);
            e >= 0 && l.splice(e, 1)
          }), l.push(h), this.__zr && this.__zr.animation.addAnimator(h), h
        },
        stopAnimation: function (e) {
          this._animators = this._animators || [];
          for (var t = this._animators, r = t.length, n = 0; n < r; n++) t[n].stop(e);
          return t.length = 0, this
        },
        addAnimatorsToZr: function (e) {
          if (this._animators)
            for (var t = 0; t < this._animators.length; t++) e.animation.addAnimator(this._animators[t])
        },
        removeAnimatorsFromZr: function (e) {
          if (this._animators)
            for (var t = 0; t < this._animators.length; t++) e.animation.removeAnimator(this._animators[t])
        }
      };
    t.a = a
  }, function (e, t, r) {
    function n(e, t) {
      return e[t]
    }

    function i(e, t, r) {
      e[t] = r
    }

    function a(e, t, r) {
      return (t - e) * r + e
    }

    function o(e, t, r) {
      return r > .5 ? t : e
    }

    function s(e, t, r, n, i) {
      var o = e.length;
      if (1 == i)
        for (var s = 0; s < o; s++) n[s] = a(e[s], t[s], r);
      else
        for (var u = o && e[0].length, s = 0; s < o; s++)
          for (var l = 0; l < u; l++) n[s][l] = a(e[s][l], t[s][l], r)
    }

    function u(e, t, r) {
      var n = e.length,
        i = t.length;
      if (n !== i) {
        if (n > i) e.length = i;
        else
          for (var a = n; a < i; a++) e.push(1 === r ? t[a] : x.call(t[a]))
      }
      for (var o = e[0] && e[0].length, a = 0; a < e.length; a++)
        if (1 === r) isNaN(e[a]) && (e[a] = t[a]);
        else
          for (var s = 0; s < o; s++) isNaN(e[a][s]) && (e[a][s] = t[a][s])
    }

    function l(e, t, r) {
      if (e === t) return !0;
      var n = e.length;
      if (n !== t.length) return !1;
      if (1 === r) {
        for (var i = 0; i < n; i++)
          if (e[i] !== t[i]) return !1
      } else
        for (var a = e[0].length, i = 0; i < n; i++)
          for (var o = 0; o < a; o++)
            if (e[i][o] !== t[i][o]) return !1;
      return !0
    }

    function h(e, t, r, n, i, a, o, s, u) {
      var l = e.length;
      if (1 == u)
        for (var h = 0; h < l; h++) s[h] = c(e[h], t[h], r[h], n[h], i, a, o);
      else
        for (var d = e[0].length, h = 0; h < l; h++)
          for (var f = 0; f < d; f++) s[h][f] = c(e[h][f], t[h][f], r[h][f], n[h][f], i, a, o)
    }

    function c(e, t, r, n, i, a, o) {
      var s = .5 * (r - e),
        u = .5 * (n - t);
      return (2 * (t - r) + s + u) * o + (-3 * (t - r) - 2 * s - u) * a + s * i + t
    }

    function d(e) {
      if (y(e)) {
        var t = e.length;
        if (y(e[0])) {
          for (var r = [], n = 0; n < t; n++) r.push(x.call(e[n]));
          return r
        }
        return x.call(e)
      }
      return e
    }

    function f(e) {
      return e[0] = Math.floor(e[0]), e[1] = Math.floor(e[1]), e[2] = Math.floor(e[2]), "rgba(" + e.join(",") + ")"
    }

    function p(e) {
      var t = e[e.length - 1].value;
      return y(t && t[0]) ? 2 : 1
    }

    function m(e, t, r, n, i, d) {
      var m = e._getter,
        v = e._setter,
        x = "spline" === t,
        T = n.length;
      if (T) {
        var b, w = n[0].value,
          E = y(w),
          S = !1,
          A = !1,
          M = E ? p(n) : 0;
        n.sort(function (e, t) {
          return e.time - t.time
        }), b = n[T - 1].time;
        for (var C = [], L = [], D = n[0].value, N = !0, R = 0; R < T; R++) {
          C.push(n[R].time / b);
          var P = n[R].value;
          if (E && l(P, D, M) || !E && P === D || (N = !1), D = P, "string" == typeof P) {
            var I = _.parse(P);
            I ? (P = I, S = !0) : A = !0
          }
          L.push(P)
        }
        if (d || !N) {
          for (var O = L[T - 1], R = 0; R < T - 1; R++) E ? u(L[R], O, M) : !isNaN(L[R]) || isNaN(O) || A || S || (L[R] = O);
          E && u(m(e._target, i), O, M);
          var F, B, U, z, G, H, V = 0,
            k = 0;
          if (S) var W = [0, 0, 0, 0];
          var j = function (e, t) {
              var r;
              if (t < 0) r = 0;
              else if (t < k) {
                for (F = Math.min(V + 1, T - 1), r = F; r >= 0 && !(C[r] <= t); r--);
                r = Math.min(r, T - 2)
              } else {
                for (r = V; r < T && !(C[r] > t); r++);
                r = Math.min(r - 1, T - 2)
              }
              V = r, k = t;
              var n = C[r + 1] - C[r];
              if (0 !== n)
                if (B = (t - C[r]) / n, x)
                  if (z = L[r], U = L[0 === r ? r : r - 1], G = L[r > T - 2 ? T - 1 : r + 1], H = L[r > T - 3 ? T - 1 : r + 2], E) h(U, z, G, H, B, B * B, B * B * B, m(e, i), M);
                  else {
                    var u;
                    if (S) u = h(U, z, G, H, B, B * B, B * B * B, W, 1), u = f(W);
                    else {
                      if (A) return o(z, G, B);
                      u = c(U, z, G, H, B, B * B, B * B * B)
                    }
                    v(e, i, u)
                  }
              else if (E) s(L[r], L[r + 1], B, m(e, i), M);
              else {
                var u;
                if (S) s(L[r], L[r + 1], B, W, 1), u = f(W);
                else {
                  if (A) return o(L[r], L[r + 1], B);
                  u = a(L[r], L[r + 1], B)
                }
                v(e, i, u)
              }
            },
            X = new g({
              target: e._target,
              life: b,
              loop: e._loop,
              delay: e._delay,
              onframe: j,
              ondestroy: r
            });
          return t && "spline" !== t && (X.easing = t), X
        }
      }
    }
    var g = r(143),
      _ = r(145),
      v = r(13),
      y = v.isArrayLike,
      x = Array.prototype.slice,
      T = function (e, t, r, a) {
        this._tracks = {}, this._target = e, this._loop = t || !1, this._getter = r || n, this._setter = a || i, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
      };
    T.prototype = {
      when: function (e, t) {
        var r = this._tracks;
        for (var n in t)
          if (t.hasOwnProperty(n)) {
            if (!r[n]) {
              r[n] = [];
              var i = this._getter(this._target, n);
              if (null == i) continue;
              0 !== e && r[n].push({
                time: 0,
                value: d(i)
              })
            }
            r[n].push({
              time: e,
              value: t[n]
            })
          } return this
      },
      during: function (e) {
        return this._onframeList.push(e), this
      },
      pause: function () {
        for (var e = 0; e < this._clipList.length; e++) this._clipList[e].pause();
        this._paused = !0
      },
      resume: function () {
        for (var e = 0; e < this._clipList.length; e++) this._clipList[e].resume();
        this._paused = !1
      },
      isPaused: function () {
        return !!this._paused
      },
      _doneCallback: function () {
        this._tracks = {}, this._clipList.length = 0;
        for (var e = this._doneList, t = e.length, r = 0; r < t; r++) e[r].call(this)
      },
      start: function (e, t) {
        var r, n = this,
          i = 0,
          a = function () {
            --i || n._doneCallback()
          };
        for (var o in this._tracks)
          if (this._tracks.hasOwnProperty(o)) {
            var s = m(this, e, a, this._tracks[o], o, t);
            s && (this._clipList.push(s), i++, this.animation && this.animation.addClip(s), r = s)
          } if (r) {
          var u = r.onframe;
          r.onframe = function (e, t) {
            u(e, t);
            for (var r = 0; r < n._onframeList.length; r++) n._onframeList[r](e, t)
          }
        }
        return i || this._doneCallback(), this
      },
      stop: function (e) {
        for (var t = this._clipList, r = this.animation, n = 0; n < t.length; n++) {
          var i = t[n];
          e && i.onframe(this._target, 1), r && r.removeClip(i)
        }
        t.length = 0
      },
      delay: function (e) {
        return this._delay = e, this
      },
      done: function (e) {
        return e && this._doneList.push(e), this
      },
      getClips: function () {
        return this._clipList
      }
    };
    var b = T;
    e.exports = b
  }, function (e, t, r) {
    function n(e) {
      this._target = e.target, this._life = e.life || 1e3, this._delay = e.delay || 0, this._initialized = !1, this.loop = null != e.loop && e.loop, this.gap = e.gap || 0, this.easing = e.easing || "Linear", this.onframe = e.onframe, this.ondestroy = e.ondestroy, this.onrestart = e.onrestart, this._pausedTime = 0, this._paused = !1
    }
    var i = r(144);
    n.prototype = {
      constructor: n,
      step: function (e, t) {
        if (this._initialized || (this._startTime = e + this._delay, this._initialized = !0), this._paused) return void(this._pausedTime += t);
        var r = (e - this._startTime - this._pausedTime) / this._life;
        if (!(r < 0)) {
          r = Math.min(r, 1);
          var n = this.easing,
            a = "string" == typeof n ? i[n] : n,
            o = "function" == typeof a ? a(r) : r;
          return this.fire("frame", o), 1 == r ? this.loop ? (this.restart(e), "restart") : (this._needsRemove = !0, "destroy") : null
        }
      },
      restart: function (e) {
        var t = (e - this._startTime - this._pausedTime) % this._life;
        this._startTime = e - t + this.gap, this._pausedTime = 0, this._needsRemove = !1
      },
      fire: function (e, t) {
        e = "on" + e, this[e] && this[e](this._target, t)
      },
      pause: function () {
        this._paused = !0
      },
      resume: function () {
        this._paused = !1
      }
    };
    var a = n;
    e.exports = a
  }, function (e, t) {
    var r = {
        linear: function (e) {
          return e
        },
        quadraticIn: function (e) {
          return e * e
        },
        quadraticOut: function (e) {
          return e * (2 - e)
        },
        quadraticInOut: function (e) {
          return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
        },
        cubicIn: function (e) {
          return e * e * e
        },
        cubicOut: function (e) {
          return --e * e * e + 1
        },
        cubicInOut: function (e) {
          return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
        },
        quarticIn: function (e) {
          return e * e * e * e
        },
        quarticOut: function (e) {
          return 1 - --e * e * e * e
        },
        quarticInOut: function (e) {
          return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
        },
        quinticIn: function (e) {
          return e * e * e * e * e
        },
        quinticOut: function (e) {
          return --e * e * e * e * e + 1
        },
        quinticInOut: function (e) {
          return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        },
        sinusoidalIn: function (e) {
          return 1 - Math.cos(e * Math.PI / 2)
        },
        sinusoidalOut: function (e) {
          return Math.sin(e * Math.PI / 2)
        },
        sinusoidalInOut: function (e) {
          return .5 * (1 - Math.cos(Math.PI * e))
        },
        exponentialIn: function (e) {
          return 0 === e ? 0 : Math.pow(1024, e - 1)
        },
        exponentialOut: function (e) {
          return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
        },
        exponentialInOut: function (e) {
          return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        },
        circularIn: function (e) {
          return 1 - Math.sqrt(1 - e * e)
        },
        circularOut: function (e) {
          return Math.sqrt(1 - --e * e)
        },
        circularInOut: function (e) {
          return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        },
        elasticIn: function (e) {
          var t, r = .1;
          return 0 === e ? 0 : 1 === e ? 1 : (!r || r < 1 ? (r = 1, t = .1) : t = .4 * Math.asin(1 / r) / (2 * Math.PI), -r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4))
        },
        elasticOut: function (e) {
          var t, r = .1;
          return 0 === e ? 0 : 1 === e ? 1 : (!r || r < 1 ? (r = 1, t = .1) : t = .4 * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / .4) + 1)
        },
        elasticInOut: function (e) {
          var t, r = .1;
          return 0 === e ? 0 : 1 === e ? 1 : (!r || r < 1 ? (r = 1, t = .1) : t = .4 * Math.asin(1 / r) / (2 * Math.PI), (e *= 2) < 1 ? r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4) * -.5 : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / .4) * .5 + 1)
        },
        backIn: function (e) {
          var t = 1.70158;
          return e * e * ((t + 1) * e - t)
        },
        backOut: function (e) {
          var t = 1.70158;
          return --e * e * ((t + 1) * e + t) + 1
        },
        backInOut: function (e) {
          var t = 2.5949095;
          return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
        },
        bounceIn: function (e) {
          return 1 - r.bounceOut(1 - e)
        },
        bounceOut: function (e) {
          return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        },
        bounceInOut: function (e) {
          return e < .5 ? .5 * r.bounceIn(2 * e) : .5 * r.bounceOut(2 * e - 1) + .5
        }
      },
      n = r;
    e.exports = n
  }, function (e, t, r) {
    function n(e) {
      return e = Math.round(e), e < 0 ? 0 : e > 255 ? 255 : e
    }

    function i(e) {
      return e = Math.round(e), e < 0 ? 0 : e > 360 ? 360 : e
    }

    function a(e) {
      return e < 0 ? 0 : e > 1 ? 1 : e
    }

    function o(e) {
      return n(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 * 255 : parseInt(e, 10))
    }

    function s(e) {
      return a(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 : parseFloat(e))
    }

    function u(e, t, r) {
      return r < 0 ? r += 1 : r > 1 && (r -= 1), 6 * r < 1 ? e + (t - e) * r * 6 : 2 * r < 1 ? t : 3 * r < 2 ? e + (t - e) * (2 / 3 - r) * 6 : e
    }

    function l(e, t, r) {
      return e + (t - e) * r
    }

    function h(e, t, r, n, i) {
      return e[0] = t, e[1] = r, e[2] = n, e[3] = i, e
    }

    function c(e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }

    function d(e, t) {
      A && c(A, t), A = S.put(e, A || t.slice())
    }

    function f(e, t) {
      if (e) {
        t = t || [];
        var r = S.get(e);
        if (r) return c(t, r);
        e += "";
        var n = e.replace(/ /g, "").toLowerCase();
        if (n in E) return c(t, E[n]), d(e, t), t;
        if ("#" !== n.charAt(0)) {
          var i = n.indexOf("("),
            a = n.indexOf(")");
          if (-1 !== i && a + 1 === n.length) {
            var u = n.substr(0, i),
              l = n.substr(i + 1, a - (i + 1)).split(","),
              f = 1;
            switch (u) {
              case "rgba":
                if (4 !== l.length) return void h(t, 0, 0, 0, 1);
                f = s(l.pop());
              case "rgb":
                return 3 !== l.length ? void h(t, 0, 0, 0, 1) : (h(t, o(l[0]), o(l[1]), o(l[2]), f), d(e, t), t);
              case "hsla":
                return 4 !== l.length ? void h(t, 0, 0, 0, 1) : (l[3] = s(l[3]), p(l, t), d(e, t), t);
              case "hsl":
                return 3 !== l.length ? void h(t, 0, 0, 0, 1) : (p(l, t), d(e, t), t);
              default:
                return
            }
          }
          h(t, 0, 0, 0, 1)
        } else {
          if (4 === n.length) {
            var m = parseInt(n.substr(1), 16);
            return m >= 0 && m <= 4095 ? (h(t, (3840 & m) >> 4 | (3840 & m) >> 8, 240 & m | (240 & m) >> 4, 15 & m | (15 & m) << 4, 1), d(e, t), t) : void h(t, 0, 0, 0, 1)
          }
          if (7 === n.length) {
            var m = parseInt(n.substr(1), 16);
            return m >= 0 && m <= 16777215 ? (h(t, (16711680 & m) >> 16, (65280 & m) >> 8, 255 & m, 1), d(e, t), t) : void h(t, 0, 0, 0, 1)
          }
        }
      }
    }

    function p(e, t) {
      var r = (parseFloat(e[0]) % 360 + 360) % 360 / 360,
        i = s(e[1]),
        a = s(e[2]),
        o = a <= .5 ? a * (i + 1) : a + i - a * i,
        l = 2 * a - o;
      return t = t || [], h(t, n(255 * u(l, o, r + 1 / 3)), n(255 * u(l, o, r)), n(255 * u(l, o, r - 1 / 3)), 1), 4 === e.length && (t[3] = e[3]), t
    }

    function m(e) {
      if (e) {
        var t, r, n = e[0] / 255,
          i = e[1] / 255,
          a = e[2] / 255,
          o = Math.min(n, i, a),
          s = Math.max(n, i, a),
          u = s - o,
          l = (s + o) / 2;
        if (0 === u) t = 0, r = 0;
        else {
          r = l < .5 ? u / (s + o) : u / (2 - s - o);
          var h = ((s - n) / 6 + u / 2) / u,
            c = ((s - i) / 6 + u / 2) / u,
            d = ((s - a) / 6 + u / 2) / u;
          n === s ? t = d - c : i === s ? t = 1 / 3 + h - d : a === s && (t = 2 / 3 + c - h), t < 0 && (t += 1), t > 1 && (t -= 1)
        }
        var f = [360 * t, r, l];
        return null != e[3] && f.push(e[3]), f
      }
    }

    function g(e, t) {
      var r = f(e);
      if (r) {
        for (var n = 0; n < 3; n++) r[n] = t < 0 ? r[n] * (1 - t) | 0 : (255 - r[n]) * t + r[n] | 0, r[n] > 255 ? r[n] = 255 : e[n] < 0 && (r[n] = 0);
        return b(r, 4 === r.length ? "rgba" : "rgb")
      }
    }

    function _(e) {
      var t = f(e);
      if (t) return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2]).toString(16).slice(1)
    }

    function v(e, t, r) {
      if (t && t.length && e >= 0 && e <= 1) {
        r = r || [];
        var i = e * (t.length - 1),
          o = Math.floor(i),
          s = Math.ceil(i),
          u = t[o],
          h = t[s],
          c = i - o;
        return r[0] = n(l(u[0], h[0], c)), r[1] = n(l(u[1], h[1], c)), r[2] = n(l(u[2], h[2], c)), r[3] = a(l(u[3], h[3], c)), r
      }
    }

    function y(e, t, r) {
      if (t && t.length && e >= 0 && e <= 1) {
        var i = e * (t.length - 1),
          o = Math.floor(i),
          s = Math.ceil(i),
          u = f(t[o]),
          h = f(t[s]),
          c = i - o,
          d = b([n(l(u[0], h[0], c)), n(l(u[1], h[1], c)), n(l(u[2], h[2], c)), a(l(u[3], h[3], c))], "rgba");
        return r ? {
          color: d,
          leftIndex: o,
          rightIndex: s,
          value: i
        } : d
      }
    }

    function x(e, t, r, n) {
      if (e = f(e)) return e = m(e), null != t && (e[0] = i(t)), null != r && (e[1] = s(r)), null != n && (e[2] = s(n)), b(p(e), "rgba")
    }

    function T(e, t) {
      if ((e = f(e)) && null != t) return e[3] = a(t), b(e, "rgba")
    }

    function b(e, t) {
      if (e && e.length) {
        var r = e[0] + "," + e[1] + "," + e[2];
        return "rgba" !== t && "hsva" !== t && "hsla" !== t || (r += "," + e[3]), t + "(" + r + ")"
      }
    }
    var w = r(60),
      E = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
      },
      S = new w(20),
      A = null,
      M = v,
      C = y;
    t.parse = f, t.lift = g, t.toHex = _, t.fastLerp = v, t.fastMapToColor = M, t.lerp = y, t.mapToColor = C, t.modifyHSL = x, t.modifyAlpha = T, t.stringify = b
  }, function (e, t, r) {
    "use strict";
    t.a = "\n@export clay.util.rand\nhighp float rand(vec2 uv) {\n const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);\n return fract(sin(sn) * c);\n}\n@end\n@export clay.util.calculate_attenuation\nuniform float attenuationFactor : 5.0;\nfloat lightAttenuation(float dist, float range)\n{\n float attenuation = 1.0;\n attenuation = dist*dist/(range*range+1.0);\n float att_s = attenuationFactor;\n attenuation = 1.0/(attenuation*att_s+1.0);\n att_s = 1.0/(att_s+1.0);\n attenuation = attenuation - att_s;\n attenuation /= 1.0 - att_s;\n return clamp(attenuation, 0.0, 1.0);\n}\n@end\n@export clay.util.edge_factor\n#ifdef SUPPORT_STANDARD_DERIVATIVES\nfloat edgeFactor(float width)\n{\n vec3 d = fwidth(v_Barycentric);\n vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);\n return min(min(a3.x, a3.y), a3.z);\n}\n#else\nfloat edgeFactor(float width)\n{\n return 1.0;\n}\n#endif\n@end\n@export clay.util.encode_float\nvec4 encodeFloat(const in float depth)\n{\n const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);\n const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);\n vec4 res = fract(depth * bitShifts);\n res -= res.xxyz * bit_mask;\n return res;\n}\n@end\n@export clay.util.decode_float\nfloat decodeFloat(const in vec4 color)\n{\n const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);\n return dot(color, bitShifts);\n}\n@end\n@export clay.util.float\n@import clay.util.encode_float\n@import clay.util.decode_float\n@end\n@export clay.util.rgbm_decode\nvec3 RGBMDecode(vec4 rgbm, float range) {\n return range * rgbm.rgb * rgbm.a;\n}\n@end\n@export clay.util.rgbm_encode\nvec4 RGBMEncode(vec3 color, float range) {\n if (dot(color, color) == 0.0) {\n return vec4(0.0);\n }\n vec4 rgbm;\n color /= range;\n rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);\n rgbm.a = ceil(rgbm.a * 255.0) / 255.0;\n rgbm.rgb = color / rgbm.a;\n return rgbm;\n}\n@end\n@export clay.util.rgbm\n@import clay.util.rgbm_decode\n@import clay.util.rgbm_encode\nvec4 decodeHDR(vec4 color)\n{\n#if defined(RGBM_DECODE) || defined(RGBM)\n return vec4(RGBMDecode(color, 8.12), 1.0);\n#else\n return color;\n#endif\n}\nvec4 encodeHDR(vec4 color)\n{\n#if defined(RGBM_ENCODE) || defined(RGBM)\n return RGBMEncode(color.xyz, 8.12);\n#else\n return color;\n#endif\n}\n@end\n@export clay.util.srgb\nvec4 sRGBToLinear(in vec4 value) {\n return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);\n}\nvec4 linearTosRGB(in vec4 value) {\n return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);\n}\n@end\n@export clay.chunk.skinning_header\n#ifdef SKINNING\nattribute vec3 weight : WEIGHT;\nattribute vec4 joint : JOINT;\n#ifdef USE_SKIN_MATRICES_TEXTURE\nuniform sampler2D skinMatricesTexture : ignore;\nuniform float skinMatricesTextureSize: ignore;\nmat4 getSkinMatrix(sampler2D tex, float idx) {\n float j = idx * 4.0;\n float x = mod(j, skinMatricesTextureSize);\n float y = floor(j / skinMatricesTextureSize) + 0.5;\n vec2 scale = vec2(skinMatricesTextureSize);\n return mat4(\n texture2D(tex, vec2(x + 0.5, y) / scale),\n texture2D(tex, vec2(x + 1.5, y) / scale),\n texture2D(tex, vec2(x + 2.5, y) / scale),\n texture2D(tex, vec2(x + 3.5, y) / scale)\n );\n}\nmat4 getSkinMatrix(float idx) {\n return getSkinMatrix(skinMatricesTexture, idx);\n}\n#else\nuniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;\nmat4 getSkinMatrix(float idx) {\n return skinMatrix[int(idx)];\n}\n#endif\n#endif\n@end\n@export clay.chunk.skin_matrix\nmat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;\nif (weight.y > 1e-4)\n{\n skinMatrixWS += getSkinMatrix(joint.y) * weight.y;\n}\nif (weight.z > 1e-4)\n{\n skinMatrixWS += getSkinMatrix(joint.z) * weight.z;\n}\nfloat weightW = 1.0-weight.x-weight.y-weight.z;\nif (weightW > 1e-4)\n{\n skinMatrixWS += getSkinMatrix(joint.w) * weightW;\n}\n@end\n@export clay.util.parallax_correct\nvec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {\n vec3 first = (boxMax - pos) / dir;\n vec3 second = (boxMin - pos) / dir;\n vec3 further = max(first, second);\n float dist = min(further.x, min(further.y, further.z));\n vec3 fixedPos = pos + dir * dist;\n vec3 boxCenter = (boxMax + boxMin) * 0.5;\n return normalize(fixedPos - boxCenter);\n}\n@end\n@export clay.util.clamp_sample\nvec4 clampSample(const in sampler2D texture, const in vec2 coord)\n{\n#ifdef STEREO\n float eye = step(0.5, coord.x) * 0.5;\n vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));\n#else\n vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));\n#endif\n return texture2D(texture, coordClamped);\n}\n@end\n@export clay.util.ACES\nvec3 ACESToneMapping(vec3 color)\n{\n const float A = 2.51;\n const float B = 0.03;\n const float C = 2.43;\n const float D = 0.59;\n const float E = 0.14;\n return (color * (A * color + B)) / (color * (C * color + D) + E);\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "\n@export ecgl.common.transformUniforms\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;\nuniform mat4 world : WORLD;\n@end\n\n@export ecgl.common.attributes\nattribute vec3 position : POSITION;\nattribute vec2 texcoord : TEXCOORD_0;\nattribute vec3 normal : NORMAL;\n@end\n\n@export ecgl.common.uv.header\nuniform vec2 uvRepeat : [1.0, 1.0];\nuniform vec2 uvOffset : [0.0, 0.0];\nuniform vec2 detailUvRepeat : [1.0, 1.0];\nuniform vec2 detailUvOffset : [0.0, 0.0];\n\nvarying vec2 v_Texcoord;\nvarying vec2 v_DetailTexcoord;\n@end\n\n@export ecgl.common.uv.main\nv_Texcoord = texcoord * uvRepeat + uvOffset;\nv_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;\n@end\n\n@export ecgl.common.uv.fragmentHeader\nvarying vec2 v_Texcoord;\nvarying vec2 v_DetailTexcoord;\n@end\n\n\n@export ecgl.common.albedo.main\n\n vec4 albedoTexel = vec4(1.0);\n#ifdef DIFFUSEMAP_ENABLED\n albedoTexel = texture2D(diffuseMap, v_Texcoord);\n #ifdef SRGB_DECODE\n albedoTexel = sRGBToLinear(albedoTexel);\n #endif\n#endif\n\n#ifdef DETAILMAP_ENABLED\n vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);\n #ifdef SRGB_DECODE\n detailTexel = sRGBToLinear(detailTexel);\n #endif\n albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);\n albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;\n#endif\n\n@end\n\n@export ecgl.common.wireframe.vertexHeader\n\n#ifdef WIREFRAME_QUAD\nattribute vec4 barycentric;\nvarying vec4 v_Barycentric;\n#elif defined(WIREFRAME_TRIANGLE)\nattribute vec3 barycentric;\nvarying vec3 v_Barycentric;\n#endif\n\n@end\n\n@export ecgl.common.wireframe.vertexMain\n\n#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)\n v_Barycentric = barycentric;\n#endif\n\n@end\n\n\n@export ecgl.common.wireframe.fragmentHeader\n\nuniform float wireframeLineWidth : 1;\nuniform vec4 wireframeLineColor: [0, 0, 0, 0.5];\n\n#ifdef WIREFRAME_QUAD\nvarying vec4 v_Barycentric;\nfloat edgeFactor () {\n vec4 d = fwidth(v_Barycentric);\n vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);\n return min(min(min(a4.x, a4.y), a4.z), a4.w);\n}\n#elif defined(WIREFRAME_TRIANGLE)\nvarying vec3 v_Barycentric;\nfloat edgeFactor () {\n vec3 d = fwidth(v_Barycentric);\n vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);\n return min(min(a3.x, a3.y), a3.z);\n}\n#endif\n\n@end\n\n\n@export ecgl.common.wireframe.fragmentMain\n\n#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)\n if (wireframeLineWidth > 0.) {\n vec4 lineColor = wireframeLineColor;\n#ifdef SRGB_DECODE\n lineColor = sRGBToLinear(lineColor);\n#endif\n\n gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);\n }\n#endif\n@end\n\n\n\n\n@export ecgl.common.bumpMap.header\n\n#ifdef BUMPMAP_ENABLED\nuniform sampler2D bumpMap;\nuniform float bumpScale : 1.0;\n\n\nvec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)\n{\n vec2 dSTdx = dFdx(v_Texcoord);\n vec2 dSTdy = dFdy(v_Texcoord);\n\n float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;\n float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;\n float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;\n\n vec3 vSigmaX = dFdx(surfPos);\n vec3 vSigmaY = dFdy(surfPos);\n vec3 vN = surfNormal;\n\n vec3 R1 = cross(vSigmaY, vN);\n vec3 R2 = cross(vN, vSigmaX);\n\n float fDet = dot(vSigmaX, R1);\n\n vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);\n return normalize(abs(fDet) * baseNormal - vGrad);\n\n}\n#endif\n\n@end\n\n@export ecgl.common.normalMap.vertexHeader\n\n#ifdef NORMALMAP_ENABLED\nattribute vec4 tangent : TANGENT;\nvarying vec3 v_Tangent;\nvarying vec3 v_Bitangent;\n#endif\n\n@end\n\n@export ecgl.common.normalMap.vertexMain\n\n#ifdef NORMALMAP_ENABLED\n if (dot(tangent, tangent) > 0.0) {\n v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);\n v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);\n }\n#endif\n\n@end\n\n\n@export ecgl.common.normalMap.fragmentHeader\n\n#ifdef NORMALMAP_ENABLED\nuniform sampler2D normalMap;\nvarying vec3 v_Tangent;\nvarying vec3 v_Bitangent;\n#endif\n\n@end\n\n@export ecgl.common.normalMap.fragmentMain\n#ifdef NORMALMAP_ENABLED\n if (dot(v_Tangent, v_Tangent) > 0.0) {\n vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;\n if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;\n mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);\n N = normalize(tbn * N);\n }\n }\n#endif\n@end\n\n\n\n@export ecgl.common.vertexAnimation.header\n\n#ifdef VERTEX_ANIMATION\nattribute vec3 prevPosition;\nattribute vec3 prevNormal;\nuniform float percent;\n#endif\n\n@end\n\n@export ecgl.common.vertexAnimation.main\n\n#ifdef VERTEX_ANIMATION\n vec3 pos = mix(prevPosition, position, percent);\n vec3 norm = mix(prevNormal, normal, percent);\n#else\n vec3 pos = position;\n vec3 norm = normal;\n#endif\n\n@end\n\n\n@export ecgl.common.ssaoMap.header\n#ifdef SSAOMAP_ENABLED\nuniform sampler2D ssaoMap;\nuniform vec4 viewport : VIEWPORT;\n#endif\n@end\n\n@export ecgl.common.ssaoMap.main\n float ao = 1.0;\n#ifdef SSAOMAP_ENABLED\n ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;\n#endif\n@end\n\n\n\n\n@export ecgl.common.diffuseLayer.header\n\n#if (LAYER_DIFFUSEMAP_COUNT > 0)\nuniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];\nuniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];\n#endif\n\n@end\n\n@export ecgl.common.emissiveLayer.header\n\n#if (LAYER_EMISSIVEMAP_COUNT > 0)\nuniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];\nuniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];\n#endif\n\n@end\n\n@export ecgl.common.layers.header\n@import ecgl.common.diffuseLayer.header\n@import ecgl.common.emissiveLayer.header\n@end\n\n@export ecgl.common.diffuseLayer.main\n\n#if (LAYER_DIFFUSEMAP_COUNT > 0)\n for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{\n float intensity = layerDiffuseIntensity[_idx_];\n vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);\n #ifdef SRGB_DECODE\n texel2 = sRGBToLinear(texel2);\n #endif\n albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);\n albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;\n }}\n#endif\n\n@end\n\n@export ecgl.common.emissiveLayer.main\n\n#if (LAYER_EMISSIVEMAP_COUNT > 0)\n for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)\n {{\n vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];\n #ifdef SRGB_DECODE\n texel2 = sRGBToLinear(texel2);\n #endif\n float intensity = layerEmissionIntensity[_idx_];\n gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;\n }}\n#endif\n\n@end\n"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.color.vertex\n\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\n\n@import ecgl.common.uv.header\n\nattribute vec2 texcoord : TEXCOORD_0;\nattribute vec3 position: POSITION;\n\n@import ecgl.common.wireframe.vertexHeader\n\n#ifdef VERTEX_COLOR\nattribute vec4 a_Color : COLOR;\nvarying vec4 v_Color;\n#endif\n\n#ifdef VERTEX_ANIMATION\nattribute vec3 prevPosition;\nuniform float percent : 1.0;\n#endif\n\nvoid main()\n{\n#ifdef VERTEX_ANIMATION\n vec3 pos = mix(prevPosition, position, percent);\n#else\n vec3 pos = position;\n#endif\n\n gl_Position = worldViewProjection * vec4(pos, 1.0);\n\n @import ecgl.common.uv.main\n\n#ifdef VERTEX_COLOR\n v_Color = a_Color;\n#endif\n\n @import ecgl.common.wireframe.vertexMain\n\n}\n\n@end\n\n@export ecgl.color.fragment\n\n#define LAYER_DIFFUSEMAP_COUNT 0\n#define LAYER_EMISSIVEMAP_COUNT 0\n\nuniform sampler2D diffuseMap;\nuniform sampler2D detailMap;\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\n\n#ifdef VERTEX_COLOR\nvarying vec4 v_Color;\n#endif\n\n@import ecgl.common.layers.header\n\n@import ecgl.common.uv.fragmentHeader\n\n@import ecgl.common.wireframe.fragmentHeader\n\n@import clay.util.srgb\n\nvoid main()\n{\n#ifdef SRGB_DECODE\n gl_FragColor = sRGBToLinear(color);\n#else\n gl_FragColor = color;\n#endif\n\n#ifdef VERTEX_COLOR\n gl_FragColor *= v_Color;\n#endif\n\n @import ecgl.common.albedo.main\n\n @import ecgl.common.diffuseLayer.main\n\n gl_FragColor *= albedoTexel;\n\n @import ecgl.common.emissiveLayer.main\n\n @import ecgl.common.wireframe.fragmentMain\n\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "/**\n * http: */\n\n@export ecgl.lambert.vertex\n\n@import ecgl.common.transformUniforms\n\n@import ecgl.common.uv.header\n\n\n@import ecgl.common.attributes\n\n@import ecgl.common.wireframe.vertexHeader\n\n#ifdef VERTEX_COLOR\nattribute vec4 a_Color : COLOR;\nvarying vec4 v_Color;\n#endif\n\n\n@import ecgl.common.vertexAnimation.header\n\n\nvarying vec3 v_Normal;\nvarying vec3 v_WorldPosition;\n\nvoid main()\n{\n @import ecgl.common.uv.main\n\n @import ecgl.common.vertexAnimation.main\n\n\n gl_Position = worldViewProjection * vec4(pos, 1.0);\n\n v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);\n v_WorldPosition = (world * vec4(pos, 1.0)).xyz;\n\n#ifdef VERTEX_COLOR\n v_Color = a_Color;\n#endif\n\n @import ecgl.common.wireframe.vertexMain\n}\n\n@end\n\n\n@export ecgl.lambert.fragment\n\n#define LAYER_DIFFUSEMAP_COUNT 0\n#define LAYER_EMISSIVEMAP_COUNT 0\n\n#define NORMAL_UP_AXIS 1\n#define NORMAL_FRONT_AXIS 2\n\n@import ecgl.common.uv.fragmentHeader\n\nvarying vec3 v_Normal;\nvarying vec3 v_WorldPosition;\n\nuniform sampler2D diffuseMap;\nuniform sampler2D detailMap;\n\n@import ecgl.common.layers.header\n\nuniform float emissionIntensity: 1.0;\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\n\nuniform mat4 viewInverse : VIEWINVERSE;\n\n#ifdef AMBIENT_LIGHT_COUNT\n@import clay.header.ambient_light\n#endif\n#ifdef AMBIENT_SH_LIGHT_COUNT\n@import clay.header.ambient_sh_light\n#endif\n\n#ifdef DIRECTIONAL_LIGHT_COUNT\n@import clay.header.directional_light\n#endif\n\n#ifdef VERTEX_COLOR\nvarying vec4 v_Color;\n#endif\n\n\n@import ecgl.common.ssaoMap.header\n\n@import ecgl.common.bumpMap.header\n\n@import clay.util.srgb\n\n@import ecgl.common.wireframe.fragmentHeader\n\n@import clay.plugin.compute_shadow_map\n\nvoid main()\n{\n#ifdef SRGB_DECODE\n gl_FragColor = sRGBToLinear(color);\n#else\n gl_FragColor = color;\n#endif\n\n#ifdef VERTEX_COLOR\n #ifdef SRGB_DECODE\n gl_FragColor *= sRGBToLinear(v_Color);\n #else\n gl_FragColor *= v_Color;\n #endif\n#endif\n\n @import ecgl.common.albedo.main\n\n @import ecgl.common.diffuseLayer.main\n\n gl_FragColor *= albedoTexel;\n\n vec3 N = v_Normal;\n#ifdef DOUBLE_SIDED\n vec3 eyePos = viewInverse[3].xyz;\n vec3 V = normalize(eyePos - v_WorldPosition);\n\n if (dot(N, V) < 0.0) {\n N = -N;\n }\n#endif\n\n float ambientFactor = 1.0;\n\n#ifdef BUMPMAP_ENABLED\n N = bumpNormal(v_WorldPosition, v_Normal, N);\n ambientFactor = dot(v_Normal, N);\n#endif\n\n vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);\n\n vec3 diffuseColor = vec3(0.0, 0.0, 0.0);\n\n @import ecgl.common.ssaoMap.main\n\n#ifdef AMBIENT_LIGHT_COUNT\n for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)\n {\n diffuseColor += ambientLightColor[i] * ambientFactor * ao;\n }\n#endif\n#ifdef AMBIENT_SH_LIGHT_COUNT\n for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)\n {{\n diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;\n }}\n#endif\n#ifdef DIRECTIONAL_LIGHT_COUNT\n#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];\n if(shadowEnabled)\n {\n computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);\n }\n#endif\n for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)\n {\n vec3 lightDirection = -directionalLightDirection[i];\n vec3 lightColor = directionalLightColor[i];\n\n float shadowContrib = 1.0;\n#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n if (shadowEnabled)\n {\n shadowContrib = shadowContribsDir[i];\n }\n#endif\n\n float ndl = dot(N, normalize(lightDirection)) * shadowContrib;\n\n diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);\n }\n#endif\n\n gl_FragColor.rgb *= diffuseColor;\n\n @import ecgl.common.emissiveLayer.main\n\n @import ecgl.common.wireframe.fragmentMain\n}\n\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.realistic.vertex\n\n@import ecgl.common.transformUniforms\n\n@import ecgl.common.uv.header\n\n@import ecgl.common.attributes\n\n\n@import ecgl.common.wireframe.vertexHeader\n\n#ifdef VERTEX_COLOR\nattribute vec4 a_Color : COLOR;\nvarying vec4 v_Color;\n#endif\n\n#ifdef NORMALMAP_ENABLED\nattribute vec4 tangent : TANGENT;\nvarying vec3 v_Tangent;\nvarying vec3 v_Bitangent;\n#endif\n\n@import ecgl.common.vertexAnimation.header\n\nvarying vec3 v_Normal;\nvarying vec3 v_WorldPosition;\n\nvoid main()\n{\n\n @import ecgl.common.uv.main\n\n @import ecgl.common.vertexAnimation.main\n\n gl_Position = worldViewProjection * vec4(pos, 1.0);\n\n v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);\n v_WorldPosition = (world * vec4(pos, 1.0)).xyz;\n\n#ifdef VERTEX_COLOR\n v_Color = a_Color;\n#endif\n\n#ifdef NORMALMAP_ENABLED\n v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);\n v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);\n#endif\n\n @import ecgl.common.wireframe.vertexMain\n\n}\n\n@end\n\n\n\n@export ecgl.realistic.fragment\n\n#define LAYER_DIFFUSEMAP_COUNT 0\n#define LAYER_EMISSIVEMAP_COUNT 0\n#define PI 3.14159265358979\n#define ROUGHNESS_CHANEL 0\n#define METALNESS_CHANEL 1\n\n#define NORMAL_UP_AXIS 1\n#define NORMAL_FRONT_AXIS 2\n\n#ifdef VERTEX_COLOR\nvarying vec4 v_Color;\n#endif\n\n@import ecgl.common.uv.fragmentHeader\n\nvarying vec3 v_Normal;\nvarying vec3 v_WorldPosition;\n\nuniform sampler2D diffuseMap;\n\nuniform sampler2D detailMap;\nuniform sampler2D metalnessMap;\nuniform sampler2D roughnessMap;\n\n@import ecgl.common.layers.header\n\nuniform float emissionIntensity: 1.0;\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\n\nuniform float metalness : 0.0;\nuniform float roughness : 0.5;\n\nuniform mat4 viewInverse : VIEWINVERSE;\n\n#ifdef AMBIENT_LIGHT_COUNT\n@import clay.header.ambient_light\n#endif\n\n#ifdef AMBIENT_SH_LIGHT_COUNT\n@import clay.header.ambient_sh_light\n#endif\n\n#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT\n@import clay.header.ambient_cubemap_light\n#endif\n\n#ifdef DIRECTIONAL_LIGHT_COUNT\n@import clay.header.directional_light\n#endif\n\n@import ecgl.common.normalMap.fragmentHeader\n\n@import ecgl.common.ssaoMap.header\n\n@import ecgl.common.bumpMap.header\n\n@import clay.util.srgb\n\n@import clay.util.rgbm\n\n@import ecgl.common.wireframe.fragmentHeader\n\n@import clay.plugin.compute_shadow_map\n\nvec3 F_Schlick(float ndv, vec3 spec) {\n return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);\n}\n\nfloat D_Phong(float g, float ndh) {\n float a = pow(8192.0, g);\n return (a + 2.0) / 8.0 * pow(ndh, a);\n}\n\nvoid main()\n{\n vec4 albedoColor = color;\n\n vec3 eyePos = viewInverse[3].xyz;\n vec3 V = normalize(eyePos - v_WorldPosition);\n#ifdef VERTEX_COLOR\n #ifdef SRGB_DECODE\n albedoColor *= sRGBToLinear(v_Color);\n #else\n albedoColor *= v_Color;\n #endif\n#endif\n\n @import ecgl.common.albedo.main\n\n @import ecgl.common.diffuseLayer.main\n\n albedoColor *= albedoTexel;\n\n float m = metalness;\n\n#ifdef METALNESSMAP_ENABLED\n float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];\n m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);\n#endif\n\n vec3 baseColor = albedoColor.rgb;\n albedoColor.rgb = baseColor * (1.0 - m);\n vec3 specFactor = mix(vec3(0.04), baseColor, m);\n\n float g = 1.0 - roughness;\n\n#ifdef ROUGHNESSMAP_ENABLED\n float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];\n g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);\n#endif\n\n vec3 N = v_Normal;\n\n#ifdef DOUBLE_SIDED\n if (dot(N, V) < 0.0) {\n N = -N;\n }\n#endif\n\n float ambientFactor = 1.0;\n\n#ifdef BUMPMAP_ENABLED\n N = bumpNormal(v_WorldPosition, v_Normal, N);\n ambientFactor = dot(v_Normal, N);\n#endif\n\n@import ecgl.common.normalMap.fragmentMain\n\n vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);\n\n vec3 diffuseTerm = vec3(0.0);\n vec3 specularTerm = vec3(0.0);\n\n float ndv = clamp(dot(N, V), 0.0, 1.0);\n vec3 fresnelTerm = F_Schlick(ndv, specFactor);\n\n @import ecgl.common.ssaoMap.main\n\n#ifdef AMBIENT_LIGHT_COUNT\n for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)\n {{\n diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;\n }}\n#endif\n\n#ifdef AMBIENT_SH_LIGHT_COUNT\n for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)\n {{\n diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;\n }}\n#endif\n\n#ifdef DIRECTIONAL_LIGHT_COUNT\n#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];\n if(shadowEnabled)\n {\n computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);\n }\n#endif\n for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)\n {{\n vec3 L = -directionalLightDirection[_idx_];\n vec3 lc = directionalLightColor[_idx_];\n\n vec3 H = normalize(L + V);\n float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);\n float ndh = clamp(dot(N, H), 0.0, 1.0);\n\n float shadowContrib = 1.0;\n#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n if (shadowEnabled)\n {\n shadowContrib = shadowContribsDir[_idx_];\n }\n#endif\n\n vec3 li = lc * ndl * shadowContrib;\n\n diffuseTerm += li;\n specularTerm += li * fresnelTerm * D_Phong(g, ndh);\n }}\n#endif\n\n\n#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT\n vec3 L = reflect(-V, N);\n L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);\n float rough2 = clamp(1.0 - g, 0.0, 1.0);\n float bias2 = rough2 * 5.0;\n vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;\n vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;\n vec3 envTexel2;\n for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)\n {{\n envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);\n specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;\n }}\n#endif\n\n gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;\n gl_FragColor.a = albedoColor.a;\n\n#ifdef SRGB_ENCODE\n gl_FragColor = linearTosRGB(gl_FragColor);\n#endif\n\n @import ecgl.common.emissiveLayer.main\n\n @import ecgl.common.wireframe.fragmentMain\n}\n\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.hatching.vertex\n\n@import ecgl.realistic.vertex\n\n@end\n\n\n@export ecgl.hatching.fragment\n\n#define NORMAL_UP_AXIS 1\n#define NORMAL_FRONT_AXIS 2\n\n@import ecgl.common.uv.fragmentHeader\n\nvarying vec3 v_Normal;\nvarying vec3 v_WorldPosition;\n\nuniform vec4 color : [0.0, 0.0, 0.0, 1.0];\nuniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];\n\nuniform mat4 viewInverse : VIEWINVERSE;\n\n#ifdef AMBIENT_LIGHT_COUNT\n@import clay.header.ambient_light\n#endif\n#ifdef AMBIENT_SH_LIGHT_COUNT\n@import clay.header.ambient_sh_light\n#endif\n\n#ifdef DIRECTIONAL_LIGHT_COUNT\n@import clay.header.directional_light\n#endif\n\n#ifdef VERTEX_COLOR\nvarying vec4 v_Color;\n#endif\n\n\n@import ecgl.common.ssaoMap.header\n\n@import ecgl.common.bumpMap.header\n\n@import clay.util.srgb\n\n@import ecgl.common.wireframe.fragmentHeader\n\n@import clay.plugin.compute_shadow_map\n\nuniform sampler2D hatch1;\nuniform sampler2D hatch2;\nuniform sampler2D hatch3;\nuniform sampler2D hatch4;\nuniform sampler2D hatch5;\nuniform sampler2D hatch6;\n\nfloat shade(in float tone) {\n vec4 c = vec4(1. ,1., 1., 1.);\n float step = 1. / 6.;\n vec2 uv = v_DetailTexcoord;\n if (tone <= step / 2.0) {\n c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);\n }\n else if (tone <= step) {\n c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);\n }\n if(tone > step && tone <= 2. * step){\n c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));\n }\n if(tone > 2. * step && tone <= 3. * step){\n c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));\n }\n if(tone > 3. * step && tone <= 4. * step){\n c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));\n }\n if(tone > 4. * step && tone <= 5. * step){\n c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));\n }\n if(tone > 5. * step){\n c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));\n }\n\n return c.r;\n}\n\nconst vec3 w = vec3(0.2125, 0.7154, 0.0721);\n\nvoid main()\n{\n#ifdef SRGB_DECODE\n vec4 inkColor = sRGBToLinear(color);\n#else\n vec4 inkColor = color;\n#endif\n\n#ifdef VERTEX_COLOR\n #ifdef SRGB_DECODE\n inkColor *= sRGBToLinear(v_Color);\n #else\n inkColor *= v_Color;\n #endif\n#endif\n\n vec3 N = v_Normal;\n#ifdef DOUBLE_SIDED\n vec3 eyePos = viewInverse[3].xyz;\n vec3 V = normalize(eyePos - v_WorldPosition);\n\n if (dot(N, V) < 0.0) {\n N = -N;\n }\n#endif\n\n float tone = 0.0;\n\n float ambientFactor = 1.0;\n\n#ifdef BUMPMAP_ENABLED\n N = bumpNormal(v_WorldPosition, v_Normal, N);\n ambientFactor = dot(v_Normal, N);\n#endif\n\n vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);\n\n @import ecgl.common.ssaoMap.main\n\n#ifdef AMBIENT_LIGHT_COUNT\n for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)\n {\n tone += dot(ambientLightColor[i], w) * ambientFactor * ao;\n }\n#endif\n#ifdef AMBIENT_SH_LIGHT_COUNT\n for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)\n {{\n tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;\n }}\n#endif\n#ifdef DIRECTIONAL_LIGHT_COUNT\n#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];\n if(shadowEnabled)\n {\n computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);\n }\n#endif\n for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)\n {\n vec3 lightDirection = -directionalLightDirection[i];\n float lightTone = dot(directionalLightColor[i], w);\n\n float shadowContrib = 1.0;\n#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n if (shadowEnabled)\n {\n shadowContrib = shadowContribsDir[i];\n }\n#endif\n\n float ndl = dot(N, normalize(lightDirection)) * shadowContrib;\n\n tone += lightTone * clamp(ndl, 0.0, 1.0);\n }\n#endif\n\n gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));\n }\n@end\n"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.sm.depth.vertex\n\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\n\nattribute vec3 position : POSITION;\nattribute vec2 texcoord : TEXCOORD_0;\n\n#ifdef VERTEX_ANIMATION\nattribute vec3 prevPosition;\nuniform float percent : 1.0;\n#endif\n\nvarying vec4 v_ViewPosition;\nvarying vec2 v_Texcoord;\n\nvoid main(){\n\n#ifdef VERTEX_ANIMATION\n vec3 pos = mix(prevPosition, position, percent);\n#else\n vec3 pos = position;\n#endif\n\n v_ViewPosition = worldViewProjection * vec4(pos, 1.0);\n gl_Position = v_ViewPosition;\n\n v_Texcoord = texcoord;\n\n}\n@end\n\n\n\n@export ecgl.sm.depth.fragment\n\n@import clay.sm.depth.fragment\n\n@end"
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (e && e[t] && (e[t].normal || e[t].emphasis)) {
        var r = e[t].normal,
          n = e[t].emphasis;
        r && (e[t] = r), n && (e.emphasis = e.emphasis || {}, e.emphasis[t] = n)
      }
    }

    function i(e) {
      n(e, "itemStyle"), n(e, "lineStyle"), n(e, "areaStyle"), n(e, "label")
    }

    function a(e) {
      e && (e instanceof Array || (e = [e]), s.a.util.each(e, function (e) {
        if (e.axisLabel) {
          var t = e.axisLabel;
          s.a.util.extend(t, t.textStyle), t.textStyle = null
        }
      }))
    }
    var o = r(0),
      s = r.n(o),
      u = ["bar3D", "line3D", "map3D", "scatter3D", "surface", "lines3D", "scatterGL", "scatter3D"];
    t.a = function (e) {
      s.a.util.each(e.series, function (t) {
        s.a.util.indexOf(u, t.type) >= 0 && (i(t), "mapbox" === t.coordinateSystem && (t.coordinateSystem = "mapbox3D", e.mapbox3D = e.mapbox))
      }), a(e.xAxis3D), a(e.yAxis3D), a(e.zAxis3D), a(e.grid3D), n(e.geo3D)
    }
  }, function (e, t, r) {
    "use strict";
    var n = (r(155), r(159), r(160), r(167), r(0)),
      i = r.n(n);
    i.a.registerAction({
      type: "grid3DChangeCamera",
      event: "grid3dcamerachanged",
      update: "series:updateCamera"
    }, function (e, t) {
      t.eachComponent({
        mainType: "grid3D",
        query: e
      }, function (t) {
        t.setView(e)
      })
    }), i.a.registerAction({
      type: "grid3DShowAxisPointer",
      event: "grid3dshowaxispointer",
      update: "grid3D:showAxisPointer"
    }, function (e, t) {}), i.a.registerAction({
      type: "grid3DHideAxisPointer",
      event: "grid3dhideaxispointer",
      update: "grid3D:hideAxisPointer"
    }, function (e, t) {})
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      return t.type || (t.data ? "category" : "value")
    }
    var i = r(0),
      a = r.n(i),
      o = r(156),
      s = a.a.extendComponentModel({
        type: "cartesian3DAxis",
        axis: null,
        getCoordSysModel: function () {
          return this.ecModel.queryComponents({
            mainType: "grid3D",
            index: this.option.gridIndex,
            id: this.option.gridId
          })[0]
        }
      });
    a.a.helper.mixinAxisModelCommonMethods(s), Object(o.a)("x", s, n, {
      name: "X"
    }), Object(o.a)("y", s, n, {
      name: "Y"
    }), Object(o.a)("z", s, n, {
      name: "Z"
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(157),
      o = r(158),
      s = r.n(o),
      u = ["value", "category", "time", "log"];
    t.a = function (e, t, r, n) {
      i.a.util.each(u, function (o) {
        t.extend({
          type: e + "Axis3D." + o,
          __ordinalMeta: null,
          mergeDefaultAndTheme: function (t, n) {
            var a = n.getTheme();
            i.a.util.merge(t, a.get(o + "Axis3D")), i.a.util.merge(t, this.getDefaultOption()), t.type = r(e, t)
          },
          optionUpdated: function () {
            "category" === this.option.type && (this.__ordinalMeta = s.a.createByAxisModel(this))
          },
          getCategories: function () {
            if ("category" === this.option.type) return this.__ordinalMeta.categories
          },
          getOrdinalMeta: function () {
            return this.__ordinalMeta
          },
          defaultOption: i.a.util.merge(i.a.util.clone(a.a[o + "Axis3D"]), n || {}, !0)
        })
      }), t.superClass.registerSubTypeDefaulter(e + "Axis3D", i.a.util.curry(r, e))
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = {
        show: !0,
        grid3DIndex: 0,
        inverse: !1,
        name: "",
        nameLocation: "middle",
        nameTextStyle: {
          fontSize: 16
        },
        nameGap: 20,
        axisPointer: {},
        axisLine: {},
        axisTick: {},
        axisLabel: {},
        splitArea: {}
      },
      o = i.a.util.merge({
        boundaryGap: !0,
        axisTick: {
          alignWithLabel: !1,
          interval: "auto"
        },
        axisLabel: {
          interval: "auto"
        },
        axisPointer: {
          label: {
            show: !1
          }
        }
      }, a),
      s = i.a.util.merge({
        boundaryGap: [0, 0],
        splitNumber: 5,
        axisPointer: {
          label: {}
        }
      }, a),
      u = i.a.util.defaults({
        scale: !0,
        min: "dataMin",
        max: "dataMax"
      }, s),
      l = i.a.util.defaults({
        logBase: 10
      }, s);
    l.scale = !0, t.a = {
      categoryAxis3D: o,
      valueAxis3D: s,
      timeAxis3D: u,
      logAxis3D: l
    }
  }, function (e, t, r) {
    function n(e) {
      this.categories = e.categories || [], this._needCollect = e.needCollect, this._deduplication = e.deduplication, this._map
    }

    function i(e) {
      return e._map || (e._map = s(e.categories))
    }

    function a(e) {
      return u(e) && null != e.value ? e.value : e + ""
    }
    var o = r(13),
      s = o.createHashMap,
      u = o.isObject,
      l = o.map;
    n.createByAxisModel = function (e) {
      var t = e.option,
        r = t.data,
        i = r && l(r, a);
      return new n({
        categories: i,
        needCollect: !i,
        deduplication: !1 !== t.dedplication
      })
    };
    var h = n.prototype;
    h.getOrdinal = function (e) {
      return i(this).get(e)
    }, h.parseAndCollect = function (e) {
      var t, r = this._needCollect;
      if ("string" != typeof e && !r) return e;
      if (r && !this._deduplication) return t = this.categories.length, this.categories[t] = e, t;
      var n = i(this);
      return t = n.get(e), null == t && (r ? (t = this.categories.length, this.categories[t] = e, n.set(e, t)) : t = NaN), t
    };
    var c = n;
    e.exports = c
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(44),
      o = r(28),
      s = r(29),
      u = i.a.extendComponentModel({
        type: "grid3D",
        dependencies: ["xAxis3D", "yAxis3D", "zAxis3D"],
        defaultOption: {
          show: !0,
          zlevel: -10,
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          environment: "auto",
          boxWidth: 100,
          boxHeight: 100,
          boxDepth: 100,
          axisPointer: {
            show: !0,
            lineStyle: {
              color: "rgba(0, 0, 0, 0.8)",
              width: 1
            },
            label: {
              show: !0,
              formatter: null,
              margin: 8,
              textStyle: {
                fontSize: 14,
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: 3,
                borderRadius: 3
              }
            }
          },
          axisLine: {
            show: !0,
            lineStyle: {
              color: "#333",
              width: 2,
              type: "solid"
            }
          },
          axisTick: {
            show: !0,
            inside: !1,
            length: 3,
            lineStyle: {
              width: 1
            }
          },
          axisLabel: {
            show: !0,
            inside: !1,
            rotate: 0,
            margin: 8,
            textStyle: {
              fontSize: 12
            }
          },
          splitLine: {
            show: !0,
            lineStyle: {
              color: ["#ccc"],
              width: 1,
              type: "solid"
            }
          },
          splitArea: {
            show: !1,
            areaStyle: {
              color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
            }
          },
          light: {
            main: {
              alpha: 30,
              beta: 40
            },
            ambient: {
              intensity: .4
            }
          },
          viewControl: {
            alpha: 20,
            beta: 40,
            autoRotate: !1,
            distance: 200,
            minDistance: 40,
            maxDistance: 400
          }
        }
      });
    i.a.util.merge(u.prototype, a.a), i.a.util.merge(u.prototype, o.a), i.a.util.merge(u.prototype, s.a)
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(1),
      o = r(45),
      s = r(25),
      u = r(2),
      l = r(81),
      h = r(30),
      c = r(162),
      d = r(164),
      f = r(63),
      p = r(46),
      m = u.a.firstNotNull;
    a.a.Shader.import(p.a), ["x", "y", "z"].forEach(function (e) {
      i.a.extendComponentView({
        type: e + "Axis3D"
      })
    });
    var g = {
      x: 0,
      y: 2,
      z: 1
    };
    i.a.extendComponentView({
      type: "grid3D",
      __ecgl__: !0,
      init: function (e, t) {
        var r = [
            ["y", "z", "x", -1, "left"],
            ["y", "z", "x", 1, "right"],
            ["x", "y", "z", -1, "bottom"],
            ["x", "y", "z", 1, "top"],
            ["x", "z", "y", -1, "far"],
            ["x", "z", "y", 1, "near"]
          ],
          n = ["x", "y", "z"],
          i = new a.a.Material({
            shader: a.a.createShader("ecgl.color"),
            depthMask: !1,
            transparent: !0
          }),
          u = new a.a.Material({
            shader: a.a.createShader("ecgl.meshLines3D"),
            depthMask: !1,
            transparent: !0
          });
        i.define("fragment", "DOUBLE_SIDED"), i.define("both", "VERTEX_COLOR"), this.groupGL = new a.a.Node, this._control = new o.a({
          zr: t.getZr()
        }), this._control.init(), this._faces = r.map(function (e) {
          var t = new c.a(e, u, i);
          return this.groupGL.add(t.rootNode), t
        }, this), this._axes = n.map(function (e) {
          var t = new d.a(e, u);
          return this.groupGL.add(t.rootNode), t
        }, this);
        var p = t.getDevicePixelRatio();
        this._axisLabelSurface = new l.a({
          width: 256,
          height: 256,
          devicePixelRatio: p
        }), this._axisLabelSurface.onupdate = function () {
          t.getZr().refresh()
        }, this._axisPointerLineMesh = new a.a.Mesh({
          geometry: new s.a({
            useNativeLine: !1
          }),
          material: u,
          castShadow: !1,
          ignorePicking: !0,
          renderOrder: 3
        }), this.groupGL.add(this._axisPointerLineMesh), this._axisPointerLabelsSurface = new l.a({
          width: 128,
          height: 128,
          devicePixelRatio: p
        }), this._axisPointerLabelsMesh = new f.a({
          ignorePicking: !0,
          renderOrder: 4,
          castShadow: !1
        }), this._axisPointerLabelsMesh.material.set("textureAtlas", this._axisPointerLabelsSurface.getTexture()), this.groupGL.add(this._axisPointerLabelsMesh), this._lightRoot = new a.a.Node, this._sceneHelper = new h.a, this._sceneHelper.initLight(this._lightRoot)
      },
      render: function (e, t, r) {
        this._model = e, this._api = r;
        var n = e.coordinateSystem;
        n.viewGL.add(this._lightRoot), e.get("show") ? n.viewGL.add(this.groupGL) : n.viewGL.remove(this.groupGL);
        var i = this._control;
        i.setViewGL(n.viewGL);
        var a = e.getModel("viewControl");
        i.setFromViewControlModel(a, 0), this._axisLabelSurface.clear(), i.off("update"), e.get("show") && (this._faces.forEach(function (n) {
          n.update(e, t, r)
        }, this), this._axes.forEach(function (t) {
          t.update(e, this._axisLabelSurface, r)
        }, this)), i.on("update", this._onCameraChange.bind(this, e, r), this), this._sceneHelper.setScene(n.viewGL.scene), this._sceneHelper.updateLight(e), n.viewGL.setPostEffect(e.getModel("postEffect"), r), n.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")), this._initMouseHandler(e)
      },
      afterRender: function (e, t, r, n) {
        var i = n.renderer;
        this._sceneHelper.updateAmbientCubemap(i, e, r), this._sceneHelper.updateSkybox(i, e, r)
      },
      showAxisPointer: function (e, t, r, n) {
        this._doShowAxisPointer(), this._updateAxisPointer(n.value)
      },
      hideAxisPointer: function (e, t, r, n) {
        this._doHideAxisPointer()
      },
      _initMouseHandler: function (e) {
        var t = e.coordinateSystem,
          r = t.viewGL;
        e.get("show") && e.get("axisPointer.show") ? r.on("mousemove", this._updateAxisPointerOnMousePosition, this) : r.off("mousemove", this._updateAxisPointerOnMousePosition)
      },
      _updateAxisPointerOnMousePosition: function (e) {
        if (!e.target) {
          for (var t, r = this._model, n = r.coordinateSystem, i = n.viewGL, o = i.castRay(e.offsetX, e.offsetY, new a.a.Ray), s = 0; s < this._faces.length; s++) {
            var u = this._faces[s];
            if (!u.rootNode.invisible) {
              u.plane.normal.dot(i.camera.worldTransform.z) < 0 && u.plane.normal.negate();
              var l = o.intersectPlane(u.plane);
              if (l) {
                var h = n.getAxis(u.faceInfo[0]),
                  c = n.getAxis(u.faceInfo[1]),
                  d = g[u.faceInfo[0]],
                  f = g[u.faceInfo[1]];
                h.contain(l.array[d]) && c.contain(l.array[f]) && (t = l)
              }
            }
          }
          if (t) {
            var p = n.pointToData(t.array, [], !0);
            this._updateAxisPointer(p), this._doShowAxisPointer()
          } else this._doHideAxisPointer()
        }
      },
      _onCameraChange: function (e, t) {
        e.get("show") && (this._updateFaceVisibility(), this._updateAxisLinePosition());
        var r = this._control;
        t.dispatchAction({
          type: "grid3DChangeCamera",
          alpha: r.getAlpha(),
          beta: r.getBeta(),
          distance: r.getDistance(),
          center: r.getCenter(),
          from: this.uid,
          grid3DId: e.id
        })
      },
      _updateFaceVisibility: function () {
        var e = this._control.getCamera(),
          t = new a.a.Vector3;
        e.update();
        for (var r = 0; r < this._faces.length / 2; r++) {
          for (var n = [], i = 0; i < 2; i++) {
            this._faces[2 * r + i].rootNode.getWorldPosition(t), t.transformMat4(e.viewMatrix), n[i] = t.z
          }
          var o = n[0] > n[1] ? 0 : 1,
            s = this._faces[2 * r + o],
            u = this._faces[2 * r + 1 - o];
          s.rootNode.invisible = !0, u.rootNode.invisible = !1
        }
      },
      _updateAxisLinePosition: function () {
        var e = this._model.coordinateSystem,
          t = e.getAxis("x"),
          r = e.getAxis("y"),
          n = e.getAxis("z"),
          i = n.getExtentMax(),
          a = n.getExtentMin(),
          o = t.getExtentMin(),
          s = t.getExtentMax(),
          u = r.getExtentMax(),
          l = r.getExtentMin(),
          h = this._axes[0].rootNode,
          c = this._axes[1].rootNode,
          d = this._axes[2].rootNode,
          f = this._faces,
          p = f[4].rootNode.invisible ? l : u,
          m = f[2].rootNode.invisible ? i : a,
          g = f[0].rootNode.invisible ? o : s,
          _ = f[2].rootNode.invisible ? i : a,
          v = f[0].rootNode.invisible ? s : o,
          y = f[4].rootNode.invisible ? l : u;
        h.rotation.identity(), c.rotation.identity(), d.rotation.identity(), f[4].rootNode.invisible && (this._axes[0].flipped = !0, h.rotation.rotateX(Math.PI)), f[0].rootNode.invisible && (this._axes[1].flipped = !0, c.rotation.rotateZ(Math.PI)), f[4].rootNode.invisible && (this._axes[2].flipped = !0, d.rotation.rotateY(Math.PI)), h.position.set(0, m, p), c.position.set(g, _, 0), d.position.set(v, 0, y), h.update(), c.update(), d.update(), this._updateAxisLabelAlign()
      },
      _updateAxisLabelAlign: function () {
        var e = this._control.getCamera(),
          t = [new a.a.Vector4, new a.a.Vector4],
          r = new a.a.Vector4;
        this.groupGL.getWorldPosition(r), r.w = 1, r.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix), r.x /= r.w, r.y /= r.w, this._axes.forEach(function (n) {
          for (var i = n.axisLineCoords, a = (n.labelsMesh.geometry, 0); a < t.length; a++) t[a].setArray(i[a]), t[a].w = 1, t[a].transformMat4(n.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix), t[a].x /= t[a].w, t[a].y /= t[a].w;
          var o, s, u = t[1].x - t[0].x,
            l = t[1].y - t[0].y,
            h = (t[1].x + t[0].x) / 2,
            c = (t[1].y + t[0].y) / 2;
          Math.abs(l / u) < .5 ? (o = "center", s = c > r.y ? "bottom" : "top") : (s = "middle", o = h > r.x ? "left" : "right"), n.setSpriteAlign(o, s, this._api)
        }, this)
      },
      _doShowAxisPointer: function () {
        this._axisPointerLineMesh.invisible && (this._axisPointerLineMesh.invisible = !1, this._axisPointerLabelsMesh.invisible = !1, this._api.getZr().refresh())
      },
      _doHideAxisPointer: function () {
        this._axisPointerLineMesh.invisible || (this._axisPointerLineMesh.invisible = !0, this._axisPointerLabelsMesh.invisible = !0, this._api.getZr().refresh())
      },
      _updateAxisPointer: function (e) {
        function t(e) {
          return u.a.firstNotNull(e.model.get("axisPointer.show"), l.get("show"))
        }

        function r(e) {
          var t = e.model.getModel("axisPointer", l),
            r = t.getModel("lineStyle"),
            n = a.a.parseColor(r.get("color")),
            i = m(r.get("width"), 1),
            o = m(r.get("opacity"), 1);
          return n[3] *= o, {
            color: n,
            lineWidth: i
          }
        }
        var n = this._model.coordinateSystem,
          i = n.dataToPoint(e),
          o = this._axisPointerLineMesh,
          s = o.geometry,
          l = this._model.getModel("axisPointer"),
          h = this._api.getDevicePixelRatio();
        s.convertToDynamicArray(!0);
        for (var c = 0; c < this._faces.length; c++) {
          var d = this._faces[c];
          if (!d.rootNode.invisible) {
            for (var f = d.faceInfo, p = f[3] < 0 ? n.getAxis(f[2]).getExtentMin() : n.getAxis(f[2]).getExtentMax(), _ = g[f[2]], v = 0; v < 2; v++) {
              var y = f[v],
                x = f[1 - v],
                T = n.getAxis(y),
                b = n.getAxis(x);
              if (t(T)) {
                var w = [0, 0, 0],
                  E = [0, 0, 0],
                  S = g[y],
                  A = g[x];
                w[S] = E[S] = i[S], w[_] = E[_] = p, w[A] = b.getExtentMin(), E[A] = b.getExtentMax();
                var M = r(T);
                s.addLine(w, E, M.color, M.lineWidth * h)
              }
            }
            if (t(n.getAxis(f[2]))) {
              var w = i.slice(),
                E = i.slice();
              E[_] = p;
              var M = r(n.getAxis(f[2]));
              s.addLine(w, E, M.color, M.lineWidth * h)
            }
          }
        }
        s.convertToTypedArray(), this._updateAxisPointerLabelsMesh(e), this._api.getZr().refresh()
      },
      _updateAxisPointerLabelsMesh: function (e) {
        var t = this._model,
          r = this._axisPointerLabelsMesh,
          n = this._axisPointerLabelsSurface,
          a = t.coordinateSystem,
          o = t.getModel("axisPointer");
        r.geometry.convertToDynamicArray(!0), n.clear();
        var s = {
          x: "y",
          y: "x",
          z: "y"
        };
        this._axes.forEach(function (t, u) {
          var l = a.getAxis(t.dim),
            h = l.model,
            c = h.getModel("axisPointer", o),
            d = c.getModel("label"),
            f = c.get("lineStyle.color");
          if (d.get("show") && c.get("show")) {
            var p = e[u],
              m = d.get("formatter"),
              _ = l.scale.getLabel(p);
            if (null != m) _ = m(_, e);
            else if ("interval" === l.scale.type || "log" === l.scale.type) {
              var v = i.a.number.getPrecisionSafe(l.scale.getTicks()[0]);
              _ = p.toFixed(v + 2)
            }
            var y = d.getModel("textStyle"),
              x = y.get("color"),
              T = new i.a.graphic.Text;
            i.a.graphic.setTextStyle(T.style, y, {
              text: _,
              textFill: x || f,
              textAlign: "left",
              textVerticalAlign: "top"
            });
            var b = n.add(T),
              w = T.getBoundingRect(),
              E = this._api.getDevicePixelRatio(),
              S = t.rootNode.position.toArray();
            S[g[s[t.dim]]] += (t.flipped ? -1 : 1) * d.get("margin"), S[g[t.dim]] = l.dataToCoord(e[u]), r.geometry.addSprite(S, [w.width * E, w.height * E], b, t.textAlign, t.textVerticalAlign)
          }
        }, this), n.getZr().refreshImmediately(), r.material.set("uvScale", n.getCoordsScale()), r.geometry.convertToTypedArray()
      },
      dispose: function () {
        this.groupGL.removeAll(), this._control.dispose()
      }
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(70),
      i = r(12),
      a = r(33),
      o = r(78),
      s = r(79),
      u = r(34),
      l = r(21),
      h = r(55);
    t.a = {
      vec2: n.a,
      vec3: i.a,
      vec4: a.a,
      mat2: o.a,
      mat2d: s.a,
      mat3: u.a,
      mat4: l.a,
      quat: h.a
    }
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r, n) {
      var i = [0, 0, 0],
        a = n < 0 ? r.getExtentMin() : r.getExtentMax();
      i[d[r.dim]] = a, e.position.setArray(i), e.rotation.identity(), t.distance = -Math.abs(a), t.normal.set(0, 0, 0), "x" === r.dim ? (e.rotation.rotateY(n * Math.PI / 2), t.normal.x = -n) : "z" === r.dim ? (e.rotation.rotateX(-n * Math.PI / 2), t.normal.y = -n) : (n > 0 && e.rotation.rotateY(Math.PI), t.normal.z = -n)
    }

    function i(e, t, r) {
      this.rootNode = new s.a.Node;
      var n = new s.a.Mesh({
          geometry: new l.a({
            useNativeLine: !1
          }),
          material: t,
          castShadow: !1,
          ignorePicking: !0,
          $ignorePicking: !0,
          renderOrder: 1
        }),
        i = new s.a.Mesh({
          geometry: new h.a,
          material: r,
          castShadow: !1,
          culling: !1,
          ignorePicking: !0,
          $ignorePicking: !0,
          renderOrder: 0
        });
      this.rootNode.add(i), this.rootNode.add(n), this.faceInfo = e, this.plane = new s.a.Plane, this.linesMesh = n, this.quadsMesh = i
    }
    var a = r(0),
      o = r.n(a),
      s = r(1),
      u = r(2),
      l = r(25),
      h = r(163),
      c = u.a.firstNotNull,
      d = {
        x: 0,
        y: 2,
        z: 1
      };
    i.prototype.update = function (e, t, r) {
      var i = e.coordinateSystem,
        a = [i.getAxis(this.faceInfo[0]), i.getAxis(this.faceInfo[1])],
        o = this.linesMesh.geometry,
        s = this.quadsMesh.geometry;
      o.convertToDynamicArray(!0), s.convertToDynamicArray(!0), this._updateSplitLines(o, a, e, r), this._udpateSplitAreas(s, a, e, r), o.convertToTypedArray(), s.convertToTypedArray();
      var u = i.getAxis(this.faceInfo[2]);
      n(this.rootNode, this.plane, u, this.faceInfo[3])
    }, i.prototype._updateSplitLines = function (e, t, r, n) {
      var i = n.getDevicePixelRatio();
      t.forEach(function (n, a) {
        var u = n.model,
          l = t[1 - a].getExtent();
        if (!n.scale.isBlank()) {
          var h = u.getModel("splitLine", r.getModel("splitLine"));
          if (h.get("show")) {
            var d = h.getModel("lineStyle"),
              f = d.get("color"),
              p = c(d.get("opacity"), 1),
              m = c(d.get("width"), 1);
            f = o.a.util.isArray(f) ? f : [f];
            for (var g = n.getTicksCoords({
                tickModel: h
              }), _ = 0, v = 0; v < g.length; v++) {
              var y = g[v].coord,
                x = s.a.parseColor(f[_ % f.length]);
              x[3] *= p;
              var T = [0, 0, 0],
                b = [0, 0, 0];
              T[a] = b[a] = y, T[1 - a] = l[0], b[1 - a] = l[1], e.addLine(T, b, x, m * i), _++
            }
          }
        }
      })
    }, i.prototype._udpateSplitAreas = function (e, t, r, n) {
      t.forEach(function (n, i) {
        var a = n.model,
          u = t[1 - i].getExtent();
        if (!n.scale.isBlank()) {
          var l = a.getModel("splitArea", r.getModel("splitArea"));
          if (l.get("show")) {
            var h = l.getModel("areaStyle"),
              d = h.get("color"),
              f = c(h.get("opacity"), 1);
            d = o.a.util.isArray(d) ? d : [d];
            for (var p = n.getTicksCoords({
                tickModel: l,
                clamp: !0
              }), m = 0, g = [0, 0, 0], _ = [0, 0, 0], v = 0; v < p.length; v++) {
              var y = p[v].coord,
                x = [0, 0, 0],
                T = [0, 0, 0];
              if (x[i] = T[i] = y, x[1 - i] = u[0], T[1 - i] = u[1], 0 !== v) {
                var b = s.a.parseColor(d[m % d.length]);
                b[3] *= f, e.addQuad([g, x, T, _], b), g = x, _ = T, m++
              } else g = x, _ = T
            }
          }
        }
      })
    }, t.a = i
  }, function (e, t, r) {
    "use strict";
    var n = r(15),
      i = r(0),
      a = r.n(i),
      o = r(38),
      s = r(6),
      u = s.a.vec3,
      l = n.a.extend(function () {
        return {
          segmentScale: 1,
          useNativeLine: !0,
          attributes: {
            position: new n.a.Attribute("position", "float", 3, "POSITION"),
            normal: new n.a.Attribute("normal", "float", 3, "NORMAL"),
            color: new n.a.Attribute("color", "float", 4, "COLOR")
          }
        }
      }, {
        resetOffset: function () {
          this._vertexOffset = 0, this._faceOffset = 0
        },
        setQuadCount: function (e) {
          var t = this.attributes,
            r = this.getQuadVertexCount() * e,
            n = this.getQuadTriangleCount() * e;
          this.vertexCount !== r && (t.position.init(r), t.normal.init(r), t.color.init(r)), this.triangleCount !== n && (this.indices = r > 65535 ? new Uint32Array(3 * n) : new Uint16Array(3 * n))
        },
        getQuadVertexCount: function () {
          return 4
        },
        getQuadTriangleCount: function () {
          return 2
        },
        addQuad: function () {
          var e = u.create(),
            t = u.create(),
            r = u.create(),
            n = [0, 3, 1, 3, 2, 1];
          return function (i, a) {
            var o = this.attributes.position,
              s = this.attributes.normal,
              l = this.attributes.color;
            u.sub(e, i[1], i[0]), u.sub(t, i[2], i[1]), u.cross(r, e, t), u.normalize(r, r);
            for (var h = 0; h < 4; h++) o.set(this._vertexOffset + h, i[h]), l.set(this._vertexOffset + h, a), s.set(this._vertexOffset + h, r);
            for (var c = 3 * this._faceOffset, h = 0; h < 6; h++) this.indices[c + h] = n[h] + this._vertexOffset;
            this._vertexOffset += 4, this._faceOffset += 2
          }
        }()
      });
    a.a.util.defaults(l.prototype, o.a), t.a = l
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      var r = new o.a.Mesh({
          geometry: new s.a({
            useNativeLine: !1
          }),
          material: t,
          castShadow: !1,
          ignorePicking: !0,
          renderOrder: 2
        }),
        n = new l.a;
      n.material.depthMask = !1;
      var i = new o.a.Node;
      i.add(r), i.add(n), this.rootNode = i, this.dim = e, this.linesMesh = r, this.labelsMesh = n, this.axisLineCoords = null, this.labelElements = []
    }
    var i = r(0),
      a = r.n(i),
      o = r(1),
      s = r(25),
      u = r(2),
      l = r(63),
      h = u.a.firstNotNull,
      c = {
        x: 0,
        y: 2,
        z: 1
      },
      d = {
        x: "y",
        y: "x",
        z: "y"
      };
    n.prototype.update = function (e, t, r) {
      var n = e.coordinateSystem,
        i = n.getAxis(this.dim),
        s = this.linesMesh.geometry,
        u = this.labelsMesh.geometry;
      s.convertToDynamicArray(!0), u.convertToDynamicArray(!0);
      var l = i.model,
        f = i.getExtent(),
        p = r.getDevicePixelRatio(),
        m = l.getModel("axisLine", e.getModel("axisLine")),
        g = l.getModel("axisTick", e.getModel("axisTick")),
        _ = l.getModel("axisLabel", e.getModel("axisLabel")),
        v = m.get("lineStyle.color");
      if (m.get("show")) {
        var y = m.getModel("lineStyle"),
          x = [0, 0, 0],
          T = [0, 0, 0],
          b = c[i.dim];
        x[b] = f[0], T[b] = f[1], this.axisLineCoords = [x, T];
        var w = o.a.parseColor(v),
          E = h(y.get("width"), 1),
          S = h(y.get("opacity"), 1);
        w[3] *= S, s.addLine(x, T, w, E * p)
      }
      if (g.get("show")) {
        var A = g.getModel("lineStyle"),
          M = o.a.parseColor(h(A.get("color"), v)),
          E = h(A.get("width"), 1);
        M[3] *= h(A.get("opacity"), 1);
        for (var C = i.getTicksCoords(), L = g.get("length"), D = 0; D < C.length; D++) {
          var N = C[D].coord,
            x = [0, 0, 0],
            T = [0, 0, 0],
            b = c[i.dim],
            R = c[d[i.dim]];
          x[b] = T[b] = N, T[R] = L, s.addLine(x, T, M, E * p)
        }
      }
      this.labelElements = [];
      var p = r.getDevicePixelRatio();
      if (_.get("show"))
        for (var C = i.getTicksCoords(), P = l.get("data"), I = _.get("margin"), O = i.getViewLabels(), D = 0; D < O.length; D++) {
          var F = O[D].tickValue,
            B = O[D].formattedLabel,
            U = O[D].rawLabel,
            N = i.dataToCoord(F),
            z = [0, 0, 0],
            b = c[i.dim],
            R = c[d[i.dim]];
          z[b] = z[b] = N, z[R] = I;
          var G = _;
          P && P[F] && P[F].textStyle && (G = new a.a.Model(P[F].textStyle, _, l.ecModel));
          var H = h(G.get("color"), v),
            V = new a.a.graphic.Text;
          a.a.graphic.setTextStyle(V.style, G, {
            text: B,
            textFill: "function" == typeof H ? H("category" === i.type ? U : "value" === i.type ? F + "" : F, D) : H,
            textVerticalAlign: "top",
            textAlign: "left"
          });
          var k = t.add(V),
            W = V.getBoundingRect();
          u.addSprite(z, [W.width * p, W.height * p], k), this.labelElements.push(V)
        }
      if (l.get("name")) {
        var j = l.getModel("nameTextStyle"),
          z = [0, 0, 0],
          b = c[i.dim],
          R = c[d[i.dim]],
          X = h(j.get("color"), v),
          q = j.get("borderColor"),
          E = j.get("borderWidth");
        z[b] = z[b] = (f[0] + f[1]) / 2, z[R] = l.get("nameGap");
        var V = new a.a.graphic.Text;
        a.a.graphic.setTextStyle(V.style, j, {
          text: l.get("name"),
          textFill: X,
          textStroke: q,
          lineWidth: E
        });
        var k = t.add(V),
          W = V.getBoundingRect();
        u.addSprite(z, [W.width * p, W.height * p], k), V.__idx = this.labelElements.length, this.nameLabelElement = V
      }
      this.labelsMesh.material.set("textureAtlas", t.getTexture()), this.labelsMesh.material.set("uvScale", t.getCoordsScale()), s.convertToTypedArray(), u.convertToTypedArray()
    }, n.prototype.setSpriteAlign = function (e, t, r) {
      for (var n = r.getDevicePixelRatio(), i = this.labelsMesh.geometry, a = 0; a < this.labelElements.length; a++) {
        var o = this.labelElements[a],
          s = o.getBoundingRect();
        i.setSpriteAlign(a, [s.width * n, s.height * n], e, t)
      }
      var u = this.nameLabelElement;
      if (u) {
        var s = u.getBoundingRect();
        i.setSpriteAlign(u.__idx, [s.width * n, s.height * n], e, t), i.dirty()
      }
      this.textAlign = e, this.textVerticalAlign = t
    }, t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(15),
      o = r(38),
      s = [0, 1, 2, 0, 2, 3],
      u = a.a.extend(function () {
        return {
          attributes: {
            position: new a.a.Attribute("position", "float", 3, "POSITION"),
            texcoord: new a.a.Attribute("texcoord", "float", 2, "TEXCOORD_0"),
            offset: new a.a.Attribute("offset", "float", 2),
            color: new a.a.Attribute("color", "float", 4, "COLOR")
          }
        }
      }, {
        resetOffset: function () {
          this._vertexOffset = 0, this._faceOffset = 0
        },
        setSpriteCount: function (e) {
          this._spriteCount = e;
          var t = 4 * e,
            r = 2 * e;
          this.vertexCount !== t && (this.attributes.position.init(t), this.attributes.offset.init(t), this.attributes.color.init(t)), this.triangleCount !== r && (this.indices = t > 65535 ? new Uint32Array(3 * r) : new Uint16Array(3 * r))
        },
        setSpriteAlign: function (e, t, r, n, i) {
          null == r && (r = "left"), null == n && (n = "top");
          var a, o, s, u;
          switch (i = i || 0, r) {
            case "left":
              a = i, s = t[0] + i;
              break;
            case "center":
            case "middle":
              a = -t[0] / 2, s = t[0] / 2;
              break;
            case "right":
              a = -t[0] - i, s = -i
          }
          switch (n) {
            case "bottom":
              o = i, u = t[1] + i;
              break;
            case "middle":
              o = -t[1] / 2, u = t[1] / 2;
              break;
            case "top":
              o = -t[1] - i, u = -i
          }
          var l = 4 * e,
            h = this.attributes.offset;
          h.set(l, [a, u]), h.set(l + 1, [s, u]), h.set(l + 2, [s, o]), h.set(l + 3, [a, o])
        },
        addSprite: function (e, t, r, n, i, a) {
          var o = this._vertexOffset;
          this.setSprite(this._vertexOffset / 4, e, t, r, n, i, a);
          for (var u = 0; u < s.length; u++) this.indices[3 * this._faceOffset + u] = s[u] + o;
          return this._faceOffset += 2, this._vertexOffset += 4, o / 4
        },
        setSprite: function (e, t, r, n, i, a, o) {
          for (var s = 4 * e, u = this.attributes, l = 0; l < 4; l++) u.position.set(s + l, t);
          var h = u.texcoord;
          h.set(s, [n[0][0], n[0][1]]), h.set(s + 1, [n[1][0], n[0][1]]), h.set(s + 2, [n[1][0], n[1][1]]), h.set(s + 3, [n[0][0], n[1][1]]), this.setSpriteAlign(e, r, i, a, o)
        }
      });
    i.a.util.defaults(u.prototype, o.a), t.a = u
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.labels.vertex\n\nattribute vec3 position: POSITION;\nattribute vec2 texcoord: TEXCOORD_0;\nattribute vec2 offset;\n#ifdef VERTEX_COLOR\nattribute vec4 a_Color : COLOR;\nvarying vec4 v_Color;\n#endif\n\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform vec4 viewport : VIEWPORT;\n\nvarying vec2 v_Texcoord;\n\nvoid main()\n{\n vec4 proj = worldViewProjection * vec4(position, 1.0);\n\n vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;\n\n screen += offset;\n\n proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);\n gl_Position = proj;\n#ifdef VERTEX_COLOR\n v_Color = a_Color;\n#endif\n v_Texcoord = texcoord;\n}\n@end\n\n\n@export ecgl.labels.fragment\n\nuniform vec3 color : [1.0, 1.0, 1.0];\nuniform float alpha : 1.0;\nuniform sampler2D textureAtlas;\nuniform vec2 uvScale: [1.0, 1.0];\n\n#ifdef VERTEX_COLOR\nvarying vec4 v_Color;\n#endif\nvarying float v_Miter;\n\nvarying vec2 v_Texcoord;\n\nvoid main()\n{\n gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);\n#ifdef VERTEX_COLOR\n gl_FragColor *= v_Color;\n#endif\n}\n\n@end"
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      var r = e.getBoxLayoutParams(),
        n = h.a.getLayoutRect(r, {
          width: t.getWidth(),
          height: t.getHeight()
        });
      n.y = t.getHeight() - n.y - n.height, this.viewGL.setViewport(n.x, n.y, n.width, n.height, t.getDevicePixelRatio());
      var i = e.get("boxWidth"),
        a = e.get("boxHeight"),
        o = e.get("boxDepth");
      this.getAxis("x").setExtent(-i / 2, i / 2), this.getAxis("y").setExtent(o / 2, -o / 2), this.getAxis("z").setExtent(-a / 2, a / 2), this.size = [i, a, o]
    }

    function i(e, t) {
      function r(e, t) {
        n[e] = n[e] || [1 / 0, -1 / 0], n[e][0] = Math.min(t[0], n[e][0]), n[e][1] = Math.max(t[1], n[e][1])
      }
      var n = {};
      e.eachSeries(function (e) {
        if (e.coordinateSystem === this) {
          var t = e.getData();
          ["x", "y", "z"].forEach(function (e) {
            t.mapDimension(e, !0).forEach(function (n) {
              r(e, t.getDataExtent(n, !0))
            })
          })
        }
      }, this), ["xAxis3D", "yAxis3D", "zAxis3D"].forEach(function (t) {
        e.eachComponent(t, function (e) {
          var r = t.charAt(0),
            i = e.getReferringComponents("grid3D")[0],
            a = i.coordinateSystem;
          if (a === this) {
            var s = a.getAxis(r);
            if (!s) {
              var l = u.a.helper.createScale(n[r] || [1 / 0, -1 / 0], e);
              s = new o.a(r, l), s.type = e.get("type");
              var h = "category" === s.type;
              s.onBand = h && e.get("boundaryGap"), s.inverse = e.get("inverse"), e.axis = s, s.model = e, s.getLabelModel = function () {
                return e.getModel("axisLabel", i.getModel("axisLabel"))
              }, s.getTickModel = function () {
                return e.getModel("axisTick", i.getModel("axisTick"))
              }, a.addAxis(s)
            }
          }
        }, this)
      }, this), this.resize(this.model, t)
    }
    var a = r(168),
      o = r(170),
      s = r(0),
      u = r.n(s),
      l = r(47),
      h = r.n(l),
      c = r(22),
      d = (r(2), {
        dimensions: a.a.prototype.dimensions,
        create: function (e, t) {
          function r(e, t) {
            return s.map(function (r) {
              var n = e.getReferringComponents(r)[0];
              return null == n && (n = t.getComponent(r)), n
            })
          }
          var o = [];
          e.eachComponent("grid3D", function (e) {
            e.__viewGL = e.__viewGL || new c.a;
            var t = new a.a;
            t.model = e, t.viewGL = e.__viewGL, e.coordinateSystem = t, o.push(t), t.resize = n, t.update = i
          });
          var s = ["xAxis3D", "yAxis3D", "zAxis3D"];
          return e.eachSeries(function (t) {
            if ("cartesian3D" === t.get("coordinateSystem")) {
              var n = t.getReferringComponents("grid3D")[0];
              if (null == n) {
                var i = r(t, e),
                  n = i[0].getCoordSysModel();
                i.forEach(function (e) {
                  e.getCoordSysModel()
                })
              }
              var a = n.coordinateSystem;
              t.coordinateSystem = a
            }
          }), o
        }
      });
    u.a.registerCoordinateSystem("grid3D", d)
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      s.a.call(this, e), this.size = [0, 0, 0]
    }
    var i = r(0),
      a = r.n(i),
      o = r(169),
      s = r.n(o);
    n.prototype = {
      constructor: n,
      type: "cartesian3D",
      dimensions: ["x", "y", "z"],
      model: null,
      containPoint: function (e) {
        return this.getAxis("x").contain(e[0]) && this.getAxis("y").contain(e[2]) && this.getAxis("z").contain(e[1])
      },
      containData: function (e) {
        return this.getAxis("x").containData(e[0]) && this.getAxis("y").containData(e[1]) && this.getAxis("z").containData(e[2])
      },
      dataToPoint: function (e, t, r) {
        return t = t || [], t[0] = this.getAxis("x").dataToCoord(e[0], r), t[2] = this.getAxis("y").dataToCoord(e[1], r), t[1] = this.getAxis("z").dataToCoord(e[2], r), t
      },
      pointToData: function (e, t, r) {
        return t = t || [], t[0] = this.getAxis("x").coordToData(e[0], r), t[1] = this.getAxis("y").coordToData(e[2], r), t[2] = this.getAxis("z").coordToData(e[1], r), t
      }
    }, a.a.util.inherits(n, s.a), t.a = n
  }, function (e, t, r) {
    function n(e) {
      return this._axes[e]
    }
    var i = r(13),
      a = function (e) {
        this._axes = {}, this._dimList = [], this.name = e || ""
      };
    a.prototype = {
      constructor: a,
      type: "cartesian",
      getAxis: function (e) {
        return this._axes[e]
      },
      getAxes: function () {
        return i.map(this._dimList, n, this)
      },
      getAxesByScale: function (e) {
        return e = e.toLowerCase(), i.filter(this.getAxes(), function (t) {
          return t.scale.type === e
        })
      },
      addAxis: function (e) {
        var t = e.dim;
        this._axes[t] = e, this._dimList.push(t)
      },
      dataToCoord: function (e) {
        return this._dataCoordConvert(e, "dataToCoord")
      },
      coordToData: function (e) {
        return this._dataCoordConvert(e, "coordToData")
      },
      _dataCoordConvert: function (e, t) {
        for (var r = this._dimList, n = e instanceof Array ? [] : {}, i = 0; i < r.length; i++) {
          var a = r[i],
            o = this._axes[a];
          n[a] = o[t](e[a])
        }
        return n
      }
    };
    var o = a;
    e.exports = o
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r) {
      a.a.Axis.call(this, e, t, r)
    }
    var i = r(0),
      a = r.n(i);
    n.prototype = {
      constructor: n,
      getExtentMin: function () {
        var e = this._extent;
        return Math.min(e[0], e[1])
      },
      getExtentMax: function () {
        var e = this._extent;
        return Math.max(e[0], e[1])
      },
      calculateCategoryInterval: function () {
        return Math.floor(this.scale.count() / 8)
      }
    }, a.a.util.inherits(n, a.a.Axis), t.a = n
  }, function (e, t, r) {
    function n(e) {
      return isNaN(e) ? "-" : (e = (e + "").split("."), e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (e.length > 1 ? "." + e[1] : ""))
    }

    function i(e, t) {
      return e = (e || "").toLowerCase().replace(/-(.)/g, function (e, t) {
        return t.toUpperCase()
      }), t && e && (e = e.charAt(0).toUpperCase() + e.slice(1)), e
    }

    function a(e) {
      return null == e ? "" : (e + "").replace(g, function (e, t) {
        return _[t]
      })
    }

    function o(e, t, r) {
      d.isArray(t) || (t = [t]);
      var n = t.length;
      if (!n) return "";
      for (var i = t[0].$vars || [], o = 0; o < i.length; o++) {
        var s = v[o];
        e = e.replace(y(s), y(s, 0))
      }
      for (var u = 0; u < n; u++)
        for (var l = 0; l < i.length; l++) {
          var h = t[u][i[l]];
          e = e.replace(y(v[l], u), r ? a(h) : h)
        }
      return e
    }

    function s(e, t, r) {
      return d.each(t, function (t, n) {
        e = e.replace("{" + n + "}", r ? a(t) : t)
      }), e
    }

    function u(e, t) {
      e = d.isString(e) ? {
        color: e,
        extraCssText: t
      } : e || {};
      var r = e.color,
        n = e.type,
        t = e.extraCssText;
      return r ? "subItem" === n ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + a(r) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + a(r) + ";" + (t || "") + '"></span>' : ""
    }

    function l(e, t) {
      return e += "", "0000".substr(0, t - e.length) + e
    }

    function h(e, t, r) {
      "week" !== e && "month" !== e && "quarter" !== e && "half-year" !== e && "year" !== e || (e = "MM-dd\nyyyy");
      var n = p.parseDate(t),
        i = r ? "UTC" : "",
        a = n["get" + i + "FullYear"](),
        o = n["get" + i + "Month"]() + 1,
        s = n["get" + i + "Date"](),
        u = n["get" + i + "Hours"](),
        h = n["get" + i + "Minutes"](),
        c = n["get" + i + "Seconds"](),
        d = n["get" + i + "Milliseconds"]();
      return e = e.replace("MM", l(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", l(s, 2)).replace("d", s).replace("hh", l(u, 2)).replace("h", u).replace("mm", l(h, 2)).replace("m", h).replace("ss", l(c, 2)).replace("s", c).replace("SSS", l(d, 3))
    }

    function c(e) {
      return e ? e.charAt(0).toUpperCase() + e.substr(1) : e
    }
    var d = r(13),
      f = r(172),
      p = r(85),
      m = d.normalizeCssArray,
      g = /([&<>"'])/g,
      _ = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      },
      v = ["a", "b", "c", "d", "e", "f", "g"],
      y = function (e, t) {
        return "{" + e + (null == t ? "" : t) + "}"
      },
      x = f.truncateText,
      T = f.getBoundingRect;
    t.addCommas = n, t.toCamelCase = i, t.normalizeCssArray = m, t.encodeHTML = a, t.formatTpl = o, t.formatTplSimple = s, t.getTooltipMarker = u, t.formatTime = h, t.capitalFirst = c, t.truncateText = x, t.getTextRect = T
  }, function (e, t, r) {
    function n(e, t) {
      I[e] = t
    }

    function i(e, t) {
      t = t || P;
      var r = e + ":" + t;
      if (L[r]) return L[r];
      for (var n = (e + "").split("\n"), i = 0, a = 0, o = n.length; a < o; a++) i = Math.max(g(n[a], t).width, i);
      return D > N && (D = 0, L = {}), D++, L[r] = i, i
    }

    function a(e, t, r, n, i, a, u) {
      return a ? s(e, t, r, n, i, a, u) : o(e, t, r, n, i, u)
    }

    function o(e, t, r, n, a, o) {
      var s = _(e, t, a, o),
        h = i(e, t);
      a && (h += a[1] + a[3]);
      var c = s.outerHeight,
        d = u(0, h, r),
        f = l(0, c, n),
        p = new T(d, f, h, c);
      return p.lineHeight = s.lineHeight, p
    }

    function s(e, t, r, n, i, a, o) {
      var s = v(e, {
          rich: a,
          truncate: o,
          font: t,
          textAlign: r,
          textPadding: i
        }),
        h = s.outerWidth,
        c = s.outerHeight,
        d = u(0, h, r),
        f = l(0, c, n);
      return new T(d, f, h, c)
    }

    function u(e, t, r) {
      return "right" === r ? e -= t : "center" === r && (e -= t / 2), e
    }

    function l(e, t, r) {
      return "middle" === r ? e -= t / 2 : "bottom" === r && (e -= t), e
    }

    function h(e, t, r) {
      var n = t.x,
        i = t.y,
        a = t.height,
        o = t.width,
        s = a / 2,
        u = "left",
        l = "top";
      switch (e) {
        case "left":
          n -= r, i += s, u = "right", l = "middle";
          break;
        case "right":
          n += r + o, i += s, l = "middle";
          break;
        case "top":
          n += o / 2, i -= r, u = "center", l = "bottom";
          break;
        case "bottom":
          n += o / 2, i += a + r, u = "center";
          break;
        case "inside":
          n += o / 2, i += s, u = "center", l = "middle";
          break;
        case "insideLeft":
          n += r, i += s, l = "middle";
          break;
        case "insideRight":
          n += o - r, i += s, u = "right", l = "middle";
          break;
        case "insideTop":
          n += o / 2, i += r, u = "center";
          break;
        case "insideBottom":
          n += o / 2, i += a - r, u = "center", l = "bottom";
          break;
        case "insideTopLeft":
          n += r, i += r;
          break;
        case "insideTopRight":
          n += o - r, i += r, u = "right";
          break;
        case "insideBottomLeft":
          n += r, i += a - r, l = "bottom";
          break;
        case "insideBottomRight":
          n += o - r, i += a - r, u = "right", l = "bottom"
      }
      return {
        x: n,
        y: i,
        textAlign: u,
        textVerticalAlign: l
      }
    }

    function c(e, t, r, n, i) {
      if (!t) return "";
      var a = (e + "").split("\n");
      i = d(t, r, n, i);
      for (var o = 0, s = a.length; o < s; o++) a[o] = f(a[o], i);
      return a.join("\n")
    }

    function d(e, t, r, n) {
      n = S({}, n), n.font = t;
      var r = A(r, "...");
      n.maxIterations = A(n.maxIterations, 2);
      var a = n.minChar = A(n.minChar, 0);
      n.cnCharWidth = i("国", t);
      var o = n.ascCharWidth = i("a", t);
      n.placeholder = A(n.placeholder, "");
      for (var s = e = Math.max(0, e - 1), u = 0; u < a && s >= o; u++) s -= o;
      var l = i(r);
      return l > s && (r = "", l = 0), s = e - l, n.ellipsis = r, n.ellipsisWidth = l, n.contentWidth = s, n.containerWidth = e, n
    }

    function f(e, t) {
      var r = t.containerWidth,
        n = t.font,
        a = t.contentWidth;
      if (!r) return "";
      var o = i(e, n);
      if (o <= r) return e;
      for (var s = 0;; s++) {
        if (o <= a || s >= t.maxIterations) {
          e += t.ellipsis;
          break
        }
        var u = 0 === s ? p(e, a, t.ascCharWidth, t.cnCharWidth) : o > 0 ? Math.floor(e.length * a / o) : 0;
        e = e.substr(0, u), o = i(e, n)
      }
      return "" === e && (e = t.placeholder), e
    }

    function p(e, t, r, n) {
      for (var i = 0, a = 0, o = e.length; a < o && i < t; a++) {
        var s = e.charCodeAt(a);
        i += 0 <= s && s <= 127 ? r : n
      }
      return a
    }

    function m(e) {
      return i("国", e)
    }

    function g(e, t) {
      return I.measureText(e, t)
    }

    function _(e, t, r, n) {
      null != e && (e += "");
      var i = m(t),
        a = e ? e.split("\n") : [],
        o = a.length * i,
        s = o;
      if (r && (s += r[0] + r[2]), e && n) {
        var u = n.outerHeight,
          l = n.outerWidth;
        if (null != u && s > u) e = "", a = [];
        else if (null != l)
          for (var h = d(l - (r ? r[1] + r[3] : 0), t, n.ellipsis, {
              minChar: n.minChar,
              placeholder: n.placeholder
            }), c = 0, p = a.length; c < p; c++) a[c] = f(a[c], h)
      }
      return {
        lines: a,
        height: o,
        outerHeight: s,
        lineHeight: i
      }
    }

    function v(e, t) {
      var r = {
        lines: [],
        width: 0,
        height: 0
      };
      if (null != e && (e += ""), !e) return r;
      for (var n, a = R.lastIndex = 0; null != (n = R.exec(e));) {
        var o = n.index;
        o > a && y(r, e.substring(a, o)), y(r, n[2], n[1]), a = R.lastIndex
      }
      a < e.length && y(r, e.substring(a, e.length));
      var s = r.lines,
        u = 0,
        l = 0,
        h = [],
        d = t.textPadding,
        f = t.truncate,
        p = f && f.outerWidth,
        g = f && f.outerHeight;
      d && (null != p && (p -= d[1] + d[3]), null != g && (g -= d[0] + d[2]));
      for (var _ = 0; _ < s.length; _++) {
        for (var v = s[_], x = 0, T = 0, w = 0; w < v.tokens.length; w++) {
          var E = v.tokens[w],
            S = E.styleName && t.rich[E.styleName] || {},
            C = E.textPadding = S.textPadding,
            L = E.font = S.font || t.font,
            D = E.textHeight = A(S.textHeight, m(L));
          if (C && (D += C[0] + C[2]), E.height = D, E.lineHeight = M(S.textLineHeight, t.textLineHeight, D), E.textAlign = S && S.textAlign || t.textAlign, E.textVerticalAlign = S && S.textVerticalAlign || "middle", null != g && u + E.lineHeight > g) return {
            lines: [],
            width: 0,
            height: 0
          };
          E.textWidth = i(E.text, L);
          var N = S.textWidth,
            P = null == N || "auto" === N;
          if ("string" == typeof N && "%" === N.charAt(N.length - 1)) E.percentWidth = N, h.push(E), N = 0;
          else {
            if (P) {
              N = E.textWidth;
              var I = S.textBackgroundColor,
                O = I && I.image;
              O && (O = b.findExistImage(O), b.isImageReady(O) && (N = Math.max(N, O.width * D / O.height)))
            }
            var F = C ? C[1] + C[3] : 0;
            N += F;
            var B = null != p ? p - T : null;
            null != B && B < N && (!P || B < F ? (E.text = "", E.textWidth = N = 0) : (E.text = c(E.text, B - F, L, f.ellipsis, {
              minChar: f.minChar
            }), E.textWidth = i(E.text, L), N = E.textWidth + F))
          }
          T += E.width = N, S && (x = Math.max(x, E.lineHeight))
        }
        v.width = T, v.lineHeight = x, u += x, l = Math.max(l, T)
      }
      r.outerWidth = r.width = A(t.textWidth, l), r.outerHeight = r.height = A(t.textHeight, u), d && (r.outerWidth += d[1] + d[3], r.outerHeight += d[0] + d[2]);
      for (var _ = 0; _ < h.length; _++) {
        var E = h[_],
          U = E.percentWidth;
        E.width = parseInt(U, 10) / 100 * l
      }
      return r
    }

    function y(e, t, r) {
      for (var n = "" === t, i = t.split("\n"), a = e.lines, o = 0; o < i.length; o++) {
        var s = i[o],
          u = {
            styleName: r,
            text: s,
            isLineHolder: !s && !n
          };
        if (o) a.push({
          tokens: [u]
        });
        else {
          var l = (a[a.length - 1] || (a[0] = {
              tokens: []
            })).tokens,
            h = l.length;
          1 === h && l[0].isLineHolder ? l[0] = u : (s || !h || n) && l.push(u)
        }
      }
    }

    function x(e) {
      var t = (e.fontSize || e.fontFamily) && [e.fontStyle, e.fontWeight, (e.fontSize || 12) + "px", e.fontFamily || "sans-serif"].join(" ");
      return t && C(t) || e.textFont || e.font
    }
    var T = r(82),
      b = r(173),
      w = r(13),
      E = w.getContext,
      S = w.extend,
      A = w.retrieve2,
      M = w.retrieve3,
      C = w.trim,
      L = {},
      D = 0,
      N = 5e3,
      R = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
      P = "12px sans-serif",
      I = {};
    I.measureText = function (e, t) {
      var r = E();
      return r.font = t || P, r.measureText(e)
    }, t.DEFAULT_FONT = P, t.$override = n, t.getWidth = i, t.getBoundingRect = a, t.adjustTextX = u, t.adjustTextY = l, t.adjustTextPositionOnRect = h, t.truncateText = c, t.getLineHeight = m, t.measureText = g, t.parsePlainText = _, t.parseRichText = v, t.makeFont = x
  }, function (e, t, r) {
    function n(e) {
      if ("string" == typeof e) {
        var t = u.get(e);
        return t && t.image
      }
      return e
    }

    function i(e, t, r, n, i) {
      if (e) {
        if ("string" == typeof e) {
          if (t && t.__zrImageSrc === e || !r) return t;
          var s = u.get(e),
            l = {
              hostEl: r,
              cb: n,
              cbPayload: i
            };
          return s ? (t = s.image, !o(t) && s.pending.push(l)) : (!t && (t = new Image), t.onload = a, u.put(e, t.__cachedImgObj = {
            image: t,
            pending: [l]
          }), t.src = t.__zrImageSrc = e), t
        }
        return e
      }
      return t
    }

    function a() {
      var e = this.__cachedImgObj;
      this.onload = this.__cachedImgObj = null;
      for (var t = 0; t < e.pending.length; t++) {
        var r = e.pending[t],
          n = r.cb;
        n && n(this, r.cbPayload), r.hostEl.dirty()
      }
      e.pending.length = 0
    }

    function o(e) {
      return e && e.width && e.height
    }
    var s = r(60),
      u = new s(50);
    t.findExistImage = n, t.createOrUpdateImage = i, t.isImageReady = o
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r) {
      if ("alphaMap" === r) return e.material.get("diffuseMap");
      if ("alphaCutoff" === r) {
        if (e.material.isDefined("fragment", "ALPHA_TEST") && e.material.get("diffuseMap")) {
          return e.material.get("alphaCutoff") || 0
        }
        return 0
      }
      return t.get(r)
    }

    function i(e, t) {
      var r = e.material,
        n = t.material;
      return r.get("diffuseMap") !== n.get("diffuseMap") || (r.get("alphaCutoff") || 0) !== (n.get("alphaCutoff") || 0)
    }
    var a = r(7),
      o = r(11),
      s = r(3),
      u = r(18),
      l = r(59),
      h = r(9),
      c = r(52),
      d = r(8),
      f = r(19),
      p = r(10),
      m = r(4),
      g = r(5),
      _ = r(27),
      v = r(41),
      y = r(37),
      x = r(16),
      T = r(86),
      b = r(21),
      w = r(175),
      E = ["px", "nx", "py", "ny", "pz", "nz"];
    d.a.import(w.a);
    var S = a.a.extend(function () {
      return {
        softShadow: S.PCF,
        shadowBlur: 1,
        lightFrustumBias: "auto",
        kernelPCF: new Float32Array([1, 0, 1, 1, -1, 1, 0, 1, -1, 0, -1, -1, 1, -1, 0, -1]),
        precision: "highp",
        _lastRenderNotCastShadow: !1,
        _frameBuffer: new p.a,
        _textures: {},
        _shadowMapNumber: {
          POINT_LIGHT: 0,
          DIRECTIONAL_LIGHT: 0,
          SPOT_LIGHT: 0
        },
        _depthMaterials: {},
        _distanceMaterials: {},
        _receivers: [],
        _lightsCastShadow: [],
        _lightCameras: {},
        _lightMaterials: {},
        _texturePool: new T.a
      }
    }, function () {
      this._gaussianPassH = new x.a({
        fragment: d.a.source("clay.compositor.gaussian_blur")
      }), this._gaussianPassV = new x.a({
        fragment: d.a.source("clay.compositor.gaussian_blur")
      }), this._gaussianPassH.setUniform("blurSize", this.shadowBlur), this._gaussianPassH.setUniform("blurDir", 0), this._gaussianPassV.setUniform("blurSize", this.shadowBlur), this._gaussianPassV.setUniform("blurDir", 1), this._outputDepthPass = new x.a({
        fragment: d.a.source("clay.sm.debug_depth")
      })
    }, {
      render: function (e, t, r, n) {
        r || (r = t.getMainCamera()), this.trigger("beforerender", this, e, t, r), this._renderShadowPass(e, t, r, n), this.trigger("afterrender", this, e, t, r)
      },
      renderDebug: function (e, t) {
        e.saveClear();
        var r = e.viewport,
          n = 0,
          i = t || r.width / 4,
          a = i;
        this.softShadow === S.VSM ? this._outputDepthPass.material.define("fragment", "USE_VSM") : this._outputDepthPass.material.undefine("fragment", "USE_VSM");
        for (var o in this._textures) {
          var s = this._textures[o];
          e.setViewport(n, 0, i * s.width / s.height, a), this._outputDepthPass.setUniform("depthMap", s), this._outputDepthPass.render(e), n += i * s.width / s.height
        }
        e.setViewport(r), e.restoreClear()
      },
      _updateReceivers: function (e, t) {
        if (t.receiveShadow ? (this._receivers.push(t), t.material.set("shadowEnabled", 1), t.material.set("pcfKernel", this.kernelPCF)) : t.material.set("shadowEnabled", 0), this.softShadow === S.VSM) t.material.define("fragment", "USE_VSM"), t.material.undefine("fragment", "PCF_KERNEL_SIZE");
        else {
          t.material.undefine("fragment", "USE_VSM");
          var r = this.kernelPCF;
          r && r.length ? t.material.define("fragment", "PCF_KERNEL_SIZE", r.length / 2) : t.material.undefine("fragment", "PCF_KERNEL_SIZE")
        }
      },
      _update: function (e, t) {
        var r = this;
        t.traverse(function (t) {
          t.isRenderable() && r._updateReceivers(e, t)
        });
        for (var n = 0; n < t.lights.length; n++) {
          var i = t.lights[n];
          i.castShadow && !i.invisible && this._lightsCastShadow.push(i)
        }
      },
      _renderShadowPass: function (e, t, r, n) {
        function i(e) {
          return e.height
        }
        for (var a in this._shadowMapNumber) this._shadowMapNumber[a] = 0;
        this._lightsCastShadow.length = 0, this._receivers.length = 0;
        var o = e.gl;
        if (n || t.update(), r && r.update(), t.updateLights(), this._update(e, t), this._lightsCastShadow.length || !this._lastRenderNotCastShadow) {
          this._lastRenderNotCastShadow = 0 === this._lightsCastShadow, o.enable(o.DEPTH_TEST), o.depthMask(!0), o.disable(o.BLEND), o.clearColor(1, 1, 1, 1);
          for (var s, u = [], l = [], h = [], c = [], d = [], f = [], p = 0; p < this._lightsCastShadow.length; p++) {
            var m = this._lightsCastShadow[p];
            if ("DIRECTIONAL_LIGHT" === m.type) {
              if (s) {
                console.warn("Only one direectional light supported with shadow cascade");
                continue
              }
              if (m.shadowCascade > 4) {
                console.warn("Support at most 4 cascade");
                continue
              }
              m.shadowCascade > 1 && (s = m), this.renderDirectionalLightShadow(e, t, r, m, d, c, h)
            } else "SPOT_LIGHT" === m.type ? this.renderSpotLightShadow(e, t, m, l, u) : "POINT_LIGHT" === m.type && this.renderPointLightShadow(e, t, m, f);
            this._shadowMapNumber[m.type]++
          }
          for (var g in this._shadowMapNumber)
            for (var _ = this._shadowMapNumber[g], v = g + "_SHADOWMAP_COUNT", p = 0; p < this._receivers.length; p++) {
              var y = this._receivers[p],
                x = y.material;
              x.fragmentDefines[v] !== _ && (_ > 0 ? x.define("fragment", v, _) : x.isDefined("fragment", v) && x.undefine("fragment", v))
            }
          for (var p = 0; p < this._receivers.length; p++) {
            var y = this._receivers[p],
              x = y.material;
            s ? x.define("fragment", "SHADOW_CASCADE", s.shadowCascade) : x.undefine("fragment", "SHADOW_CASCADE")
          }
          var T = t.shadowUniforms;
          if (h.length > 0) {
            var b = h.map(i);
            if (T.directionalLightShadowMaps = {
                value: h,
                type: "tv"
              }, T.directionalLightMatrices = {
                value: c,
                type: "m4v"
              }, T.directionalLightShadowMapSizes = {
                value: b,
                type: "1fv"
              }, s) {
              var w = d.slice(),
                E = d.slice();
              w.pop(), E.shift(), w.reverse(), E.reverse(), c.reverse(), T.shadowCascadeClipsNear = {
                value: w,
                type: "1fv"
              }, T.shadowCascadeClipsFar = {
                value: E,
                type: "1fv"
              }
            }
          }
          if (u.length > 0) {
            var S = u.map(i),
              T = t.shadowUniforms;
            T.spotLightShadowMaps = {
              value: u,
              type: "tv"
            }, T.spotLightMatrices = {
              value: l,
              type: "m4v"
            }, T.spotLightShadowMapSizes = {
              value: S,
              type: "1fv"
            }
          }
          f.length > 0 && (T.pointLightShadowMaps = {
            value: f,
            type: "tv"
          })
        }
      },
      renderDirectionalLightShadow: function () {
        var e = new l.a,
          t = new h.a,
          r = new u.a,
          a = new h.a,
          o = new h.a,
          s = new h.a,
          d = new h.a;
        return function (u, l, f, p, m, g, _) {
          var y = this._getDepthMaterial(p),
            x = {
              getMaterial: function (e) {
                return e.shadowDepthMaterial || y
              },
              isMaterialChanged: i,
              getUniform: n,
              ifRender: function (e) {
                return e.castShadow
              },
              sortCompare: c.a.opaqueSortCompare
            };
          if (!l.viewBoundingBoxLastFrame.isFinite()) {
            var T = l.getBoundingBox();
            l.viewBoundingBoxLastFrame.copy(T).applyTransform(f.viewMatrix)
          }
          var w = Math.min(-l.viewBoundingBoxLastFrame.min.z, f.far),
            E = Math.max(-l.viewBoundingBoxLastFrame.max.z, f.near),
            A = this._getDirectionalLightCamera(p, l, f),
            M = s.array;
          d.copy(A.projectionMatrix), b.a.invert(o.array, A.worldTransform.array), b.a.multiply(o.array, o.array, f.worldTransform.array), b.a.multiply(M, d.array, o.array);
          for (var C = [], L = f instanceof v.a, D = (f.near + f.far) / (f.near - f.far), N = 2 * f.near * f.far / (f.near - f.far), R = 0; R <= p.shadowCascade; R++) {
            var P = E * Math.pow(w / E, R / p.shadowCascade),
              I = E + (w - E) * R / p.shadowCascade,
              O = P * p.cascadeSplitLogFactor + I * (1 - p.cascadeSplitLogFactor);
            C.push(O), m.push(-(-O * D + N) / -O)
          }
          var F = this._getTexture(p, p.shadowCascade);
          _.push(F);
          var B = u.viewport,
            U = u.gl;
          this._frameBuffer.attach(F), this._frameBuffer.bind(u), U.clear(U.COLOR_BUFFER_BIT | U.DEPTH_BUFFER_BIT);
          for (var R = 0; R < p.shadowCascade; R++) {
            var z = C[R],
              G = C[R + 1];
            L ? b.a.perspective(t.array, f.fov / 180 * Math.PI, f.aspect, z, G) : b.a.ortho(t.array, f.left, f.right, f.bottom, f.top, z, G), e.setFromProjection(t), e.getTransformedBoundingBox(r, o), r.applyProjection(d);
            var H = r.min.array,
              V = r.max.array;
            H[0] = Math.max(H[0], -1), H[1] = Math.max(H[1], -1), V[0] = Math.min(V[0], 1), V[1] = Math.min(V[1], 1), a.ortho(H[0], V[0], H[1], V[1], 1, -1), A.projectionMatrix.multiplyLeft(a);
            var k = p.shadowResolution || 512;
            u.setViewport((p.shadowCascade - R - 1) * k, 0, k, k, 1);
            var W = l.updateRenderList(A);
            u.renderPass(W.opaque, A, x), this.softShadow === S.VSM && this._gaussianFilter(u, F, F.width);
            var j = new h.a;
            j.copy(A.viewMatrix).multiplyLeft(A.projectionMatrix), g.push(j.array), A.projectionMatrix.copy(d)
          }
          this._frameBuffer.unbind(u), u.setViewport(B)
        }
      }(),
      renderSpotLightShadow: function (e, t, r, a, o) {
        var s = this._getTexture(r),
          u = this._getSpotLightCamera(r),
          l = e.gl;
        this._frameBuffer.attach(s), this._frameBuffer.bind(e), l.clear(l.COLOR_BUFFER_BIT | l.DEPTH_BUFFER_BIT);
        var d = this._getDepthMaterial(r),
          f = {
            getMaterial: function (e) {
              return e.shadowDepthMaterial || d
            },
            isMaterialChanged: i,
            getUniform: n,
            ifRender: function (e) {
              return e.castShadow
            },
            sortCompare: c.a.opaqueSortCompare
          },
          p = t.updateRenderList(u);
        e.renderPass(p.opaque, u, f), this._frameBuffer.unbind(e), this.softShadow === S.VSM && this._gaussianFilter(e, s, s.width);
        var m = new h.a;
        m.copy(u.worldTransform).invert().multiplyLeft(u.projectionMatrix), o.push(s), a.push(m.array)
      },
      renderPointLightShadow: function (e, t, r, i) {
        var a = this._getTexture(r),
          o = e.gl;
        i.push(a);
        var l = this._getDepthMaterial(r),
          h = {
            getMaterial: function (e) {
              return e.shadowDepthMaterial || l
            },
            getUniform: n,
            sortCompare: c.a.opaqueSortCompare
          },
          d = {
            px: [],
            py: [],
            pz: [],
            nx: [],
            ny: [],
            nz: []
          },
          f = new u.a,
          p = r.getWorldPosition().array,
          m = new u.a,
          g = r.range;
        m.min.setArray(p), m.max.setArray(p);
        var _ = new s.a(g, g, g);
        m.max.add(_), m.min.sub(_);
        var v = {
          px: !1,
          py: !1,
          pz: !1,
          nx: !1,
          ny: !1,
          nz: !1
        };
        t.traverse(function (e) {
          if (e.isRenderable() && e.castShadow) {
            var t = e.geometry;
            if (!t.boundingBox) {
              for (var r = 0; r < E.length; r++) d[E[r]].push(e);
              return
            }
            if (f.transformFrom(t.boundingBox, e.worldTransform), !f.intersectBoundingBox(m)) return;
            f.updateVertices();
            for (var r = 0; r < E.length; r++) v[E[r]] = !1;
            for (var r = 0; r < 8; r++) {
              var n = f.vertices[r],
                i = n[0] - p[0],
                a = n[1] - p[1],
                o = n[2] - p[2],
                s = Math.abs(i),
                u = Math.abs(a),
                l = Math.abs(o);
              s > u ? s > l ? v[i > 0 ? "px" : "nx"] = !0 : v[o > 0 ? "pz" : "nz"] = !0 : u > l ? v[a > 0 ? "py" : "ny"] = !0 : v[o > 0 ? "pz" : "nz"] = !0
            }
            for (var r = 0; r < E.length; r++) v[E[r]] && d[E[r]].push(e)
          }
        });
        for (var y = 0; y < 6; y++) {
          var x = E[y],
            T = this._getPointLightCamera(r, x);
          this._frameBuffer.attach(a, o.COLOR_ATTACHMENT0, o.TEXTURE_CUBE_MAP_POSITIVE_X + y), this._frameBuffer.bind(e), o.clear(o.COLOR_BUFFER_BIT | o.DEPTH_BUFFER_BIT), e.renderPass(d[x], T, h)
        }
        this._frameBuffer.unbind(e)
      },
      _getDepthMaterial: function (e) {
        var t = this._lightMaterials[e.__uid__],
          r = "POINT_LIGHT" === e.type;
        if (!t) {
          var n = r ? "clay.sm.distance." : "clay.sm.depth.";
          t = new f.a({
            precision: this.precision,
            shader: new d.a(d.a.source(n + "vertex"), d.a.source(n + "fragment"))
          }), this._lightMaterials[e.__uid__] = t
        }
        return null != e.shadowSlopeScale && t.setUniform("slopeScale", e.shadowSlopeScale), null != e.shadowBias && t.setUniform("bias", e.shadowBias), this.softShadow === S.VSM ? t.define("fragment", "USE_VSM") : t.undefine("fragment", "USE_VSM"), r && (t.set("lightPosition", e.getWorldPosition().array), t.set("range", e.range)), t
      },
      _gaussianFilter: function (e, t, r) {
        var n = {
            width: r,
            height: r,
            type: m.a.FLOAT
          },
          i = this._texturePool.get(n);
        this._frameBuffer.attach(i), this._frameBuffer.bind(e), this._gaussianPassH.setUniform("texture", t), this._gaussianPassH.setUniform("textureWidth", r), this._gaussianPassH.render(e), this._frameBuffer.attach(t), this._gaussianPassV.setUniform("texture", i), this._gaussianPassV.setUniform("textureHeight", r), this._gaussianPassV.render(e), this._frameBuffer.unbind(e), this._texturePool.put(i)
      },
      _getTexture: function (e, t) {
        var r = e.__uid__,
          n = this._textures[r],
          i = e.shadowResolution || 512;
        return t = t || 1, n || (n = "POINT_LIGHT" === e.type ? new _.a : new g.a, n.width = i * t, n.height = i, this.softShadow === S.VSM ? (n.type = m.a.FLOAT, n.anisotropic = 4) : (n.minFilter = o.a.NEAREST, n.magFilter = o.a.NEAREST, n.useMipmap = !1), this._textures[r] = n), n
      },
      _getPointLightCamera: function (e, t) {
        this._lightCameras.point || (this._lightCameras.point = {
          px: new v.a,
          nx: new v.a,
          py: new v.a,
          ny: new v.a,
          pz: new v.a,
          nz: new v.a
        });
        var r = this._lightCameras.point[t];
        switch (r.far = e.range, r.fov = 90, r.position.set(0, 0, 0), t) {
          case "px":
            r.lookAt(s.a.POSITIVE_X, s.a.NEGATIVE_Y);
            break;
          case "nx":
            r.lookAt(s.a.NEGATIVE_X, s.a.NEGATIVE_Y);
            break;
          case "py":
            r.lookAt(s.a.POSITIVE_Y, s.a.POSITIVE_Z);
            break;
          case "ny":
            r.lookAt(s.a.NEGATIVE_Y, s.a.NEGATIVE_Z);
            break;
          case "pz":
            r.lookAt(s.a.POSITIVE_Z, s.a.NEGATIVE_Y);
            break;
          case "nz":
            r.lookAt(s.a.NEGATIVE_Z, s.a.NEGATIVE_Y)
        }
        return e.getWorldPosition(r.position), r.update(), r
      },
      _getDirectionalLightCamera: function () {
        var e = new h.a,
          t = new u.a,
          r = new u.a;
        return function (n, i, a) {
          this._lightCameras.directional || (this._lightCameras.directional = new y.a);
          var o = this._lightCameras.directional;
          t.copy(i.viewBoundingBoxLastFrame), t.intersection(a.frustum.boundingBox), o.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform), o.rotation.copy(n.rotation), o.scale.copy(n.scale), o.updateWorldTransform(), h.a.invert(e, o.worldTransform), h.a.multiply(e, e, a.worldTransform), r.copy(t).applyTransform(e);
          var s = r.min.array,
            u = r.max.array;
          return o.position.set((s[0] + u[0]) / 2, (s[1] + u[1]) / 2, u[2]).transformMat4(o.worldTransform), o.near = 0, o.far = -s[2] + u[2], isNaN(this.lightFrustumBias) ? o.far *= 4 : o.far += this.lightFrustumBias, o.left = s[0], o.right = u[0], o.top = u[1], o.bottom = s[1], o.update(!0), o
        }
      }(),
      _getSpotLightCamera: function (e) {
        this._lightCameras.spot || (this._lightCameras.spot = new v.a);
        var t = this._lightCameras.spot;
        return t.fov = 2 * e.penumbraAngle, t.far = e.range, t.worldTransform.copy(e.worldTransform), t.updateProjectionMatrix(), b.a.invert(t.viewMatrix.array, t.worldTransform.array), t
      },
      dispose: function (e) {
        var t = e.gl || e;
        this._frameBuffer && this._frameBuffer.dispose(t);
        for (var r in this._textures) this._textures[r].dispose(t);
        this._texturePool.clear(e.gl), this._depthMaterials = {}, this._distanceMaterials = {}, this._textures = {}, this._lightCameras = {}, this._shadowMapNumber = {
          POINT_LIGHT: 0,
          DIRECTIONAL_LIGHT: 0,
          SPOT_LIGHT: 0
        }, this._meshMaterials = {};
        for (var n = 0; n < this._receivers.length; n++) {
          var i = this._receivers[n];
          if (i.material) {
            var a = i.material;
            a.undefine("fragment", "POINT_LIGHT_SHADOW_COUNT"), a.undefine("fragment", "DIRECTIONAL_LIGHT_SHADOW_COUNT"), a.undefine("fragment", "AMBIENT_LIGHT_SHADOW_COUNT"), a.set("shadowEnabled", 0)
          }
        }
        this._receivers = [], this._lightsCastShadow = []
      }
    });
    S.VSM = 1, S.PCF = 2, t.a = S
  }, function (e, t, r) {
    "use strict";
    t.a = "@export clay.sm.depth.vertex\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nattribute vec3 position : POSITION;\nattribute vec2 texcoord : TEXCOORD_0;\n@import clay.chunk.skinning_header\nvarying vec4 v_ViewPosition;\nvarying vec2 v_Texcoord;\nvoid main(){\n vec3 skinnedPosition = position;\n#ifdef SKINNING\n @import clay.chunk.skin_matrix\n skinnedPosition = (skinMatrixWS * vec4(position, 1.0)).xyz;\n#endif\n v_ViewPosition = worldViewProjection * vec4(skinnedPosition, 1.0);\n gl_Position = v_ViewPosition;\n v_Texcoord = texcoord;\n}\n@end\n@export clay.sm.depth.fragment\nvarying vec4 v_ViewPosition;\nvarying vec2 v_Texcoord;\nuniform float bias : 0.001;\nuniform float slopeScale : 1.0;\nuniform sampler2D alphaMap;\nuniform float alphaCutoff: 0.0;\n@import clay.util.encode_float\nvoid main(){\n float depth = v_ViewPosition.z / v_ViewPosition.w;\n if (alphaCutoff > 0.0) {\n if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {\n discard;\n }\n }\n#ifdef USE_VSM\n depth = depth * 0.5 + 0.5;\n float moment1 = depth;\n float moment2 = depth * depth;\n float dx = dFdx(depth);\n float dy = dFdy(depth);\n moment2 += 0.25*(dx*dx+dy*dy);\n gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);\n#else\n float dx = dFdx(depth);\n float dy = dFdy(depth);\n depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;\n gl_FragColor = encodeFloat(depth * 0.5 + 0.5);\n#endif\n}\n@end\n@export clay.sm.debug_depth\nuniform sampler2D depthMap;\nvarying vec2 v_Texcoord;\n@import clay.util.decode_float\nvoid main() {\n vec4 tex = texture2D(depthMap, v_Texcoord);\n#ifdef USE_VSM\n gl_FragColor = vec4(tex.rgb, 1.0);\n#else\n float depth = decodeFloat(tex);\n gl_FragColor = vec4(depth, depth, depth, 1.0);\n#endif\n}\n@end\n@export clay.sm.distance.vertex\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform mat4 world : WORLD;\nattribute vec3 position : POSITION;\n@import clay.chunk.skinning_header\nvarying vec3 v_WorldPosition;\nvoid main (){\n vec3 skinnedPosition = position;\n#ifdef SKINNING\n @import clay.chunk.skin_matrix\n skinnedPosition = (skinMatrixWS * vec4(position, 1.0)).xyz;\n#endif\n gl_Position = worldViewProjection * vec4(skinnedPosition , 1.0);\n v_WorldPosition = (world * vec4(skinnedPosition, 1.0)).xyz;\n}\n@end\n@export clay.sm.distance.fragment\nuniform vec3 lightPosition;\nuniform float range : 100;\nvarying vec3 v_WorldPosition;\n@import clay.util.encode_float\nvoid main(){\n float dist = distance(lightPosition, v_WorldPosition);\n#ifdef USE_VSM\n gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);\n#else\n dist = dist / range;\n gl_FragColor = encodeFloat(dist);\n#endif\n}\n@end\n@export clay.plugin.shadow_map_common\n@import clay.util.decode_float\nfloat tapShadowMap(sampler2D map, vec2 uv, float z){\n vec4 tex = texture2D(map, uv);\n return step(z, decodeFloat(tex) * 2.0 - 1.0);\n}\nfloat pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {\n float shadowContrib = tapShadowMap(map, uv, z);\n vec2 offset = vec2(1.0 / textureSize) * scale;\n#ifdef PCF_KERNEL_SIZE\n for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{\n shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);\n }}\n return shadowContrib / float(PCF_KERNEL_SIZE + 1);\n#else\n shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);\n shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);\n shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);\n shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);\n shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);\n shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);\n shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);\n shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);\n return shadowContrib / 9.0;\n#endif\n}\nfloat pcf(sampler2D map, vec2 uv, float z, float textureSize) {\n return pcf(map, uv, z, textureSize, vec2(1.0));\n}\nfloat chebyshevUpperBound(vec2 moments, float z){\n float p = 0.0;\n z = z * 0.5 + 0.5;\n if (z <= moments.x) {\n p = 1.0;\n }\n float variance = moments.y - moments.x * moments.x;\n variance = max(variance, 0.0000001);\n float mD = moments.x - z;\n float pMax = variance / (variance + mD * mD);\n pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);\n return max(p, pMax);\n}\nfloat computeShadowContrib(\n sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset\n) {\n vec4 posInLightSpace = lightVPM * vec4(position, 1.0);\n posInLightSpace.xyz /= posInLightSpace.w;\n float z = posInLightSpace.z;\n if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&\n all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){\n vec2 uv = (posInLightSpace.xy+1.0) / 2.0;\n #ifdef USE_VSM\n vec2 moments = texture2D(map, uv * scale + offset).xy;\n return chebyshevUpperBound(moments, z);\n #else\n return pcf(map, uv * scale + offset, z, textureSize, scale);\n #endif\n }\n return 1.0;\n}\nfloat computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {\n return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));\n}\nfloat computeShadowContribOmni(samplerCube map, vec3 direction, float range)\n{\n float dist = length(direction);\n vec4 shadowTex = textureCube(map, direction);\n#ifdef USE_VSM\n vec2 moments = shadowTex.xy;\n float variance = moments.y - moments.x * moments.x;\n float mD = moments.x - dist;\n float p = variance / (variance + mD * mD);\n if(moments.x + 0.001 < dist){\n return clamp(p, 0.0, 1.0);\n }else{\n return 1.0;\n }\n#else\n return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);\n#endif\n}\n@end\n@export clay.plugin.compute_shadow_map\n#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)\n#ifdef SPOT_LIGHT_SHADOWMAP_COUNT\nuniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;\nuniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;\nuniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;\n#endif\n#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT\n#if defined(SHADOW_CASCADE)\nuniform sampler2D directionalLightShadowMaps[1]:unconfigurable;\nuniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;\nuniform float directionalLightShadowMapSizes[1]:unconfigurable;\nuniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;\nuniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;\n#else\nuniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;\nuniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;\nuniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;\n#endif\n#endif\n#ifdef POINT_LIGHT_SHADOWMAP_COUNT\nuniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;\n#endif\nuniform bool shadowEnabled : true;\n#ifdef PCF_KERNEL_SIZE\nuniform vec2 pcfKernel[PCF_KERNEL_SIZE];\n#endif\n@import clay.plugin.shadow_map_common\n#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)\nvoid computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {\n float shadowContrib;\n for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{\n shadowContrib = computeShadowContrib(\n spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,\n spotLightShadowMapSizes[_idx_]\n );\n shadowContribs[_idx_] = shadowContrib;\n }}\n for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{\n shadowContribs[_idx_] = 1.0;\n }}\n}\n#endif\n#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)\n#ifdef SHADOW_CASCADE\nvoid computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){\n float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)\n / (gl_DepthRange.far - gl_DepthRange.near);\n float shadowContrib;\n shadowContribs[0] = 1.0;\n for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{\n if (\n depth >= shadowCascadeClipsNear[_idx_] &&\n depth <= shadowCascadeClipsFar[_idx_]\n ) {\n shadowContrib = computeShadowContrib(\n directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,\n directionalLightShadowMapSizes[0],\n vec2(1.0 / float(SHADOW_CASCADE), 1.0),\n vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)\n );\n shadowContribs[0] = shadowContrib;\n }\n }}\n for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{\n shadowContribs[_idx_] = 1.0;\n }}\n}\n#else\nvoid computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){\n float shadowContrib;\n for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{\n shadowContrib = computeShadowContrib(\n directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,\n directionalLightShadowMapSizes[_idx_]\n );\n shadowContribs[_idx_] = shadowContrib;\n }}\n for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{\n shadowContribs[_idx_] = 1.0;\n }}\n}\n#endif\n#endif\n#if defined(POINT_LIGHT_SHADOWMAP_COUNT)\nvoid computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){\n vec3 lightPosition;\n vec3 direction;\n for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{\n lightPosition = pointLightPosition[_idx_];\n direction = position - lightPosition;\n shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);\n }}\n for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{\n shadowContribs[_idx_] = 1.0;\n }}\n}\n#endif\n#endif\n@end"
  }, function (e, t, r) {
    "use strict";

    function n() {
      this._sourceTexture = new a.a({
        type: o.a.HALF_FLOAT
      }), this._depthTexture = new a.a({
        format: o.a.DEPTH_COMPONENT,
        type: o.a.UNSIGNED_INT
      }), this._framebuffer = new s.a, this._framebuffer.attach(this._sourceTexture), this._framebuffer.attach(this._depthTexture, s.a.DEPTH_ATTACHMENT), this._normalPass = new f.a, this._compositor = Object(u.a)(m.a);
      var e = this._compositor.getNodeByName("source");
      e.texture = this._sourceTexture;
      var t = this._compositor.getNodeByName("coc");
      this._sourceNode = e, this._cocNode = t, this._compositeNode = this._compositor.getNodeByName("composite"), this._fxaaNode = this._compositor.getNodeByName("FXAA"), this._dofBlurNodes = ["dof_far_blur", "dof_near_blur", "dof_coc_blur"].map(function (e) {
        return this._compositor.getNodeByName(e)
      }, this), this._dofBlurKernel = 0, this._dofBlurKernelSize = new Float32Array(0), this._finalNodesChain = C.map(function (e) {
        return this._compositor.getNodeByName(e)
      }, this);
      var r = {
        normalTexture: this._normalPass.getNormalTexture(),
        depthTexture: this._normalPass.getDepthTexture()
      };
      this._ssaoPass = new l.a(r), this._ssrPass = new h.a(r), this._edgePass = new p.a(r)
    }
    var i = r(8),
      a = r(5),
      o = r(4),
      s = r(10),
      u = r(177),
      l = r(189),
      h = r(191),
      c = r(193),
      d = r(1),
      f = r(194),
      p = r(196),
      m = (r(9), r(197)),
      g = r(87),
      _ = r(88),
      v = r(89),
      y = r(90),
      x = r(91),
      T = r(92),
      b = r(93),
      w = r(94),
      E = r(95),
      S = r(198),
      A = r(199);
    i.a.import(g.a), i.a.import(_.a), i.a.import(v.a), i.a.import(y.a), i.a.import(x.a), i.a.import(T.a), i.a.import(b.a), i.a.import(w.a), i.a.import(E.a), i.a.import(S.a), i.a.import(A.a);
    var M = {
        color: {
          parameters: {
            width: function (e) {
              return e.getWidth()
            },
            height: function (e) {
              return e.getHeight()
            }
          }
        }
      },
      C = ["composite", "FXAA"];
    n.prototype.resize = function (e, t, r) {
      r = r || 1;
      var e = e * r,
        t = t * r,
        n = this._sourceTexture,
        i = this._depthTexture;
      n.width = e, n.height = t, i.width = e, i.height = t
    }, n.prototype._ifRenderNormalPass = function () {
      return this._enableSSAO || this._enableEdge || this._enableSSR
    }, n.prototype._getPrevNode = function (e) {
      for (var t = C.indexOf(e.name) - 1, r = this._finalNodesChain[t]; r && !this._compositor.getNodeByName(r.name);) t -= 1, r = this._finalNodesChain[t];
      return r
    }, n.prototype._getNextNode = function (e) {
      for (var t = C.indexOf(e.name) + 1, r = this._finalNodesChain[t]; r && !this._compositor.getNodeByName(r.name);) t += 1, r = this._finalNodesChain[t];
      return r
    }, n.prototype._addChainNode = function (e) {
      var t = this._getPrevNode(e),
        r = this._getNextNode(e);
      t && (t.outputs = M, e.inputs.texture = t.name, r ? (e.outputs = M, r.inputs.texture = e.name) : e.outputs = null, this._compositor.addNode(e))
    }, n.prototype._removeChainNode = function (e) {
      var t = this._getPrevNode(e),
        r = this._getNextNode(e);
      t && (r ? (t.outputs = M, r.inputs.texture = t.name) : t.outputs = null, this._compositor.removeNode(e))
    }, n.prototype.updateNormal = function (e, t, r, n) {
      this._ifRenderNormalPass() && this._normalPass.update(e, t, r)
    }, n.prototype.updateSSAO = function (e, t, r, n) {
      this._ssaoPass.update(e, r, n)
    }, n.prototype.enableSSAO = function () {
      this._enableSSAO = !0
    }, n.prototype.disableSSAO = function () {
      this._enableSSAO = !1
    }, n.prototype.enableSSR = function () {
      this._enableSSR = !0
    }, n.prototype.disableSSR = function () {
      this._enableSSR = !1
    }, n.prototype.getSSAOTexture = function () {
      return this._ssaoPass.getTargetTexture()
    }, n.prototype.getSourceFrameBuffer = function () {
      return this._framebuffer
    }, n.prototype.getSourceTexture = function () {
      return this._sourceTexture
    }, n.prototype.disableFXAA = function () {
      this._removeChainNode(this._fxaaNode)
    }, n.prototype.enableFXAA = function () {
      this._addChainNode(this._fxaaNode)
    }, n.prototype.enableBloom = function () {
      this._compositeNode.inputs.bloom = "bloom_composite", this._compositor.dirty()
    }, n.prototype.disableBloom = function () {
      this._compositeNode.inputs.bloom = null, this._compositor.dirty()
    }, n.prototype.enableDOF = function () {
      this._compositeNode.inputs.texture = "dof_composite", this._compositor.dirty()
    }, n.prototype.disableDOF = function () {
      this._compositeNode.inputs.texture = "source", this._compositor.dirty()
    }, n.prototype.enableColorCorrection = function () {
      this._compositeNode.define("COLOR_CORRECTION"), this._enableColorCorrection = !0
    }, n.prototype.disableColorCorrection = function () {
      this._compositeNode.undefine("COLOR_CORRECTION"), this._enableColorCorrection = !1
    }, n.prototype.enableEdge = function () {
      this._enableEdge = !0
    }, n.prototype.disableEdge = function () {
      this._enableEdge = !1
    }, n.prototype.setBloomIntensity = function (e) {
      this._compositeNode.setParameter("bloomIntensity", e)
    }, n.prototype.setSSAOParameter = function (e, t) {
      switch (e) {
        case "quality":
          var r = {
            low: 6,
            medium: 12,
            high: 32,
            ultra: 62
          } [t] || 12;
          this._ssaoPass.setParameter("kernelSize", r);
          break;
        case "radius":
          this._ssaoPass.setParameter(e, t), this._ssaoPass.setParameter("bias", t / 200);
          break;
        case "intensity":
          this._ssaoPass.setParameter(e, t)
      }
    }, n.prototype.setDOFParameter = function (e, t) {
      switch (e) {
        case "focalDistance":
        case "focalRange":
        case "fstop":
          this._cocNode.setParameter(e, t);
          break;
        case "blurRadius":
          for (var r = 0; r < this._dofBlurNodes.length; r++) this._dofBlurNodes[r].setParameter("blurRadius", t);
          break;
        case "quality":
          var n = {
            low: 4,
            medium: 8,
            high: 16,
            ultra: 32
          } [t] || 8;
          this._dofBlurKernelSize = n;
          for (var r = 0; r < this._dofBlurNodes.length; r++) this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE", n);
          this._dofBlurKernel = new Float32Array(2 * n)
      }
    }, n.prototype.setSSRParameter = function (e, t) {
      if (null != t) switch (e) {
        case "quality":
          var r = {
              low: 10,
              medium: 15,
              high: 30,
              ultra: 80
            } [t] || 20,
            n = {
              low: 32,
              medium: 16,
              high: 8,
              ultra: 4
            } [t] || 16;
          this._ssrPass.setParameter("maxIteration", r), this._ssrPass.setParameter("pixelStride", n);
          break;
        case "maxRoughness":
          this._ssrPass.setParameter("minGlossiness", Math.max(Math.min(1 - t, 1), 0));
          break;
        case "physical":
          this.setPhysicallyCorrectSSR(t);
          break;
        default:
          console.warn("Unkown SSR parameter " + e)
      }
    }, n.prototype.setPhysicallyCorrectSSR = function (e) {
      this._ssrPass.setPhysicallyCorrect(e)
    }, n.prototype.setEdgeColor = function (e) {
      var t = d.a.parseColor(e);
      this._edgePass.setParameter("edgeColor", t)
    }, n.prototype.setExposure = function (e) {
      this._compositeNode.setParameter("exposure", Math.pow(2, e))
    }, n.prototype.setColorLookupTexture = function (e, t) {
      this._compositeNode.pass.material.setTextureImage("lut", this._enableColorCorrection ? e : "none", t, {
        minFilter: d.a.Texture.NEAREST,
        magFilter: d.a.Texture.NEAREST,
        flipY: !1
      })
    }, n.prototype.setColorCorrection = function (e, t) {
      this._compositeNode.setParameter(e, t)
    }, n.prototype.isSSREnabled = function () {
      return this._enableSSR
    }, n.prototype.composite = function (e, t, r, n, i) {
      var a = this._sourceTexture,
        o = a;
      this._enableEdge && (this._edgePass.update(e, r, a, i), a = o = this._edgePass.getTargetTexture()), this._enableSSR && (this._ssrPass.update(e, r, a, i), o = this._ssrPass.getTargetTexture(), this._ssrPass.setSSAOTexture(this._enableSSAO ? this._ssaoPass.getTargetTexture() : null)), this._sourceNode.texture = o, this._cocNode.setParameter("depth", this._depthTexture);
      for (var s = this._dofBlurKernel, u = this._dofBlurKernelSize, l = Math.floor(c.a.length / 2 / u), h = i % l, d = 0; d < 2 * u; d++) s[d] = c.a[d + h * u * 2];
      for (var d = 0; d < this._dofBlurNodes.length; d++) this._dofBlurNodes[d].setParameter("percent", i / 30), this._dofBlurNodes[d].setParameter("poissonKernel", s);
      this._cocNode.setParameter("zNear", r.near), this._cocNode.setParameter("zFar", r.far), this._compositor.render(e, n)
    }, n.prototype.dispose = function (e) {
      this._sourceTexture.dispose(e), this._depthTexture.dispose(e), this._framebuffer.dispose(e), this._compositor.dispose(e), this._normalPass.dispose(e), this._ssaoPass.dispose(e)
    }, t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(178);
    t.a = n.a
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      var r = new f.a;
      t = t || {};
      var n = {
          textures: {},
          parameters: {}
        },
        a = function (a, o) {
          for (var s = 0; s < e.nodes.length; s++) {
            var u = e.nodes[s],
              l = i(u, n, t);
            l && r.addNode(l)
          }
        };
      for (var o in e.parameters) {
        var l = e.parameters[o];
        n.parameters[o] = s(l)
      }
      return u(e, n, t, function (e) {
        n.textures = e, a()
      }), r
    }

    function i(e, t, r) {
      var n, i, a, o = e.type || "filter";
      if ("filter" === o) {
        var u = e.shader.trim(),
          h = b.exec(u);
        if (h ? n = _.a.source(h[1].trim()) : "#" === u.charAt(0) && (n = t.shaders[u.substr(1)]), n || (n = u), !n) return
      }
      if (e.inputs) {
        i = {};
        for (var d in e.inputs) "string" == typeof e.inputs[d] ? i[d] = e.inputs[d] : i[d] = {
          node: e.inputs[d].node,
          pin: e.inputs[d].pin
        }
      }
      if (e.outputs) {
        a = {};
        for (var d in e.outputs) {
          var f = e.outputs[d];
          a[d] = {}, null != f.attachment && (a[d].attachment = f.attachment), null != f.keepLastFrame && (a[d].keepLastFrame = f.keepLastFrame), null != f.outputLastFrame && (a[d].outputLastFrame = f.outputLastFrame), f.parameters && (a[d].parameters = s(f.parameters))
        }
      }
      var v;
      if (v = "scene" === o ? new p.a({
          name: e.name,
          scene: r.scene,
          camera: r.camera,
          outputs: a
        }) : "texture" === o ? new m.a({
          name: e.name,
          outputs: a
        }) : new g.a({
          name: e.name,
          shader: n,
          inputs: i,
          outputs: a
        })) {
        if (e.parameters)
          for (var d in e.parameters) {
            var y = e.parameters[d];
            "string" == typeof y && (y = y.trim(), "#" === y.charAt(0) ? y = t.textures[y.substr(1)] : v.on("beforerender", l(d, c(y)))), v.setParameter(d, y)
          }
        if (e.defines && v.pass)
          for (var d in e.defines) {
            var y = e.defines[d];
            v.pass.material.define("fragment", d, y)
          }
      }
      return v
    }

    function a(e, t) {
      return e
    }

    function o(e, t) {
      return t
    }

    function s(e) {
      var t = {};
      if (!e) return t;
      ["type", "minFilter", "magFilter", "wrapS", "wrapT", "flipY", "useMipmap"].forEach(function (r) {
        var n = e[r];
        null != n && ("string" == typeof n && (n = v.a[n]), t[r] = n)
      });
      var r = e.scale || 1;
      return ["width", "height"].forEach(function (n) {
        if (null != e[n]) {
          var i = e[n];
          "string" == typeof i ? (i = i.trim(), t[n] = h(n, c(i), r)) : t[n] = i
        }
      }), t.width || (t.width = a), t.height || (t.height = o), null != e.useMipmap && (t.useMipmap = e.useMipmap), t
    }

    function u(e, t, r, n) {
      if (!e.textures) return void n({});
      var i = {},
        a = 0,
        o = !1,
        u = r.textureRootPath;
      d.a.each(e.textures, function (e, t) {
        var r, l = e.path,
          h = s(e.parameters);
        if (Array.isArray(l) && 6 === l.length) u && (l = l.map(function (e) {
          return d.a.relative2absolute(e, u)
        })), r = new x.a(h);
        else {
          if ("string" != typeof l) return;
          u && (l = d.a.relative2absolute(l, u)), r = new y.a(h)
        }
        r.load(l), a++, r.once("success", function () {
          i[t] = r, 0 === --a && (n(i), o = !0)
        })
      }), 0 !== a || o || n(i)
    }

    function l(e, t) {
      return function (r) {
        var n = r.getDevicePixelRatio(),
          i = r.getWidth(),
          a = r.getHeight(),
          o = t(i, a, n);
        this.setParameter(e, o)
      }
    }

    function h(e, t, r) {
      return r = r || 1,
        function (e) {
          var n = e.getDevicePixelRatio(),
            i = e.getWidth() * r,
            a = e.getHeight() * r;
          return t(i, a, n)
        }
    }

    function c(e) {
      var t = /^expr\((.*)\)$/.exec(e);
      if (t) try {
        var r = new Function("width", "height", "dpr", "return " + t[1]);
        return r(1, 1), r
      } catch (e) {
        throw new Error("Invalid expression.")
      }
    }
    var d = r(23),
      f = r(179),
      p = r(181),
      m = r(182),
      g = r(183),
      _ = r(8),
      v = r(4),
      y = r(5),
      x = r(27),
      T = r(184);
    Object(T.a)(_.a);
    var b = /^#source\((.*?)\)/;
    t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(180),
      i = r(86),
      a = r(10),
      o = n.a.extend(function () {
        return {
          _outputs: [],
          _texturePool: new i.a,
          _frameBuffer: new a.a({
            depthBuffer: !1
          })
        }
      }, {
        addNode: function (e) {
          n.a.prototype.addNode.call(this, e), e._compositor = this
        },
        render: function (e, t) {
          if (this._dirty) {
            this.update(), this._dirty = !1, this._outputs.length = 0;
            for (var r = 0; r < this.nodes.length; r++) this.nodes[r].outputs || this._outputs.push(this.nodes[r])
          }
          for (var r = 0; r < this.nodes.length; r++) this.nodes[r].beforeFrame();
          for (var r = 0; r < this._outputs.length; r++) this._outputs[r].updateReference();
          for (var r = 0; r < this._outputs.length; r++) this._outputs[r].render(e, t);
          for (var r = 0; r < this.nodes.length; r++) this.nodes[r].afterFrame()
        },
        allocateTexture: function (e) {
          return this._texturePool.get(e)
        },
        releaseTexture: function (e) {
          this._texturePool.put(e)
        },
        getFrameBuffer: function () {
          return this._frameBuffer
        },
        dispose: function (e) {
          this._texturePool.clear(e)
        }
      });
    t.a = o
  }, function (e, t, r) {
    "use strict";
    var n = r(7),
      i = r(48),
      a = n.a.extend(function () {
        return {
          nodes: []
        }
      }, {
        dirty: function () {
          this._dirty = !0
        },
        addNode: function (e) {
          this.nodes.indexOf(e) >= 0 || (this.nodes.push(e), this._dirty = !0)
        },
        removeNode: function (e) {
          "string" == typeof e && (e = this.getNodeByName(e));
          var t = this.nodes.indexOf(e);
          t >= 0 && (this.nodes.splice(t, 1), this._dirty = !0)
        },
        getNodeByName: function (e) {
          for (var t = 0; t < this.nodes.length; t++)
            if (this.nodes[t].name === e) return this.nodes[t]
        },
        update: function () {
          for (var e = 0; e < this.nodes.length; e++) this.nodes[e].clear();
          for (var e = 0; e < this.nodes.length; e++) {
            var t = this.nodes[e];
            if (t.inputs)
              for (var r in t.inputs)
                if (t.inputs[r])
                  if (!t.pass || t.pass.material.isUniformEnabled(r)) {
                    var n = t.inputs[r],
                      i = this.findPin(n);
                    i ? t.link(r, i.node, i.pin) : "string" == typeof n ? console.warn("Node " + n + " not exist") : console.warn("Pin of " + n.node + "." + n.pin + " not exist")
                  } else console.warn("Pin " + t.name + "." + r + " not used.")
          }
        },
        findPin: function (e) {
          var t;
          if (("string" == typeof e || e instanceof i.a) && (e = {
              node: e
            }), "string" == typeof e.node)
            for (var r = 0; r < this.nodes.length; r++) {
              var n = this.nodes[r];
              n.name === e.node && (t = n)
            } else t = e.node;
          if (t) {
            var a = e.pin;
            if (a || t.outputs && (a = Object.keys(t.outputs)[0]), t.outputs[a]) return {
              node: t,
              pin: a
            }
          }
        }
      });
    t.a = a
  }, function (e, t, r) {
    "use strict";
    var n = r(48),
      i = r(11),
      a = r(10),
      o = n.a.extend({
        name: "scene",
        scene: null,
        camera: null,
        autoUpdateScene: !0,
        preZ: !1
      }, function () {
        this.frameBuffer = new a.a
      }, {
        render: function (e) {
          this._rendering = !0;
          var t = e.gl;
          this.trigger("beforerender");
          var r;
          if (this.outputs) {
            var n = this.frameBuffer;
            for (var a in this.outputs) {
              var o = this.updateParameter(a, e),
                s = this.outputs[a],
                u = this._compositor.allocateTexture(o);
              this._outputTextures[a] = u;
              var l = s.attachment || t.COLOR_ATTACHMENT0;
              "string" == typeof l && (l = t[l]), n.attach(u, l)
            }
            n.bind(e);
            var h = e.getGLExtension("EXT_draw_buffers");
            if (h) {
              var c = [];
              for (var l in this.outputs)(l = parseInt(l)) >= t.COLOR_ATTACHMENT0 && l <= t.COLOR_ATTACHMENT0 + 8 && c.push(l);
              h.drawBuffersEXT(c)
            }
            e.saveClear(), e.clearBit = i.a.DEPTH_BUFFER_BIT | i.a.COLOR_BUFFER_BIT, r = e.render(this.scene, this.camera, !this.autoUpdateScene, this.preZ), e.restoreClear(), n.unbind(e)
          } else r = e.render(this.scene, this.camera, !this.autoUpdateScene, this.preZ);
          this.trigger("afterrender", r), this._rendering = !1, this._rendered = !0
        }
      });
    t.a = o
  }, function (e, t, r) {
    "use strict";
    var n = r(48),
      i = n.a.extend(function () {
        return {
          texture: null,
          outputs: {
            color: {}
          }
        }
      }, function () {}, {
        getOutput: function (e, t) {
          return this.texture
        },
        beforeFrame: function () {},
        afterFrame: function () {}
      });
    t.a = i
  }, function (e, t, r) {
    "use strict";
    var n = r(16),
      i = r(48),
      a = i.a.extend(function () {
        return {
          name: "",
          inputs: {},
          outputs: null,
          shader: "",
          inputLinks: {},
          outputLinks: {},
          pass: null,
          _prevOutputTextures: {},
          _outputTextures: {},
          _outputReferences: {},
          _rendering: !1,
          _rendered: !1,
          _compositor: null
        }
      }, function () {
        var e = new n.a({
          fragment: this.shader
        });
        this.pass = e
      }, {
        render: function (e, t) {
          this.trigger("beforerender", e), this._rendering = !0;
          var r = e.gl;
          for (var n in this.inputLinks) {
            var i = this.inputLinks[n],
              a = i.node.getOutput(e, i.pin);
            this.pass.setUniform(n, a)
          }
          if (this.outputs) {
            this.pass.outputs = {};
            var o = {};
            for (var s in this.outputs) {
              var u = this.updateParameter(s, e);
              isNaN(u.width) && this.updateParameter(s, e);
              var l = this.outputs[s],
                h = this._compositor.allocateTexture(u);
              this._outputTextures[s] = h;
              var c = l.attachment || r.COLOR_ATTACHMENT0;
              "string" == typeof c && (c = r[c]), o[c] = h
            }
            this._compositor.getFrameBuffer().bind(e);
            for (var c in o) this._compositor.getFrameBuffer().attach(o[c], c);
            this.pass.render(e), this._compositor.getFrameBuffer().updateMipmap(e)
          } else this.pass.outputs = null, this._compositor.getFrameBuffer().unbind(e), this.pass.render(e, t);
          for (var n in this.inputLinks) {
            var i = this.inputLinks[n];
            i.node.removeReference(i.pin)
          }
          this._rendering = !1, this._rendered = !0, this.trigger("afterrender", e)
        },
        updateParameter: function (e, t) {
          var r = this.outputs[e],
            n = r.parameters,
            i = r._parametersCopy;
          if (i || (i = r._parametersCopy = {}), n)
            for (var a in n) "width" !== a && "height" !== a && (i[a] = n[a]);
          var o, s;
          return o = n.width instanceof Function ? n.width.call(this, t) : n.width, s = n.height instanceof Function ? n.height.call(this, t) : n.height, o = Math.ceil(o), s = Math.ceil(s), i.width === o && i.height === s || this._outputTextures[e] && this._outputTextures[e].dispose(t), i.width = o, i.height = s, i
        },
        setParameter: function (e, t) {
          this.pass.setUniform(e, t)
        },
        getParameter: function (e) {
          return this.pass.getUniform(e)
        },
        setParameters: function (e) {
          for (var t in e) this.setParameter(t, e[t])
        },
        define: function (e, t) {
          this.pass.material.define("fragment", e, t)
        },
        undefine: function (e) {
          this.pass.material.undefine("fragment", e)
        },
        removeReference: function (e) {
          if (0 === --this._outputReferences[e]) {
            this.outputs[e].keepLastFrame ? (this._prevOutputTextures[e] && this._compositor.releaseTexture(this._prevOutputTextures[e]), this._prevOutputTextures[e] = this._outputTextures[e]) : this._compositor.releaseTexture(this._outputTextures[e])
          }
        },
        clear: function () {
          i.a.prototype.clear.call(this), this.pass.material.disableTexturesAll()
        }
      });
    t.a = a
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      e.import(i.a), e.import(a.a), e.import(o.a), e.import(s.a), e.import(u.a), e.import(l.a), e.import(h.a), e.import(c.a), e.import(d.a), e.import(f.a), e.import(p.a), e.import(m.a), e.import(g.a)
    }
    t.a = n;
    var i = r(185),
      a = r(87),
      o = r(186),
      s = r(88),
      u = r(187),
      l = r(89),
      h = r(90),
      c = r(91),
      d = r(92),
      f = r(93),
      p = r(188),
      m = r(94),
      g = r(95)
  }, function (e, t, r) {
    "use strict";
    t.a = "@export clay.compositor.coloradjust\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform float brightness : 0.0;\nuniform float contrast : 1.0;\nuniform float exposure : 0.0;\nuniform float gamma : 1.0;\nuniform float saturation : 1.0;\nconst vec3 w = vec3(0.2125, 0.7154, 0.0721);\nvoid main()\n{\n vec4 tex = texture2D( texture, v_Texcoord);\n vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);\n color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);\n color = clamp( color * pow(2.0, exposure), 0.0, 1.0);\n color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);\n float luminance = dot( color, w );\n color = mix(vec3(luminance), color, saturation);\n gl_FragColor = vec4(color, tex.a);\n}\n@end\n@export clay.compositor.brightness\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform float brightness : 0.0;\nvoid main()\n{\n vec4 tex = texture2D( texture, v_Texcoord);\n vec3 color = tex.rgb + vec3(brightness);\n gl_FragColor = vec4(color, tex.a);\n}\n@end\n@export clay.compositor.contrast\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform float contrast : 1.0;\nvoid main()\n{\n vec4 tex = texture2D( texture, v_Texcoord);\n vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);\n gl_FragColor = vec4(color, tex.a);\n}\n@end\n@export clay.compositor.exposure\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform float exposure : 0.0;\nvoid main()\n{\n vec4 tex = texture2D(texture, v_Texcoord);\n vec3 color = tex.rgb * pow(2.0, exposure);\n gl_FragColor = vec4(color, tex.a);\n}\n@end\n@export clay.compositor.gamma\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform float gamma : 1.0;\nvoid main()\n{\n vec4 tex = texture2D(texture, v_Texcoord);\n vec3 color = pow(tex.rgb, vec3(gamma));\n gl_FragColor = vec4(color, tex.a);\n}\n@end\n@export clay.compositor.saturation\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform float saturation : 1.0;\nconst vec3 w = vec3(0.2125, 0.7154, 0.0721);\nvoid main()\n{\n vec4 tex = texture2D(texture, v_Texcoord);\n vec3 color = tex.rgb;\n float luminance = dot(color, w);\n color = mix(vec3(luminance), color, saturation);\n gl_FragColor = vec4(color, tex.a);\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export clay.compositor.hdr.log_lum\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nconst vec3 w = vec3(0.2125, 0.7154, 0.0721);\n@import clay.util.rgbm\nvoid main()\n{\n vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));\n float luminance = dot(tex.rgb, w);\n luminance = log(luminance + 0.001);\n gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));\n}\n@end\n@export clay.compositor.hdr.lum_adaption\nvarying vec2 v_Texcoord;\nuniform sampler2D adaptedLum;\nuniform sampler2D currentLum;\nuniform float frameTime : 0.02;\n@import clay.util.rgbm\nvoid main()\n{\n float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;\n float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);\n fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));\n gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));\n}\n@end\n@export clay.compositor.lum\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nconst vec3 w = vec3(0.2125, 0.7154, 0.0721);\nvoid main()\n{\n vec4 tex = texture2D( texture, v_Texcoord );\n float luminance = dot(tex.rgb, w);\n gl_FragColor = vec4(vec3(luminance), 1.0);\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export clay.compositor.vignette\n#define OUTPUT_ALPHA\nvarying vec2 v_Texcoord;\nuniform sampler2D texture;\nuniform float darkness: 1;\nuniform float offset: 1;\n@import clay.util.rgbm\nvoid main()\n{\n vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));\n gl_FragColor.rgb = texel.rgb;\n vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);\n gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export clay.compositor.lensflare\n#define SAMPLE_NUMBER 8\nuniform sampler2D texture;\nuniform sampler2D lenscolor;\nuniform vec2 textureSize : [512, 512];\nuniform float dispersal : 0.3;\nuniform float haloWidth : 0.4;\nuniform float distortion : 1.0;\nvarying vec2 v_Texcoord;\n@import clay.util.rgbm\nvec4 textureDistorted(\n in vec2 texcoord,\n in vec2 direction,\n in vec3 distortion\n) {\n return vec4(\n decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,\n decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,\n decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,\n 1.0\n );\n}\nvoid main()\n{\n vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;\n vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;\n vec2 haloVec = normalize(ghostVec) * haloWidth;\n vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);\n vec4 result = vec4(0.0);\n for (int i = 0; i < SAMPLE_NUMBER; i++)\n {\n vec2 offset = fract(texcoord + ghostVec * float(i));\n float weight = length(vec2(0.5) - offset) / length(vec2(0.5));\n weight = pow(1.0 - weight, 10.0);\n result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;\n }\n result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));\n float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));\n weight = pow(1.0 - weight, 10.0);\n vec2 offset = fract(texcoord + haloVec);\n result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;\n gl_FragColor = result;\n}\n@end"
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      for (var t = new Uint8Array(e * e * 4), r = 0, n = new u.a, i = 0; i < e; i++)
        for (var a = 0; a < e; a++) n.set(2 * Math.random() - 1, 2 * Math.random() - 1, 0).normalize(), t[r++] = 255 * (.5 * n.x + .5), t[r++] = 255 * (.5 * n.y + .5), t[r++] = 0, t[r++] = 255;
      return t
    }

    function i(e) {
      return new l.a({
        pixels: n(e),
        wrapS: h.a.REPEAT,
        wrapT: h.a.REPEAT,
        width: e,
        height: e
      })
    }

    function a(e, t, r) {
      var n = new Float32Array(3 * e);
      t = t || 0;
      for (var i = 0; i < e; i++) {
        var a = Object(p.a)(i + t, 2) * (r ? 1 : 2) * Math.PI,
          o = Object(p.a)(i + t, 3) * Math.PI,
          s = Math.random(),
          u = Math.cos(a) * Math.sin(o) * s,
          l = Math.cos(o) * s,
          h = Math.sin(a) * Math.sin(o) * s;
        n[3 * i] = u, n[3 * i + 1] = l, n[3 * i + 2] = h
      }
      return n
    }

    function o(e) {
      e = e || {}, this._ssaoPass = new c.a({
        fragment: d.a.source("ecgl.ssao.estimate")
      }), this._blurPass = new c.a({
        fragment: d.a.source("ecgl.ssao.blur")
      }), this._framebuffer = new f.a({
        depthBuffer: !1
      }), this._ssaoTexture = new l.a, this._blurTexture = new l.a, this._blurTexture2 = new l.a, this._depthTex = e.depthTexture, this._normalTex = e.normalTexture, this.setNoiseSize(4), this.setKernelSize(e.kernelSize || 12), null != e.radius && this.setParameter("radius", e.radius), null != e.power && this.setParameter("power", e.power), this._normalTex || (this._ssaoPass.material.disableTexture("normalTex"), this._blurPass.material.disableTexture("normalTex")), this._depthTex || this._blurPass.material.disableTexture("depthTex"), this._blurPass.material.setUniform("normalTex", this._normalTex), this._blurPass.material.setUniform("depthTex", this._depthTex)
    }
    var s = r(9),
      u = r(3),
      l = r(5),
      h = r(4),
      c = r(16),
      d = r(8),
      f = r(10),
      p = r(49),
      m = r(190);
    d.a.import(m.a), o.prototype.setDepthTexture = function (e) {
      this._depthTex = e
    }, o.prototype.setNormalTexture = function (e) {
      this._normalTex = e, this._ssaoPass.material[e ? "enableTexture" : "disableTexture"]("normalTex"), this.setKernelSize(this._kernelSize)
    }, o.prototype.update = function (e, t, r) {
      var n = e.getWidth(),
        i = e.getHeight(),
        a = this._ssaoPass,
        o = this._blurPass;
      a.setUniform("kernel", this._kernels[r % this._kernels.length]), a.setUniform("depthTex", this._depthTex), null != this._normalTex && a.setUniform("normalTex", this._normalTex), a.setUniform("depthTexSize", [this._depthTex.width, this._depthTex.height]);
      var u = new s.a;
      s.a.transpose(u, t.worldTransform), a.setUniform("projection", t.projectionMatrix.array), a.setUniform("projectionInv", t.invProjectionMatrix.array), a.setUniform("viewInverseTranspose", u.array);
      var l = this._ssaoTexture,
        h = this._blurTexture,
        c = this._blurTexture2;
      l.width = n / 2, l.height = i / 2, h.width = n, h.height = i, c.width = n, c.height = i, this._framebuffer.attach(l), this._framebuffer.bind(e), e.gl.clearColor(1, 1, 1, 1), e.gl.clear(e.gl.COLOR_BUFFER_BIT), a.render(e), o.setUniform("textureSize", [n / 2, i / 2]), o.setUniform("projection", t.projectionMatrix.array), this._framebuffer.attach(h), o.setUniform("direction", 0), o.setUniform("ssaoTexture", l), o.render(e), this._framebuffer.attach(c), o.setUniform("textureSize", [n, i]), o.setUniform("direction", 1), o.setUniform("ssaoTexture", h), o.render(e), this._framebuffer.unbind(e);
      var d = e.clearColor;
      e.gl.clearColor(d[0], d[1], d[2], d[3])
    }, o.prototype.getTargetTexture = function () {
      return this._blurTexture2
    }, o.prototype.setParameter = function (e, t) {
      "noiseTexSize" === e ? this.setNoiseSize(t) : "kernelSize" === e ? this.setKernelSize(t) : "intensity" === e ? this._ssaoPass.material.set("intensity", t) : this._ssaoPass.setUniform(e, t)
    }, o.prototype.setKernelSize = function (e) {
      this._kernelSize = e, this._ssaoPass.material.define("fragment", "KERNEL_SIZE", e), this._kernels = this._kernels || [];
      for (var t = 0; t < 30; t++) this._kernels[t] = a(e, t * e, !!this._normalTex)
    }, o.prototype.setNoiseSize = function (e) {
      var t = this._ssaoPass.getUniform("noiseTex");
      t ? (t.data = n(e), t.width = t.height = e, t.dirty()) : (t = i(e), this._ssaoPass.setUniform("noiseTex", i(e))), this._ssaoPass.setUniform("noiseTexSize", [e, e])
    }, o.prototype.dispose = function (e) {
      this._blurTexture.dispose(e), this._ssaoTexture.dispose(e), this._blurTexture2.dispose(e)
    }, t.a = o
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.ssao.estimate\n\nuniform sampler2D depthTex;\n\nuniform sampler2D normalTex;\n\nuniform sampler2D noiseTex;\n\nuniform vec2 depthTexSize;\n\nuniform vec2 noiseTexSize;\n\nuniform mat4 projection;\n\nuniform mat4 projectionInv;\n\nuniform mat4 viewInverseTranspose;\n\nuniform vec3 kernel[KERNEL_SIZE];\n\nuniform float radius : 1;\n\nuniform float power : 1;\n\nuniform float bias: 1e-2;\n\nuniform float intensity: 1.0;\n\nvarying vec2 v_Texcoord;\n\nfloat ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {\n float occlusion = 0.0;\n\n for (int i = 0; i < KERNEL_SIZE; i++) {\n vec3 samplePos = kernel[i];\n#ifdef NORMALTEX_ENABLED\n samplePos = kernelBasis * samplePos;\n#endif\n samplePos = samplePos * radius + originPos;\n\n vec4 texCoord = projection * vec4(samplePos, 1.0);\n texCoord.xy /= texCoord.w;\n\n vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);\n\n float sampleDepth = depthTexel.r * 2.0 - 1.0;\n if (projection[3][3] == 0.0) {\n sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);\n }\n else {\n sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];\n }\n \n float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));\n occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);\n }\n#ifdef NORMALTEX_ENABLED\n occlusion = 1.0 - occlusion / float(KERNEL_SIZE);\n#else\n occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);\n#endif\n return pow(occlusion, power);\n}\n\nvoid main()\n{\n\n vec4 depthTexel = texture2D(depthTex, v_Texcoord);\n\n#ifdef NORMALTEX_ENABLED\n vec4 tex = texture2D(normalTex, v_Texcoord);\n if (dot(tex.rgb, tex.rgb) == 0.0) {\n gl_FragColor = vec4(1.0);\n return;\n }\n vec3 N = tex.rgb * 2.0 - 1.0;\n N = (viewInverseTranspose * vec4(N, 0.0)).xyz;\n\n vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;\n vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;\n vec3 T = normalize(rvec - N * dot(rvec, N));\n vec3 BT = normalize(cross(N, T));\n mat3 kernelBasis = mat3(T, BT, N);\n#else\n if (depthTexel.r > 0.99999) {\n gl_FragColor = vec4(1.0);\n return;\n }\n mat3 kernelBasis;\n#endif\n\n float z = depthTexel.r * 2.0 - 1.0;\n\n vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);\n vec4 p4 = projectionInv * projectedPos;\n\n vec3 position = p4.xyz / p4.w;\n\n float ao = ssaoEstimator(position, kernelBasis);\n ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);\n gl_FragColor = vec4(vec3(ao), 1.0);\n}\n\n@end\n\n\n@export ecgl.ssao.blur\n#define SHADER_NAME SSAO_BLUR\n\nuniform sampler2D ssaoTexture;\n\n#ifdef NORMALTEX_ENABLED\nuniform sampler2D normalTex;\n#endif\n\nvarying vec2 v_Texcoord;\n\nuniform vec2 textureSize;\nuniform float blurSize : 1.0;\n\nuniform int direction: 0.0;\n\n#ifdef DEPTHTEX_ENABLED\nuniform sampler2D depthTex;\nuniform mat4 projection;\nuniform float depthRange : 0.5;\n\nfloat getLinearDepth(vec2 coord)\n{\n float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;\n return projection[3][2] / (depth * projection[2][3] - projection[2][2]);\n}\n#endif\n\nvoid main()\n{\n float kernel[5];\n kernel[0] = 0.122581;\n kernel[1] = 0.233062;\n kernel[2] = 0.288713;\n kernel[3] = 0.233062;\n kernel[4] = 0.122581;\n\n vec2 off = vec2(0.0);\n if (direction == 0) {\n off[0] = blurSize / textureSize.x;\n }\n else {\n off[1] = blurSize / textureSize.y;\n }\n\n vec2 coord = v_Texcoord;\n\n float sum = 0.0;\n float weightAll = 0.0;\n\n#ifdef NORMALTEX_ENABLED\n vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;\n#endif\n#if defined(DEPTHTEX_ENABLED)\n float centerDepth = getLinearDepth(v_Texcoord);\n#endif\n\n for (int i = 0; i < 5; i++) {\n vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));\n\n float w = kernel[i];\n#ifdef NORMALTEX_ENABLED\n vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;\n w *= clamp(dot(normal, centerNormal), 0.0, 1.0);\n#endif\n#ifdef DEPTHTEX_ENABLED\n float d = getLinearDepth(coord);\n w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));\n#endif\n\n weightAll += w;\n sum += texture2D(ssaoTexture, coord).r * w;\n }\n\n gl_FragColor = vec4(vec3(sum / weightAll), 1.0);\n}\n\n@end\n"
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      e = e || {}, this._ssrPass = new s.a({
        fragment: u.a.source("ecgl.ssr.main"),
        clearColor: [0, 0, 0, 0]
      }), this._blurPass1 = new s.a({
        fragment: u.a.source("ecgl.ssr.blur"),
        clearColor: [0, 0, 0, 0]
      }), this._blurPass2 = new s.a({
        fragment: u.a.source("ecgl.ssr.blur"),
        clearColor: [0, 0, 0, 0]
      }), this._blendPass = new s.a({
        fragment: u.a.source("clay.compositor.blend")
      }), this._blendPass.material.disableTexturesAll(), this._blendPass.material.enableTexture(["texture1", "texture2"]), this._ssrPass.setUniform("gBufferTexture1", e.normalTexture), this._ssrPass.setUniform("gBufferTexture2", e.depthTexture), this._blurPass1.setUniform("gBufferTexture1", e.normalTexture), this._blurPass1.setUniform("gBufferTexture2", e.depthTexture), this._blurPass2.setUniform("gBufferTexture1", e.normalTexture), this._blurPass2.setUniform("gBufferTexture2", e.depthTexture), this._blurPass2.material.define("fragment", "VERTICAL"), this._blurPass2.material.define("fragment", "BLEND"), this._ssrTexture = new a.a({
        type: o.a.HALF_FLOAT
      }), this._texture2 = new a.a({
        type: o.a.HALF_FLOAT
      }), this._texture3 = new a.a({
        type: o.a.HALF_FLOAT
      }), this._prevTexture = new a.a({
        type: o.a.HALF_FLOAT
      }), this._currentTexture = new a.a({
        type: o.a.HALF_FLOAT
      }), this._frameBuffer = new l.a({
        depthBuffer: !1
      }), this._normalDistribution = null, this._totalSamples = 256, this._samplePerFrame = 4, this._ssrPass.material.define("fragment", "SAMPLE_PER_FRAME", this._samplePerFrame), this._ssrPass.material.define("fragment", "TOTAL_SAMPLES", this._totalSamples), this._downScale = 1
    }
    var i = r(9),
      a = (r(3), r(5)),
      o = r(4),
      s = r(16),
      u = r(8),
      l = r(10),
      h = (r(49), r(77)),
      c = r(192);
    u.a.import(c.a), n.prototype.setAmbientCubemap = function (e, t) {
      this._ssrPass.material.set("specularCubemap", e), this._ssrPass.material.set("specularIntensity", t);
      var r = e && t;
      this._ssrPass.material[r ? "enableTexture" : "disableTexture"]("specularCubemap")
    }, n.prototype.update = function (e, t, r, n) {
      var a = e.getWidth(),
        o = e.getHeight(),
        s = this._ssrTexture,
        u = this._texture2,
        l = this._texture3;
      s.width = this._prevTexture.width = this._currentTexture.width = a / this._downScale, s.height = this._prevTexture.height = this._currentTexture.height = o / this._downScale, u.width = l.width = a, u.height = l.height = o;
      var h = this._frameBuffer,
        c = this._ssrPass,
        d = this._blurPass1,
        f = this._blurPass2,
        p = this._blendPass,
        m = new i.a,
        g = new i.a;
      i.a.transpose(m, t.worldTransform), i.a.transpose(g, t.viewMatrix), c.setUniform("sourceTexture", r), c.setUniform("projection", t.projectionMatrix.array), c.setUniform("projectionInv", t.invProjectionMatrix.array), c.setUniform("toViewSpace", m.array), c.setUniform("toWorldSpace", g.array), c.setUniform("nearZ", t.near);
      var _ = n / this._totalSamples * this._samplePerFrame;
      if (c.setUniform("jitterOffset", _), c.setUniform("sampleOffset", n * this._samplePerFrame), d.setUniform("textureSize", [s.width, s.height]), f.setUniform("textureSize", [a, o]), f.setUniform("sourceTexture", r), d.setUniform("projection", t.projectionMatrix.array), f.setUniform("projection", t.projectionMatrix.array), h.attach(s), h.bind(e), c.render(e), this._physicallyCorrect && (h.attach(this._currentTexture), p.setUniform("texture1", this._prevTexture), p.setUniform("texture2", s), p.material.set({
          weight1: n >= 1 ? .95 : 0,
          weight2: n >= 1 ? .05 : 1
        }), p.render(e)), h.attach(u), d.setUniform("texture", this._physicallyCorrect ? this._currentTexture : s), d.render(e), h.attach(l), f.setUniform("texture", u), f.render(e), h.unbind(e), this._physicallyCorrect) {
        var v = this._prevTexture;
        this._prevTexture = this._currentTexture, this._currentTexture = v
      }
    }, n.prototype.getTargetTexture = function () {
      return this._texture3
    }, n.prototype.setParameter = function (e, t) {
      "maxIteration" === e ? this._ssrPass.material.define("fragment", "MAX_ITERATION", t) : this._ssrPass.setUniform(e, t)
    }, n.prototype.setPhysicallyCorrect = function (e) {
      e ? (this._normalDistribution || (this._normalDistribution = h.a.generateNormalDistribution(64, this._totalSamples)), this._ssrPass.material.define("fragment", "PHYSICALLY_CORRECT"), this._ssrPass.material.set("normalDistribution", this._normalDistribution), this._ssrPass.material.set("normalDistributionSize", [64, this._totalSamples])) : this._ssrPass.material.undefine("fragment", "PHYSICALLY_CORRECT"), this._physicallyCorrect = e
    }, n.prototype.setSSAOTexture = function (e) {
      var t = this._blurPass2;
      e ? (t.material.enableTexture("ssaoTex"), t.material.set("ssaoTex", e)) : t.material.disableTexture("ssaoTex")
    }, n.prototype.isFinished = function (e) {
      return !this._physicallyCorrect || e > this._totalSamples / this._samplePerFrame
    }, n.prototype.dispose = function (e) {
      this._ssrTexture.dispose(e), this._texture2.dispose(e), this._texture3.dispose(e), this._prevTexture.dispose(e), this._currentTexture.dispose(e), this._frameBuffer.dispose(e)
    }, t.a = n
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.ssr.main\n\n#define SHADER_NAME SSR\n#define MAX_ITERATION 20;\n#define SAMPLE_PER_FRAME 5;\n#define TOTAL_SAMPLES 128;\n\nuniform sampler2D sourceTexture;\nuniform sampler2D gBufferTexture1;\nuniform sampler2D gBufferTexture2;\nuniform sampler2D gBufferTexture3;\nuniform samplerCube specularCubemap;\nuniform float specularIntensity: 1;\n\nuniform mat4 projection;\nuniform mat4 projectionInv;\nuniform mat4 toViewSpace;\nuniform mat4 toWorldSpace;\n\nuniform float maxRayDistance: 200;\n\nuniform float pixelStride: 16;\nuniform float pixelStrideZCutoff: 50; \nuniform float screenEdgeFadeStart: 0.9; \nuniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; \nuniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;\n\nuniform float nearZ;\nuniform vec2 viewportSize : VIEWPORT_SIZE;\n\nuniform float jitterOffset: 0;\n\nvarying vec2 v_Texcoord;\n\n#ifdef DEPTH_DECODE\n@import clay.util.decode_float\n#endif\n\n#ifdef PHYSICALLY_CORRECT\nuniform sampler2D normalDistribution;\nuniform float sampleOffset: 0;\nuniform vec2 normalDistributionSize;\n\nvec3 transformNormal(vec3 H, vec3 N) {\n vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);\n vec3 tangentX = normalize(cross(N, upVector));\n vec3 tangentZ = cross(N, tangentX);\n return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);\n}\nvec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {\n float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));\n vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;\n return transformNormal(H, N);\n}\nfloat G_Smith(float g, float ndv, float ndl) {\n float roughness = 1.0 - g;\n float k = roughness * roughness / 2.0;\n float G1V = ndv / (ndv * (1.0 - k) + k);\n float G1L = ndl / (ndl * (1.0 - k) + k);\n return G1L * G1V;\n}\nvec3 F_Schlick(float ndv, vec3 spec) {\n return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);\n}\n#endif\n\nfloat fetchDepth(sampler2D depthTexture, vec2 uv)\n{\n vec4 depthTexel = texture2D(depthTexture, uv);\n return depthTexel.r * 2.0 - 1.0;\n}\n\nfloat linearDepth(float depth)\n{\n if (projection[3][3] == 0.0) {\n return projection[3][2] / (depth * projection[2][3] - projection[2][2]);\n }\n else {\n return (depth - projection[3][2]) / projection[2][2];\n }\n}\n\nbool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)\n{\n if (rayZFar > rayZNear)\n {\n float t = rayZFar; rayZFar = rayZNear; rayZNear = t;\n }\n float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));\n return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;\n}\n\n\nbool traceScreenSpaceRay(\n vec3 rayOrigin, vec3 rayDir, float jitter,\n out vec2 hitPixel, out vec3 hitPoint, out float iterationCount\n)\n{\n float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)\n ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;\n\n vec3 rayEnd = rayOrigin + rayDir * rayLength;\n\n vec4 H0 = projection * vec4(rayOrigin, 1.0);\n vec4 H1 = projection * vec4(rayEnd, 1.0);\n\n float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;\n\n vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;\n\n vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;\n vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;\n\n P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;\n vec2 delta = P1 - P0;\n\n bool permute = false;\n if (abs(delta.x) < abs(delta.y)) {\n permute = true;\n delta = delta.yx;\n P0 = P0.yx;\n P1 = P1.yx;\n }\n float stepDir = sign(delta.x);\n float invdx = stepDir / delta.x;\n\n vec3 dQ = (Q1 - Q0) * invdx;\n float dk = (k1 - k0) * invdx;\n\n vec2 dP = vec2(stepDir, delta.y * invdx);\n\n float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);\n float pixStride = 1.0 + strideScaler * pixelStride;\n\n dP *= pixStride; dQ *= pixStride; dk *= pixStride;\n\n vec4 pqk = vec4(P0, Q0.z, k0);\n vec4 dPQK = vec4(dP, dQ.z, dk);\n\n pqk += dPQK * jitter;\n float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);\n float rayZNear;\n\n bool intersect = false;\n\n vec2 texelSize = 1.0 / viewportSize;\n\n iterationCount = 0.0;\n\n for (int i = 0; i < MAX_ITERATION; i++)\n {\n pqk += dPQK;\n\n rayZNear = rayZFar;\n rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);\n\n hitPixel = permute ? pqk.yx : pqk.xy;\n hitPixel *= texelSize;\n\n intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);\n\n iterationCount += 1.0;\n\n dPQK *= 1.2;\n\n if (intersect) {\n break;\n }\n }\n\n Q0.xy += dQ.xy * iterationCount;\n Q0.z = pqk.z;\n hitPoint = Q0 / pqk.w;\n\n return intersect;\n}\n\nfloat calculateAlpha(\n float iterationCount, float reflectivity,\n vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir\n)\n{\n float alpha = clamp(reflectivity, 0.0, 1.0);\n alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));\n vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;\n float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));\n alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);\n\n float _eyeFadeStart = eyeFadeStart;\n float _eyeFadeEnd = eyeFadeEnd;\n if (_eyeFadeStart > _eyeFadeEnd) {\n float tmp = _eyeFadeEnd;\n _eyeFadeEnd = _eyeFadeStart;\n _eyeFadeStart = tmp;\n }\n\n float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);\n alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);\n\n alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);\n\n return alpha;\n}\n\n@import clay.util.rand\n\n@import clay.util.rgbm\n\nvoid main()\n{\n vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);\n\n if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {\n discard;\n }\n\n float g = normalAndGloss.a;\n#if !defined(PHYSICALLY_CORRECT)\n if (g <= minGlossiness) {\n discard;\n }\n#endif\n\n float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);\n\n vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);\n N = normalize((toViewSpace * vec4(N, 0.0)).xyz);\n\n vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);\n vec4 pos = projectionInv * projectedPos;\n vec3 rayOrigin = pos.xyz / pos.w;\n vec3 V = -normalize(rayOrigin);\n\n float ndv = clamp(dot(N, V), 0.0, 1.0);\n float iterationCount;\n float jitter = rand(fract(v_Texcoord + jitterOffset));\n\n#ifdef PHYSICALLY_CORRECT\n vec4 color = vec4(vec3(0.0), 1.0);\n vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);\n vec3 albedo = albedoMetalness.rgb;\n float m = albedoMetalness.a;\n vec3 diffuseColor = albedo * (1.0 - m);\n vec3 spec = mix(vec3(0.04), albedo, m);\n\n float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);\n\n for (int i = 0; i < SAMPLE_PER_FRAME; i++) {\n vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);\n vec3 rayDir = normalize(reflect(-V, H));\n#else\n vec3 rayDir = normalize(reflect(-V, N));\n#endif\n vec2 hitPixel;\n vec3 hitPoint;\n\n bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);\n\n float dist = distance(rayOrigin, hitPoint);\n\n vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;\n hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);\n#ifdef PHYSICALLY_CORRECT\n float ndl = clamp(dot(N, rayDir), 0.0, 1.0);\n float vdh = clamp(dot(V, H), 0.0, 1.0);\n float ndh = clamp(dot(N, H), 0.0, 1.0);\n vec3 litTexel = vec3(0.0);\n if (dot(hitNormal, rayDir) < 0.0 && intersect) {\n litTexel = texture2D(sourceTexture, hitPixel).rgb;\n litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);\n\n }\n else {\n #ifdef SPECULARCUBEMAP_ENABLED\n vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;\n litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;\n#endif\n }\n color.rgb += ndl * litTexel * (\n F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)\n );\n }\n color.rgb /= float(SAMPLE_PER_FRAME);\n#else\n #if !defined(SPECULARCUBEMAP_ENABLED)\n if (dot(hitNormal, rayDir) >= 0.0) {\n discard;\n }\n if (!intersect) {\n discard;\n }\n#endif\n float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);\n vec4 color = texture2D(sourceTexture, hitPixel);\n color.rgb *= alpha;\n\n#ifdef SPECULARCUBEMAP_ENABLED\n vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;\n alpha = alpha * (intersect ? 1.0 : 0.0);\n float bias = (1.0 -g) * 5.0;\n color.rgb += (1.0 - alpha)\n * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb\n * specularIntensity;\n#endif\n\n#endif\n\n gl_FragColor = encodeHDR(color);\n}\n@end\n\n@export ecgl.ssr.blur\n\nuniform sampler2D texture;\nuniform sampler2D gBufferTexture1;\nuniform sampler2D gBufferTexture2;\nuniform mat4 projection;\nuniform float depthRange : 0.05;\n\nvarying vec2 v_Texcoord;\n\nuniform vec2 textureSize;\nuniform float blurSize : 1.0;\n\n#ifdef BLEND\n #ifdef SSAOTEX_ENABLED\nuniform sampler2D ssaoTex;\n #endif\nuniform sampler2D sourceTexture;\n#endif\n\nfloat getLinearDepth(vec2 coord)\n{\n float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;\n return projection[3][2] / (depth * projection[2][3] - projection[2][2]);\n}\n\n@import clay.util.rgbm\n\n\nvoid main()\n{\n @import clay.compositor.kernel.gaussian_9\n\n vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);\n float g = centerNTexel.a;\n float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;\n#ifdef VERTICAL\n vec2 off = vec2(0.0, maxBlurSize / textureSize.y);\n#else\n vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);\n#endif\n\n vec2 coord = v_Texcoord;\n\n vec4 sum = vec4(0.0);\n float weightAll = 0.0;\n\n vec3 cN = centerNTexel.rgb * 2.0 - 1.0;\n float cD = getLinearDepth(v_Texcoord);\n for (int i = 0; i < 9; i++) {\n vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));\n float w = gaussianKernel[i]\n * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);\n float d = getLinearDepth(coord);\n w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));\n\n weightAll += w;\n sum += decodeHDR(texture2D(texture, coord)) * w;\n }\n\n#ifdef BLEND\n float aoFactor = 1.0;\n #ifdef SSAOTEX_ENABLED\n aoFactor = texture2D(ssaoTex, v_Texcoord).r;\n #endif\n gl_FragColor = encodeHDR(\n sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))\n );\n#else\n gl_FragColor = encodeHDR(sum / weightAll);\n#endif\n}\n\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = [0, 0, -.321585265978, -.154972575841, .458126042375, .188473391593, .842080129861, .527766490688, .147304551086, -.659453822776, -.331943915203, -.940619700594, .0479226680259, .54812163202, .701581552186, -.709825561388, -.295436780218, .940589268233, -.901489676764, .237713156085, .973570876096, -.109899459384, -.866792314779, -.451805525005, .330975007087, .800048655954, -.344275183665, .381779221166, -.386139432542, -.437418421534, -.576478634965, -.0148463392551, .385798197415, -.262426961053, -.666302061145, .682427250835, -.628010632582, -.732836215494, .10163141741, -.987658134403, .711995289051, -.320024291314, .0296005138058, .950296523438, .0130612307608, -.351024443122, -.879596633704, -.10478487883, .435712737232, .504254490347, .779203817497, .206477676721, .388264289969, -.896736162545, -.153106280781, -.629203242522, -.245517550697, .657969239148, .126830499058, .26862328493, -.634888119007, -.302301223431, .617074219636, .779817204925]
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r, n, i) {
      var a = e.gl;
      t.setUniform(a, "1i", r, i), a.activeTexture(a.TEXTURE0 + i), n.isRenderable() ? n.bind(e) : n.unbind(e)
    }

    function i(e, t, r, i, a) {
      var o, s, u, l, h = e.gl;
      return function (a, c, d) {
        if (!l || l.material !== a.material) {
          var f = a.material,
            p = a.__program,
            m = f.get("roughness");
          null == m && (m = 1);
          var g = f.get("normalMap") || t,
            _ = f.get("roughnessMap"),
            v = f.get("bumpMap"),
            y = f.get("uvRepeat"),
            x = f.get("uvOffset"),
            T = f.get("detailUvRepeat"),
            b = f.get("detailUvOffset"),
            w = !!v && f.isTextureEnabled("bumpMap"),
            E = !!_ && f.isTextureEnabled("roughnessMap"),
            S = f.isDefined("fragment", "DOUBLE_SIDED");
          v = v || r, _ = _ || i, d !== c ? (c.set("normalMap", g), c.set("bumpMap", v), c.set("roughnessMap", _), c.set("useBumpMap", w), c.set("useRoughnessMap", E), c.set("doubleSide", S), null != y && c.set("uvRepeat", y), null != x && c.set("uvOffset", x), null != T && c.set("detailUvRepeat", T), null != b && c.set("detailUvOffset", b), c.set("roughness", m)) : (p.setUniform(h, "1f", "roughness", m), o !== g && n(e, p, "normalMap", g, 0), s !== v && v && n(e, p, "bumpMap", v, 1), u !== _ && _ && n(e, p, "roughnessMap", _, 2), null != y && p.setUniform(h, "2f", "uvRepeat", y), null != x && p.setUniform(h, "2f", "uvOffset", x), null != T && p.setUniform(h, "2f", "detailUvRepeat", T), null != b && p.setUniform(h, "2f", "detailUvOffset", b), p.setUniform(h, "1i", "useBumpMap", +w), p.setUniform(h, "1i", "useRoughnessMap", +E), p.setUniform(h, "1i", "doubleSide", +S)), o = g, s = v, u = _, l = a
        }
      }
    }

    function a(e) {
      e = e || {}, this._depthTex = new o.a({
        format: s.a.DEPTH_COMPONENT,
        type: s.a.UNSIGNED_INT
      }), this._normalTex = new o.a({
        type: s.a.HALF_FLOAT
      }), this._framebuffer = new l.a, this._framebuffer.attach(this._normalTex), this._framebuffer.attach(this._depthTex, l.a.DEPTH_ATTACHMENT), this._normalMaterial = new h.a({
        shader: new u.a(u.a.source("ecgl.normal.vertex"), u.a.source("ecgl.normal.fragment"))
      }), this._normalMaterial.enableTexture(["normalMap", "bumpMap", "roughnessMap"]), this._defaultNormalMap = d.a.createBlank("#000"), this._defaultBumpMap = d.a.createBlank("#000"), this._defaultRoughessMap = d.a.createBlank("#000"), this._debugPass = new c.a({
        fragment: u.a.source("clay.compositor.output")
      }), this._debugPass.setUniform("texture", this._normalTex), this._debugPass.material.undefine("fragment", "OUTPUT_ALPHA")
    }
    var o = r(5),
      s = r(4),
      u = r(8),
      l = r(10),
      h = r(19),
      c = r(16),
      d = r(61),
      f = r(195);
    u.a.import(f.a), a.prototype.getDepthTexture = function () {
      return this._depthTex
    }, a.prototype.getNormalTexture = function () {
      return this._normalTex
    }, a.prototype.update = function (e, t, r) {
      var n = e.getWidth(),
        a = e.getHeight(),
        o = this._depthTex,
        s = this._normalTex,
        u = this._normalMaterial;
      o.width = n, o.height = a, s.width = n, s.height = a;
      var l = t.getRenderList(r).opaque;
      this._framebuffer.bind(e), e.gl.clearColor(0, 0, 0, 0), e.gl.clear(e.gl.COLOR_BUFFER_BIT | e.gl.DEPTH_BUFFER_BIT), e.gl.disable(e.gl.BLEND), e.renderPass(l, r, {
        getMaterial: function () {
          return u
        },
        ifRender: function (e) {
          return e.renderNormal
        },
        beforeRender: i(e, this._defaultNormalMap, this._defaultBumpMap, this._defaultRoughessMap, this._normalMaterial),
        sort: e.opaqueSortCompare
      }), this._framebuffer.unbind(e)
    }, a.prototype.renderDebug = function (e) {
      this._debugPass.render(e)
    }, a.prototype.dispose = function (e) {
      this._depthTex.dispose(e), this._normalTex.dispose(e)
    }, t.a = a
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.normal.vertex\n\n@import ecgl.common.transformUniforms\n\n@import ecgl.common.uv.header\n\n@import ecgl.common.attributes\n\nvarying vec3 v_Normal;\nvarying vec3 v_WorldPosition;\n\n@import ecgl.common.normalMap.vertexHeader\n\n@import ecgl.common.vertexAnimation.header\n\nvoid main()\n{\n\n @import ecgl.common.vertexAnimation.main\n\n @import ecgl.common.uv.main\n\n v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);\n v_WorldPosition = (world * vec4(pos, 1.0)).xyz;\n\n @import ecgl.common.normalMap.vertexMain\n\n gl_Position = worldViewProjection * vec4(pos, 1.0);\n\n}\n\n\n@end\n\n\n@export ecgl.normal.fragment\n\n#define ROUGHNESS_CHANEL 0\n\nuniform bool useBumpMap;\nuniform bool useRoughnessMap;\nuniform bool doubleSide;\nuniform float roughness;\n\n@import ecgl.common.uv.fragmentHeader\n\nvarying vec3 v_Normal;\nvarying vec3 v_WorldPosition;\n\nuniform mat4 viewInverse : VIEWINVERSE;\n\n@import ecgl.common.normalMap.fragmentHeader\n@import ecgl.common.bumpMap.header\n\nuniform sampler2D roughnessMap;\n\nvoid main()\n{\n vec3 N = v_Normal;\n \n bool flipNormal = false;\n if (doubleSide) {\n vec3 eyePos = viewInverse[3].xyz;\n vec3 V = normalize(eyePos - v_WorldPosition);\n\n if (dot(N, V) < 0.0) {\n flipNormal = true;\n }\n }\n\n @import ecgl.common.normalMap.fragmentMain\n\n if (useBumpMap) {\n N = bumpNormal(v_WorldPosition, v_Normal, N);\n }\n\n float g = 1.0 - roughness;\n\n if (useRoughnessMap) {\n float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];\n g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);\n }\n\n if (flipNormal) {\n N = -N;\n }\n\n gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;\n gl_FragColor.a = g;\n}\n@end"
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      e = e || {}, this._edgePass = new o.a({
        fragment: s.a.source("ecgl.edge")
      }), this._edgePass.setUniform("normalTexture", e.normalTexture), this._edgePass.setUniform("depthTexture", e.depthTexture), this._targetTexture = new i.a({
        type: a.a.HALF_FLOAT
      }), this._frameBuffer = new u.a, this._frameBuffer.attach(this._targetTexture)
    }
    var i = (r(9), r(3), r(5)),
      a = r(4),
      o = r(16),
      s = r(8),
      u = r(10);
    n.prototype.update = function (e, t, r, n) {
      var i = e.getWidth(),
        a = e.getHeight(),
        o = this._targetTexture;
      o.width = i, o.height = a;
      var s = this._frameBuffer;
      s.bind(e), this._edgePass.setUniform("projectionInv", t.invProjectionMatrix.array), this._edgePass.setUniform("textureSize", [i, a]), this._edgePass.setUniform("texture", r), this._edgePass.render(e), s.unbind(e)
    }, n.prototype.getTargetTexture = function () {
      return this._targetTexture
    }, n.prototype.setParameter = function (e, t) {
      this._edgePass.setUniform(e, t)
    }, n.prototype.dispose = function (e) {
      this._targetTexture.dispose(e), this._frameBuffer.dispose(e)
    }, t.a = n
  }, function (e, t, r) {
    "use strict";
    t.a = {
      type: "compositor",
      nodes: [{
        name: "source",
        type: "texture",
        outputs: {
          color: {}
        }
      }, {
        name: "source_half",
        shader: "#source(clay.compositor.downsample)",
        inputs: {
          texture: "source"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 2)",
              height: "expr(height * 1.0 / 2)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          textureSize: "expr( [width * 1.0, height * 1.0] )"
        }
      }, {
        name: "bright",
        shader: "#source(clay.compositor.bright)",
        inputs: {
          texture: "source_half"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 2)",
              height: "expr(height * 1.0 / 2)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          threshold: 2,
          scale: 4,
          textureSize: "expr([width * 1.0 / 2, height / 2])"
        }
      }, {
        name: "bright_downsample_4",
        shader: "#source(clay.compositor.downsample)",
        inputs: {
          texture: "bright"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 4)",
              height: "expr(height * 1.0 / 4)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          textureSize: "expr( [width * 1.0 / 2, height / 2] )"
        }
      }, {
        name: "bright_downsample_8",
        shader: "#source(clay.compositor.downsample)",
        inputs: {
          texture: "bright_downsample_4"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 8)",
              height: "expr(height * 1.0 / 8)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          textureSize: "expr( [width * 1.0 / 4, height / 4] )"
        }
      }, {
        name: "bright_downsample_16",
        shader: "#source(clay.compositor.downsample)",
        inputs: {
          texture: "bright_downsample_8"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 16)",
              height: "expr(height * 1.0 / 16)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          textureSize: "expr( [width * 1.0 / 8, height / 8] )"
        }
      }, {
        name: "bright_downsample_32",
        shader: "#source(clay.compositor.downsample)",
        inputs: {
          texture: "bright_downsample_16"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 32)",
              height: "expr(height * 1.0 / 32)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          textureSize: "expr( [width * 1.0 / 16, height / 16] )"
        }
      }, {
        name: "bright_upsample_16_blur_h",
        shader: "#source(clay.compositor.gaussian_blur)",
        inputs: {
          texture: "bright_downsample_32"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 16)",
              height: "expr(height * 1.0 / 16)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          blurSize: 1,
          blurDir: 0,
          textureSize: "expr( [width * 1.0 / 32, height / 32] )"
        }
      }, {
        name: "bright_upsample_16_blur_v",
        shader: "#source(clay.compositor.gaussian_blur)",
        inputs: {
          texture: "bright_upsample_16_blur_h"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 16)",
              height: "expr(height * 1.0 / 16)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          blurSize: 1,
          blurDir: 1,
          textureSize: "expr( [width * 1.0 / 16, height * 1.0 / 16] )"
        }
      }, {
        name: "bright_upsample_8_blur_h",
        shader: "#source(clay.compositor.gaussian_blur)",
        inputs: {
          texture: "bright_downsample_16"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 8)",
              height: "expr(height * 1.0 / 8)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          blurSize: 1,
          blurDir: 0,
          textureSize: "expr( [width * 1.0 / 16, height * 1.0 / 16] )"
        }
      }, {
        name: "bright_upsample_8_blur_v",
        shader: "#source(clay.compositor.gaussian_blur)",
        inputs: {
          texture: "bright_upsample_8_blur_h"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 8)",
              height: "expr(height * 1.0 / 8)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          blurSize: 1,
          blurDir: 1,
          textureSize: "expr( [width * 1.0 / 8, height * 1.0 / 8] )"
        }
      }, {
        name: "bright_upsample_8_blend",
        shader: "#source(clay.compositor.blend)",
        inputs: {
          texture1: "bright_upsample_8_blur_v",
          texture2: "bright_upsample_16_blur_v"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 8)",
              height: "expr(height * 1.0 / 8)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          weight1: .3,
          weight2: .7
        }
      }, {
        name: "bright_upsample_4_blur_h",
        shader: "#source(clay.compositor.gaussian_blur)",
        inputs: {
          texture: "bright_downsample_8"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 4)",
              height: "expr(height * 1.0 / 4)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          blurSize: 1,
          blurDir: 0,
          textureSize: "expr( [width * 1.0 / 8, height * 1.0 / 8] )"
        }
      }, {
        name: "bright_upsample_4_blur_v",
        shader: "#source(clay.compositor.gaussian_blur)",
        inputs: {
          texture: "bright_upsample_4_blur_h"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 4)",
              height: "expr(height * 1.0 / 4)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          blurSize: 1,
          blurDir: 1,
          textureSize: "expr( [width * 1.0 / 4, height * 1.0 / 4] )"
        }
      }, {
        name: "bright_upsample_4_blend",
        shader: "#source(clay.compositor.blend)",
        inputs: {
          texture1: "bright_upsample_4_blur_v",
          texture2: "bright_upsample_8_blend"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 4)",
              height: "expr(height * 1.0 / 4)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          weight1: .3,
          weight2: .7
        }
      }, {
        name: "bright_upsample_2_blur_h",
        shader: "#source(clay.compositor.gaussian_blur)",
        inputs: {
          texture: "bright_downsample_4"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 2)",
              height: "expr(height * 1.0 / 2)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          blurSize: 1,
          blurDir: 0,
          textureSize: "expr( [width * 1.0 / 4, height * 1.0 / 4] )"
        }
      }, {
        name: "bright_upsample_2_blur_v",
        shader: "#source(clay.compositor.gaussian_blur)",
        inputs: {
          texture: "bright_upsample_2_blur_h"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 2)",
              height: "expr(height * 1.0 / 2)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          blurSize: 1,
          blurDir: 1,
          textureSize: "expr( [width * 1.0 / 2, height * 1.0 / 2] )"
        }
      }, {
        name: "bright_upsample_2_blend",
        shader: "#source(clay.compositor.blend)",
        inputs: {
          texture1: "bright_upsample_2_blur_v",
          texture2: "bright_upsample_4_blend"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0 / 2)",
              height: "expr(height * 1.0 / 2)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          weight1: .3,
          weight2: .7
        }
      }, {
        name: "bright_upsample_full_blur_h",
        shader: "#source(clay.compositor.gaussian_blur)",
        inputs: {
          texture: "bright"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0)",
              height: "expr(height * 1.0)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          blurSize: 1,
          blurDir: 0,
          textureSize: "expr( [width * 1.0 / 2, height * 1.0 / 2] )"
        }
      }, {
        name: "bright_upsample_full_blur_v",
        shader: "#source(clay.compositor.gaussian_blur)",
        inputs: {
          texture: "bright_upsample_full_blur_h"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0)",
              height: "expr(height * 1.0)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          blurSize: 1,
          blurDir: 1,
          textureSize: "expr( [width * 1.0, height * 1.0] )"
        }
      }, {
        name: "bloom_composite",
        shader: "#source(clay.compositor.blend)",
        inputs: {
          texture1: "bright_upsample_full_blur_v",
          texture2: "bright_upsample_2_blend"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0)",
              height: "expr(height * 1.0)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          weight1: .3,
          weight2: .7
        }
      }, {
        name: "coc",
        shader: "#source(ecgl.dof.coc)",
        outputs: {
          color: {
            parameters: {
              minFilter: "NEAREST",
              magFilter: "NEAREST",
              width: "expr(width * 1.0)",
              height: "expr(height * 1.0)"
            }
          }
        },
        parameters: {
          focalDist: 50,
          focalRange: 30
        }
      }, {
        name: "dof_far_blur",
        shader: "#source(ecgl.dof.diskBlur)",
        inputs: {
          texture: "source",
          coc: "coc"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0)",
              height: "expr(height * 1.0)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          textureSize: "expr( [width * 1.0, height * 1.0] )"
        }
      }, {
        name: "dof_near_blur",
        shader: "#source(ecgl.dof.diskBlur)",
        inputs: {
          texture: "source",
          coc: "coc"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0)",
              height: "expr(height * 1.0)",
              type: "HALF_FLOAT"
            }
          }
        },
        parameters: {
          textureSize: "expr( [width * 1.0, height * 1.0] )"
        },
        defines: {
          BLUR_NEARFIELD: null
        }
      }, {
        name: "dof_coc_blur",
        shader: "#source(ecgl.dof.diskBlur)",
        inputs: {
          texture: "coc"
        },
        outputs: {
          color: {
            parameters: {
              minFilter: "NEAREST",
              magFilter: "NEAREST",
              width: "expr(width * 1.0)",
              height: "expr(height * 1.0)"
            }
          }
        },
        parameters: {
          textureSize: "expr( [width * 1.0, height * 1.0] )"
        },
        defines: {
          BLUR_COC: null
        }
      }, {
        name: "dof_composite",
        shader: "#source(ecgl.dof.composite)",
        inputs: {
          original: "source",
          blurred: "dof_far_blur",
          nearfield: "dof_near_blur",
          coc: "coc",
          nearcoc: "dof_coc_blur"
        },
        outputs: {
          color: {
            parameters: {
              width: "expr(width * 1.0)",
              height: "expr(height * 1.0)",
              type: "HALF_FLOAT"
            }
          }
        }
      }, {
        name: "composite",
        shader: "#source(clay.compositor.hdr.composite)",
        inputs: {
          texture: "source",
          bloom: "bloom_composite"
        },
        defines: {}
      }, {
        name: "FXAA",
        shader: "#source(clay.compositor.fxaa)",
        inputs: {
          texture: "composite"
        }
      }]
    }
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.dof.coc\n\nuniform sampler2D depth;\n\nuniform float zNear: 0.1;\nuniform float zFar: 2000;\n\nuniform float focalDistance: 3;\nuniform float focalRange: 1;\nuniform float focalLength: 30;\nuniform float fstop: 2.8;\n\nvarying vec2 v_Texcoord;\n\n@import clay.util.encode_float\n\nvoid main()\n{\n float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;\n\n float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));\n\n float aperture = focalLength / fstop;\n\n float coc;\n\n float uppper = focalDistance + focalRange;\n float lower = focalDistance - focalRange;\n if (dist <= uppper && dist >= lower) {\n coc = 0.5;\n }\n else {\n float focalAdjusted = dist > uppper ? uppper : lower;\n\n coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));\n coc = clamp(coc, 0.0, 2.0) / 2.00001;\n\n if (dist < lower) {\n coc = -coc;\n }\n coc = coc * 0.5 + 0.5;\n }\n\n gl_FragColor = encodeFloat(coc);\n}\n@end\n\n\n@export ecgl.dof.composite\n\n#define DEBUG 0\n\nuniform sampler2D original;\nuniform sampler2D blurred;\nuniform sampler2D nearfield;\nuniform sampler2D coc;\nuniform sampler2D nearcoc;\nvarying vec2 v_Texcoord;\n\n@import clay.util.rgbm\n@import clay.util.float\n\nvoid main()\n{\n vec4 blurredColor = texture2D(blurred, v_Texcoord);\n vec4 originalColor = texture2D(original, v_Texcoord);\n\n float fCoc = decodeFloat(texture2D(coc, v_Texcoord));\n\n fCoc = abs(fCoc * 2.0 - 1.0);\n\n float weight = smoothstep(0.0, 1.0, fCoc);\n \n#ifdef NEARFIELD_ENABLED\n vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);\n float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));\n fNearCoc = abs(fNearCoc * 2.0 - 1.0);\n\n gl_FragColor = encodeHDR(\n mix(\n nearfieldColor, mix(originalColor, blurredColor, weight),\n pow(1.0 - fNearCoc, 4.0)\n )\n );\n#else\n gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));\n#endif\n\n}\n\n@end\n\n\n\n@export ecgl.dof.diskBlur\n\n#define POISSON_KERNEL_SIZE 16;\n\nuniform sampler2D texture;\nuniform sampler2D coc;\nvarying vec2 v_Texcoord;\n\nuniform float blurRadius : 10.0;\nuniform vec2 textureSize : [512.0, 512.0];\n\nuniform vec2 poissonKernel[POISSON_KERNEL_SIZE];\n\nuniform float percent;\n\nfloat nrand(const in vec2 n) {\n return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\n@import clay.util.rgbm\n@import clay.util.float\n\n\nvoid main()\n{\n vec2 offset = blurRadius / textureSize;\n\n float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );\n float cosa = cos(rnd);\n float sina = sin(rnd);\n vec4 basis = vec4(cosa, -sina, sina, cosa);\n\n#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)\n offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);\n#endif\n\n#ifdef BLUR_COC\n float cocSum = 0.0;\n#else\n vec4 color = vec4(0.0);\n#endif\n\n\n float weightSum = 0.0;\n\n for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {\n vec2 ofs = poissonKernel[i];\n\n ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));\n\n vec2 uv = v_Texcoord + ofs * offset;\n vec4 texel = texture2D(texture, uv);\n\n float w = 1.0;\n#ifdef BLUR_COC\n float fCoc = decodeFloat(texel) * 2.0 - 1.0;\n cocSum += clamp(fCoc, -1.0, 0.0) * w;\n#else\n texel = texel;\n #if !defined(BLUR_NEARFIELD)\n float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;\n w *= abs(fCoc);\n #endif\n texel.rgb *= texel.a;\n color += texel * w;\n#endif\n\n weightSum += w;\n }\n\n#ifdef BLUR_COC\n gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);\n#else\n color /= weightSum;\n color.rgb /= (color.a + 0.0001);\n gl_FragColor = color;\n#endif\n}\n\n@end"
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.edge\n\nuniform sampler2D texture;\n\nuniform sampler2D normalTexture;\nuniform sampler2D depthTexture;\n\nuniform mat4 projectionInv;\n\nuniform vec2 textureSize;\n\nuniform vec4 edgeColor: [0,0,0,0.8];\n\nvarying vec2 v_Texcoord;\n\nvec3 packColor(vec2 coord) {\n float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;\n vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);\n vec4 p4 = projectionInv * p;\n\n return vec3(\n texture2D(normalTexture, coord).rg,\n -p4.z / p4.w / 5.0\n );\n}\n\nvoid main() {\n vec2 cc = v_Texcoord;\n vec3 center = packColor(cc);\n\n float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;\n float dx = size / textureSize.x;\n float dy = size / textureSize.y;\n\n vec2 coord;\n vec3 topLeft = packColor(cc+vec2(-dx, -dy));\n vec3 top = packColor(cc+vec2(0.0, -dy));\n vec3 topRight = packColor(cc+vec2(dx, -dy));\n vec3 left = packColor(cc+vec2(-dx, 0.0));\n vec3 right = packColor(cc+vec2(dx, 0.0));\n vec3 bottomLeft = packColor(cc+vec2(-dx, dy));\n vec3 bottom = packColor(cc+vec2(0.0, dy));\n vec3 bottomRight = packColor(cc+vec2(dx, dy));\n\n vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;\n vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;\n\n float edge = sqrt(dot(h, h) + dot(v, v));\n\n edge = smoothstep(0.8, 1.0, edge);\n\n gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);\n}\n@end"
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      for (var t = [], r = 0; r < 30; r++) t.push([Object(i.a)(r, 2), Object(i.a)(r, 3)]);
      this._haltonSequence = t, this._frame = 0, this._sourceTex = new s.a, this._sourceFb = new o.a, this._sourceFb.attach(this._sourceTex), this._prevFrameTex = new s.a, this._outputTex = new s.a;
      var n = this._blendPass = new a.a({
        fragment: u.a.source("clay.compositor.blend")
      });
      n.material.disableTexturesAll(), n.material.enableTexture(["texture1", "texture2"]), this._blendFb = new o.a({
        depthBuffer: !1
      }), this._outputPass = new a.a({
        fragment: u.a.source("clay.compositor.output"),
        blendWithPrevious: !0
      }), this._outputPass.material.define("fragment", "OUTPUT_ALPHA"), this._outputPass.material.blend = function (e) {
        e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)
      }
    }
    var i = r(49),
      a = r(16),
      o = r(10),
      s = r(5),
      u = r(8),
      l = r(9);
    n.prototype = {
      constructor: n,
      jitterProjection: function (e, t) {
        var r = e.viewport,
          n = r.devicePixelRatio || e.getDevicePixelRatio(),
          i = r.width * n,
          a = r.height * n,
          o = this._haltonSequence[this._frame % this._haltonSequence.length],
          s = new l.a;
        s.array[12] = (2 * o[0] - 1) / i, s.array[13] = (2 * o[1] - 1) / a, l.a.mul(t.projectionMatrix, s, t.projectionMatrix), l.a.invert(t.invProjectionMatrix, t.projectionMatrix)
      },
      resetFrame: function () {
        this._frame = 0
      },
      getFrame: function () {
        return this._frame
      },
      getSourceFrameBuffer: function () {
        return this._sourceFb
      },
      getOutputTexture: function () {
        return this._outputTex
      },
      resize: function (e, t) {
        this._prevFrameTex.width = e, this._prevFrameTex.height = t, this._outputTex.width = e, this._outputTex.height = t, this._sourceTex.width = e, this._sourceTex.height = t, this._prevFrameTex.dirty(), this._outputTex.dirty(), this._sourceTex.dirty()
      },
      isFinished: function () {
        return this._frame >= this._haltonSequence.length
      },
      render: function (e, t, r) {
        var n = this._blendPass;
        0 === this._frame ? (n.setUniform("weight1", 0), n.setUniform("weight2", 1)) : (n.setUniform("weight1", .9), n.setUniform("weight2", .1)), n.setUniform("texture1", this._prevFrameTex), n.setUniform("texture2", t || this._sourceTex), this._blendFb.attach(this._outputTex), this._blendFb.bind(e), n.render(e), this._blendFb.unbind(e), r || (this._outputPass.setUniform("texture", this._outputTex), this._outputPass.render(e));
        var i = this._prevFrameTex;
        this._prevFrameTex = this._outputTex, this._outputTex = i, this._frame++
      },
      dispose: function (e) {
        this._sourceFb.dispose(e), this._blendFb.dispose(e), this._prevFrameTex.dispose(e), this._outputTex.dispose(e), this._sourceTex.dispose(e), this._outputPass.dispose(e), this._blendPass.dispose(e)
      }
    }, t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n);
    r(202), r(203), r(98);
    i.a.registerAction({
      type: "geo3DChangeCamera",
      event: "geo3dcamerachanged",
      update: "series:updateCamera"
    }, function (e, t) {
      t.eachComponent({
        mainType: "geo3D",
        query: e
      }, function (t) {
        t.setView(e)
      })
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(44),
      o = r(28),
      s = r(29),
      u = r(31),
      l = r(96),
      h = i.a.extendComponentModel({
        type: "geo3D",
        layoutMode: "box",
        coordinateSystem: null,
        optionUpdated: function () {
          var e = this.option;
          e.regions = this.getFilledRegions(e.regions, e.map);
          var t = i.a.helper.completeDimensions(["value"], e.data, {
              encodeDef: this.get("encode"),
              dimsDef: this.get("dimensions")
            }),
            r = new i.a.List(t, this);
          r.initData(e.regions);
          var n = {};
          r.each(function (e) {
            var t = r.getName(e),
              i = r.getItemModel(e);
            n[t] = i
          }), this._regionModelMap = n, this._data = r
        },
        getData: function () {
          return this._data
        },
        getRegionModel: function (e) {
          var t = this.getData().getName(e);
          return this._regionModelMap[t] || new i.a.Model(null, this)
        },
        getRegionPolygonCoords: function (e) {
          var t = this.getData().getName(e),
            r = this.coordinateSystem.getRegion(t);
          return r ? r.geometries : []
        },
        getFormattedLabel: function (e, t) {
          var r = this._data.getName(e),
            n = this.getRegionModel(r),
            i = n.get("normal" === t ? ["label", "formatter"] : ["emphasis", "label", "formatter"]);
          null == i && (i = n.get(["label", "formatter"]));
          var a = {
            name: r
          };
          if ("function" == typeof i) return a.status = t, i(a);
          if ("string" == typeof i) {
            var o = a.seriesName;
            return i.replace("{a}", null != o ? o : "")
          }
          return r
        },
        defaultOption: {
          regions: []
        }
      });
    i.a.util.merge(h.prototype, l.a), i.a.util.merge(h.prototype, a.a), i.a.util.merge(h.prototype, o.a), i.a.util.merge(h.prototype, s.a), i.a.util.merge(h.prototype, u.a)
  }, function (e, t, r) {
    "use strict";
    var n = r(64),
      i = r(0),
      a = r.n(i),
      o = r(1),
      s = r(45),
      u = r(30);
    a.a.extendComponentView({
      type: "geo3D",
      __ecgl__: !0,
      init: function (e, t) {
        this._geo3DBuilder = new n.a(t), this.groupGL = new o.a.Node, this._lightRoot = new o.a.Node, this._sceneHelper = new u.a(this._lightRoot), this._sceneHelper.initLight(this._lightRoot), this._control = new s.a({
          zr: t.getZr()
        }), this._control.init()
      },
      render: function (e, t, r) {
        this.groupGL.add(this._geo3DBuilder.rootNode);
        var n = e.coordinateSystem;
        if (n && n.viewGL) {
          n.viewGL.add(this._lightRoot), e.get("show") ? n.viewGL.add(this.groupGL) : n.viewGL.remove(this.groupGL);
          var i = this._control;
          i.setViewGL(n.viewGL);
          var a = e.getModel("viewControl");
          i.setFromViewControlModel(a, 0), this._sceneHelper.setScene(n.viewGL.scene), this._sceneHelper.updateLight(e), n.viewGL.setPostEffect(e.getModel("postEffect"), r), n.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")), this._geo3DBuilder.update(e, t, r, 0, e.getData().count());
          var o = n.viewGL.isLinearSpace() ? "define" : "undefine";
          this._geo3DBuilder.rootNode.traverse(function (e) {
            e.material && e.material[o]("fragment", "SRGB_DECODE")
          }), i.off("update"), i.on("update", function () {
            r.dispatchAction({
              type: "geo3DChangeCamera",
              alpha: i.getAlpha(),
              beta: i.getBeta(),
              distance: i.getDistance(),
              center: i.getCenter(),
              from: this.uid,
              geo3DId: e.id
            })
          }), i.update()
        }
      },
      afterRender: function (e, t, r, n) {
        var i = n.renderer;
        this._sceneHelper.updateAmbientCubemap(i, e, r), this._sceneHelper.updateSkybox(i, e, r)
      },
      dispose: function () {
        this._control.dispose()
      }
    })
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r) {
      r = r || 2;
      var n = t && t.length,
        a = n ? t[0] * r : e.length,
        s = i(e, 0, a, r, !0),
        u = [];
      if (!s) return u;
      var l, h, d, f, p, m, g;
      if (n && (s = c(e, t, s, r)), e.length > 80 * r) {
        l = d = e[0], h = f = e[1];
        for (var _ = r; _ < a; _ += r) p = e[_], m = e[_ + 1], p < l && (l = p), m < h && (h = m), p > d && (d = p), m > f && (f = m);
        g = Math.max(d - l, f - h)
      }
      return o(s, u, r, l, h, g), u
    }

    function i(e, t, r, n, i) {
      var a, o;
      if (i === N(e, t, r, n) > 0)
        for (a = t; a < r; a += n) o = C(a, e[a], e[a + 1], o);
      else
        for (a = r - n; a >= t; a -= n) o = C(a, e[a], e[a + 1], o);
      return o && b(o, o.next) && (L(o), o = o.next), o
    }

    function a(e, t) {
      if (!e) return e;
      t || (t = e);
      var r, n = e;
      do {
        if (r = !1, n.steiner || !b(n, n.next) && 0 !== T(n.prev, n, n.next)) n = n.next;
        else {
          if (L(n), (n = t = n.prev) === n.next) return null;
          r = !0
        }
      } while (r || n !== t);
      return t
    }

    function o(e, t, r, n, i, c, d) {
      if (e) {
        !d && c && m(e, n, i, c);
        for (var f, p, g = e; e.prev !== e.next;)
          if (f = e.prev, p = e.next, c ? u(e, n, i, c) : s(e)) t.push(f.i / r), t.push(e.i / r), t.push(p.i / r), L(e), e = p.next, g = p.next;
          else if ((e = p) === g) {
          d ? 1 === d ? (e = l(e, t, r), o(e, t, r, n, i, c, 2)) : 2 === d && h(e, t, r, n, i, c) : o(a(e), t, r, n, i, c, 1);
          break
        }
      }
    }

    function s(e) {
      var t = e.prev,
        r = e,
        n = e.next;
      if (T(t, r, n) >= 0) return !1;
      for (var i = e.next.next; i !== e.prev;) {
        if (y(t.x, t.y, r.x, r.y, n.x, n.y, i.x, i.y) && T(i.prev, i, i.next) >= 0) return !1;
        i = i.next
      }
      return !0
    }

    function u(e, t, r, n) {
      var i = e.prev,
        a = e,
        o = e.next;
      if (T(i, a, o) >= 0) return !1;
      for (var s = i.x < a.x ? i.x < o.x ? i.x : o.x : a.x < o.x ? a.x : o.x, u = i.y < a.y ? i.y < o.y ? i.y : o.y : a.y < o.y ? a.y : o.y, l = i.x > a.x ? i.x > o.x ? i.x : o.x : a.x > o.x ? a.x : o.x, h = i.y > a.y ? i.y > o.y ? i.y : o.y : a.y > o.y ? a.y : o.y, c = _(s, u, t, r, n), d = _(l, h, t, r, n), f = e.nextZ; f && f.z <= d;) {
        if (f !== e.prev && f !== e.next && y(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) && T(f.prev, f, f.next) >= 0) return !1;
        f = f.nextZ
      }
      for (f = e.prevZ; f && f.z >= c;) {
        if (f !== e.prev && f !== e.next && y(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) && T(f.prev, f, f.next) >= 0) return !1;
        f = f.prevZ
      }
      return !0
    }

    function l(e, t, r) {
      var n = e;
      do {
        var i = n.prev,
          a = n.next.next;
        !b(i, a) && w(i, n, n.next, a) && S(i, a) && S(a, i) && (t.push(i.i / r), t.push(n.i / r), t.push(a.i / r), L(n), L(n.next), n = e = a), n = n.next
      } while (n !== e);
      return n
    }

    function h(e, t, r, n, i, s) {
      var u = e;
      do {
        for (var l = u.next.next; l !== u.prev;) {
          if (u.i !== l.i && x(u, l)) {
            var h = M(u, l);
            return u = a(u, u.next), h = a(h, h.next), o(u, t, r, n, i, s), void o(h, t, r, n, i, s)
          }
          l = l.next
        }
        u = u.next
      } while (u !== e)
    }

    function c(e, t, r, n) {
      var o, s, u, l, h, c = [];
      for (o = 0, s = t.length; o < s; o++) u = t[o] * n, l = o < s - 1 ? t[o + 1] * n : e.length, h = i(e, u, l, n, !1), h === h.next && (h.steiner = !0), c.push(v(h));
      for (c.sort(d), o = 0; o < c.length; o++) f(c[o], r), r = a(r, r.next);
      return r
    }

    function d(e, t) {
      return e.x - t.x
    }

    function f(e, t) {
      if (t = p(e, t)) {
        var r = M(t, e);
        a(r, r.next)
      }
    }

    function p(e, t) {
      var r, n = t,
        i = e.x,
        a = e.y,
        o = -1 / 0;
      do {
        if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
          var s = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
          if (s <= i && s > o) {
            if (o = s, s === i) {
              if (a === n.y) return n;
              if (a === n.next.y) return n.next
            }
            r = n.x < n.next.x ? n : n.next
          }
        }
        n = n.next
      } while (n !== t);
      if (!r) return null;
      if (i === o) return r.prev;
      var u, l = r,
        h = r.x,
        c = r.y,
        d = 1 / 0;
      for (n = r.next; n !== l;) i >= n.x && n.x >= h && i !== n.x && y(a < c ? i : o, a, h, c, a < c ? o : i, a, n.x, n.y) && ((u = Math.abs(a - n.y) / (i - n.x)) < d || u === d && n.x > r.x) && S(n, e) && (r = n, d = u), n = n.next;
      return r
    }

    function m(e, t, r, n) {
      var i = e;
      do {
        null === i.z && (i.z = _(i.x, i.y, t, r, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next
      } while (i !== e);
      i.prevZ.nextZ = null, i.prevZ = null, g(i)
    }

    function g(e) {
      var t, r, n, i, a, o, s, u, l = 1;
      do {
        for (r = e, e = null, a = null, o = 0; r;) {
          for (o++, n = r, s = 0, t = 0; t < l && (s++, n = n.nextZ); t++);
          for (u = l; s > 0 || u > 0 && n;) 0 !== s && (0 === u || !n || r.z <= n.z) ? (i = r, r = r.nextZ, s--) : (i = n, n = n.nextZ, u--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
          r = n
        }
        a.nextZ = null, l *= 2
      } while (o > 1);
      return e
    }

    function _(e, t, r, n, i) {
      return e = 32767 * (e - r) / i, t = 32767 * (t - n) / i, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e | t << 1
    }

    function v(e) {
      var t = e,
        r = e;
      do {
        t.x < r.x && (r = t), t = t.next
      } while (t !== e);
      return r
    }

    function y(e, t, r, n, i, a, o, s) {
      return (i - o) * (t - s) - (e - o) * (a - s) >= 0 && (e - o) * (n - s) - (r - o) * (t - s) >= 0 && (r - o) * (a - s) - (i - o) * (n - s) >= 0
    }

    function x(e, t) {
      return e.next.i !== t.i && e.prev.i !== t.i && !E(e, t) && S(e, t) && S(t, e) && A(e, t)
    }

    function T(e, t, r) {
      return (t.y - e.y) * (r.x - t.x) - (t.x - e.x) * (r.y - t.y)
    }

    function b(e, t) {
      return e.x === t.x && e.y === t.y
    }

    function w(e, t, r, n) {
      return !!(b(e, t) && b(r, n) || b(e, n) && b(r, t)) || T(e, t, r) > 0 != T(e, t, n) > 0 && T(r, n, e) > 0 != T(r, n, t) > 0
    }

    function E(e, t) {
      var r = e;
      do {
        if (r.i !== e.i && r.next.i !== e.i && r.i !== t.i && r.next.i !== t.i && w(r, r.next, e, t)) return !0;
        r = r.next
      } while (r !== e);
      return !1
    }

    function S(e, t) {
      return T(e.prev, e, e.next) < 0 ? T(e, t, e.next) >= 0 && T(e, e.prev, t) >= 0 : T(e, t, e.prev) < 0 || T(e, e.next, t) < 0
    }

    function A(e, t) {
      var r = e,
        n = !1,
        i = (e.x + t.x) / 2,
        a = (e.y + t.y) / 2;
      do {
        r.y > a != r.next.y > a && r.next.y !== r.y && i < (r.next.x - r.x) * (a - r.y) / (r.next.y - r.y) + r.x && (n = !n), r = r.next
      } while (r !== e);
      return n
    }

    function M(e, t) {
      var r = new D(e.i, e.x, e.y),
        n = new D(t.i, t.x, t.y),
        i = e.next,
        a = t.prev;
      return e.next = t, t.prev = e, r.next = i, i.prev = r, n.next = r, r.prev = n, a.next = n, n.prev = a, n
    }

    function C(e, t, r, n) {
      var i = new D(e, t, r);
      return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i
    }

    function L(e) {
      e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
    }

    function D(e, t, r) {
      this.i = e, this.x = t, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }

    function N(e, t, r, n) {
      for (var i = 0, a = t, o = r - n; a < r; a += n) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
      return i
    }
    t.a = n, n.deviation = function (e, t, r, n) {
      var i = t && t.length,
        a = i ? t[0] * r : e.length,
        o = Math.abs(N(e, 0, a, r));
      if (i)
        for (var s = 0, u = t.length; s < u; s++) {
          var l = t[s] * r,
            h = s < u - 1 ? t[s + 1] * r : e.length;
          o -= Math.abs(N(e, l, h, r))
        }
      var c = 0;
      for (s = 0; s < n.length; s += 3) {
        var d = n[s] * r,
          f = n[s + 1] * r,
          p = n[s + 2] * r;
        c += Math.abs((e[d] - e[p]) * (e[f + 1] - e[d + 1]) - (e[d] - e[f]) * (e[p + 1] - e[d + 1]))
      }
      return 0 === o && 0 === c ? 0 : Math.abs((c - o) / o)
    }
  }, function (e, t, r) {
    function n(e) {
      i.each(e.regions, function (e) {
        var t = a[e.name];
        if (t) {
          var r = e.center;
          r[0] += t[0] / 10.5, r[1] += -t[1] / 14
        }
      })
    }
    var i = r(13),
      a = {
        "南海诸岛": [32, 80],
        "广东": [0, -10],
        "香港": [10, 5],
        "澳门": [-10, 10],
        "天津": [5, 5]
      };
    e.exports = n
  }, function (e, t, r) {
    function n(e) {
      i.each(e.regions, function (e) {
        var t = a[e.name];
        if (t) {
          var r = e.center;
          r[0] = t[0], r[1] = t[1]
        }
      })
    }
    var i = r(13),
      a = {
        Russia: [100, 60],
        "United States": [-99, 38],
        "United States of America": [-99, 38]
      };
    e.exports = n
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n);
    r(208), r(209), r(211);
    i.a.registerAction({
      type: "globeChangeCamera",
      event: "globecamerachanged",
      update: "series:updateCamera"
    }, function (e, t) {
      t.eachComponent({
        mainType: "globe",
        query: e
      }, function (t) {
        t.setView(e)
      })
    }), i.a.registerAction({
      type: "globeUpdateDisplacment",
      event: "globedisplacementupdated",
      update: "update"
    }, function (e, t) {})
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      e.id = e.id || e.name || t + ""
    }
    var i = r(0),
      a = r.n(i),
      o = r(44),
      s = r(28),
      u = r(29),
      l = r(31),
      h = a.a.extendComponentModel({
        type: "globe",
        layoutMode: "box",
        coordinateSystem: null,
        init: function () {
          h.superApply(this, "init", arguments), a.a.util.each(this.option.layers, function (e, t) {
            a.a.util.merge(e, this.defaultLayerOption), n(e, t)
          }, this)
        },
        mergeOption: function (e) {
          function t(e) {
            return a.a.util.reduce(e, function (e, t, r) {
              return n(t, r), e[t.id] = t, e
            }, {})
          }
          var r = this.option.layers;
          if (this.option.layers = null, h.superApply(this, "mergeOption", arguments), r && r.length) {
            var i = t(e.layers),
              o = t(r);
            for (var s in i) o[s] ? a.a.util.merge(o[s], i[s], !0) : r.push(e.layers[s]);
            this.option.layers = r
          }
          a.a.util.each(this.option.layers, function (e) {
            a.a.util.merge(e, this.defaultLayerOption)
          }, this)
        },
        optionUpdated: function () {
          this.updateDisplacementHash()
        },
        defaultLayerOption: {
          show: !0,
          type: "overlay"
        },
        defaultOption: {
          show: !0,
          zlevel: -10,
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          environment: "auto",
          baseColor: "#fff",
          baseTexture: "",
          heightTexture: "",
          displacementTexture: "",
          displacementScale: 0,
          displacementQuality: "medium",
          globeRadius: 100,
          globeOuterRadius: 150,
          shading: "lambert",
          light: {
            main: {
              time: ""
            }
          },
          viewControl: {
            autoRotate: !0,
            panSensitivity: 0,
            targetCoord: null
          },
          layers: []
        },
        setDisplacementData: function (e, t, r) {
          this.displacementData = e, this.displacementWidth = t, this.displacementHeight = r
        },
        getDisplacementTexture: function () {
          return this.get("displacementTexture") || this.get("heightTexture")
        },
        getDisplacemenScale: function () {
          var e = this.getDisplacementTexture(),
            t = this.get("displacementScale");
          return e && "none" !== e || (t = 0), t
        },
        hasDisplacement: function () {
          return this.getDisplacemenScale() > 0
        },
        _displacementChanged: !0,
        _displacementScale: 0,
        updateDisplacementHash: function () {
          var e = this.getDisplacementTexture(),
            t = this.getDisplacemenScale();
          this._displacementChanged = this._displacementTexture !== e || this._displacementScale !== t, this._displacementTexture = e, this._displacementScale = t
        },
        isDisplacementChanged: function () {
          return this._displacementChanged
        }
      });
    a.a.util.merge(h.prototype, o.a), a.a.util.merge(h.prototype, s.a), a.a.util.merge(h.prototype, u.a), a.a.util.merge(h.prototype, l.a)
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(1),
      o = r(45),
      s = r(30),
      u = r(210),
      l = r(2);
    i.a.extendComponentView({
      type: "globe",
      __ecgl__: !0,
      _displacementScale: 0,
      init: function (e, t) {
        this.groupGL = new a.a.Node, this._sphereGeometry = new a.a.SphereGeometry({
          widthSegments: 200,
          heightSegments: 100,
          dynamic: !0
        }), this._overlayGeometry = new a.a.SphereGeometry({
          widthSegments: 80,
          heightSegments: 40
        }), this._planeGeometry = new a.a.PlaneGeometry, this._earthMesh = new a.a.Mesh({
          renderNormal: !0
        }), this._lightRoot = new a.a.Node, this._sceneHelper = new s.a, this._sceneHelper.initLight(this._lightRoot), this.groupGL.add(this._earthMesh), this._control = new o.a({
          zr: t.getZr()
        }), this._control.init(), this._layerMeshes = {}
      },
      render: function (e, t, r) {
        var n = e.coordinateSystem,
          i = e.get("shading");
        n.viewGL.add(this._lightRoot), e.get("show") ? n.viewGL.add(this.groupGL) : n.viewGL.remove(this.groupGL), this._sceneHelper.setScene(n.viewGL.scene), n.viewGL.setPostEffect(e.getModel("postEffect"), r), n.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));
        var o = this._earthMesh;
        o.geometry = this._sphereGeometry;
        var s = "ecgl." + i;
        o.material && o.material.shader.name === s || (o.material = a.a.createMaterial(s)), a.a.setMaterialFromModel(i, o.material, e, r), ["roughnessMap", "metalnessMap", "detailMap", "normalMap"].forEach(function (e) {
          var t = o.material.get(e);
          t && (t.flipY = !1)
        }), o.material.set("color", a.a.parseColor(e.get("baseColor")));
        var u = .99 * n.radius;
        o.scale.set(u, u, u);
        var l = o.material.setTextureImage("diffuseMap", e.get("baseTexture"), r, {
          flipY: !1,
          anisotropic: 8
        });
        l && l.surface && l.surface.attachToMesh(o);
        var h = o.material.setTextureImage("bumpMap", e.get("heightTexture"), r, {
          flipY: !1,
          anisotropic: 8
        });
        h && h.surface && h.surface.attachToMesh(o), o.material[e.get("postEffect.enable") ? "define" : "undefine"]("fragment", "SRGB_DECODE"), this._updateLight(e, r), this._displaceVertices(e, r), this._updateViewControl(e, r), this._updateLayers(e, r)
      },
      afterRender: function (e, t, r, n) {
        var i = n.renderer;
        this._sceneHelper.updateAmbientCubemap(i, e, r), this._sceneHelper.updateSkybox(i, e, r)
      },
      _updateLayers: function (e, t) {
        var r = e.coordinateSystem,
          n = e.get("layers"),
          o = r.radius,
          s = [],
          u = [],
          h = [],
          c = [];
        i.a.util.each(n, function (e) {
          var n = new i.a.Model(e),
            d = n.get("type"),
            f = a.a.loadTexture(n.get("texture"), t, {
              flipY: !1,
              anisotropic: 8
            });
          if (f.surface && f.surface.attachToMesh(this._earthMesh), "blend" === d) {
            var p = n.get("blendTo"),
              m = l.a.firstNotNull(n.get("intensity"), 1);
            "emission" === p ? (h.push(f), c.push(m)) : (s.push(f), u.push(m))
          } else {
            var g = n.get("id"),
              _ = this._layerMeshes[g];
            _ || (_ = this._layerMeshes[g] = new a.a.Mesh({
              geometry: this._overlayGeometry,
              castShadow: !1,
              ignorePicking: !0
            }));
            "lambert" === n.get("shading") ? (_.material = _.__lambertMaterial || new a.a.Material({
              autoUpdateTextureStatus: !1,
              shader: a.a.createShader("ecgl.lambert"),
              transparent: !0,
              depthMask: !1
            }), _.__lambertMaterial = _.material) : (_.material = _.__colorMaterial || new a.a.Material({
              autoUpdateTextureStatus: !1,
              shader: a.a.createShader("ecgl.color"),
              transparent: !0,
              depthMask: !1
            }), _.__colorMaterial = _.material), _.material.enableTexture("diffuseMap");
            var v = n.get("distance"),
              y = o + (null == v ? r.radius / 100 : v);
            _.scale.set(y, y, y), o = y;
            var x = this._blankTexture || (this._blankTexture = a.a.createBlankTexture("rgba(255, 255, 255, 0)"));
            _.material.set("diffuseMap", x), a.a.loadTexture(n.get("texture"), t, {
              flipY: !1,
              anisotropic: 8
            }, function (e) {
              e.surface && e.surface.attachToMesh(_), _.material.set("diffuseMap", e), t.getZr().refresh()
            }), n.get("show") ? this.groupGL.add(_) : this.groupGL.remove(_)
          }
        }, this);
        var d = this._earthMesh.material;
        d.define("fragment", "LAYER_DIFFUSEMAP_COUNT", s.length), d.define("fragment", "LAYER_EMISSIVEMAP_COUNT", h.length), d.set("layerDiffuseMap", s), d.set("layerDiffuseIntensity", u), d.set("layerEmissiveMap", h), d.set("layerEmissionIntensity", c);
        var f = e.getModel("debug.wireframe");
        if (f.get("show")) {
          d.define("both", "WIREFRAME_TRIANGLE");
          var p = a.a.parseColor(f.get("lineStyle.color") || "rgba(0,0,0,0.5)"),
            m = l.a.firstNotNull(f.get("lineStyle.width"), 1);
          d.set("wireframeLineWidth", m), d.set("wireframeLineColor", p)
        } else d.undefine("both", "WIREFRAME_TRIANGLE")
      },
      _updateViewControl: function (e, t) {
        function r() {
          return {
            type: "globeChangeCamera",
            alpha: o.getAlpha(),
            beta: o.getBeta(),
            distance: o.getDistance() - n.radius,
            center: o.getCenter(),
            from: a.uid,
            globeId: e.id
          }
        }
        var n = e.coordinateSystem,
          i = e.getModel("viewControl"),
          a = (n.viewGL.camera, this),
          o = this._control;
        o.setViewGL(n.viewGL);
        var s, u, l = i.get("targetCoord");
        null != l && (u = l[0] + 90, s = l[1]), o.setFromViewControlModel(i, {
          baseDistance: n.radius,
          alpha: s,
          beta: u
        }), o.off("update"), o.on("update", function () {
          t.dispatchAction(r())
        })
      },
      _displaceVertices: function (e, t) {
        var r = e.get("displacementQuality"),
          n = e.get("debug.wireframe.show"),
          i = e.coordinateSystem;
        if (e.isDisplacementChanged() || r !== this._displacementQuality || n !== this._showDebugWireframe) {
          this._displacementQuality = r, this._showDebugWireframe = n;
          var a = this._sphereGeometry,
            o = {
              low: 100,
              medium: 200,
              high: 400,
              ultra: 800
            } [r] || 200,
            s = o / 2;
          (a.widthSegments !== o || n) && (a.widthSegments = o, a.heightSegments = s, a.build()), this._doDisplaceVertices(a, i), n && a.generateBarycentric()
        }
      },
      _doDisplaceVertices: function (e, t) {
        var r = e.attributes.position.value,
          n = e.attributes.texcoord0.value,
          i = e.__originalPosition;
        i && i.length === r.length || (i = new Float32Array(r.length), i.set(r), e.__originalPosition = i);
        for (var a = t.displacementWidth, o = t.displacementHeight, s = t.displacementData, u = 0; u < e.vertexCount; u++) {
          var l = 3 * u,
            h = 2 * u,
            c = i[l + 1],
            d = i[l + 2],
            f = i[l + 3],
            p = n[h++],
            m = n[h++],
            g = Math.round(p * (a - 1)),
            _ = Math.round(m * (o - 1)),
            v = _ * a + g,
            y = s ? s[v] : 0;
          r[l + 1] = c + c * y, r[l + 2] = d + d * y, r[l + 3] = f + f * y
        }
        e.generateVertexNormals(), e.dirty(), e.updateBoundingBox()
      },
      _updateLight: function (e, t) {
        var r = this._earthMesh;
        this._sceneHelper.updateLight(e);
        var n = this._sceneHelper.mainLight,
          a = e.get("light.main.time") || new Date,
          o = u.a.getPosition(i.a.number.parseDate(a), 0, 0),
          s = Math.cos(o.altitude);
        n.position.y = -s * Math.cos(o.azimuth), n.position.x = Math.sin(o.altitude), n.position.z = s * Math.sin(o.azimuth), n.lookAt(r.getWorldPosition())
      },
      dispose: function (e, t) {
        this.groupGL.removeAll(), this._control.dispose()
      }
    })
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return e.valueOf() / x - .5 + T
    }

    function i(e) {
      return n(e) - b
    }

    function a(e, t) {
      return v(p(e) * m(w) - g(t) * p(w), m(e))
    }

    function o(e, t) {
      return _(p(t) * m(w) + m(t) * p(w) * p(e))
    }

    function s(e, t, r) {
      return v(p(e), m(e) * p(t) - g(r) * m(t))
    }

    function u(e, t, r) {
      return _(p(t) * p(r) + m(t) * m(r) * m(e))
    }

    function l(e, t) {
      return y * (280.16 + 360.9856235 * e) - t
    }

    function h(e) {
      return y * (357.5291 + .98560028 * e)
    }

    function c(e) {
      return e + y * (1.9148 * p(e) + .02 * p(2 * e) + 3e-4 * p(3 * e)) + 102.9372 * y + f
    }

    function d(e) {
      var t = h(e),
        r = c(t);
      return {
        dec: o(r, 0),
        ra: a(r, 0)
      }
    }
    var f = Math.PI,
      p = Math.sin,
      m = Math.cos,
      g = Math.tan,
      _ = Math.asin,
      v = Math.atan2,
      y = f / 180,
      x = 864e5,
      T = 2440588,
      b = 2451545,
      w = 23.4397 * y,
      E = {};
    E.getPosition = function (e, t, r) {
      var n = y * -r,
        a = y * t,
        o = i(e),
        h = d(o),
        c = l(o, n) - h.ra;
      return {
        azimuth: s(c, a, h.dec),
        altitude: u(c, a, h.dec)
      }
    }, t.a = E
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      var r = document.createElement("canvas"),
        n = r.getContext("2d"),
        i = e.width,
        a = e.height;
      r.width = i, r.height = a, n.drawImage(e, 0, 0, i, a);
      for (var o = n.getImageData(0, 0, i, a).data, s = new Float32Array(o.length / 4), u = 0; u < o.length / 4; u++) {
        var l = o[4 * u];
        s[u] = l / 255 * t
      }
      return {
        data: s,
        width: i,
        height: a
      }
    }

    function i(e, t) {
      var r = e.getBoxLayoutParams(),
        n = h.a.getLayoutRect(r, {
          width: t.getWidth(),
          height: t.getHeight()
        });
      n.y = t.getHeight() - n.y - n.height, this.viewGL.setViewport(n.x, n.y, n.width, n.height, t.getDevicePixelRatio()), this.radius = e.get("globeRadius");
      var i = e.get("globeOuterRadius");
      this.altitudeAxis && this.altitudeAxis.setExtent(0, i - this.radius)
    }

    function a(e, t) {
      var r = [1 / 0, -1 / 0];
      if (e.eachSeries(function (e) {
          if (e.coordinateSystem === this) {
            var t = e.getData(),
              n = e.coordDimToDataDim("alt"),
              i = n && n[0];
            if (i) {
              var a = t.getDataExtent(i, !0);
              r[0] = Math.min(r[0], a[0]), r[1] = Math.max(r[1], a[1])
            }
          }
        }, this), r && isFinite(r[1] - r[0])) {
        var n = u.a.helper.createScale(r, {
          type: "value",
          min: "dataMin",
          max: "dataMax"
        });
        this.altitudeAxis = new u.a.Axis("altitude", n), this.resize(this.model, t)
      }
    }
    var o = r(212),
      s = r(0),
      u = r.n(s),
      l = r(47),
      h = r.n(l),
      c = r(22),
      d = r(2),
      f = r(1),
      p = {
        dimensions: o.a.prototype.dimensions,
        create: function (e, t) {
          var r = [];
          return e.eachComponent("globe", function (e) {
            e.__viewGL = e.__viewGL || new c.a;
            var n = new o.a;
            n.viewGL = e.__viewGL, e.coordinateSystem = n, n.model = e, r.push(n), n.resize = i, n.resize(e, t), n.update = a
          }), e.eachSeries(function (t) {
            if ("globe" === t.get("coordinateSystem")) {
              var r = t.getReferringComponents("globe")[0];
              if (r || (r = e.getComponent("globe")), !r) throw new Error('globe "' + d.a.firstNotNull(t.get("globe3DIndex"), t.get("globe3DId"), 0) + '" not found');
              var n = r.coordinateSystem;
              t.coordinateSystem = n
            }
          }), e.eachComponent("globe", function (e, r) {
            var i = e.coordinateSystem,
              a = e.getDisplacementTexture(),
              o = e.getDisplacemenScale();
            if (e.isDisplacementChanged()) {
              if (e.hasDisplacement()) {
                var s = !0;
                f.a.loadTexture(a, t, function (r) {
                  var i = r.image,
                    a = n(i, o);
                  e.setDisplacementData(a.data, a.width, a.height), s || t.dispatchAction({
                    type: "globeUpdateDisplacment"
                  })
                }), s = !1
              } else i.setDisplacementData(null, 0, 0);
              i.setDisplacementData(e.displacementData, e.displacementWidth, e.displacementHeight)
            }
          }), r
        }
      };
    u.a.registerCoordinateSystem("globe", p)
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      this.radius = e, this.viewGL = null, this.altitudeAxis, this.displacementData = null, this.displacementWidth, this.displacementHeight
    }
    var i = r(6),
      a = i.a.vec3;
    n.prototype = {
      constructor: n,
      dimensions: ["lng", "lat", "alt"],
      type: "globe",
      containPoint: function () {},
      setDisplacementData: function (e, t, r) {
        this.displacementData = e, this.displacementWidth = t, this.displacementHeight = r
      },
      _getDisplacementScale: function (e, t) {
        var r = (e + 180) / 360 * (this.displacementWidth - 1),
          n = (90 - t) / 180 * (this.displacementHeight - 1),
          i = Math.round(r) + Math.round(n) * this.displacementWidth;
        return this.displacementData[i]
      },
      dataToPoint: function (e, t) {
        var r = e[0],
          n = e[1],
          i = e[2] || 0,
          a = this.radius;
        this.displacementData && (a *= 1 + this._getDisplacementScale(r, n)), this.altitudeAxis && (a += this.altitudeAxis.dataToCoord(i)), r = r * Math.PI / 180, n = n * Math.PI / 180;
        var o = Math.cos(n) * a;
        return t = t || [], t[0] = -o * Math.cos(r + Math.PI), t[1] = Math.sin(n) * a, t[2] = o * Math.sin(r + Math.PI), t
      },
      pointToData: function (e, t) {
        var r = e[0],
          n = e[1],
          i = e[2],
          o = a.len(e);
        r /= o, n /= o, i /= o;
        var s = Math.asin(n),
          u = Math.atan2(i, -r);
        u < 0 && (u = 2 * Math.PI + u);
        var l = 180 * s / Math.PI,
          h = 180 * u / Math.PI - 180;
        return t = t || [], t[0] = h, t[1] = l, t[2] = o - this.radius, this.altitudeAxis && (t[2] = this.altitudeAxis.coordToData(t[2])), t
      }
    }, t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n);
    r(214), r(216), r(217);
    i.a.registerAction({
      type: "mapbox3DChangeCamera",
      event: "mapbox3dcamerachanged",
      update: "mapbox3D:updateCamera"
    }, function (e, t) {
      t.eachComponent({
        mainType: "mapbox3D",
        query: e
      }, function (t) {
        t.setMapboxCameraOption(e)
      })
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(215),
      i = r(0),
      a = r.n(i),
      o = r(101),
      s = Object(o.a)("mapbox3D", n.a, function (e) {
        e.forEach(function (e) {
          e.setCameraOption(e.model.getMapboxCameraOption())
        })
      });
    a.a.registerCoordinateSystem("mapbox3D", s)
  }, function (e, t, r) {
    "use strict";

    function n() {
      i.a.apply(this, arguments)
    }
    var i = r(100);
    n.prototype = new i.a, n.prototype.constructor = n, n.prototype.type = "mapbox3D", t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(28),
      o = r(29),
      s = ["zoom", "center", "pitch", "bearing"],
      u = i.a.extendComponentModel({
        type: "mapbox3D",
        layoutMode: "box",
        coordinateSystem: null,
        defaultOption: {
          zlevel: -10,
          style: "mapbox://styles/mapbox/light-v9",
          center: [0, 0],
          zoom: 0,
          pitch: 0,
          bearing: 0,
          light: {
            main: {
              alpha: 20,
              beta: 30
            }
          },
          altitudeScale: 1,
          boxHeight: "auto"
        },
        getMapboxCameraOption: function () {
          var e = this;
          return s.reduce(function (t, r) {
            return t[r] = e.get(r), t
          }, {})
        },
        setMapboxCameraOption: function (e) {
          null != e && s.forEach(function (t) {
            null != e[t] && (this.option[t] = e[t])
          }, this)
        },
        getMapbox: function () {
          return this._mapbox
        },
        setMapbox: function (e) {
          this._mapbox = e
        }
      });
    i.a.util.merge(u.prototype, a.a), i.a.util.merge(u.prototype, o.a)
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(218),
      o = r(30),
      s = r(1),
      u = r(102);
    s.a.Shader.import(u.a);
    i.a.extendComponentView({
      type: "mapbox3D",
      __ecgl__: !0,
      init: function (e, t) {
        var r = t.getZr();
        this._zrLayer = new a.a("mapbox3D", r), r.painter.insertLayer(-1e3, this._zrLayer), this._lightRoot = new s.a.Node, this._sceneHelper = new o.a(this._lightRoot), this._sceneHelper.initLight(this._lightRoot);
        var n = this._zrLayer.getMapbox(),
          i = this._dispatchInteractAction.bind(this, t, n);
        ["zoom", "rotate", "drag", "pitch", "rotate", "move"].forEach(function (e) {
          n.on(e, i)
        }), this._groundMesh = new s.a.Mesh({
          geometry: new s.a.PlaneGeometry,
          material: new s.a.Material({
            shader: new s.a.Shader({
              vertex: s.a.Shader.source("ecgl.displayShadow.vertex"),
              fragment: s.a.Shader.source("ecgl.displayShadow.fragment")
            }),
            depthMask: !1
          }),
          renderOrder: -100,
          culling: !1,
          castShadow: !1,
          $ignorePicking: !0,
          renderNormal: !0
        })
      },
      render: function (e, t, r) {
        var n = this._zrLayer.getMapbox(),
          i = e.get("style"),
          a = JSON.stringify(i);
        a !== this._oldStyleStr && i && n.setStyle(i), this._oldStyleStr = a, n.setCenter(e.get("center")), n.setZoom(e.get("zoom")), n.setPitch(e.get("pitch")), n.setBearing(e.get("bearing")), e.setMapbox(n);
        var o = e.coordinateSystem;
        o.viewGL.scene.add(this._lightRoot), o.viewGL.add(this._groundMesh), this._updateGroundMesh(), this._sceneHelper.setScene(o.viewGL.scene), this._sceneHelper.updateLight(e), o.viewGL.setPostEffect(e.getModel("postEffect"), r), o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")), this._mapbox3DModel = e
      },
      afterRender: function (e, t, r, n) {
        var i = n.renderer;
        this._sceneHelper.updateAmbientCubemap(i, e, r), this._sceneHelper.updateSkybox(i, e, r), e.coordinateSystem.viewGL.scene.traverse(function (e) {
          e.material && (e.material.define("fragment", "NORMAL_UP_AXIS", 2), e.material.define("fragment", "NORMAL_FRONT_AXIS", 1))
        })
      },
      updateCamera: function (e, t, r, n) {
        e.coordinateSystem.setCameraOption(n), this._updateGroundMesh(), r.getZr().refresh()
      },
      _dispatchInteractAction: function (e, t, r) {
        e.dispatchAction({
          type: "mapbox3DChangeCamera",
          pitch: t.getPitch(),
          zoom: t.getZoom(),
          center: t.getCenter().toArray(),
          bearing: t.getBearing(),
          mapbox3DId: this._mapbox3DModel && this._mapbox3DModel.id
        })
      },
      _updateGroundMesh: function () {
        if (this._mapbox3DModel) {
          var e = this._mapbox3DModel.coordinateSystem,
            t = e.dataToPoint(e.center);
          this._groundMesh.position.set(t[0], t[1], -.001);
          var r = new s.a.Plane(new s.a.Vector3(0, 0, 1), 0),
            n = e.viewGL.camera.castRay(new s.a.Vector2(-1, -1)),
            i = e.viewGL.camera.castRay(new s.a.Vector2(1, 1)),
            a = n.intersectPlane(r),
            o = i.intersectPlane(r),
            u = a.dist(o) / e.viewGL.rootNode.scale.x;
          this._groundMesh.scale.set(u, u, 1)
        }
      },
      dispose: function (e, t) {
        this._zrLayer && this._zrLayer.dispose(), t.getZr().painter.delLayer(-1e3)
      }
    })
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (this.id = e, this.zr = t, this.dom = document.createElement("div"), this.dom.style.cssText = "position:absolute;left:0;right:0;top:0;bottom:0;", !mapboxgl) throw new Error("Mapbox GL library must be included. See https://www.mapbox.com/mapbox-gl-js/api/");
      this._mapbox = new mapboxgl.Map({
        container: this.dom
      }), this._initEvents()
    }
    n.prototype.resize = function () {
      this._mapbox.resize()
    }, n.prototype.getMapbox = function () {
      return this._mapbox
    }, n.prototype.clear = function () {}, n.prototype.refresh = function () {
      this._mapbox.resize()
    };
    var i = ["mousedown", "mouseup", "click", "dblclick", "mousemove", "mousewheel", "wheel", "touchstart", "touchend", "touchmove", "touchcancel"];
    n.prototype._initEvents = function () {
      var e = this._mapbox.getCanvasContainer();
      this._handlers = this._handlers || {
        contextmenu: function (e) {
          return e.preventDefault(), !1
        }
      }, i.forEach(function (t) {
        this._handlers[t] = function (t) {
          var r = {};
          for (var n in t) r[n] = t[n];
          r.bubbles = !1;
          var i = new t.constructor(t.type, r);
          e.dispatchEvent(i)
        }, this.zr.dom.addEventListener(t, this._handlers[t])
      }, this), this.zr.dom.addEventListener("contextmenu", this._handlers.contextmenu)
    }, n.prototype.dispose = function () {
      i.forEach(function (e) {
        this.zr.dom.removeEventListener(e, this._handlers[e])
      }, this)
    }, t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n);
    r(220), r(222), r(223);
    i.a.registerAction({
      type: "maptalks3DChangeCamera",
      event: "maptalks3dcamerachanged",
      update: "maptalks3D:updateCamera"
    }, function (e, t) {
      t.eachComponent({
        mainType: "maptalks3D",
        query: e
      }, function (t) {
        t.setMaptalksCameraOption(e)
      })
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(221),
      i = r(0),
      a = r.n(i),
      o = r(101),
      s = Object(o.a)("maptalks3D", n.a, function (e) {
        e.forEach(function (e) {
          e.setCameraOption(e.model.getMaptalksCameraOption())
        })
      });
    a.a.registerCoordinateSystem("maptalks3D", s)
  }, function (e, t, r) {
    "use strict";

    function n() {
      i.a.apply(this, arguments), this.maxPitch = 85, this.zoomOffset = 1
    }
    var i = r(100);
    n.prototype = new i.a, n.prototype.constructor = n, n.prototype.type = "maptalks3D", t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(28),
      o = r(29),
      s = ["zoom", "center", "pitch", "bearing"],
      u = i.a.extendComponentModel({
        type: "maptalks3D",
        layoutMode: "box",
        coordinateSystem: null,
        defaultOption: {
          zlevel: -10,
          urlTemplate: "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
          attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
          center: [0, 0],
          zoom: 0,
          pitch: 0,
          bearing: 0,
          light: {
            main: {
              alpha: 20,
              beta: 30
            }
          },
          altitudeScale: 1,
          boxHeight: "auto"
        },
        getMaptalksCameraOption: function () {
          var e = this;
          return s.reduce(function (t, r) {
            return t[r] = e.get(r), t
          }, {})
        },
        setMaptalksCameraOption: function (e) {
          null != e && s.forEach(function (t) {
            null != e[t] && (this.option[t] = e[t])
          }, this)
        },
        getMaptalks: function () {
          return this._maptalks
        },
        setMaptalks: function (e) {
          this._maptalks = e
        }
      });
    i.a.util.merge(u.prototype, a.a), i.a.util.merge(u.prototype, o.a)
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(224),
      o = r(30),
      s = r(1),
      u = r(102);
    s.a.Shader.import(u.a);
    i.a.extendComponentView({
      type: "maptalks3D",
      __ecgl__: !0,
      init: function (e, t) {
        this._groundMesh = new s.a.Mesh({
          geometry: new s.a.PlaneGeometry,
          material: new s.a.Material({
            shader: new s.a.Shader({
              vertex: s.a.Shader.source("ecgl.displayShadow.vertex"),
              fragment: s.a.Shader.source("ecgl.displayShadow.fragment")
            }),
            depthMask: !1
          }),
          renderOrder: -100,
          culling: !1,
          castShadow: !1,
          $ignorePicking: !0,
          renderNormal: !0
        })
      },
      _initMaptalksLayer: function (e, t) {
        var r = t.getZr();
        this._zrLayer = new a.a("maptalks3D", r, e.get("center"), e.get("zoom")), r.painter.insertLayer(-1e3, this._zrLayer), this._lightRoot = new s.a.Node, this._sceneHelper = new o.a(this._lightRoot), this._sceneHelper.initLight(this._lightRoot);
        var n = this._zrLayer.getMaptalks(),
          i = this._dispatchInteractAction.bind(this, t, n);
        ["zoomend", "zooming", "zoomstart", "dragrotating", "pitch", "pitchend", "movestart", "moving", "moveend", "resize", "touchstart", "touchmove", "touchend"].forEach(function (e) {
          n.on(e, i)
        })
      },
      render: function (e, t, r) {
        this._zrLayer || this._initMaptalksLayer(e, r);
        var n = this._zrLayer.getMaptalks(),
          i = e.get("urlTemplate"),
          a = n.getBaseLayer();
        i !== this._oldUrlTemplate && (a ? a.setOptions({
          urlTemplate: i,
          attribution: e.get("attribution")
        }) : (a = new maptalks.TileLayer("maptalks-echarts-gl-baselayer", {
          urlTemplate: i,
          subdomains: ["a", "b", "c"],
          attribution: e.get("attribution")
        }), n.setBaseLayer(a))), this._oldUrlTemplate = i, n.setCenter(e.get("center")), n.setZoom(e.get("zoom"), {
          animation: !1
        }), n.setPitch(e.get("pitch")), n.setBearing(e.get("bearing")), e.setMaptalks(n);
        var o = e.coordinateSystem;
        o.viewGL.scene.add(this._lightRoot), o.viewGL.add(this._groundMesh), this._updateGroundMesh(), this._sceneHelper.setScene(o.viewGL.scene), this._sceneHelper.updateLight(e), o.viewGL.setPostEffect(e.getModel("postEffect"), r), o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")), this._maptalks3DModel = e
      },
      afterRender: function (e, t, r, n) {
        var i = n.renderer;
        this._sceneHelper.updateAmbientCubemap(i, e, r), this._sceneHelper.updateSkybox(i, e, r), e.coordinateSystem.viewGL.scene.traverse(function (e) {
          e.material && (e.material.define("fragment", "NORMAL_UP_AXIS", 2), e.material.define("fragment", "NORMAL_FRONT_AXIS", 1))
        })
      },
      updateCamera: function (e, t, r, n) {
        e.coordinateSystem.setCameraOption(n), this._updateGroundMesh(), r.getZr().refresh()
      },
      _dispatchInteractAction: function (e, t, r) {
        e.dispatchAction({
          type: "maptalks3DChangeCamera",
          pitch: t.getPitch(),
          zoom: t.getZoom(),
          center: t.getCenter().toArray(),
          bearing: t.getBearing(),
          maptalks3DId: this._maptalks3DModel && this._maptalks3DModel.id
        })
      },
      _updateGroundMesh: function () {
        if (this._maptalks3DModel) {
          var e = this._maptalks3DModel.coordinateSystem,
            t = e.dataToPoint(e.center);
          this._groundMesh.position.set(t[0], t[1], -.001);
          var r = new s.a.Plane(new s.a.Vector3(0, 0, 1), 0),
            n = e.viewGL.camera.castRay(new s.a.Vector2(-1, -1)),
            i = e.viewGL.camera.castRay(new s.a.Vector2(1, 1)),
            a = n.intersectPlane(r),
            o = i.intersectPlane(r),
            u = a.dist(o) / e.viewGL.rootNode.scale.x;
          this._groundMesh.scale.set(u, u, 1)
        }
      },
      dispose: function (e, t) {
        this._zrLayer && this._zrLayer.dispose(), t.getZr().painter.delLayer(-1e3)
      }
    })
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r, n) {
      if (this.id = e, this.zr = t, this.dom = document.createElement("div"), this.dom.style.cssText = "position:absolute;left:0;right:0;top:0;bottom:0;", !maptalks) throw new Error("Maptalks library must be included. See https://maptalks.org");
      this._maptalks = new maptalks.Map(this.dom, {
        center: r,
        zoom: n,
        fog: !1
      }), this._initEvents()
    }
    n.prototype.resize = function () {
      this._maptalks.checkSize()
    }, n.prototype.getMaptalks = function () {
      return this._maptalks
    }, n.prototype.clear = function () {}, n.prototype.refresh = function () {
      this._maptalks.checkSize()
    };
    var i = ["mousedown", "mouseup", "click", "dblclick", "mousemove", "mousewheel", "DOMMouseScroll", "touchstart", "touchend", "touchmove", "touchcancel"];
    n.prototype._initEvents = function () {
      var e = this.dom;
      this._handlers = this._handlers || {
        contextmenu: function (e) {
          return e.preventDefault(), !1
        }
      }, i.forEach(function (t) {
        this._handlers[t] = function (r) {
          var n = {};
          for (var i in r) n[i] = r[i];
          n.bubbles = !1;
          var a = new r.constructor(r.type, n);
          "mousewheel" === t || "DOMMouseScroll" === t ? e.dispatchEvent(a) : e.firstElementChild.dispatchEvent(a)
        }, this.zr.dom.addEventListener(t, this._handlers[t])
      }, this), this.zr.dom.addEventListener("contextmenu", this._handlers.contextmenu)
    }, n.prototype.dispose = function () {
      i.forEach(function (e) {
        this.zr.dom.removeEventListener(e, this._handlers[e])
      }, this), this._maptalks.remove()
    }, t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = (r(226), r(229), r(231), r(17));
    i.a.registerVisual(Object(a.a)("bar3D")), i.a.registerProcessor(function (e, t) {
      e.eachSeriesByType("bar3d", function (e) {
        var t = e.getData();
        t.filterSelf(function (e) {
          return t.hasValue(e)
        })
      })
    })
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      var r = e.getData(),
        n = e.get("minHeight") || 0,
        i = e.get("barSize"),
        a = ["lng", "lat", "alt"].map(function (t) {
          return e.coordDimToDataDim(t)[0]
        });
      if (null == i) {
        var s = t.radius * Math.PI,
          h = Object(d.a)(r, a[0], a[1]);
        i = [s / Math.sqrt(r.count() / h), s / Math.sqrt(r.count() / h)]
      } else u.a.util.isArray(i) || (i = [i, i]);
      var c = o(r, a);
      r.each(a, function (e, a, o, s) {
        var u = r.get(c.dimension, s),
          l = c.isStacked ? u - o : t.altitudeAxis.scale.getExtent()[0],
          h = Math.max(t.altitudeAxis.dataToCoord(o), n),
          d = t.dataToPoint([e, a, l]),
          p = t.dataToPoint([e, a, u]),
          m = f.sub([], p, d);
        f.normalize(m, m);
        var g = [i[0], h, i[1]];
        r.setItemLayout(s, [d, m, g])
      }), r.setLayout("orient", l.a.UP.array)
    }

    function i(e, t) {
      var r = e.getData(),
        n = e.get("barSize"),
        i = e.get("minHeight") || 0,
        a = ["lng", "lat", "alt"].map(function (t) {
          return e.coordDimToDataDim(t)[0]
        });
      if (null == n) {
        var s = Math.min(t.size[0], t.size[2]),
          l = Object(d.a)(r, a[0], a[1]);
        n = [s / Math.sqrt(r.count() / l), s / Math.sqrt(r.count() / l)]
      } else u.a.util.isArray(n) || (n = [n, n]);
      var h = [0, 1, 0],
        c = o(r, a);
      r.each(a, function (e, a, o, s) {
        var u = r.get(c.dimension, s),
          l = c.isStacked ? u - o : t.altitudeAxis.scale.getExtent()[0],
          d = Math.max(t.altitudeAxis.dataToCoord(o), i),
          f = t.dataToPoint([e, a, l]),
          p = [n[0], d, n[1]];
        r.setItemLayout(s, [f, h, p])
      }), r.setLayout("orient", [1, 0, 0])
    }

    function a(e, t) {
      var r = e.getData(),
        n = e.coordDimToDataDim("lng")[0],
        i = e.coordDimToDataDim("lat")[0],
        a = e.coordDimToDataDim("alt")[0],
        s = e.get("barSize"),
        l = e.get("minHeight") || 0;
      if (null == s) {
        var h = r.getDataExtent(n),
          c = r.getDataExtent(i),
          f = t.dataToPoint([h[0], c[0]]),
          p = t.dataToPoint([h[1], c[1]]),
          m = Math.min(Math.abs(f[0] - p[0]), Math.abs(f[1] - p[1])) || 1,
          g = Object(d.a)(r, n, i);
        s = [m / Math.sqrt(r.count() / g), m / Math.sqrt(r.count() / g)]
      } else u.a.util.isArray(s) || (s = [s, s]), s[0] /= t.getScale() / 16, s[1] /= t.getScale() / 16;
      var _ = [0, 0, 1],
        v = [n, i, a],
        y = o(r, v);
      r.each(v, function (e, n, i, a) {
        var o = r.get(y.dimension, a),
          u = y.isStacked ? o - i : 0,
          h = t.dataToPoint([e, n, u]),
          c = t.dataToPoint([e, n, o]),
          d = Math.max(c[2] - h[2], l),
          f = [s[0], d, s[1]];
        r.setItemLayout(a, [h, _, f])
      }), r.setLayout("orient", [1, 0, 0])
    }

    function o(e, t) {
      var r = p(e, t[2]);
      return {
        dimension: r ? e.getCalculationInfo("stackResultDimension") : t[2],
        isStacked: r
      }
    }
    var s = r(0),
      u = r.n(s),
      l = r(3),
      h = r(6),
      c = r(227),
      d = r(228),
      f = h.a.vec3,
      p = u.a.helper.dataStack.isDimensionStacked;
    u.a.registerLayout(function (e, t) {
      e.eachSeriesByType("bar3D", function (e) {
        var t = e.coordinateSystem,
          r = t && t.type;
        "globe" === r ? n(e, t) : "cartesian3D" === r ? Object(c.a)(e, t) : "geo3D" === r ? i(e, t) : "mapbox3D" !== r && "maptalks3D" !== r || a(e, t)
      })
    })
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      var t = e[0],
        r = e[1];
      return !(t > 0 && r > 0 || t < 0 && r < 0)
    }

    function i(e, t) {
      var r = e.getData(),
        i = e.get("barSize");
      if (null == i) {
        var a, s, h = t.size,
          c = t.getAxis("x"),
          d = t.getAxis("y");
        a = "category" === c.type ? .7 * c.getBandWidth() : .6 * Math.round(h[0] / Math.sqrt(r.count())), s = "category" === d.type ? .7 * d.getBandWidth() : .6 * Math.round(h[1] / Math.sqrt(r.count())), i = [a, s]
      } else o.a.util.isArray(i) || (i = [i, i]);
      var f = t.getAxis("z").scale.getExtent(),
        p = n(f),
        m = ["x", "y", "z"].map(function (t) {
          return e.coordDimToDataDim(t)[0]
        }),
        g = l(r, m[2]),
        _ = g ? r.getCalculationInfo("stackResultDimension") : m[2];
      r.each(m, function (e, n, a, o) {
        var s = r.get(_, o),
          l = g ? s - a : p ? 0 : f[0],
          h = t.dataToPoint([e, n, l]),
          c = t.dataToPoint([e, n, s]),
          d = u.dist(h, c),
          m = [0, c[1] < h[1] ? -1 : 1, 0];
        0 === Math.abs(d) && (d = .1);
        var v = [i[0], d, i[1]];
        r.setItemLayout(o, [h, m, v])
      }), r.setLayout("orient", [1, 0, 0])
    }
    var a = r(0),
      o = r.n(a),
      s = r(6),
      u = s.a.vec3,
      l = o.a.helper.dataStack.isDimensionStacked;
    t.a = i
  }, function (e, t, r) {
    "use strict";
    t.a = function (e, t, r) {
      for (var n = e.getDataExtent(t), i = e.getDataExtent(r), a = n[1] - n[0] || n[0], o = i[1] - i[0] || i[0], s = new Uint8Array(2500), u = 0; u < e.count(); u++) {
        var l = e.get(t, u),
          h = e.get(r, u),
          c = Math.floor((l - n[0]) / a * 49),
          d = Math.floor((h - i[0]) / o * 49),
          f = 50 * d + c;
        s[f] = s[f] || 1
      }
      for (var p = 0, u = 0; u < s.length; u++) s[u] && p++;
      return p / s.length
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(1),
      o = r(2),
      s = r(32),
      u = r(230),
      l = r(66),
      h = r(6),
      c = h.a.vec3;
    i.a.extendChartView({
      type: "bar3D",
      __ecgl__: !0,
      init: function (e, t) {
        this.groupGL = new a.a.Node, this._api = t, this._labelsBuilder = new l.a(256, 256, t);
        var r = this;
        this._labelsBuilder.getLabelPosition = function (e, t, n) {
          if (r._data) {
            var i = r._data.getItemLayout(e),
              a = i[0],
              o = i[1],
              s = i[2][1];
            return c.scaleAndAdd([], a, o, n + s)
          }
          return [0, 0]
        }, this._labelsBuilder.getMesh().renderOrder = 100
      },
      render: function (e, t, r) {
        var n = this._prevBarMesh;
        this._prevBarMesh = this._barMesh, this._barMesh = n, this._barMesh || (this._barMesh = new a.a.Mesh({
          geometry: new u.a,
          shadowDepthMaterial: new a.a.Material({
            shader: new a.a.Shader(a.a.Shader.source("ecgl.sm.depth.vertex"), a.a.Shader.source("ecgl.sm.depth.fragment"))
          }),
          culling: "cartesian3D" === e.coordinateSystem.type,
          renderOrder: 10,
          renderNormal: !0
        })), this.groupGL.remove(this._prevBarMesh), this.groupGL.add(this._barMesh), this.groupGL.add(this._labelsBuilder.getMesh());
        var i = e.coordinateSystem;
        if (this._doRender(e, r), i && i.viewGL) {
          i.viewGL.add(this.groupGL);
          var o = i.viewGL.isLinearSpace() ? "define" : "undefine";
          this._barMesh.material[o]("fragment", "SRGB_DECODE")
        }
        this._data = e.getData(), this._labelsBuilder.updateData(this._data), this._labelsBuilder.updateLabels(), this._updateAnimation(e)
      },
      _updateAnimation: function (e) {
        a.a.updateVertexAnimation([
          ["prevPosition", "position"],
          ["prevNormal", "normal"]
        ], this._prevBarMesh, this._barMesh, e)
      },
      _doRender: function (e, t) {
        var r = e.getData(),
          n = e.get("shading"),
          i = "color" !== n,
          o = this,
          s = this._barMesh,
          u = "ecgl." + n;
        s.material && s.material.shader.name === u || (s.material = a.a.createMaterial(u, ["VERTEX_COLOR"])), a.a.setMaterialFromModel(n, s.material, e, t), s.geometry.enableNormal = i, s.geometry.resetOffset();
        var l = e.get("bevelSize"),
          h = e.get("bevelSmoothness");
        s.geometry.bevelSegments = h, s.geometry.bevelSize = l;
        var c = [],
          d = new Float32Array(4 * r.count()),
          f = 0,
          p = 0,
          m = !1;
        r.each(function (e) {
          if (r.hasValue(e)) {
            var t = r.getItemVisual(e, "color"),
              n = r.getItemVisual(e, "opacity");
            null == n && (n = 1), a.a.parseColor(t, c), c[3] *= n, d[f++] = c[0], d[f++] = c[1], d[f++] = c[2], d[f++] = c[3], c[3] > 0 && (p++, c[3] < .99 && (m = !0))
          }
        }), s.geometry.setBarCount(p);
        var g = r.getLayout("orient"),
          _ = this._barIndexOfData = new Int32Array(r.count()),
          p = 0;
        r.each(function (e) {
          if (!r.hasValue(e)) return void(_[e] = -1);
          var t = r.getItemLayout(e),
            n = t[0],
            i = t[1],
            a = t[2],
            s = 4 * e;
          c[0] = d[s++], c[1] = d[s++], c[2] = d[s++], c[3] = d[s++], c[3] > 0 && (o._barMesh.geometry.addBar(n, i, g, a, c, e), _[e] = p++)
        }), s.geometry.dirty(), s.geometry.updateBoundingBox();
        var v = s.material;
        v.transparent = m, v.depthMask = !m, s.geometry.sortTriangles = m, this._initHandler(e, t)
      },
      _initHandler: function (e, t) {
        var r = e.getData(),
          n = this._barMesh,
          i = "cartesian3D" === e.coordinateSystem.type;
        n.seriesIndex = e.seriesIndex;
        var a = -1;
        n.off("mousemove"), n.off("mouseout"), n.on("mousemove", function (e) {
          var o = n.geometry.getDataIndexOfVertex(e.triangle[0]);
          o !== a && (this._downplay(a), this._highlight(o), this._labelsBuilder.updateLabels([o]), i && t.dispatchAction({
            type: "grid3DShowAxisPointer",
            value: [r.get("x", o), r.get("y", o), r.get("z", o, !0)]
          })), a = o, n.dataIndex = o
        }, this), n.on("mouseout", function (e) {
          this._downplay(a), this._labelsBuilder.updateLabels(), a = -1, n.dataIndex = -1, i && t.dispatchAction({
            type: "grid3DHideAxisPointer"
          })
        }, this)
      },
      _highlight: function (e) {
        var t = this._data;
        if (t) {
          var r = this._barIndexOfData[e];
          if (!(r < 0)) {
            var n = t.getItemModel(e),
              o = n.getModel("emphasis.itemStyle"),
              s = o.get("color"),
              u = o.get("opacity");
            if (null == s) {
              var l = t.getItemVisual(e, "color");
              s = i.a.color.lift(l, -.4)
            }
            null == u && (u = t.getItemVisual(e, "opacity"));
            var h = a.a.parseColor(s);
            h[3] *= u, this._barMesh.geometry.setColor(r, h), this._api.getZr().refresh()
          }
        }
      },
      _downplay: function (e) {
        var t = this._data;
        if (t) {
          var r = this._barIndexOfData[e];
          if (!(r < 0)) {
            var n = t.getItemVisual(e, "color"),
              i = t.getItemVisual(e, "opacity"),
              o = a.a.parseColor(n);
            o[3] *= i, this._barMesh.geometry.setColor(r, o), this._api.getZr().refresh()
          }
        }
      },
      highlight: function (e, t, r, n) {
        this._toggleStatus("highlight", e, t, r, n)
      },
      downplay: function (e, t, r, n) {
        this._toggleStatus("downplay", e, t, r, n)
      },
      _toggleStatus: function (e, t, r, n, a) {
        var u = t.getData(),
          l = o.a.queryDataIndex(u, a),
          h = this;
        null != l ? i.a.util.each(s.a.normalizeToArray(l), function (t) {
          "highlight" === e ? this._highlight(t) : this._downplay(t)
        }, this) : u.each(function (t) {
          "highlight" === e ? h._highlight(t) : h._downplay(t)
        })
      },
      remove: function () {
        this.groupGL.removeAll()
      },
      dispose: function () {
        this.groupGL.removeAll()
      }
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(38),
      o = r(65),
      s = r(15),
      u = r(6),
      l = u.a.vec3,
      h = u.a.mat3,
      c = s.a.extend(function () {
        return {
          attributes: {
            position: new s.a.Attribute("position", "float", 3, "POSITION"),
            normal: new s.a.Attribute("normal", "float", 3, "NORMAL"),
            color: new s.a.Attribute("color", "float", 4, "COLOR"),
            prevPosition: new s.a.Attribute("prevPosition", "float", 3),
            prevNormal: new s.a.Attribute("prevNormal", "float", 3)
          },
          dynamic: !0,
          enableNormal: !1,
          bevelSize: 1,
          bevelSegments: 0,
          _dataIndices: null,
          _vertexOffset: 0,
          _triangleOffset: 0
        }
      }, {
        resetOffset: function () {
          this._vertexOffset = 0, this._triangleOffset = 0
        },
        setBarCount: function (e) {
          var t = this.enableNormal,
            r = this.getBarVertexCount() * e,
            n = this.getBarTriangleCount() * e;
          this.vertexCount !== r && (this.attributes.position.init(r), t ? this.attributes.normal.init(r) : this.attributes.normal.value = null, this.attributes.color.init(r)), this.triangleCount !== n && (this.indices = r > 65535 ? new Uint32Array(3 * n) : new Uint16Array(3 * n), this._dataIndices = new Uint32Array(r))
        },
        getBarVertexCount: function () {
          var e = this.bevelSize > 0 ? this.bevelSegments : 0;
          return e > 0 ? this._getBevelBarVertexCount(e) : this.enableNormal ? 24 : 8
        },
        getBarTriangleCount: function () {
          var e = this.bevelSize > 0 ? this.bevelSegments : 0;
          return e > 0 ? this._getBevelBarTriangleCount(e) : 12
        },
        _getBevelBarVertexCount: function (e) {
          return 4 * (e + 1) * (e + 1) * 2
        },
        _getBevelBarTriangleCount: function (e) {
          return (4 * e + 3 + 1) * (2 * e + 1) * 2 + 4
        },
        setColor: function (e, t) {
          for (var r = this.getBarVertexCount(), n = r * e, i = r * (e + 1), a = n; a < i; a++) this.attributes.color.set(a, t);
          this.dirtyAttribute("color")
        },
        getDataIndexOfVertex: function (e) {
          return this._dataIndices ? this._dataIndices[e] : null
        },
        addBar: function () {
          for (var e = l.create, t = l.scaleAndAdd, r = e(), n = e(), i = e(), a = e(), o = e(), s = e(), u = e(), h = [], c = [], d = 0; d < 8; d++) h[d] = e();
          for (var f = [
              [0, 1, 5, 4],
              [2, 3, 7, 6],
              [4, 5, 6, 7],
              [3, 2, 1, 0],
              [0, 4, 7, 3],
              [1, 2, 6, 5]
            ], p = [0, 1, 2, 0, 2, 3], m = [], d = 0; d < f.length; d++)
            for (var g = f[d], _ = 0; _ < 2; _++) {
              for (var v = [], y = 0; y < 3; y++) v.push(g[p[3 * _ + y]]);
              m.push(v)
            }
          return function (e, d, g, _, v, y) {
            var x = this._vertexOffset;
            if (this.bevelSize > 0 && this.bevelSegments > 0) this._addBevelBar(e, d, g, _, this.bevelSize, this.bevelSegments, v);
            else {
              l.copy(i, d), l.normalize(i, i), l.cross(a, g, i), l.normalize(a, a), l.cross(n, i, a), l.normalize(a, a), l.negate(o, n), l.negate(s, i), l.negate(u, a), t(h[0], e, n, _[0] / 2), t(h[0], h[0], a, _[2] / 2), t(h[1], e, n, _[0] / 2), t(h[1], h[1], u, _[2] / 2), t(h[2], e, o, _[0] / 2), t(h[2], h[2], u, _[2] / 2), t(h[3], e, o, _[0] / 2), t(h[3], h[3], a, _[2] / 2), t(r, e, i, _[1]), t(h[4], r, n, _[0] / 2), t(h[4], h[4], a, _[2] / 2), t(h[5], r, n, _[0] / 2), t(h[5], h[5], u, _[2] / 2), t(h[6], r, o, _[0] / 2), t(h[6], h[6], u, _[2] / 2), t(h[7], r, o, _[0] / 2), t(h[7], h[7], a, _[2] / 2);
              var T = this.attributes;
              if (this.enableNormal) {
                c[0] = n, c[1] = o, c[2] = i, c[3] = s, c[4] = a, c[5] = u;
                for (var b = this._vertexOffset, w = 0; w < f.length; w++) {
                  for (var E = 3 * this._triangleOffset, S = 0; S < 6; S++) this.indices[E++] = b + p[S];
                  b += 4, this._triangleOffset += 2
                }
                for (var w = 0; w < f.length; w++)
                  for (var A = c[w], S = 0; S < 4; S++) {
                    var M = f[w][S];
                    T.position.set(this._vertexOffset, h[M]), T.normal.set(this._vertexOffset, A), T.color.set(this._vertexOffset++, v)
                  }
              } else {
                for (var w = 0; w < m.length; w++) {
                  for (var E = 3 * this._triangleOffset, S = 0; S < 3; S++) this.indices[E + S] = m[w][S] + this._vertexOffset;
                  this._triangleOffset++
                }
                for (var w = 0; w < h.length; w++) T.position.set(this._vertexOffset, h[w]), T.color.set(this._vertexOffset++, v)
              }
            }
            for (var C = this._vertexOffset, w = x; w < C; w++) this._dataIndices[w] = y
          }
        }(),
        _addBevelBar: function () {
          var e = l.create(),
            t = l.create(),
            r = l.create(),
            n = h.create(),
            i = [],
            a = [1, -1, -1, 1],
            o = [1, 1, -1, -1],
            s = [2, 0];
          return function (u, h, c, d, f, p, m) {
            l.copy(t, h), l.normalize(t, t), l.cross(r, c, t), l.normalize(r, r), l.cross(e, t, r), l.normalize(r, r), n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = t[0], n[4] = t[1], n[5] = t[2], n[6] = r[0], n[7] = r[1], n[8] = r[2], f = Math.min(d[0], d[2]) / 2 * f;
            for (var g = 0; g < 3; g++) i[g] = Math.max(d[g] - 2 * f, 0);
            for (var _ = (d[0] - i[0]) / 2, v = (d[1] - i[1]) / 2, y = (d[2] - i[2]) / 2, x = [], T = [], b = this._vertexOffset, w = [], g = 0; g < 2; g++) {
              w[g] = w[g] = [];
              for (var E = 0; E <= p; E++)
                for (var S = 0; S < 4; S++) {
                  (0 === E && 0 === g || 1 === g && E === p) && w[g].push(b);
                  for (var A = 0; A <= p; A++) {
                    var M = A / p * Math.PI / 2 + Math.PI / 2 * S,
                      C = E / p * Math.PI / 2 + Math.PI / 2 * g;
                    T[0] = _ * Math.cos(M) * Math.sin(C), T[1] = v * Math.cos(C), T[2] = y * Math.sin(M) * Math.sin(C), x[0] = T[0] + a[S] * i[0] / 2, x[1] = T[1] + v + s[g] * i[1] / 2, x[2] = T[2] + o[S] * i[2] / 2, Math.abs(_ - v) < 1e-6 && Math.abs(v - y) < 1e-6 || (T[0] /= _ * _, T[1] /= v * v, T[2] /= y * y), l.normalize(T, T), l.transformMat3(x, x, n), l.transformMat3(T, T, n), l.add(x, x, u), this.attributes.position.set(b, x), this.enableNormal && this.attributes.normal.set(b, T), this.attributes.color.set(b, m), b++
                  }
                }
            }
            for (var L = 4 * p + 3, D = 2 * p + 1, N = L + 1, S = 0; S < D; S++)
              for (var g = 0; g <= L; g++) {
                var R = S * N + g + this._vertexOffset,
                  P = S * N + (g + 1) % N + this._vertexOffset,
                  I = (S + 1) * N + (g + 1) % N + this._vertexOffset,
                  O = (S + 1) * N + g + this._vertexOffset;
                this.setTriangleIndices(this._triangleOffset++, [I, R, P]), this.setTriangleIndices(this._triangleOffset++, [I, O, R])
              }
            this.setTriangleIndices(this._triangleOffset++, [w[0][0], w[0][2], w[0][1]]), this.setTriangleIndices(this._triangleOffset++, [w[0][0], w[0][3], w[0][2]]), this.setTriangleIndices(this._triangleOffset++, [w[1][0], w[1][1], w[1][2]]), this.setTriangleIndices(this._triangleOffset++, [w[1][0], w[1][2], w[1][3]]), this._vertexOffset = b
          }
        }()
      });
    i.a.util.defaults(c.prototype, a.a), i.a.util.defaults(c.prototype, o.a), t.a = c
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(31),
      o = r(32),
      s = r(39),
      u = r(50),
      l = i.a.extendSeriesModel({
        type: "series.bar3D",
        dependencies: ["globe"],
        visualColorAccessPath: "itemStyle.color",
        getInitialData: function (e, t) {
          return Object(u.a)(this)
        },
        getFormattedLabel: function (e, t, r, n) {
          var i = o.a.getFormattedLabel(this, e, t, r, n);
          return null == i && (i = this.getData().get("z", e)), i
        },
        formatTooltip: function (e) {
          return Object(s.a)(this, e)
        },
        defaultOption: {
          coordinateSystem: "cartesian3D",
          globeIndex: 0,
          grid3DIndex: 0,
          zlevel: -10,
          bevelSize: 0,
          bevelSmoothness: 2,
          onGridPlane: "xy",
          shading: "color",
          minHeight: 0,
          itemStyle: {
            opacity: 1
          },
          label: {
            show: !1,
            distance: 2,
            textStyle: {
              fontSize: 14,
              color: "#000",
              backgroundColor: "rgba(255,255,255,0.7)",
              padding: 3,
              borderRadius: 3
            }
          },
          emphasis: {
            label: {
              show: !0
            }
          },
          animationDurationUpdate: 500
        }
      });
    i.a.util.merge(l.prototype, a.a)
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = (r(233), r(234), r(51)),
      o = r.n(a),
      s = r(17);
    i.a.registerVisual(o()("line3D", "circle", null)), i.a.registerVisual(Object(s.a)("line3D")), i.a.registerLayout(function (e, t) {
      e.eachSeriesByType("line3D", function (e) {
        var t = e.getData(),
          r = e.coordinateSystem;
        if (r) {
          if ("cartesian3D" !== r.type) return;
          var n = new Float32Array(3 * t.count()),
            i = [],
            a = [],
            o = r.dimensions,
            s = o.map(function (t) {
              return e.coordDimToDataDim(t)[0]
            });
          r && t.each(s, function (e, t, o, s) {
            i[0] = e, i[1] = t, i[2] = o, r.dataToPoint(i, a), n[3 * s] = a[0], n[3 * s + 1] = a[1], n[3 * s + 2] = a[2]
          }), t.setLayout("points", n)
        }
      })
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(39),
      o = r(50);
    i.a.extendSeriesModel({
      type: "series.line3D",
      dependencies: ["grid3D"],
      visualColorAccessPath: "lineStyle.color",
      getInitialData: function (e, t) {
        return Object(o.a)(this)
      },
      formatTooltip: function (e) {
        return Object(a.a)(this, e)
      },
      defaultOption: {
        coordinateSystem: "cartesian3D",
        zlevel: -10,
        grid3DIndex: 0,
        lineStyle: {
          width: 2
        },
        animationDurationUpdate: 500
      }
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(1),
      o = r(2),
      s = r(25),
      u = r(9),
      l = r(3),
      h = r(235),
      c = r.n(h),
      d = r(6),
      f = r(46),
      p = d.a.vec3;
    a.a.Shader.import(f.a);
    i.a.extendChartView({
      type: "line3D",
      __ecgl__: !0,
      init: function (e, t) {
        this.groupGL = new a.a.Node, this._api = t
      },
      render: function (e, t, r) {
        var n = this._prevLine3DMesh;
        this._prevLine3DMesh = this._line3DMesh, this._line3DMesh = n, this._line3DMesh || (this._line3DMesh = new a.a.Mesh({
          geometry: new s.a({
            useNativeLine: !1,
            sortTriangles: !0
          }),
          material: new a.a.Material({
            shader: a.a.createShader("ecgl.meshLines3D")
          }),
          renderOrder: 10
        }), this._line3DMesh.geometry.pick = this._pick.bind(this)), this.groupGL.remove(this._prevLine3DMesh), this.groupGL.add(this._line3DMesh);
        var i = e.coordinateSystem;
        if (i && i.viewGL) {
          i.viewGL.add(this.groupGL);
          var o = i.viewGL.isLinearSpace() ? "define" : "undefine";
          this._line3DMesh.material[o]("fragment", "SRGB_DECODE")
        }
        this._doRender(e, r), this._data = e.getData(), this._camera = i.viewGL.camera, this.updateCamera(), this._updateAnimation(e)
      },
      updateCamera: function () {
        this._updateNDCPosition()
      },
      _doRender: function (e, t) {
        var r = e.getData(),
          n = this._line3DMesh;
        n.geometry.resetOffset();
        var i = r.getLayout("points"),
          s = [],
          u = new Float32Array(i.length / 3 * 4),
          l = 0,
          h = !1;
        r.each(function (e) {
          var t = r.getItemVisual(e, "color"),
            n = r.getItemVisual(e, "opacity");
          null == n && (n = 1), a.a.parseColor(t, s), s[3] *= n, u[l++] = s[0], u[l++] = s[1], u[l++] = s[2], u[l++] = s[3], s[3] < .99 && (h = !0)
        }), n.geometry.setVertexCount(n.geometry.getPolylineVertexCount(i)), n.geometry.setTriangleCount(n.geometry.getPolylineTriangleCount(i)), n.geometry.addPolyline(i, u, o.a.firstNotNull(e.get("lineStyle.width"), 1)), n.geometry.dirty(), n.geometry.updateBoundingBox();
        var c = n.material;
        c.transparent = h, c.depthMask = !h;
        var d = e.getModel("debug.wireframe");
        d.get("show") ? (n.geometry.createAttribute("barycentric", "float", 3), n.geometry.generateBarycentric(), n.material.set("both", "WIREFRAME_TRIANGLE"), n.material.set("wireframeLineColor", a.a.parseColor(d.get("lineStyle.color") || "rgba(0,0,0,0.5)")), n.material.set("wireframeLineWidth", o.a.firstNotNull(d.get("lineStyle.width"), 1))) : n.material.set("both", "WIREFRAME_TRIANGLE"), this._points = i, this._initHandler(e, t)
      },
      _updateAnimation: function (e) {
        a.a.updateVertexAnimation([
          ["prevPosition", "position"],
          ["prevPositionPrev", "positionPrev"],
          ["prevPositionNext", "positionNext"]
        ], this._prevLine3DMesh, this._line3DMesh, e)
      },
      _initHandler: function (e, t) {
        var r = e.getData(),
          n = e.coordinateSystem,
          i = this._line3DMesh,
          a = -1;
        i.seriesIndex = e.seriesIndex, i.off("mousemove"), i.off("mouseout"), i.on("mousemove", function (e) {
          var o = n.pointToData(e.point.array),
            s = r.indicesOfNearest("x", o[0])[0];
          s !== a && (t.dispatchAction({
            type: "grid3DShowAxisPointer",
            value: [r.get("x", s), r.get("y", s), r.get("z", s)]
          }), i.dataIndex = s), a = s
        }, this), i.on("mouseout", function (e) {
          a = -1, i.dataIndex = -1, t.dispatchAction({
            type: "grid3DHideAxisPointer"
          })
        }, this)
      },
      _updateNDCPosition: function () {
        var e = new u.a,
          t = this._camera;
        u.a.multiply(e, t.projectionMatrix, t.viewMatrix);
        var r = this._positionNDC,
          n = this._points,
          i = n.length / 3;
        r && r.length / 2 === i || (r = this._positionNDC = new Float32Array(2 * i));
        for (var a = [], o = 0; o < i; o++) {
          var s = 3 * o,
            l = 2 * o;
          a[0] = n[s], a[1] = n[s + 1], a[2] = n[s + 2], a[3] = 1, p.transformMat4(a, a, e.array), r[l] = a[0] / a[3], r[l + 1] = a[1] / a[3]
        }
      },
      _pick: function (e, t, r, n, i, a) {
        var o = this._positionNDC,
          s = this._data.hostModel,
          u = s.get("lineStyle.width"),
          h = -1,
          d = r.viewport.width,
          f = r.viewport.height,
          p = .5 * d,
          m = .5 * f;
        e = (e + 1) * p, t = (t + 1) * m;
        for (var g = 1; g < o.length / 2; g++) {
          var _ = (o[2 * (g - 1)] + 1) * p,
            v = (o[2 * (g - 1) + 1] + 1) * m,
            y = (o[2 * g] + 1) * p,
            x = (o[2 * g + 1] + 1) * m;
          if (c.a.containStroke(_, v, y, x, u, e, t)) {
            h = (_ - e) * (_ - e) + (v - t) * (v - t) < (y - e) * (y - e) + (x - t) * (x - t) ? g - 1 : g
          }
        }
        if (h >= 0) {
          var T = 3 * h,
            b = new l.a(this._points[T], this._points[T + 1], this._points[T + 2]);
          a.push({
            dataIndex: h,
            point: b,
            pointWorld: b.clone(),
            target: this._line3DMesh,
            distance: this._camera.getWorldPosition().dist(b)
          })
        }
      },
      remove: function () {
        this.groupGL.removeAll()
      },
      dispose: function () {
        this.groupGL.removeAll()
      }
    })
  }, function (e, t) {
    function r(e, t, r, n, i, a, o) {
      if (0 === i) return !1;
      var s = i,
        u = 0,
        l = e;
      if (o > t + s && o > n + s || o < t - s && o < n - s || a > e + s && a > r + s || a < e - s && a < r - s) return !1;
      if (e === r) return Math.abs(a - e) <= s / 2;
      u = (t - n) / (e - r), l = (e * n - r * t) / (e - r);
      var h = u * a - o + l;
      return h * h / (u * u + 1) <= s / 2 * s / 2
    }
    t.containStroke = r
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = (r(237), r(238), r(51)),
      o = r.n(a),
      s = r(17);
    i.a.registerVisual(o()("scatter3D", "circle", null)), i.a.registerVisual(Object(s.a)("scatter3D")), i.a.registerLayout({
      seriesType: "scatter3D",
      reset: function (e) {
        var t = e.coordinateSystem;
        if (t) {
          var r = t.dimensions;
          if (r.length < 3) return;
          var n = r.map(function (t) {
              return e.coordDimToDataDim(t)[0]
            }),
            i = [],
            a = [];
          return {
            progress: function (e, r) {
              for (var o = new Float32Array(3 * (e.end - e.start)), s = e.start; s < e.end; s++) {
                var u = 3 * (s - e.start);
                i[0] = r.get(n[0], s), i[1] = r.get(n[1], s), i[2] = r.get(n[2], s), t.dataToPoint(i, a), o[u] = a[0], o[u + 1] = a[1], o[u + 2] = a[2]
              }
              r.setLayout("points", o)
            }
          }
        }
      }
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(32),
      o = r(39),
      s = r(50);
    i.a.extendSeriesModel({
      type: "series.scatter3D",
      dependencies: ["globe", "grid3D", "geo3D"],
      visualColorAccessPath: "itemStyle.color",
      getInitialData: function (e, t) {
        return Object(s.a)(this)
      },
      getFormattedLabel: function (e, t, r, n) {
        var i = a.a.getFormattedLabel(this, e, t, r, n);
        if (null == i) {
          var o = this.getData(),
            s = o.dimensions[o.dimensions.length - 1];
          i = o.get(s, e)
        }
        return i
      },
      formatTooltip: function (e) {
        return Object(o.a)(this, e)
      },
      defaultOption: {
        coordinateSystem: "cartesian3D",
        zlevel: -10,
        progressive: 1e5,
        progressiveThreshold: 1e5,
        grid3DIndex: 0,
        globeIndex: 0,
        symbol: "circle",
        symbolSize: 10,
        blendMode: "source-over",
        label: {
          show: !1,
          position: "right",
          distance: 5,
          textStyle: {
            fontSize: 14,
            color: "#000",
            backgroundColor: "rgba(255,255,255,0.7)",
            padding: 3,
            borderRadius: 3
          }
        },
        itemStyle: {
          opacity: .8
        },
        emphasis: {
          label: {
            show: !0
          }
        },
        animationDurationUpdate: 500
      }
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(1),
      o = r(2),
      s = r(32),
      u = r(67);
    i.a.extendChartView({
      type: "scatter3D",
      __ecgl__: !0,
      init: function (e, t) {
        this.groupGL = new a.a.Node, this._pointsBuilderList = [], this._currentStep = 0
      },
      render: function (e, t, r) {
        if (this.groupGL.removeAll(), e.getData().count()) {
          var n = e.coordinateSystem;
          if (n && n.viewGL) {
            n.viewGL.add(this.groupGL), this._camera = n.viewGL.camera;
            var i = this._pointsBuilderList[0];
            i || (i = this._pointsBuilderList[0] = new u.a(!1, r)), this._pointsBuilderList.length = 1, this.groupGL.add(i.rootNode), i.update(e, t, r), i.updateView(n.viewGL.camera)
          }
        }
      },
      incrementalPrepareRender: function (e, t, r) {
        var n = e.coordinateSystem;
        n && n.viewGL && (n.viewGL.add(this.groupGL), this._camera = n.viewGL.camera), this.groupGL.removeAll(), this._currentStep = 0
      },
      incrementalRender: function (e, t, r, n) {
        if (!(e.end <= e.start)) {
          var i = this._pointsBuilderList[this._currentStep];
          i || (i = new u.a(!1, n), this._pointsBuilderList[this._currentStep] = i), this.groupGL.add(i.rootNode), i.update(t, r, n, e.start, e.end), i.updateView(t.coordinateSystem.viewGL.camera), this._currentStep++
        }
      },
      updateCamera: function () {
        this._pointsBuilderList.forEach(function (e) {
          e.updateView(this._camera)
        }, this)
      },
      highlight: function (e, t, r, n) {
        this._toggleStatus("highlight", e, t, r, n)
      },
      downplay: function (e, t, r, n) {
        this._toggleStatus("downplay", e, t, r, n)
      },
      _toggleStatus: function (e, t, r, n, a) {
        var u = t.getData(),
          l = o.a.queryDataIndex(u, a),
          h = "highlight" === e;
        null != l ? i.a.util.each(s.a.normalizeToArray(l), function (e) {
          for (var t = 0; t < this._pointsBuilderList.length; t++) {
            var r = this._pointsBuilderList[t];
            h ? r.highlight(u, e) : r.downplay(u, e)
          }
        }, this) : u.each(function (e) {
          for (var t = 0; t < this._pointsBuilderList.length; t++) {
            var r = this._pointsBuilderList[t];
            h ? r.highlight(u, e) : r.downplay(u, e)
          }
        })
      },
      dispose: function () {
        this.groupGL.removeAll()
      },
      remove: function () {
        this.groupGL.removeAll()
      }
    })
  }, function (e, t, r) {
    "use strict";

    function n(e, t, r) {
      var t = t || document.createElement("canvas");
      t.width = e, t.height = e;
      var n = t.getContext("2d");
      return r && r(n), t
    }

    function i(e, t, r, n) {
      s.a.util.isArray(t) || (t = [t, t]);
      var i = u.getMarginByStyle(r, n),
        a = t[0] + i.left + i.right,
        o = t[1] + i.top + i.bottom,
        l = s.a.helper.createSymbol(e, 0, 0, t[0], t[1]),
        h = Math.max(a, o);
      l.position = [i.left, i.top], a > o ? l.position[1] += (h - o) / 2 : l.position[0] += (h - a) / 2;
      var c = l.getBoundingRect();
      return l.position[0] -= c.x, l.position[1] -= c.y, l.setStyle(r), l.update(), l.__size = h, l
    }

    function a(e, t, r) {
      function n(e) {
        return e < 128 ? 1 : -1
      }
      for (var i = t.width, a = t.height, o = e.canvas.width, s = e.canvas.height, u = i / o, l = a / s, h = e.createImageData(o, s), c = 0; c < s; c++)
        for (var d = 0; d < o; d++) {
          var f = function (e, o) {
              var s = 1 / 0;
              e = Math.floor(e * u), o = Math.floor(o * l);
              for (var h = o * i + e, c = t.data[4 * h], d = n(c), f = Math.max(o - r, 0); f < Math.min(o + r, a); f++)
                for (var p = Math.max(e - r, 0); p < Math.min(e + r, i); p++) {
                  var h = f * i + p,
                    m = t.data[4 * h],
                    g = n(m),
                    _ = p - e,
                    v = f - o;
                  if (d !== g) {
                    var y = _ * _ + v * v;
                    y < s && (s = y)
                  }
                }
              return d * Math.sqrt(s)
            }(d, c),
            p = f / r * .5 + .5,
            m = 4 * (c * o + d);
          h.data[m++] = 255 * (1 - p), h.data[m++] = 255 * (1 - p), h.data[m++] = 255 * (1 - p), h.data[m++] = 255
        }
      return h
    }
    var o = r(0),
      s = r.n(o),
      u = {
        getMarginByStyle: function (e) {
          var t = e.minMargin || 0,
            r = 0;
          e.stroke && "none" !== e.stroke && (r = null == e.lineWidth ? 1 : e.lineWidth);
          var n = e.shadowBlur || 0,
            i = e.shadowOffsetX || 0,
            a = e.shadowOffsetY || 0,
            o = {};
          return o.left = Math.max(r / 2, -i + n, t), o.right = Math.max(r / 2, i + n, t), o.top = Math.max(r / 2, -a + n, t), o.bottom = Math.max(r / 2, a + n, t), o
        },
        createSymbolSprite: function (e, t, r, a) {
          var o = i(e, t, r),
            s = u.getMarginByStyle(r);
          return {
            image: n(o.__size, a, function (e) {
              o.brush(e)
            }),
            margin: s
          }
        },
        createSDFFromCanvas: function (e, t, r, i) {
          return n(t, i, function (t) {
            var n = e.getContext("2d"),
              i = n.getImageData(0, 0, e.width, e.height);
            t.putImageData(a(t, i, r), 0, 0)
          })
        },
        createSimpleSprite: function (e, t) {
          return n(e, t, function (t) {
            var r = e / 2;
            t.beginPath(), t.arc(r, r, 60, 0, 2 * Math.PI, !1), t.closePath();
            var n = t.createRadialGradient(r, r, 0, r, r, r);
            n.addColorStop(0, "rgba(255, 255, 255, 1)"), n.addColorStop(.5, "rgba(255, 255, 255, 0.5)"), n.addColorStop(1, "rgba(255, 255, 255, 0)"), t.fillStyle = n, t.fill()
          })
        }
      };
    t.a = u
  }, function (e, t, r) {
    "use strict";
    var n = r(1),
      i = r(241),
      a = r(0),
      o = r.n(a),
      s = r(6),
      u = r(242),
      l = s.a.vec4;
    n.a.Shader.import(u.a);
    var h = n.a.Mesh.extend(function () {
      var e = new n.a.Geometry({
        dynamic: !0,
        attributes: {
          color: new n.a.Geometry.Attribute("color", "float", 4, "COLOR"),
          position: new n.a.Geometry.Attribute("position", "float", 3, "POSITION"),
          size: new n.a.Geometry.Attribute("size", "float", 1),
          prevPosition: new n.a.Geometry.Attribute("prevPosition", "float", 3),
          prevSize: new n.a.Geometry.Attribute("prevSize", "float", 1)
        }
      });
      o.a.util.extend(e, i.a);
      var t = new n.a.Material({
        shader: n.a.createShader("ecgl.sdfSprite"),
        transparent: !0,
        depthMask: !1
      });
      t.enableTexture("sprite"), t.define("both", "VERTEX_COLOR"), t.define("both", "VERTEX_SIZE");
      var r = new n.a.Texture2D({
        image: document.createElement("canvas"),
        flipY: !1
      });
      return t.set("sprite", r), e.pick = this._pick.bind(this), {
        geometry: e,
        material: t,
        mode: n.a.Mesh.POINTS,
        sizeScale: 1
      }
    }, {
      _pick: function (e, t, r, i, a, o) {
        var s = this._positionNDC;
        if (s)
          for (var u = r.viewport, l = 2 / u.width, h = 2 / u.height, c = this.geometry.vertexCount - 1; c >= 0; c--) {
            var d;
            d = this.geometry.indices ? this.geometry.indices[c] : c;
            var f = s[2 * d],
              p = s[2 * d + 1],
              m = this.geometry.attributes.size.get(d) / this.sizeScale,
              g = m / 2;
            if (e > f - g * l && e < f + g * l && t > p - g * h && t < p + g * h) {
              var _ = new n.a.Vector3,
                v = new n.a.Vector3;
              this.geometry.attributes.position.get(d, _.array), n.a.Vector3.transformMat4(v, _, this.worldTransform), o.push({
                vertexIndex: d,
                point: _,
                pointWorld: v,
                target: this,
                distance: v.distance(i.getWorldPosition())
              })
            }
          }
      },
      updateNDCPosition: function (e, t, r) {
        var n = this._positionNDC,
          i = this.geometry;
        n && n.length / 2 === i.vertexCount || (n = this._positionNDC = new Float32Array(2 * i.vertexCount));
        for (var a = l.create(), o = 0; o < i.vertexCount; o++) i.attributes.position.get(o, a), a[3] = 1, l.transformMat4(a, a, e.array), l.scale(a, a, 1 / a[3]), n[2 * o] = a[0], n[2 * o + 1] = a[1]
      }
    });
    t.a = h
  }, function (e, t, r) {
    "use strict";
    var n = r(97),
      i = r(6),
      a = i.a.vec3;
    t.a = {
      needsSortVertices: function () {
        return this.sortVertices
      },
      needsSortVerticesProgressively: function () {
        return this.needsSortVertices() && this.vertexCount >= 2e4
      },
      doSortVertices: function (e, t) {
        var r = this.indices,
          n = a.create();
        if (!r) {
          r = this.indices = this.vertexCount > 65535 ? new Uint32Array(this.vertexCount) : new Uint16Array(this.vertexCount);
          for (var i = 0; i < r.length; i++) r[i] = i
        }
        if (0 === t) {
          var o = this.attributes.position,
            e = e.array,
            s = 0;
          this._zList && this._zList.length === this.vertexCount || (this._zList = new Float32Array(this.vertexCount));
          for (var u, i = 0; i < this.vertexCount; i++) {
            o.get(i, n);
            var l = a.sqrDist(n, e);
            isNaN(l) && (l = 1e7, s++), 0 === i ? (u = l, l = 0) : l -= u, this._zList[i] = l
          }
          this._noneCount = s
        }
        if (this.vertexCount < 2e4) 0 === t && this._simpleSort(this._noneCount / this.vertexCount > .05);
        else
          for (var i = 0; i < 3; i++) this._progressiveQuickSort(3 * t + i);
        this.dirtyIndices()
      },
      _simpleSort: function (e) {
        function t(e, t) {
          return r[t] - r[e]
        }
        var r = this._zList,
          i = this.indices;
        e ? Array.prototype.sort.call(i, t) : n.a.sort(i, t, 0, i.length - 1)
      },
      _progressiveQuickSort: function (e) {
        var t = this._zList,
          r = this.indices;
        this._quickSort = this._quickSort || new n.a, this._quickSort.step(r, function (e, r) {
          return t[r] - t[e]
        }, e)
      }
    }
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.sdfSprite.vertex\n\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform float elapsedTime : 0;\n\nattribute vec3 position : POSITION;\n\n#ifdef VERTEX_SIZE\nattribute float size;\n#else\nuniform float u_Size;\n#endif\n\n#ifdef VERTEX_COLOR\nattribute vec4 a_FillColor: COLOR;\nvarying vec4 v_Color;\n#endif\n\n#ifdef VERTEX_ANIMATION\nattribute vec3 prevPosition;\nattribute float prevSize;\nuniform float percent : 1.0;\n#endif\n\n\n#ifdef POSITIONTEXTURE_ENABLED\nuniform sampler2D positionTexture;\n#endif\n\nvarying float v_Size;\n\nvoid main()\n{\n\n#ifdef POSITIONTEXTURE_ENABLED\n gl_Position = worldViewProjection * vec4(texture2D(positionTexture, position.xy).xy, -10.0, 1.0);\n#else\n\n #ifdef VERTEX_ANIMATION\n vec3 pos = mix(prevPosition, position, percent);\n #else\n vec3 pos = position;\n #endif\n gl_Position = worldViewProjection * vec4(pos, 1.0);\n#endif\n\n#ifdef VERTEX_SIZE\n#ifdef VERTEX_ANIMATION\n v_Size = mix(prevSize, size, percent);\n#else\n v_Size = size;\n#endif\n#else\n v_Size = u_Size;\n#endif\n\n#ifdef VERTEX_COLOR\n v_Color = a_FillColor;\n #endif\n\n gl_PointSize = v_Size;\n}\n\n@end\n\n@export ecgl.sdfSprite.fragment\n\nuniform vec4 color: [1, 1, 1, 1];\nuniform vec4 strokeColor: [1, 1, 1, 1];\nuniform float smoothing: 0.07;\n\nuniform float lineWidth: 0.0;\n\n#ifdef VERTEX_COLOR\nvarying vec4 v_Color;\n#endif\n\nvarying float v_Size;\n\nuniform sampler2D sprite;\n\n@import clay.util.srgb\n\nvoid main()\n{\n gl_FragColor = color;\n\n vec4 _strokeColor = strokeColor;\n\n#ifdef VERTEX_COLOR\n gl_FragColor *= v_Color;\n #endif\n\n#ifdef SPRITE_ENABLED\n float d = texture2D(sprite, gl_PointCoord).r;\n gl_FragColor.a *= smoothstep(0.5 - smoothing, 0.5 + smoothing, d);\n\n if (lineWidth > 0.0) {\n float sLineWidth = lineWidth / 2.0;\n\n float outlineMaxValue0 = 0.5 + sLineWidth;\n float outlineMaxValue1 = 0.5 + sLineWidth + smoothing;\n float outlineMinValue0 = 0.5 - sLineWidth - smoothing;\n float outlineMinValue1 = 0.5 - sLineWidth;\n\n if (d <= outlineMaxValue1 && d >= outlineMinValue0) {\n float a = _strokeColor.a;\n if (d <= outlineMinValue1) {\n a = a * smoothstep(outlineMinValue0, outlineMinValue1, d);\n }\n else {\n a = a * smoothstep(outlineMaxValue1, outlineMaxValue0, d);\n }\n gl_FragColor.rgb = mix(gl_FragColor.rgb * gl_FragColor.a, _strokeColor.rgb, a);\n gl_FragColor.a = gl_FragColor.a * (1.0 - a) + a;\n }\n }\n#endif\n\n#ifdef SRGB_DECODE\n gl_FragColor = sRGBToLinear(gl_FragColor);\n#endif\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = (r(244), r(245), r(248), r(17));
    i.a.registerVisual(Object(a.a)("lines3D")), i.a.registerAction({
      type: "lines3DPauseEffect",
      event: "lines3deffectpaused",
      update: "series.lines3D:pauseEffect"
    }, function () {}), i.a.registerAction({
      type: "lines3DResumeEffect",
      event: "lines3deffectresumed",
      update: "series.lines3D:resumeEffect"
    }, function () {}), i.a.registerAction({
      type: "lines3DToggleEffect",
      event: "lines3deffectchanged",
      update: "series.lines3D:toggleEffect"
    }, function () {})
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      f.copy(w, e[0]), f.copy(E, e[1]);
      var r = [],
        n = r[0] = v(),
        i = r[1] = v(),
        a = r[2] = v(),
        o = r[3] = v();
      t.dataToPoint(w, n), t.dataToPoint(E, o), p(y, n), g(x, o, n), p(x, x), m(T, x, y), p(T, T), m(x, y, T), _(i, y, x), p(i, i), p(y, o), g(x, n, o), p(x, x), m(T, x, y), p(T, T), m(x, y, T), _(a, y, x), p(a, a), _(b, n, o), p(b, b);
      var s = d.dot(n, b),
        u = d.dot(b, i),
        l = (Math.max(d.len(n), d.len(o)) - s) / u * 2;
      return d.scaleAndAdd(i, n, i, l), d.scaleAndAdd(a, o, a, l), r
    }

    function i(e, t, r) {
      var n = [],
        i = n[0] = d.create(),
        a = n[1] = d.create(),
        o = n[2] = d.create(),
        s = n[3] = d.create();
      t.dataToPoint(e[0], i), t.dataToPoint(e[1], s);
      var u = d.dist(i, s);
      return d.lerp(a, i, s, .3), d.lerp(o, i, s, .3), d.scaleAndAdd(a, a, r, Math.min(.1 * u, 10)), d.scaleAndAdd(o, o, r, Math.min(.1 * u, 10)), n
    }

    function a(e, t) {
      for (var r = new Float32Array(3 * e.length), n = 0, i = [], a = 0; a < e.length; a++) t.dataToPoint(e[a], i), r[n++] = i[0], r[n++] = i[1], r[n++] = i[2];
      return r
    }

    function o(e) {
      var t = [];
      return e.each(function (r) {
        var n = e.getItemModel(r),
          i = n.option instanceof Array ? n.option : n.getShallow("coords", !0);
        t.push(i)
      }), {
        coordsList: t
      }
    }

    function s(e, t) {
      var r = e.getData(),
        i = e.get("polyline");
      r.setLayout("lineType", i ? "polyline" : "cubicBezier");
      var s = o(r);
      r.each(function (e) {
        var o = s.coordsList[e],
          u = i ? a : n;
        r.setItemLayout(e, u(o, t))
      })
    }

    function u(e, t, r) {
      var n = e.getData(),
        s = e.get("polyline"),
        u = o(n);
      n.setLayout("lineType", s ? "polyline" : "cubicBezier"), n.each(function (e) {
        var o = u.coordsList[e],
          l = s ? a(o, t) : i(o, t, r);
        n.setItemLayout(e, l)
      })
    }
    var l = r(0),
      h = r.n(l),
      c = r(6),
      d = c.a.vec3,
      f = c.a.vec2,
      p = d.normalize,
      m = d.cross,
      g = d.sub,
      _ = d.add,
      v = d.create,
      y = v(),
      x = v(),
      T = v(),
      b = v(),
      w = [],
      E = [];
    h.a.registerLayout(function (e, t) {
      e.eachSeriesByType("lines3D", function (e) {
        var t = e.coordinateSystem;
        "globe" === t.type ? s(e, t) : "geo3D" === t.type ? u(e, t, [0, 1, 0]) : "mapbox3D" !== t.type && "maptalks3D" !== t.type || u(e, t, [0, 0, 1])
      })
    })
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return null != e.radius ? e.radius : null != e.size ? Math.max(e.size[0], e.size[1], e.size[2]) : 100
    }
    var i = r(0),
      a = r.n(i),
      o = r(1),
      s = r(25),
      u = r(246),
      l = r(46);
    o.a.Shader.import(l.a);
    a.a.extendChartView({
      type: "lines3D",
      __ecgl__: !0,
      init: function (e, t) {
        this.groupGL = new o.a.Node, this._meshLinesMaterial = new o.a.Material({
          shader: o.a.createShader("ecgl.meshLines3D"),
          transparent: !0,
          depthMask: !1
        }), this._linesMesh = new o.a.Mesh({
          geometry: new s.a,
          material: this._meshLinesMaterial,
          $ignorePicking: !0
        }), this._trailMesh = new u.a
      },
      render: function (e, t, r) {
        this.groupGL.add(this._linesMesh);
        var n = e.coordinateSystem,
          i = e.getData();
        if (n && n.viewGL) {
          n.viewGL.add(this.groupGL), this._updateLines(e, t, r);
          var a = n.viewGL.isLinearSpace() ? "define" : "undefine";
          this._linesMesh.material[a]("fragment", "SRGB_DECODE"), this._trailMesh.material[a]("fragment", "SRGB_DECODE")
        }
        var s = this._trailMesh;
        if (s.stopAnimation(), e.get("effect.show")) {
          this.groupGL.add(s), s.updateData(i, r, this._linesMesh.geometry), s.__time = s.__time || 0;
          this._curveEffectsAnimator = s.animate("", {
            loop: !0
          }).when(36e5, {
            __time: 36e5
          }).during(function () {
            s.setAnimationTime(s.__time)
          }).start()
        } else this.groupGL.remove(s), this._curveEffectsAnimator = null;
        this._linesMesh.material.blend = this._trailMesh.material.blend = "lighter" === e.get("blendMode") ? o.a.additiveBlend : null
      },
      pauseEffect: function () {
        this._curveEffectsAnimator && this._curveEffectsAnimator.pause()
      },
      resumeEffect: function () {
        this._curveEffectsAnimator && this._curveEffectsAnimator.resume()
      },
      toggleEffect: function () {
        var e = this._curveEffectsAnimator;
        e && (e.isPaused() ? e.resume() : e.pause())
      },
      _updateLines: function (e, t, r) {
        var i = e.getData(),
          a = e.coordinateSystem,
          s = this._linesMesh.geometry,
          u = e.get("polyline");
        s.expandLine = !0;
        var l = n(a);
        s.segmentScale = l / 20;
        var h = "lineStyle.width".split("."),
          c = r.getDevicePixelRatio(),
          d = 0;
        i.each(function (e) {
          var t = i.getItemModel(e),
            r = t.get(h);
          null == r && (r = 1), i.setItemVisual(e, "lineWidth", r), d = Math.max(r, d)
        }), s.useNativeLine = !1;
        var f = 0,
          p = 0;
        i.each(function (e) {
          var t = i.getItemLayout(e);
          u ? (f += s.getPolylineVertexCount(t), p += s.getPolylineTriangleCount(t)) : (f += s.getCubicCurveVertexCount(t[0], t[1], t[2], t[3]), p += s.getCubicCurveTriangleCount(t[0], t[1], t[2], t[3]))
        }), s.setVertexCount(f), s.setTriangleCount(p), s.resetOffset();
        var m = [];
        i.each(function (e) {
          var t = i.getItemLayout(e),
            r = i.getItemVisual(e, "color"),
            n = i.getItemVisual(e, "opacity"),
            a = i.getItemVisual(e, "lineWidth") * c;
          null == n && (n = 1), m = o.a.parseColor(r, m), m[3] *= n, u ? s.addPolyline(t, m, a) : s.addCubicCurve(t[0], t[1], t[2], t[3], m, a)
        }), s.dirty()
      },
      remove: function () {
        this.groupGL.removeAll()
      },
      dispose: function () {
        this.groupGL.removeAll()
      }
    })
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return e > 0 ? 1 : -1
    }
    var i = r(0),
      a = (r.n(i), r(1)),
      o = r(6),
      s = r(25),
      u = r(247),
      l = o.a.vec3;
    a.a.Shader.import(u.a), t.a = a.a.Mesh.extend(function () {
      var e = new a.a.Material({
          shader: new a.a.Shader(a.a.Shader.source("ecgl.trail2.vertex"), a.a.Shader.source("ecgl.trail2.fragment")),
          transparent: !0,
          depthMask: !1
        }),
        t = new s.a({
          dynamic: !0
        });
      return t.createAttribute("dist", "float", 1), t.createAttribute("distAll", "float", 1), t.createAttribute("start", "float", 1), {
        geometry: t,
        material: e,
        culling: !1,
        $ignorePicking: !0
      }
    }, {
      updateData: function (e, t, r) {
        var i = e.hostModel,
          o = this.geometry,
          s = i.getModel("effect"),
          u = s.get("trailWidth") * t.getDevicePixelRatio(),
          h = s.get("trailLength"),
          c = i.get("effect.constantSpeed"),
          d = 1e3 * i.get("effect.period"),
          f = null != c;
        f ? this.material.set("speed", c / 1e3) : this.material.set("period", d), this.material[f ? "define" : "undefine"]("vertex", "CONSTANT_SPEED");
        var p = i.get("polyline");
        o.trailLength = h, this.material.set("trailLength", h), o.resetOffset(), ["position", "positionPrev", "positionNext"].forEach(function (e) {
          o.attributes[e].value = r.attributes[e].value
        }), ["dist", "distAll", "start", "offset", "color"].forEach(function (e) {
          o.attributes[e].init(o.vertexCount)
        }), o.indices = r.indices;
        var m = [],
          g = s.get("trailColor"),
          _ = s.get("trailOpacity"),
          v = null != g,
          y = null != _;
        this.updateWorldTransform();
        var x = this.worldTransform.x.len(),
          T = this.worldTransform.y.len(),
          b = this.worldTransform.z.len(),
          w = 0,
          E = 0;
        e.each(function (t) {
          var i = e.getItemLayout(t),
            s = y ? _ : e.getItemVisual(t, "opacity"),
            h = e.getItemVisual(t, "color");
          null == s && (s = 1), m = a.a.parseColor(v ? g : h, m), m[3] *= s;
          for (var c = p ? r.getPolylineVertexCount(i) : r.getCubicCurveVertexCount(i[0], i[1], i[2], i[3]), S = 0, A = [], M = [], C = w; C < w + c; C++) o.attributes.position.get(C, A), A[0] *= x, A[1] *= T, A[2] *= b, C > w && (S += l.dist(A, M)), o.attributes.dist.set(C, S), l.copy(M, A);
          E = Math.max(E, S);
          for (var L = Math.random() * (f ? S : d), C = w; C < w + c; C++) o.attributes.distAll.set(C, S), o.attributes.start.set(C, L), o.attributes.offset.set(C, n(r.attributes.offset.get(C)) * u / 2), o.attributes.color.set(C, m);
          w += c
        }), this.material.set("spotSize", .1 * E * h), this.material.set("spotIntensity", s.get("spotIntensity")), o.dirty()
      },
      setAnimationTime: function (e) {
        this.material.set("time", e)
      }
    })
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.trail2.vertex\nattribute vec3 position: POSITION;\nattribute vec3 positionPrev;\nattribute vec3 positionNext;\nattribute float offset;\nattribute float dist;\nattribute float distAll;\nattribute float start;\n\nattribute vec4 a_Color : COLOR;\n\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform vec4 viewport : VIEWPORT;\nuniform float near : NEAR;\n\nuniform float speed : 0;\nuniform float trailLength: 0.3;\nuniform float time;\nuniform float period: 1000;\n\nuniform float spotSize: 1;\n\nvarying vec4 v_Color;\nvarying float v_Percent;\nvarying float v_SpotPercent;\n\n@import ecgl.common.wireframe.vertexHeader\n\n@import ecgl.lines3D.clipNear\n\nvoid main()\n{\n @import ecgl.lines3D.expandLine\n\n gl_Position = currProj;\n\n v_Color = a_Color;\n\n @import ecgl.common.wireframe.vertexMain\n\n#ifdef CONSTANT_SPEED\n float t = mod((speed * time + start) / distAll, 1. + trailLength) - trailLength;\n#else\n float t = mod((time + start) / period, 1. + trailLength) - trailLength;\n#endif\n\n float trailLen = distAll * trailLength;\n\n v_Percent = (dist - t * distAll) / trailLen;\n\n v_SpotPercent = spotSize / distAll;\n\n }\n@end\n\n\n@export ecgl.trail2.fragment\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\nuniform float spotIntensity: 5;\n\nvarying vec4 v_Color;\nvarying float v_Percent;\nvarying float v_SpotPercent;\n\n@import ecgl.common.wireframe.fragmentHeader\n\n@import clay.util.srgb\n\nvoid main()\n{\n if (v_Percent > 1.0 || v_Percent < 0.0) {\n discard;\n }\n\n float fade = v_Percent;\n\n#ifdef SRGB_DECODE\n gl_FragColor = sRGBToLinear(color * v_Color);\n#else\n gl_FragColor = color * v_Color;\n#endif\n\n @import ecgl.common.wireframe.fragmentMain\n\n if (v_Percent > (1.0 - v_SpotPercent)) {\n gl_FragColor.rgb *= spotIntensity;\n }\n\n gl_FragColor.a *= fade;\n}\n\n@end"
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n);
    i.a.extendSeriesModel({
      type: "series.lines3D",
      dependencies: ["globe"],
      visualColorAccessPath: "lineStyle.color",
      getInitialData: function (e, t) {
        var r = new i.a.List(["value"], this);
        return r.hasItemOption = !1, r.initData(e.data, [], function (e, t, n, i) {
          if (e instanceof Array) return NaN;
          r.hasItemOption = !0;
          var a = e.value;
          return null != a ? a instanceof Array ? a[i] : a : void 0
        }), r
      },
      defaultOption: {
        coordinateSystem: "globe",
        globeIndex: 0,
        geo3DIndex: 0,
        zlevel: -10,
        polyline: !1,
        effect: {
          show: !1,
          period: 4,
          trailWidth: 4,
          trailLength: .2,
          spotIntensity: 6
        },
        silent: !0,
        blendMode: "source-over",
        lineStyle: {
          width: 1,
          opacity: .5
        }
      }
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = (r(250), r(251), r(17));
    i.a.registerVisual(Object(a.a)("polygons3D"))
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      for (var r = [], n = 0; n < t.length; n++) r.push(e.dataToPoint(t[n]));
      return r
    }
    var i = r(0),
      a = r.n(i),
      o = r(31),
      s = a.a.extendSeriesModel({
        type: "series.polygons3D",
        getRegionModel: function (e) {
          return this.getData().getItemModel(e)
        },
        getRegionPolygonCoords: function (e) {
          var t = this.coordinateSystem,
            r = this.getData().getItemModel(e),
            i = r.option instanceof Array ? r.option : r.getShallow("coords");
          r.get("multiPolygon") || (i = [i]);
          for (var a = [], o = 0; o < i.length; o++) {
            for (var s = [], u = 1; u < i[o].length; u++) s.push(n(t, i[o][u]));
            a.push({
              exterior: n(t, i[o][0]),
              interiors: s
            })
          }
          return a
        },
        getInitialData: function (e) {
          var t = new a.a.List(["value"], this);
          return t.hasItemOption = !1, t.initData(e.data, [], function (e, r, n, i) {
            if (e instanceof Array) return NaN;
            t.hasItemOption = !0;
            var a = e.value;
            return null != a ? a instanceof Array ? a[i] : a : void 0
          }), t
        },
        defaultOption: {
          show: !0,
          data: null,
          multiPolygon: !1,
          progressiveThreshold: 1e3,
          progressive: 1e3,
          zlevel: -10,
          label: {
            show: !1,
            distance: 2,
            textStyle: {
              fontSize: 20,
              color: "#000",
              backgroundColor: "rgba(255,255,255,0.7)",
              padding: 3,
              borderRadius: 4
            }
          },
          itemStyle: {
            color: "#fff",
            borderWidth: 0,
            borderColor: "#333"
          },
          emphasis: {
            itemStyle: {
              color: "#639fc0"
            },
            label: {
              show: !0
            }
          }
        }
      });
    a.a.util.merge(s.prototype, o.a)
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(64),
      o = r(1);
    i.a.extendChartView({
      type: "polygons3D",
      __ecgl__: !0,
      init: function (e, t) {
        this.groupGL = new o.a.Node, this._geo3DBuilderList = [], this._currentStep = 0
      },
      render: function (e, t, r) {
        this.groupGL.removeAll();
        var n = e.coordinateSystem;
        n && n.viewGL && n.viewGL.add(this.groupGL);
        var i = this._geo3DBuilderList[0];
        i || (i = new a.a(r), i.extrudeY = "mapbox3D" !== n.type && "maptalks3D" !== n.type, this._geo3DBuilderList[0] = i), this._updateShaderDefines(n, i), i.update(e, t, r), this._geo3DBuilderList.length = 1, this.groupGL.add(i.rootNode)
      },
      incrementalPrepareRender: function (e, t, r) {
        this.groupGL.removeAll();
        var n = e.coordinateSystem;
        n && n.viewGL && n.viewGL.add(this.groupGL), this._currentStep = 0
      },
      incrementalRender: function (e, t, r, n) {
        var i = this._geo3DBuilderList[this._currentStep],
          o = t.coordinateSystem;
        i || (i = new a.a(n), i.extrudeY = "mapbox3D" !== o.type && "maptalks3D" !== o.type, this._geo3DBuilderList[this._currentStep] = i), i.update(t, r, n, e.start, e.end), this.groupGL.add(i.rootNode), this._updateShaderDefines(o, i), this._currentStep++
      },
      _updateShaderDefines: function (e, t) {
        var r = e.viewGL.isLinearSpace() ? "define" : "undefine";
        t.rootNode.traverse(function (t) {
          t.material && (t.material[r]("fragment", "SRGB_DECODE"), "mapbox3D" !== e.type && "maptalks3D" !== e.type || (t.material.define("fragment", "NORMAL_UP_AXIS", 2), t.material.define("fragment", "NORMAL_FRONT_AXIS", 1)))
        })
      },
      remove: function () {
        this.groupGL.removeAll()
      },
      dispose: function () {
        this.groupGL.removeAll()
      }
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = (r(253), r(254), r(255), r(17));
    i.a.registerVisual(Object(a.a)("surface"))
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(31),
      o = r(39),
      s = r(50),
      u = i.a.extendSeriesModel({
        type: "series.surface",
        dependencies: ["globe", "grid3D", "geo3D"],
        visualColorAccessPath: "itemStyle.color",
        formatTooltip: function (e) {
          return Object(o.a)(this, e)
        },
        getInitialData: function (e, t) {
          function r(e) {
            return !(isNaN(e.min) || isNaN(e.max) || isNaN(e.step))
          }

          function n(e) {
            var t = i.a.number.getPrecisionSafe;
            return Math.max(t(e.min), t(e.max), t(e.step)) + 1
          }
          var a = e.data;
          if (!a)
            if (e.parametric) {
              var o = e.parametricEquation || {},
                u = o.u || {},
                l = o.v || {};
              ["u", "v"].forEach(function (e) {
                r(o[e])
              }), ["x", "y", "z"].forEach(function (e) {
                o[e]
              });
              var h = Math.floor((u.max + u.step - u.min) / u.step),
                c = Math.floor((l.max + l.step - l.min) / l.step);
              a = new Float32Array(h * c * 5);
              for (var d = n(u), f = n(l), p = 0, m = 0; m < c; m++)
                for (var g = 0; g < h; g++) {
                  var _ = g * u.step + u.min,
                    v = m * l.step + l.min,
                    y = i.a.number.round(Math.min(_, u.max), d),
                    x = i.a.number.round(Math.min(v, l.max), f),
                    T = o.x(y, x),
                    b = o.y(y, x),
                    w = o.z(y, x);
                  a[p++] = T, a[p++] = b, a[p++] = w, a[p++] = y, a[p++] = x
                }
            } else {
              var E = e.equation || {},
                S = E.x || {},
                A = E.y || {};
              if (["x", "y"].forEach(function (e) {
                  r(E[e])
                }), "function" != typeof E.z) return;
              var M = Math.floor((S.max + S.step - S.min) / S.step),
                C = Math.floor((A.max + A.step - A.min) / A.step);
              a = new Float32Array(M * C * 3);
              for (var L = n(S), D = n(A), p = 0, m = 0; m < C; m++)
                for (var g = 0; g < M; g++) {
                  var T = g * S.step + S.min,
                    b = m * A.step + A.min,
                    N = i.a.number.round(Math.min(T, S.max), L),
                    R = i.a.number.round(Math.min(b, A.max), D),
                    w = E.z(N, R);
                  a[p++] = N, a[p++] = R, a[p++] = w
                }
            } var P = ["x", "y", "z"];
          return e.parametric && P.push("u", "v"), Object(s.a)(this, P, a)
        },
        defaultOption: {
          coordinateSystem: "cartesian3D",
          zlevel: -10,
          grid3DIndex: 0,
          shading: "lambert",
          parametric: !1,
          wireframe: {
            show: !0,
            lineStyle: {
              color: "rgba(0,0,0,0.5)",
              width: 1
            }
          },
          equation: {
            x: {
              min: -1,
              max: 1,
              step: .1
            },
            y: {
              min: -1,
              max: 1,
              step: .1
            },
            z: null
          },
          parametricEquation: {
            u: {
              min: -1,
              max: 1,
              step: .1
            },
            v: {
              min: -1,
              max: 1,
              step: .1
            },
            x: null,
            y: null,
            z: null
          },
          itemStyle: {},
          animationDurationUpdate: 500
        }
      });
    i.a.util.merge(u.prototype, a.a)
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2])
    }
    var i = r(0),
      a = r.n(i),
      o = r(1),
      s = (r(2), r(6)),
      u = r(65),
      l = s.a.vec3;
    a.a.extendChartView({
      type: "surface",
      __ecgl__: !0,
      init: function (e, t) {
        this.groupGL = new o.a.Node
      },
      render: function (e, t, r) {
        var n = this._prevSurfaceMesh;
        this._prevSurfaceMesh = this._surfaceMesh, this._surfaceMesh = n, this._surfaceMesh || (this._surfaceMesh = this._createSurfaceMesh()), this.groupGL.remove(this._prevSurfaceMesh), this.groupGL.add(this._surfaceMesh);
        var i = e.coordinateSystem,
          a = e.get("shading"),
          s = e.getData(),
          u = "ecgl." + a;
        if (this._surfaceMesh.material && this._surfaceMesh.material.shader.name === u || (this._surfaceMesh.material = o.a.createMaterial(u, ["VERTEX_COLOR", "DOUBLE_SIDED"])), o.a.setMaterialFromModel(a, this._surfaceMesh.material, e, r), i && i.viewGL) {
          i.viewGL.add(this.groupGL);
          var l = i.viewGL.isLinearSpace() ? "define" : "undefine";
          this._surfaceMesh.material[l]("fragment", "SRGB_DECODE")
        }
        var h = e.get("parametric"),
          c = this._getDataShape(s, h),
          d = e.getModel("wireframe"),
          f = d.get("lineStyle.width"),
          p = d.get("show") && f > 0;
        this._updateSurfaceMesh(this._surfaceMesh, e, c, p);
        var m = this._surfaceMesh.material;
        p ? (m.define("WIREFRAME_QUAD"), m.set("wireframeLineWidth", f), m.set("wireframeLineColor", o.a.parseColor(d.get("lineStyle.color")))) : m.undefine("WIREFRAME_QUAD"), this._initHandler(e, r), this._updateAnimation(e)
      },
      _updateAnimation: function (e) {
        o.a.updateVertexAnimation([
          ["prevPosition", "position"],
          ["prevNormal", "normal"]
        ], this._prevSurfaceMesh, this._surfaceMesh, e)
      },
      _createSurfaceMesh: function () {
        var e = new o.a.Mesh({
          geometry: new o.a.Geometry({
            dynamic: !0,
            sortTriangles: !0
          }),
          shadowDepthMaterial: new o.a.Material({
            shader: new o.a.Shader(o.a.Shader.source("ecgl.sm.depth.vertex"), o.a.Shader.source("ecgl.sm.depth.fragment"))
          }),
          culling: !1,
          renderOrder: 10,
          renderNormal: !0
        });
        return e.geometry.createAttribute("barycentric", "float", 4), e.geometry.createAttribute("prevPosition", "float", 3), e.geometry.createAttribute("prevNormal", "float", 3), a.a.util.extend(e.geometry, u.a), e
      },
      _initHandler: function (e, t) {
        function r(e, t) {
          for (var r = 1 / 0, n = -1, a = [], o = 0; o < e.length; o++) {
            i.geometry.attributes.position.get(e[o], a);
            var s = l.dist(t.array, a);
            s < r && (r = s, n = e[o])
          }
          return n
        }
        var n = e.getData(),
          i = this._surfaceMesh,
          a = e.coordinateSystem;
        i.seriesIndex = e.seriesIndex;
        var o = -1;
        i.off("mousemove"), i.off("mouseout"), i.on("mousemove", function (e) {
          var s = r(e.triangle, e.point);
          if (s >= 0) {
            var u = [];
            i.geometry.attributes.position.get(s, u);
            for (var h = a.pointToData(u), c = 1 / 0, d = -1, f = [], p = 0; p < n.count(); p++) {
              f[0] = n.get("x", p), f[1] = n.get("y", p), f[2] = n.get("z", p);
              var m = l.squaredDistance(f, h);
              m < c && (d = p, c = m)
            }
            d !== o && t.dispatchAction({
              type: "grid3DShowAxisPointer",
              value: h
            }), o = d, i.dataIndex = d
          } else i.dataIndex = -1
        }, this), i.on("mouseout", function (e) {
          o = -1, i.dataIndex = -1, t.dispatchAction({
            type: "grid3DHideAxisPointer"
          })
        }, this)
      },
      _updateSurfaceMesh: function (e, t, r, i) {
        var a = e.geometry,
          s = t.getData(),
          u = s.getLayout("points"),
          h = 0;
        s.each(function (e) {
          s.hasValue(e) || h++
        });
        var c = h || i,
          d = a.attributes.position,
          f = a.attributes.normal,
          p = a.attributes.texcoord0,
          m = a.attributes.barycentric,
          g = a.attributes.color,
          _ = r.row,
          v = r.column,
          y = t.get("shading"),
          x = "color" !== y;
        if (c) {
          var T = (_ - 1) * (v - 1) * 4;
          d.init(T), i && m.init(T)
        } else d.value = new Float32Array(u);
        g.init(a.vertexCount), p.init(a.vertexCount);
        var b = [0, 3, 1, 1, 3, 2],
          w = [
            [1, 1, 0, 0],
            [0, 1, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 1, 0]
          ],
          E = a.indices = new(a.vertexCount > 65535 ? Uint32Array : Uint16Array)((_ - 1) * (v - 1) * 6),
          S = function (e, t, r) {
            r[1] = e * v + t, r[0] = e * v + t + 1, r[3] = (e + 1) * v + t + 1, r[2] = (e + 1) * v + t
          },
          A = !1;
        if (c) {
          var M = [],
            C = [],
            L = 0;
          x ? f.init(a.vertexCount) : f.value = null;
          for (var D = [
              [],
              [],
              []
            ], N = [], R = [], P = l.create(), I = function (e, t, r) {
              var n = 3 * t;
              return r[0] = e[n], r[1] = e[n + 1], r[2] = e[n + 2], r
            }, O = new Float32Array(u.length), F = new Float32Array(u.length / 3 * 4), B = 0; B < s.count(); B++)
            if (s.hasValue(B)) {
              var U = o.a.parseColor(s.getItemVisual(B, "color")),
                z = s.getItemVisual(B, "opacity");
              U[3] *= z, U[3] < .99 && (A = !0);
              for (var G = 0; G < 4; G++) F[4 * B + G] = U[G]
            } for (var H = [1e7, 1e7, 1e7], B = 0; B < _ - 1; B++)
            for (var V = 0; V < v - 1; V++) {
              var k = B * (v - 1) + V,
                W = 4 * k;
              S(B, V, M);
              for (var j = !1, G = 0; G < 4; G++) I(u, M[G], C), n(C) && (j = !0);
              for (var G = 0; G < 4; G++) j ? d.set(W + G, H) : (I(u, M[G], C), d.set(W + G, C)), i && m.set(W + G, w[G]);
              for (var G = 0; G < 6; G++) E[L++] = b[G] + W;
              if (x && !j)
                for (var G = 0; G < 2; G++) {
                  for (var X = 3 * G, q = 0; q < 3; q++) {
                    var Z = M[b[X] + q];
                    I(u, Z, D[q])
                  }
                  l.sub(N, D[0], D[1]), l.sub(R, D[1], D[2]), l.cross(P, N, R);
                  for (var q = 0; q < 3; q++) {
                    var Y = 3 * M[b[X] + q];
                    O[Y] = O[Y] + P[0], O[Y + 1] = O[Y + 1] + P[1], O[Y + 2] = O[Y + 2] + P[2]
                  }
                }
            }
          if (x)
            for (var B = 0; B < O.length / 3; B++) I(O, B, P), l.normalize(P, P), O[3 * B] = P[0], O[3 * B + 1] = P[1], O[3 * B + 2] = P[2];
          for (var U = [], K = [], B = 0; B < _ - 1; B++)
            for (var V = 0; V < v - 1; V++) {
              var k = B * (v - 1) + V,
                W = 4 * k;
              S(B, V, M);
              for (var G = 0; G < 4; G++) {
                for (var q = 0; q < 4; q++) U[q] = F[4 * M[G] + q];
                g.set(W + G, U), x && (I(O, M[G], P), f.set(W + G, P));
                var Z = M[G];
                K[0] = Z % v / (v - 1), K[1] = Math.floor(Z / v) / (_ - 1), p.set(W + G, K)
              }
              k++
            }
        } else {
          for (var K = [], B = 0; B < s.count(); B++) {
            K[0] = B % v / (v - 1), K[1] = Math.floor(B / v) / (_ - 1);
            var U = o.a.parseColor(s.getItemVisual(B, "color")),
              z = s.getItemVisual(B, "opacity");
            U[3] *= z, U[3] < .99 && (A = !0), g.set(B, U), p.set(B, K)
          }
          for (var M = [], Q = 0, B = 0; B < _ - 1; B++)
            for (var V = 0; V < v - 1; V++) {
              S(B, V, M);
              for (var G = 0; G < 6; G++) E[Q++] = M[b[G]]
            }
          x ? a.generateVertexNormals() : f.value = null
        }
        e.material.get("normalMap") && a.generateTangents(), a.updateBoundingBox(), a.dirty(), e.material.transparent = A, e.material.depthMask = !A
      },
      _getDataShape: function (e, t) {
        for (var r = -1 / 0, n = 0, i = 0, a = t ? "u" : "x", o = 0; o < e.count(); o++) {
          var s = e.get(a, o);
          s < r && (i, i = 0, n++), r = s, i++
        }
        return {
          row: n + 1,
          column: i
        }
      },
      dispose: function () {
        this.groupGL.removeAll()
      },
      remove: function () {
        this.groupGL.removeAll()
      }
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0);
    r.n(n).a.registerLayout(function (e, t) {
      e.eachSeriesByType("surface", function (e) {
        var t = e.coordinateSystem;
        !t || t.type;
        var r = e.getData(),
          n = new Float32Array(3 * r.count()),
          i = [NaN, NaN, NaN];
        if (t && "cartesian3D" === t.type) {
          var a = t.dimensions,
            o = a.map(function (t) {
              return e.coordDimToDataDim(t)[0]
            });
          r.each(o, function (e, a, o, s) {
            var u;
            u = r.hasValue(s) ? t.dataToPoint([e, a, o]) : i, n[3 * s] = u[0], n[3 * s + 1] = u[1], n[3 * s + 2] = u[2]
          })
        }
        r.setLayout("points", n)
      })
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = (r(99), r(257), r(258), r(17));
    i.a.registerVisual(Object(a.a)("map3D")), i.a.registerAction({
      type: "map3DChangeCamera",
      event: "map3dcamerachanged",
      update: "series:updateCamera"
    }, function (e, t) {
      t.eachComponent({
        mainType: "series",
        subType: "map3D",
        query: e
      }, function (t) {
        t.setView(e)
      })
    })
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      for (var r = [], n = 0; n < t.length; n++) r.push(e.dataToPoint(t[n]));
      return r
    }
    var i = r(0),
      a = r.n(i),
      o = r(44),
      s = r(28),
      u = r(29),
      l = r(31),
      h = r(96),
      c = r(32),
      d = r(39),
      f = r(98),
      p = a.a.extendSeriesModel({
        type: "series.map3D",
        layoutMode: "box",
        coordinateSystem: null,
        visualColorAccessPath: "itemStyle.color",
        optionUpdated: function (e) {
          e = e || {};
          var t = this.get("coordinateSystem");
          if (null != t && "geo3D" !== t) {
            this.get("groundPlane.show") && (this.option.groundPlane.show = !1), this._geo = null
          }
        },
        getInitialData: function (e) {
          e.data = this.getFilledRegions(e.data, e.map);
          var t = a.a.helper.completeDimensions(["value"], e.data),
            r = new a.a.List(t, this);
          r.initData(e.data);
          var n = {};
          return r.each(function (e) {
            var t = r.getName(e),
              i = r.getItemModel(e);
            n[t] = i
          }), this._regionModelMap = n, r
        },
        formatTooltip: function (e) {
          return Object(d.a)(this, e)
        },
        getRegionModel: function (e) {
          var t = this.getData().getName(e);
          return this._regionModelMap[t] || new a.a.Model(null, this)
        },
        getRegionPolygonCoords: function (e) {
          var t = this.coordinateSystem,
            r = this.getData().getName(e);
          if (t.transform) {
            var i = t.getRegion(r);
            return i ? i.geometries : []
          }
          this._geo || (this._geo = f.a.createGeo3D(this));
          for (var i = this._geo.getRegion(r), a = [], o = 0; o < i.geometries.length; o++) {
            var s = i.geometries[o],
              u = [],
              l = n(t, s.exterior);
            if (u && u.length)
              for (var h = 0; h < s.interiors.length; h++) u.push(n(t, u[h]));
            a.push({
              interiors: u,
              exterior: l
            })
          }
          return a
        },
        getFormattedLabel: function (e, t) {
          var r = c.a.getFormattedLabel(this, e, t);
          return null == r && (r = this.getData().getName(e)), r
        },
        defaultOption: {
          coordinateSystem: "geo3D",
          data: null
        }
      });
    a.a.util.merge(p.prototype, h.a), a.a.util.merge(p.prototype, o.a), a.a.util.merge(p.prototype, s.a), a.a.util.merge(p.prototype, u.a), a.a.util.merge(p.prototype, l.a)
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(1),
      o = r(45),
      s = r(30),
      u = r(64);
    i.a.extendChartView({
      type: "map3D",
      __ecgl__: !0,
      init: function (e, t) {
        this._geo3DBuilder = new u.a(t), this.groupGL = new a.a.Node
      },
      render: function (e, t, r) {
        var n = e.coordinateSystem;
        if (n && n.viewGL) {
          this.groupGL.add(this._geo3DBuilder.rootNode), n.viewGL.add(this.groupGL);
          if ("geo3D" === n.type) {
            n,
            this._sceneHelper || (this._sceneHelper = new s.a, this._sceneHelper.initLight(this.groupGL)),
            this._sceneHelper.setScene(n.viewGL.scene),
            this._sceneHelper.updateLight(e),
            n.viewGL.setPostEffect(e.getModel("postEffect"), r),
            n.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));
            var i = this._control;i || (i = this._control = new o.a({
              zr: r.getZr()
            }), this._control.init());
            var a = e.getModel("viewControl");i.setViewGL(n.viewGL),
            i.setFromViewControlModel(a, 0),
            i.off("update"),
            i.on("update", function () {
              r.dispatchAction({
                type: "map3DChangeCamera",
                alpha: i.getAlpha(),
                beta: i.getBeta(),
                distance: i.getDistance(),
                from: this.uid,
                map3DId: e.id
              })
            }),
            this._geo3DBuilder.extrudeY = !0
          }
          else this._control && (this._control.dispose(), this._control = null), this._sceneHelper && (this._sceneHelper.dispose(), this._sceneHelper = null), e.getData().getLayout("geo3D"), this._geo3DBuilder.extrudeY = !1;
          this._geo3DBuilder.update(e, t, r, 0, e.getData().count());
          var u = n.viewGL.isLinearSpace() ? "define" : "undefine";
          this._geo3DBuilder.rootNode.traverse(function (e) {
            e.material && e.material[u]("fragment", "SRGB_DECODE")
          })
        }
      },
      afterRender: function (e, t, r, n) {
        var i = n.renderer,
          a = e.coordinateSystem;
        a && "geo3D" === a.type && (this._sceneHelper.updateAmbientCubemap(i, e, r), this._sceneHelper.updateSkybox(i, e, r))
      },
      dispose: function () {
        this.groupGL.removeAll(), this._control.dispose()
      }
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = (r(260), r(261), r(51)),
      o = r.n(a),
      s = r(17);
    i.a.registerVisual(o()("scatterGL", "circle", null)), i.a.registerVisual(Object(s.a)("scatterGL")), i.a.registerLayout({
      seriesType: "scatterGL",
      reset: function (e) {
        var t, r = e.coordinateSystem;
        if (r) {
          var n = r.dimensions,
            i = [];
          1 === n.length ? t = function (e, t) {
            for (var i = new Float32Array(2 * (e.end - e.start)), a = e.start; a < e.end; a++) {
              var o = 2 * (a - e.start),
                s = t.get(n[0], a),
                u = r.dataToPoint(s);
              i[o] = u[0], i[o + 1] = u[1]
            }
            t.setLayout("points", i)
          } : 2 === n.length && (t = function (e, t) {
            for (var a = new Float32Array(2 * (e.end - e.start)), o = e.start; o < e.end; o++) {
              var s = 2 * (o - e.start),
                u = t.get(n[0], o),
                l = t.get(n[1], o);
              i[0] = u, i[1] = l, i = r.dataToPoint(i), a[s] = i[0], a[s + 1] = i[1]
            }
            t.setLayout("points", a)
          })
        }
        return {
          progress: t
        }
      }
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n);
    i.a.extendSeriesModel({
      type: "series.scatterGL",
      dependencies: ["grid", "polar", "geo", "singleAxis"],
      visualColorAccessPath: "itemStyle.color",
      getInitialData: function () {
        return i.a.helper.createList(this)
      },
      defaultOption: {
        coordinateSystem: "cartesian2d",
        zlevel: 10,
        progressive: 1e5,
        progressiveThreshold: 1e5,
        large: !1,
        symbol: "circle",
        symbolSize: 10,
        zoomScale: 0,
        blendMode: "source-over",
        itemStyle: {
          opacity: .8
        },
        postEffect: {
          enable: !1,
          colorCorrection: {
            exposure: 0,
            brightness: 0,
            contrast: 1,
            saturation: 1,
            enable: !0
          }
        }
      }
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(1),
      o = r(22),
      s = r(67),
      u = r(103);
    r(2);
    i.a.extendChartView({
      type: "scatterGL",
      __ecgl__: !0,
      init: function (e, t) {
        this.groupGL = new a.a.Node, this.viewGL = new o.a("orthographic"), this.viewGL.add(this.groupGL), this._pointsBuilderList = [], this._currentStep = 0, this._sizeScale = 1, this._glViewHelper = new u.a(this.viewGL)
      },
      render: function (e, t, r) {
        if (this.groupGL.removeAll(), this._glViewHelper.reset(e, r), e.getData().count()) {
          var n = this._pointsBuilderList[0];
          n || (n = this._pointsBuilderList[0] = new s.a(!0, r)), this._pointsBuilderList.length = 1, this.groupGL.add(n.rootNode), this._removeTransformInPoints(e.getData().getLayout("points")), n.update(e, t, r), this.viewGL.setPostEffect(e.getModel("postEffect"), r)
        }
      },
      incrementalPrepareRender: function (e, t, r) {
        this.groupGL.removeAll(), this._glViewHelper.reset(e, r), this._currentStep = 0, this.viewGL.setPostEffect(e.getModel("postEffect"), r)
      },
      incrementalRender: function (e, t, r, n) {
        if (!(e.end <= e.start)) {
          var i = this._pointsBuilderList[this._currentStep];
          i || (i = new s.a(!0, n), this._pointsBuilderList[this._currentStep] = i), this.groupGL.add(i.rootNode), this._removeTransformInPoints(t.getData().getLayout("points")), i.setSizeScale(this._sizeScale), i.update(t, r, n, e.start, e.end), n.getZr().refresh(), this._currentStep++
        }
      },
      updateTransform: function (e, t, r) {
        if (e.coordinateSystem.getRoamTransform) {
          this._glViewHelper.updateTransform(e, r);
          var n = this._glViewHelper.getZoom(),
            i = Math.max((e.get("zoomScale") || 0) * (n - 1) + 1, 0);
          this._sizeScale = i, this._pointsBuilderList.forEach(function (e) {
            e.setSizeScale(i)
          })
        }
      },
      _removeTransformInPoints: function (e) {
        if (e)
          for (var t = [], r = 0; r < e.length; r += 2) t[0] = e[r], t[1] = e[r + 1], this._glViewHelper.removeTransformInPoint(t), e[r] = t[0], e[r + 1] = t[1]
      },
      dispose: function () {
        this.groupGL.removeAll()
      },
      remove: function () {
        this.groupGL.removeAll()
      }
    })
  }, function (e, t, r) {
    "use strict";

    function n() {}
    var i = r(0),
      a = r.n(i),
      o = (r(263), r(268), r(51)),
      s = r.n(o),
      u = r(17);
    a.a.registerVisual(s()("graphGL", "circle", null)), a.a.registerVisual(Object(u.a)("graphGL")), a.a.registerVisual(function (e) {
      var t = {};
      e.eachSeriesByType("graphGL", function (e) {
        var r = e.getCategoriesData(),
          n = e.getData(),
          i = {};
        r.each(function (n) {
          var a = r.getName(n);
          i[a] = n;
          var o = r.getItemModel(n),
            s = o.get("itemStyle.color") || e.getColorFromPalette(a, t);
          r.setItemVisual(n, "color", s)
        }), r.count() && n.each(function (e) {
          var t = n.getItemModel(e),
            a = t.getShallow("category");
          null != a && ("string" == typeof a && (a = i[a]), n.getItemVisual(e, "color", !0) || n.setItemVisual(e, "color", r.getItemVisual(a, "color")))
        })
      })
    }), a.a.registerVisual(function (e) {
      e.eachSeriesByType("graphGL", function (e) {
        var t = e.getGraph(),
          r = e.getEdgeData(),
          n = "lineStyle.color".split("."),
          i = "lineStyle.opacity".split(".");
        r.setVisual("color", e.get(n)), r.setVisual("opacity", e.get(i)), r.each(function (e) {
          var a = r.getItemModel(e),
            o = t.getEdgeByIndex(e),
            s = a.get(n),
            u = a.get(i);
          switch (s) {
            case "source":
              s = o.node1.getVisual("color");
              break;
            case "target":
              s = o.node2.getVisual("color")
          }
          o.setVisual("color", s), o.setVisual("opacity", u)
        })
      })
    }), a.a.registerAction({
      type: "graphGLRoam",
      event: "graphglroam",
      update: "series.graphGL:roam"
    }, function (e, t) {
      t.eachComponent({
        mainType: "series",
        query: e
      }, function (t) {
        t.setView(e)
      })
    }), a.a.registerAction({
      type: "graphGLStartLayout",
      event: "graphgllayoutstarted",
      update: "series.graphGL:startLayout"
    }, n), a.a.registerAction({
      type: "graphGLStopLayout",
      event: "graphgllayoutstopped",
      update: "series.graphGL:stopLayout"
    }, n), a.a.registerAction({
      type: "graphGLFocusNodeAdjacency",
      event: "graphGLFocusNodeAdjacency",
      update: "series.graphGL:focusNodeAdjacency"
    }, n), a.a.registerAction({
      type: "graphGLUnfocusNodeAdjacency",
      event: "graphGLUnfocusNodeAdjacency",
      update: "series.graphGL:unfocusNodeAdjacency"
    }, n)
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(264),
      o = r(32),
      s = i.a.extendSeriesModel({
        type: "series.graphGL",
        visualColorAccessPath: "itemStyle.color",
        init: function (e) {
          s.superApply(this, "init", arguments), this.legendDataProvider = function () {
            return this._categoriesData
          }, this._updateCategoriesData()
        },
        mergeOption: function (e) {
          s.superApply(this, "mergeOption", arguments), this._updateCategoriesData()
        },
        getFormattedLabel: function (e, t, r, n) {
          var i = o.a.getFormattedLabel(this, e, t, r, n);
          if (null == i) {
            var a = this.getData(),
              s = a.dimensions[a.dimensions.length - 1];
            i = a.get(s, e)
          }
          return i
        },
        getInitialData: function (e, t) {
          function r(e, r) {
            function n(e) {
              return e = this.parsePath(e), e && "label" === e[0] ? o : this.parentModel
            }
            e.wrapMethod("getItemModel", function (e) {
              var t = s._categoriesModels,
                r = e.getShallow("category"),
                n = t[r];
              return n && (n.parentModel = e.parentModel, e.parentModel = n), e
            });
            var a = s.getModel("edgeLabel"),
              o = new i.a.Model({
                label: a.option
              }, a.parentModel, t);
            r.wrapMethod("getItemModel", function (e) {
              return e.customizeGetParent(n), e
            })
          }
          var n = e.edges || e.links || [],
            o = e.data || e.nodes || [],
            s = this;
          if (o && n) return Object(a.a)(o, n, this, !0, r).data
        },
        getGraph: function () {
          return this.getData().graph
        },
        getEdgeData: function () {
          return this.getGraph().edgeData
        },
        getCategoriesData: function () {
          return this._categoriesData
        },
        formatTooltip: function (e, t, r) {
          if ("edge" === r) {
            var n = this.getData(),
              a = this.getDataParams(e, r),
              o = n.graph.getEdgeByIndex(e),
              u = n.getName(o.node1.dataIndex),
              l = n.getName(o.node2.dataIndex),
              h = [];
            return null != u && h.push(u), null != l && h.push(l), h = i.a.format.encodeHTML(h.join(" > ")), a.value && (h += " : " + i.a.format.encodeHTML(a.value)), h
          }
          return s.superApply(this, "formatTooltip", arguments)
        },
        _updateCategoriesData: function () {
          var e = (this.option.categories || []).map(function (e) {
              return null != e.value ? e : i.a.util.extend({
                value: 0
              }, e)
            }),
            t = new i.a.List(["value"], this);
          t.initData(e), this._categoriesData = t, this._categoriesModels = t.mapArray(function (e) {
            return t.getItemModel(e, !0)
          })
        },
        setView: function (e) {
          null != e.zoom && (this.option.zoom = e.zoom), null != e.offset && (this.option.offset = e.offset)
        },
        setNodePosition: function (e) {
          for (var t = 0; t < e.length / 2; t++) {
            var r = e[2 * t],
              n = e[2 * t + 1],
              i = this.getData().getRawDataItem(t);
            i.x = r, i.y = n
          }
        },
        isAnimationEnabled: function () {
          return s.superCall(this, "isAnimationEnabled") && !("force" === this.get("layout") && this.get("force.layoutAnimation"))
        },
        defaultOption: {
          zlevel: 10,
          z: 2,
          legendHoverLink: !0,
          layout: "forceAtlas2",
          forceAtlas2: {
            initLayout: null,
            GPU: !0,
            steps: 1,
            maxSteps: 1e3,
            repulsionByDegree: !0,
            linLogMode: !1,
            strongGravityMode: !1,
            gravity: 1,
            edgeWeightInfluence: 1,
            edgeWeight: [1, 4],
            nodeWeight: [1, 4],
            preventOverlap: !1,
            gravityCenter: null
          },
          focusNodeAdjacency: !0,
          focusNodeAdjacencyOn: "mouseover",
          left: "center",
          top: "center",
          symbol: "circle",
          symbolSize: 5,
          roam: !1,
          center: null,
          zoom: 1,
          label: {
            show: !1,
            formatter: "{b}",
            position: "right",
            distance: 5,
            textStyle: {
              fontSize: 14
            }
          },
          itemStyle: {},
          lineStyle: {
            color: "#aaa",
            width: 1,
            opacity: .5
          },
          emphasis: {
            label: {
              show: !0
            }
          },
          animation: !1
        }
      })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(265),
      o = r.n(a),
      s = r(267),
      u = r.n(s),
      l = r(2);
    t.a = function (e, t, r, n, a) {
      for (var s = new o.a(n), h = 0; h < e.length; h++) s.addNode(l.a.firstNotNull(e[h].id, e[h].name, h), h);
      for (var c = [], d = [], f = 0, h = 0; h < t.length; h++) {
        var p = t[h],
          m = p.source,
          g = p.target;
        s.addEdge(m, g, f) && (d.push(p), c.push(l.a.firstNotNull(p.id, m + " > " + g)), f++)
      }
      var _, v = i.a.helper.completeDimensions(["value"], e);
      _ = new i.a.List(v, r), _.initData(e);
      var y = new i.a.List(["value"], r);
      return y.initData(d, c), a && a(_, y), u()({
        mainData: _,
        struct: s,
        structAttr: "graph",
        datas: {
          node: _,
          edge: y
        },
        datasAttr: {
          node: "data",
          edge: "edgeData"
        }
      }), s.update(), s
    }
  }, function (e, t, r) {
    function n(e) {
      return "_EC_" + e
    }

    function i(e, t) {
      this.id = null == e ? "" : e, this.inEdges = [], this.outEdges = [], this.edges = [], this.hostGraph, this.dataIndex = null == t ? -1 : t
    }

    function a(e, t, r) {
      this.node1 = e, this.node2 = t, this.dataIndex = null == r ? -1 : r
    }
    var o = r(104),
      s = (o.__DEV__, r(13)),
      u = r(266),
      l = u.enableClassCheck,
      h = function (e) {
        this._directed = e || !1, this.nodes = [], this.edges = [], this._nodesMap = {}, this._edgesMap = {}, this.data, this.edgeData
      },
      c = h.prototype;
    c.type = "graph", c.isDirected = function () {
      return this._directed
    }, c.addNode = function (e, t) {
      e = e || "" + t;
      var r = this._nodesMap;
      if (!r[n(e)]) {
        var a = new i(e, t);
        return a.hostGraph = this, this.nodes.push(a), r[n(e)] = a, a
      }
    }, c.getNodeByIndex = function (e) {
      var t = this.data.getRawIndex(e);
      return this.nodes[t]
    }, c.getNodeById = function (e) {
      return this._nodesMap[n(e)]
    }, c.addEdge = function (e, t, r) {
      var o = this._nodesMap,
        s = this._edgesMap;
      if ("number" == typeof e && (e = this.nodes[e]), "number" == typeof t && (t = this.nodes[t]), i.isInstance(e) || (e = o[n(e)]), i.isInstance(t) || (t = o[n(t)]), e && t) {
        var u = e.id + "-" + t.id;
        if (!s[u]) {
          var l = new a(e, t, r);
          return l.hostGraph = this, this._directed && (e.outEdges.push(l), t.inEdges.push(l)), e.edges.push(l), e !== t && t.edges.push(l), this.edges.push(l), s[u] = l, l
        }
      }
    }, c.getEdgeByIndex = function (e) {
      var t = this.edgeData.getRawIndex(e);
      return this.edges[t]
    }, c.getEdge = function (e, t) {
      i.isInstance(e) && (e = e.id), i.isInstance(t) && (t = t.id);
      var r = this._edgesMap;
      return this._directed ? r[e + "-" + t] : r[e + "-" + t] || r[t + "-" + e]
    }, c.eachNode = function (e, t) {
      for (var r = this.nodes, n = r.length, i = 0; i < n; i++) r[i].dataIndex >= 0 && e.call(t, r[i], i)
    }, c.eachEdge = function (e, t) {
      for (var r = this.edges, n = r.length, i = 0; i < n; i++) r[i].dataIndex >= 0 && r[i].node1.dataIndex >= 0 && r[i].node2.dataIndex >= 0 && e.call(t, r[i], i)
    }, c.breadthFirstTraverse = function (e, t, r, a) {
      if (i.isInstance(t) || (t = this._nodesMap[n(t)]), t) {
        for (var o = "out" === r ? "outEdges" : "in" === r ? "inEdges" : "edges", s = 0; s < this.nodes.length; s++) this.nodes[s].__visited = !1;
        if (!e.call(a, t, null))
          for (var u = [t]; u.length;)
            for (var l = u.shift(), h = l[o], s = 0; s < h.length; s++) {
              var c = h[s],
                d = c.node1 === l ? c.node2 : c.node1;
              if (!d.__visited) {
                if (e.call(a, d, l)) return;
                u.push(d), d.__visited = !0
              }
            }
      }
    }, c.update = function () {
      for (var e = this.data, t = this.edgeData, r = this.nodes, n = this.edges, i = 0, a = r.length; i < a; i++) r[i].dataIndex = -1;
      for (var i = 0, a = e.count(); i < a; i++) r[e.getRawIndex(i)].dataIndex = i;
      t.filterSelf(function (e) {
        var r = n[t.getRawIndex(e)];
        return r.node1.dataIndex >= 0 && r.node2.dataIndex >= 0
      });
      for (var i = 0, a = n.length; i < a; i++) n[i].dataIndex = -1;
      for (var i = 0, a = t.count(); i < a; i++) n[t.getRawIndex(i)].dataIndex = i
    }, c.clone = function () {
      for (var e = new h(this._directed), t = this.nodes, r = this.edges, n = 0; n < t.length; n++) e.addNode(t[n].id, t[n].dataIndex);
      for (var n = 0; n < r.length; n++) {
        var i = r[n];
        e.addEdge(i.node1.id, i.node2.id, i.dataIndex)
      }
      return e
    }, i.prototype = {
      constructor: i,
      degree: function () {
        return this.edges.length
      },
      inDegree: function () {
        return this.inEdges.length
      },
      outDegree: function () {
        return this.outEdges.length
      },
      getModel: function (e) {
        if (!(this.dataIndex < 0)) {
          return this.hostGraph.data.getItemModel(this.dataIndex).getModel(e)
        }
      }
    }, a.prototype.getModel = function (e) {
      if (!(this.dataIndex < 0)) {
        return this.hostGraph.edgeData.getItemModel(this.dataIndex).getModel(e)
      }
    };
    var d = function (e, t) {
      return {
        getValue: function (r) {
          var n = this[e][t];
          return n.get(n.getDimension(r || "value"), this.dataIndex)
        },
        setVisual: function (r, n) {
          this.dataIndex >= 0 && this[e][t].setItemVisual(this.dataIndex, r, n)
        },
        getVisual: function (r, n) {
          return this[e][t].getItemVisual(this.dataIndex, r, n)
        },
        setLayout: function (r, n) {
          this.dataIndex >= 0 && this[e][t].setItemLayout(this.dataIndex, r, n)
        },
        getLayout: function () {
          return this[e][t].getItemLayout(this.dataIndex)
        },
        getGraphicEl: function () {
          return this[e][t].getItemGraphicEl(this.dataIndex)
        },
        getRawIndex: function () {
          return this[e][t].getRawIndex(this.dataIndex)
        }
      }
    };
    s.mixin(i, d("hostGraph", "data")), s.mixin(a, d("hostGraph", "edgeData")), h.Node = i, h.Edge = a, l(i), l(a);
    var f = h;
    e.exports = f
  }, function (e, t, r) {
    function n(e) {
      var t = {
        main: "",
        sub: ""
      };
      return e && (e = e.split(f), t.main = e[0] || "", t.sub = e[1] || ""), t
    }

    function i(e) {
      d.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(e), 'componentType "' + e + '" illegal')
    }

    function a(e, t) {
      e.$constructor = e, e.extend = function (e) {
        var t = this,
          r = function () {
            e.$constructor ? e.$constructor.apply(this, arguments) : t.apply(this, arguments)
          };
        return d.extend(r.prototype, e), r.extend = this.extend, r.superCall = s, r.superApply = u, d.inherits(r, this), r.superClass = t, r
      }
    }

    function o(e) {
      var t = ["__\0is_clz", m++, Math.random().toFixed(3)].join("_");
      e.prototype[t] = !0, e.isInstance = function (e) {
        return !(!e || !e[t])
      }
    }

    function s(e, t) {
      var r = d.slice(arguments, 2);
      return this.superClass.prototype[t].apply(e, r)
    }

    function u(e, t, r) {
      return this.superClass.prototype[t].apply(e, r)
    }

    function l(e, t) {
      function r(e) {
        var t = a[e.main];
        return t && t[p] || (t = a[e.main] = {}, t[p] = !0), t
      }
      t = t || {};
      var a = {};
      if (e.registerClass = function (e, t) {
          if (t)
            if (i(t), t = n(t), t.sub) {
              if (t.sub !== p) {
                var o = r(t);
                o[t.sub] = e
              }
            } else a[t.main] = e;
          return e
        }, e.getClass = function (e, t, r) {
          var n = a[e];
          if (n && n[p] && (n = t ? n[t] : null), r && !n) throw new Error(t ? "Component " + e + "." + (t || "") + " not exists. Load it first." : e + ".type should be specified.");
          return n
        }, e.getClassesByMainType = function (e) {
          e = n(e);
          var t = [],
            r = a[e.main];
          return r && r[p] ? d.each(r, function (e, r) {
            r !== p && t.push(e)
          }) : t.push(r), t
        }, e.hasClass = function (e) {
          return e = n(e), !!a[e.main]
        }, e.getAllClassMainTypes = function () {
          var e = [];
          return d.each(a, function (t, r) {
            e.push(r)
          }), e
        }, e.hasSubTypes = function (e) {
          e = n(e);
          var t = a[e.main];
          return t && t[p]
        }, e.parseClassType = n, t.registerWhenExtend) {
        var o = e.extend;
        o && (e.extend = function (t) {
          var r = o.call(this, t);
          return e.registerClass(r, t.type)
        })
      }
      return e
    }

    function h(e, t) {}
    var c = r(104),
      d = (c.__DEV__, r(13)),
      f = ".",
      p = "___EC__COMPONENT__CONTAINER___",
      m = 0;
    t.parseClassType = n, t.enableClassExtend = a, t.enableClassCheck = o, t.enableClassManagement = l, t.setReadOnly = h
  }, function (e, t, r) {
    function n(e) {
      var t = e.mainData,
        r = e.datas;
      r || (r = {
        main: t
      }, e.datasAttr = {
        main: "data"
      }), e.datas = e.mainData = null, l(t, r, e), d(r, function (r) {
        d(t.TRANSFERABLE_METHODS, function (t) {
          r.wrapMethod(t, c.curry(i, e))
        })
      }), t.wrapMethod("cloneShallow", c.curry(o, e)), d(t.CHANGABLE_METHODS, function (r) {
        t.wrapMethod(r, c.curry(a, e))
      }), c.assert(r[t.dataType] === t)
    }

    function i(e, t) {
      if (u(this)) {
        var r = c.extend({}, this[f]);
        r[this.dataType] = t, l(t, r, e)
      } else h(t, this.dataType, this[p], e);
      return t
    }

    function a(e, t) {
      return e.struct && e.struct.update(this), t
    }

    function o(e, t) {
      return d(t[f], function (r, n) {
        r !== t && h(r.cloneShallow(), n, t, e)
      }), t
    }

    function s(e) {
      var t = this[p];
      return null == e || null == t ? t : t[f][e]
    }

    function u(e) {
      return e[p] === e
    }

    function l(e, t, r) {
      e[f] = {}, d(t, function (t, n) {
        h(t, n, e, r)
      })
    }

    function h(e, t, r, n) {
      r[f][t] = e, e[p] = r, e.dataType = t, n.struct && (e[n.structAttr] = n.struct, n.struct[n.datasAttr[t]] = e), e.getLinkedData = s
    }
    var c = r(13),
      d = c.each,
      f = "\0__link_datas",
      p = "\0__link_mainData",
      m = n;
    e.exports = m
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(47),
      o = r.n(a),
      s = r(1),
      u = r(22),
      l = r(105),
      h = r(2),
      c = r(269),
      d = r(271),
      f = r(80),
      p = r.n(f),
      m = r(6),
      g = r(273),
      _ = r(67),
      v = r(274),
      y = m.a.vec2;
    s.a.Shader.import(v.a);
    var x = 1;
    i.a.extendChartView({
      type: "graphGL",
      __ecgl__: !0,
      init: function (e, t) {
        this.groupGL = new s.a.Node, this.viewGL = new u.a("orthographic"), this.viewGL.camera.left = this.viewGL.camera.right = 0, this.viewGL.add(this.groupGL), this._pointsBuilder = new _.a(!0, t), this._forceEdgesMesh = new s.a.Mesh({
          material: new s.a.Material({
            shader: s.a.createShader("ecgl.forceAtlas2.edges"),
            transparent: !0,
            depthMask: !1,
            depthTest: !1
          }),
          $ignorePicking: !0,
          geometry: new s.a.Geometry({
            attributes: {
              node: new s.a.Geometry.Attribute("node", "float", 2),
              color: new s.a.Geometry.Attribute("color", "float", 4, "COLOR")
            },
            dynamic: !0,
            mainAttribute: "node"
          }),
          renderOrder: -1,
          mode: s.a.Mesh.LINES
        }), this._edgesMesh = new s.a.Mesh({
          material: new s.a.Material({
            shader: s.a.createShader("ecgl.meshLines2D"),
            transparent: !0,
            depthMask: !1,
            depthTest: !1
          }),
          $ignorePicking: !0,
          geometry: new l.a({
            useNativeLine: !1,
            dynamic: !0
          }),
          renderOrder: -1,
          culling: !1
        }), this._layoutId = 0, this._control = new g.a({
          zr: t.getZr(),
          viewGL: this.viewGL
        }), this._control.setTarget(this.groupGL), this._control.init(), this._clickHandler = this._clickHandler.bind(this)
      },
      render: function (e, t, r) {
        this.groupGL.add(this._pointsBuilder.rootNode), this._model = e, this._api = r, this._initLayout(e, t, r), this._pointsBuilder.update(e, t, r), this._forceLayoutInstance instanceof c.a || this.groupGL.remove(this._forceEdgesMesh), this._updateCamera(e, r), this._control.off("update"), this._control.on("update", function () {
          r.dispatchAction({
            type: "graphGLRoam",
            seriesId: e.id,
            zoom: this._control.getZoom(),
            offset: this._control.getOffset()
          }), this._pointsBuilder.updateView(this.viewGL.camera)
        }, this), this._control.setZoom(h.a.firstNotNull(e.get("zoom"), 1)), this._control.setOffset(e.get("offset") || [0, 0]);
        var n = this._pointsBuilder.getPointsMesh();
        if (n.off("mousemove", this._mousemoveHandler), n.off("mouseout", this._mouseOutHandler, this), r.getZr().off("click", this._clickHandler), this._pointsBuilder.highlightOnMouseover = !0, e.get("focusNodeAdjacency")) {
          var i = e.get("focusNodeAdjacencyOn");
          "click" === i ? r.getZr().on("click", this._clickHandler) : "mouseover" === i && (n.on("mousemove", this._mousemoveHandler, this), n.on("mouseout", this._mouseOutHandler, this), this._pointsBuilder.highlightOnMouseover = !1)
        }
        this._lastMouseOverDataIndex = -1
      },
      _clickHandler: function (e) {
        if (!this._layouting) {
          var t = this._pointsBuilder.getPointsMesh().dataIndex;
          t >= 0 ? this._api.dispatchAction({
            type: "graphGLFocusNodeAdjacency",
            seriesId: this._model.id,
            dataIndex: t
          }) : this._api.dispatchAction({
            type: "graphGLUnfocusNodeAdjacency",
            seriesId: this._model.id
          })
        }
      },
      _mousemoveHandler: function (e) {
        if (!this._layouting) {
          var t = this._pointsBuilder.getPointsMesh().dataIndex;
          t >= 0 ? t !== this._lastMouseOverDataIndex && this._api.dispatchAction({
            type: "graphGLFocusNodeAdjacency",
            seriesId: this._model.id,
            dataIndex: t
          }) : this._mouseOutHandler(e), this._lastMouseOverDataIndex = t
        }
      },
      _mouseOutHandler: function (e) {
        this._layouting || (this._api.dispatchAction({
          type: "graphGLUnfocusNodeAdjacency",
          seriesId: this._model.id
        }), this._lastMouseOverDataIndex = -1)
      },
      _updateForceEdgesGeometry: function (e, t) {
        var r = this._forceEdgesMesh.geometry,
          n = t.getEdgeData(),
          i = 0,
          a = this._forceLayoutInstance,
          o = 2 * n.count();
        r.attributes.node.init(o), r.attributes.color.init(o), n.each(function (t) {
          var o = e[t];
          r.attributes.node.set(i, a.getNodeUV(o.node1)), r.attributes.node.set(i + 1, a.getNodeUV(o.node2));
          var u = n.getItemVisual(o.dataIndex, "color"),
            l = s.a.parseColor(u);
          l[3] *= h.a.firstNotNull(n.getItemVisual(o.dataIndex, "opacity"), 1), r.attributes.color.set(i, l), r.attributes.color.set(i + 1, l), i += 2
        }), r.dirty()
      },
      _updateMeshLinesGeometry: function () {
        var e = this._model.getEdgeData(),
          t = this._edgesMesh.geometry,
          e = this._model.getEdgeData(),
          r = this._model.getData().getLayout("points");
        t.resetOffset(), t.setVertexCount(e.count() * t.getLineVertexCount()), t.setTriangleCount(e.count() * t.getLineTriangleCount());
        var n = [],
          i = [],
          a = ["lineStyle", "width"];
        this._originalEdgeColors = new Float32Array(4 * e.count()), this._edgeIndicesMap = new Float32Array(e.count()), e.each(function (o) {
          var u = e.graph.getEdgeByIndex(o),
            l = 2 * u.node1.dataIndex,
            c = 2 * u.node2.dataIndex;
          n[0] = r[l], n[1] = r[l + 1], i[0] = r[c], i[1] = r[c + 1];
          var d = e.getItemVisual(u.dataIndex, "color"),
            f = s.a.parseColor(d);
          f[3] *= h.a.firstNotNull(e.getItemVisual(u.dataIndex, "opacity"), 1);
          var p = e.getItemModel(u.dataIndex),
            m = h.a.firstNotNull(p.get(a), 1) * this._api.getDevicePixelRatio();
          t.addLine(n, i, f, m);
          for (var g = 0; g < 4; g++) this._originalEdgeColors[4 * u.dataIndex + g] = f[g];
          this._edgeIndicesMap[u.dataIndex] = o
        }, this), t.dirty()
      },
      _updateForceNodesGeometry: function (e) {
        for (var t = this._pointsBuilder.getPointsMesh(), r = [], n = 0; n < e.count(); n++) this._forceLayoutInstance.getNodeUV(n, r), t.geometry.attributes.position.set(n, r);
        t.geometry.dirty("position")
      },
      _initLayout: function (e, t, r) {
        var n = e.get("layout"),
          a = e.getGraph(),
          s = e.getBoxLayoutParams(),
          u = o.a.getLayoutRect(s, {
            width: r.getWidth(),
            height: r.getHeight()
          });
        "force" === n && (n = "forceAtlas2"), this.stopLayout(e, t, r, {
          beforeLayout: !0
        });
        var l = e.getData(),
          f = e.getData();
        if ("forceAtlas2" === n) {
          var p = e.getModel("forceAtlas2"),
            m = this._forceLayoutInstance,
            g = [],
            _ = [],
            v = l.getDataExtent("value"),
            y = f.getDataExtent("value"),
            x = h.a.firstNotNull(p.get("edgeWeight"), 1),
            T = h.a.firstNotNull(p.get("nodeWeight"), 1);
          "number" == typeof x && (x = [x, x]), "number" == typeof T && (T = [T, T]);
          var b = 0,
            w = {},
            E = new Float32Array(2 * l.count());
          if (a.eachNode(function (e) {
              var t, r, n = e.dataIndex,
                a = l.get("value", n);
              if (l.hasItemOption) {
                var o = l.getItemModel(n);
                t = o.get("x"), r = o.get("y")
              }
              null == t && (t = u.x + Math.random() * u.width, r = u.y + Math.random() * u.height), E[2 * b] = t, E[2 * b + 1] = r, w[e.id] = b++;
              var s = i.a.number.linearMap(a, v, T);
              isNaN(s) && (s = isNaN(T[0]) ? 1 : T[0]), g.push({
                x: t,
                y: r,
                mass: s,
                size: l.getItemVisual(n, "symbolSize")
              })
            }), l.setLayout("points", E), a.eachEdge(function (e) {
              var t = e.dataIndex,
                r = l.get("value", t),
                n = i.a.number.linearMap(r, y, x);
              isNaN(n) && (n = isNaN(x[0]) ? 1 : x[0]), _.push({
                node1: w[e.node1.id],
                node2: w[e.node2.id],
                weight: n,
                dataIndex: t
              })
            }), !m) {
            var S = p.get("GPU");
            this._forceLayoutInstance && ((!S || this._forceLayoutInstance instanceof c.a) && (S || this._forceLayoutInstance instanceof d.a) || (this._forceLayoutInstanceToDispose = this._forceLayoutInstance)), m = this._forceLayoutInstance = S ? new c.a : new d.a
          }
          m.initData(g, _), m.updateOption(p.option), this._updateForceEdgesGeometry(m.getEdges(), e), this._updatePositionTexture(), r.dispatchAction({
            type: "graphGLStartLayout",
            from: this.uid
          })
        } else {
          var E = new Float32Array(2 * l.count()),
            b = 0;
          a.eachNode(function (e) {
            var t, r, n = e.dataIndex;
            if (l.hasItemOption) {
              var i = l.getItemModel(n);
              t = i.get("x"), r = i.get("y")
            }
            E[b++] = t, E[b++] = r
          }), l.setLayout("points", E), this._updateAfterLayout(e, t, r)
        }
      },
      _updatePositionTexture: function () {
        var e = this._forceLayoutInstance.getNodePositionTexture();
        this._pointsBuilder.setPositionTexture(e), this._forceEdgesMesh.material.set("positionTex", e)
      },
      startLayout: function (e, t, r, n) {
        if (!n || null == n.from || n.from === this.uid) {
          var i = this.viewGL,
            r = this._api,
            a = this._forceLayoutInstance,
            o = this._model.getData(),
            s = this._model.getModel("forceAtlas2");
          if (a && (this.groupGL.remove(this._edgesMesh), this.groupGL.add(this._forceEdgesMesh), this._forceLayoutInstance)) {
            this._updateForceNodesGeometry(e.getData()), this._pointsBuilder.hideLabels();
            var u = this,
              l = this._layoutId = x++,
              h = s.getShallow("maxSteps"),
              c = s.getShallow("steps"),
              d = 0,
              f = Math.max(2 * c, 20),
              m = function (t) {
                if (t === u._layoutId) return a.isFinished(h) ? (r.dispatchAction({
                  type: "graphGLStopLayout",
                  from: u.uid
                }), void r.dispatchAction({
                  type: "graphGLFinishLayout",
                  points: o.getLayout("points"),
                  from: u.uid
                })) : void a.update(i.layer.renderer, c, function () {
                  u._updatePositionTexture(), d += c, d >= f && (u._syncNodePosition(e), d = 0), r.getZr().refresh(), p()(function () {
                    m(t)
                  })
                })
              };
            p()(function () {
              u._forceLayoutInstanceToDispose && (u._forceLayoutInstanceToDispose.dispose(i.layer.renderer), u._forceLayoutInstanceToDispose = null), m(l)
            }), this._layouting = !0
          }
        }
      },
      stopLayout: function (e, t, r, n) {
        n && null != n.from && n.from !== this.uid || (this._layoutId = 0, this.groupGL.remove(this._forceEdgesMesh), this.groupGL.add(this._edgesMesh), this._forceLayoutInstance && this.viewGL.layer && (n && n.beforeLayout || (this._syncNodePosition(e), this._updateAfterLayout(e, t, r)), this._api.getZr().refresh(), this._layouting = !1))
      },
      _syncNodePosition: function (e) {
        var t = this._forceLayoutInstance.getNodePosition(this.viewGL.layer.renderer);
        e.getData().setLayout("points", t), e.setNodePosition(t)
      },
      _updateAfterLayout: function (e, t, r) {
        this._updateMeshLinesGeometry(), this._pointsBuilder.removePositionTexture(), this._pointsBuilder.updateLayout(e, t, r), this._pointsBuilder.updateView(this.viewGL.camera), this._pointsBuilder.updateLabels(), this._pointsBuilder.showLabels()
      },
      focusNodeAdjacency: function (e, t, r, n) {
        var i = this._model.getData();
        this._downplayAll();
        var a = n.dataIndex,
          o = i.graph,
          s = [],
          u = o.getNodeByIndex(a);
        s.push(u), u.edges.forEach(function (e) {
          e.dataIndex < 0 || (e.node1 !== u && s.push(e.node1), e.node2 !== u && s.push(e.node2))
        }, this), this._pointsBuilder.fadeOutAll(.05), this._fadeOutEdgesAll(.05), s.forEach(function (e) {
          this._pointsBuilder.highlight(i, e.dataIndex)
        }, this), this._pointsBuilder.updateLabels(s.map(function (e) {
          return e.dataIndex
        }));
        var l = [];
        u.edges.forEach(function (e) {
          e.dataIndex >= 0 && (this._highlightEdge(e.dataIndex), l.push(e))
        }, this), this._focusNodes = s, this._focusEdges = l
      },
      unfocusNodeAdjacency: function (e, t, r, n) {
        this._downplayAll(), this._pointsBuilder.fadeInAll(), this._fadeInEdgesAll(), this._pointsBuilder.updateLabels()
      },
      _highlightEdge: function (e) {
        var t = this._model.getEdgeData().getItemModel(e),
          r = s.a.parseColor(t.get("emphasis.lineStyle.color") || t.get("lineStyle.color")),
          n = h.a.firstNotNull(t.get("emphasis.lineStyle.opacity"), t.get("lineStyle.opacity"), 1);
        r[3] *= n, this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e], r)
      },
      _downplayAll: function () {
        this._focusNodes && this._focusNodes.forEach(function (e) {
          this._pointsBuilder.downplay(this._model.getData(), e.dataIndex)
        }, this), this._focusEdges && this._focusEdges.forEach(function (e) {
          this._downplayEdge(e.dataIndex)
        }, this)
      },
      _downplayEdge: function (e) {
        var t = this._getColor(e, []);
        this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e], t)
      },
      _setEdgeFade: function () {
        var e = [];
        return function (t, r) {
          this._getColor(t, e), e[3] *= r, this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[t], e)
        }
      }(),
      _getColor: function (e, t) {
        for (var r = 0; r < 4; r++) t[r] = this._originalEdgeColors[4 * e + r];
        return t
      },
      _fadeOutEdgesAll: function (e) {
        this._model.getData().graph.eachEdge(function (t) {
          this._setEdgeFade(t.dataIndex, e)
        }, this)
      },
      _fadeInEdgesAll: function () {
        this._fadeOutEdgesAll(1)
      },
      _updateCamera: function (e, t) {
        this.viewGL.setViewport(0, 0, t.getWidth(), t.getHeight(), t.getDevicePixelRatio());
        for (var r = this.viewGL.camera, n = e.getData(), i = n.getLayout("points"), a = y.create(1 / 0, 1 / 0), o = y.create(-1 / 0, -1 / 0), s = [], u = 0; u < i.length;) s[0] = i[u++], s[1] = i[u++], y.min(a, a, s), y.max(o, o, s);
        var l = (o[1] + a[1]) / 2,
          h = (o[0] + a[0]) / 2;
        if (!(h > r.left && h < r.right && l < r.bottom && l > r.top)) {
          var c = Math.max(o[0] - a[0], 10),
            d = c / t.getWidth() * t.getHeight();
          c *= 1.4, d *= 1.4, a[0] -= .2 * c, r.left = a[0], r.top = l - d / 2, r.bottom = l + d / 2, r.right = c + a[0], r.near = 0, r.far = 100
        }
      },
      dispose: function () {
        var e = this.viewGL.layer.renderer;
        this._forceLayoutInstance && this._forceLayoutInstance.dispose(e), this.groupGL.removeAll(), this._layoutId = -1
      },
      remove: function () {
        this.groupGL.removeAll(), this._control.dispose()
      }
    })
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      var t = {
        type: o.a.Texture.FLOAT,
        minFilter: o.a.Texture.NEAREST,
        magFilter: o.a.Texture.NEAREST
      };
      this._positionSourceTex = new o.a.Texture2D(t), this._positionSourceTex.flipY = !1, this._positionTex = new o.a.Texture2D(t), this._positionPrevTex = new o.a.Texture2D(t), this._forceTex = new o.a.Texture2D(t), this._forcePrevTex = new o.a.Texture2D(t), this._weightedSumTex = new o.a.Texture2D(t), this._weightedSumTex.width = this._weightedSumTex.height = 1, this._globalSpeedTex = new o.a.Texture2D(t), this._globalSpeedPrevTex = new o.a.Texture2D(t), this._globalSpeedTex.width = this._globalSpeedTex.height = 1, this._globalSpeedPrevTex.width = this._globalSpeedPrevTex.height = 1, this._nodeRepulsionPass = new s.a({
        fragment: o.a.Shader.source("ecgl.forceAtlas2.updateNodeRepulsion")
      }), this._positionPass = new s.a({
        fragment: o.a.Shader.source("ecgl.forceAtlas2.updatePosition")
      }), this._globalSpeedPass = new s.a({
        fragment: o.a.Shader.source("ecgl.forceAtlas2.calcGlobalSpeed")
      }), this._copyPass = new s.a({
        fragment: o.a.Shader.source("clay.compositor.output")
      });
      var r = function (e) {
        e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ONE)
      };
      this._edgeForceMesh = new o.a.Mesh({
        geometry: new o.a.Geometry({
          attributes: {
            node1: new o.a.Geometry.Attribute("node1", "float", 2),
            node2: new o.a.Geometry.Attribute("node2", "float", 2),
            weight: new o.a.Geometry.Attribute("weight", "float", 1)
          },
          dynamic: !0,
          mainAttribute: "node1"
        }),
        material: new o.a.Material({
          transparent: !0,
          shader: o.a.createShader("ecgl.forceAtlas2.updateEdgeAttraction"),
          blend: r,
          depthMask: !1,
          depthText: !1
        }),
        mode: o.a.Mesh.POINTS
      }), this._weightedSumMesh = new o.a.Mesh({
        geometry: new o.a.Geometry({
          attributes: {
            node: new o.a.Geometry.Attribute("node", "float", 2)
          },
          dynamic: !0,
          mainAttribute: "node"
        }),
        material: new o.a.Material({
          transparent: !0,
          shader: o.a.createShader("ecgl.forceAtlas2.calcWeightedSum"),
          blend: r,
          depthMask: !1,
          depthText: !1
        }),
        mode: o.a.Mesh.POINTS
      }), this._framebuffer = new u.a({
        depthBuffer: !1
      }), this._dummyCamera = new o.a.OrthographicCamera({
        left: -1,
        right: 1,
        top: 1,
        bottom: -1,
        near: 0,
        far: 100
      }), this._globalSpeed = 0
    }
    var i = r(0),
      a = r.n(i),
      o = r(1),
      s = r(16),
      u = r(10),
      l = r(270);
    o.a.Shader.import(l.a);
    var h = {
      repulsionByDegree: !0,
      linLogMode: !1,
      strongGravityMode: !1,
      gravity: 1,
      scaling: 1,
      edgeWeightInfluence: 1,
      jitterTolerence: .1,
      preventOverlap: !1,
      dissuadeHubs: !1,
      gravityCenter: null
    };
    n.prototype.updateOption = function (e) {
      for (var t in h) this[t] = h[t];
      var r = this._nodes.length;
      if (this.jitterTolerence = r > 5e4 ? 10 : r > 5e3 ? 1 : .1, this.scaling = r > 100 ? 2 : 10, e)
        for (var t in h) null != e[t] && (this[t] = e[t]);
      if (this.repulsionByDegree)
        for (var n = this._positionSourceTex.pixels, i = 0; i < this._nodes.length; i++) n[4 * i + 2] = (this._nodes[i].degree || 0) + 1
    }, n.prototype._updateGravityCenter = function (e) {
      var t = this._nodes,
        r = this._edges;
      if (this.gravityCenter) this._gravityCenter = this.gravityCenter;
      else {
        for (var n = [1 / 0, 1 / 0], i = [-1 / 0, -1 / 0], a = 0; a < t.length; a++) n[0] = Math.min(t[a].x, n[0]), n[1] = Math.min(t[a].y, n[1]), i[0] = Math.max(t[a].x, i[0]), i[1] = Math.max(t[a].y, i[1]);
        this._gravityCenter = [.5 * (n[0] + i[0]), .5 * (n[1] + i[1])]
      }
      for (var a = 0; a < r.length; a++) {
        var o = r[a].node1,
          s = r[a].node2;
        t[o].degree = (t[o].degree || 0) + 1, t[s].degree = (t[s].degree || 0) + 1
      }
    }, n.prototype.initData = function (e, t) {
      this._nodes = e, this._edges = t, this._updateGravityCenter();
      var r = Math.ceil(Math.sqrt(e.length)),
        n = r,
        i = new Float32Array(r * n * 4);
      this._resize(r, n);
      for (var a = 0, o = 0; o < e.length; o++) {
        var s = e[o];
        i[a++] = s.x || 0, i[a++] = s.y || 0, i[a++] = s.mass || 1, i[a++] = s.size || 1
      }
      this._positionSourceTex.pixels = i;
      var u = this._edgeForceMesh.geometry,
        l = t.length;
      u.attributes.node1.init(2 * l), u.attributes.node2.init(2 * l), u.attributes.weight.init(2 * l);
      for (var h = [], o = 0; o < t.length; o++) {
        var c = u.attributes,
          d = t[o].weight;
        null == d && (d = 1), c.node1.set(o, this.getNodeUV(t[o].node1, h)), c.node2.set(o, this.getNodeUV(t[o].node2, h)), c.weight.set(o, d), c.node1.set(o + l, this.getNodeUV(t[o].node2, h)), c.node2.set(o + l, this.getNodeUV(t[o].node1, h)), c.weight.set(o + l, d)
      }
      var f = this._weightedSumMesh.geometry;
      f.attributes.node.init(e.length);
      for (var o = 0; o < e.length; o++) f.attributes.node.set(o, this.getNodeUV(o, h));
      u.dirty(), f.dirty(), this._nodeRepulsionPass.material.define("fragment", "NODE_COUNT", e.length), this._nodeRepulsionPass.material.setUniform("textureSize", [r, n]), this._inited = !1, this._frame = 0
    }, n.prototype.getNodes = function () {
      return this._nodes
    }, n.prototype.getEdges = function () {
      return this._edges
    }, n.prototype.step = function (e) {
      this._inited || (this._initFromSource(e), this._inited = !0), this._frame++, this._framebuffer.attach(this._forceTex), this._framebuffer.bind(e);
      var t = this._nodeRepulsionPass;
      t.setUniform("strongGravityMode", this.strongGravityMode), t.setUniform("gravity", this.gravity), t.setUniform("gravityCenter", this._gravityCenter), t.setUniform("scaling", this.scaling), t.setUniform("preventOverlap", this.preventOverlap), t.setUniform("positionTex", this._positionPrevTex), t.render(e);
      var r = this._edgeForceMesh;
      r.material.set("linLogMode", this.linLogMode), r.material.set("edgeWeightInfluence", this.edgeWeightInfluence), r.material.set("preventOverlap", this.preventOverlap), r.material.set("positionTex", this._positionPrevTex), e.gl.enable(e.gl.BLEND), e.renderPass([r], this._dummyCamera), this._framebuffer.attach(this._weightedSumTex), e.gl.clearColor(0, 0, 0, 0), e.gl.clear(e.gl.COLOR_BUFFER_BIT), e.gl.enable(e.gl.BLEND);
      var n = this._weightedSumMesh;
      n.material.set("positionTex", this._positionPrevTex), n.material.set("forceTex", this._forceTex), n.material.set("forcePrevTex", this._forcePrevTex), e.renderPass([n], this._dummyCamera), this._framebuffer.attach(this._globalSpeedTex);
      var i = this._globalSpeedPass;
      i.setUniform("globalSpeedPrevTex", this._globalSpeedPrevTex), i.setUniform("weightedSumTex", this._weightedSumTex), i.setUniform("jitterTolerence", this.jitterTolerence), e.gl.disable(e.gl.BLEND), i.render(e);
      var a = this._positionPass;
      this._framebuffer.attach(this._positionTex), a.setUniform("globalSpeedTex", this._globalSpeedTex), a.setUniform("positionTex", this._positionPrevTex), a.setUniform("forceTex", this._forceTex), a.setUniform("forcePrevTex", this._forcePrevTex), a.render(e), this._framebuffer.unbind(e), this._swapTexture()
    }, n.prototype.update = function (e, t, r) {
      null == t && (t = 1), t = Math.max(t, 1);
      for (var n = 0; n < t; n++) this.step(e);
      r && r()
    }, n.prototype.getNodePositionTexture = function () {
      return this._inited ? this._positionPrevTex : this._positionSourceTex
    }, n.prototype.getNodeUV = function (e, t) {
      t = t || [];
      var r = this._positionTex.width,
        n = this._positionTex.height;
      return t[0] = e % r / (r - 1), t[1] = Math.floor(e / r) / (n - 1) || 0, t
    }, n.prototype.getNodePosition = function (e, t) {
      var r = this._positionArr,
        n = this._positionTex.width,
        i = this._positionTex.height,
        a = n * i;
      r && r.length === 4 * a || (r = this._positionArr = new Float32Array(4 * a)), this._framebuffer.bind(e), this._framebuffer.attach(this._positionPrevTex), e.gl.readPixels(0, 0, n, i, e.gl.RGBA, e.gl.FLOAT, r), this._framebuffer.unbind(e), t || (t = new Float32Array(2 * this._nodes.length));
      for (var o = 0; o < this._nodes.length; o++) t[2 * o] = r[4 * o], t[2 * o + 1] = r[4 * o + 1];
      return t
    }, n.prototype.getTextureData = function (e, t) {
      var r = this["_" + t + "Tex"],
        n = r.width,
        i = r.height;
      this._framebuffer.bind(e), this._framebuffer.attach(r);
      var a = new Float32Array(n * i * 4);
      return e.gl.readPixels(0, 0, n, i, e.gl.RGBA, e.gl.FLOAT, a), this._framebuffer.unbind(e), a
    }, n.prototype.getTextureSize = function () {
      return {
        width: this._positionTex.width,
        height: this._positionTex.height
      }
    }, n.prototype.isFinished = function (e) {
      return this._frame > e
    }, n.prototype._swapTexture = function () {
      var e = this._positionPrevTex;
      this._positionPrevTex = this._positionTex, this._positionTex = e;
      var e = this._forcePrevTex;
      this._forcePrevTex = this._forceTex, this._forceTex = e;
      var e = this._globalSpeedPrevTex;
      this._globalSpeedPrevTex = this._globalSpeedTex, this._globalSpeedTex = e
    }, n.prototype._initFromSource = function (e) {
      this._framebuffer.attach(this._positionPrevTex), this._framebuffer.bind(e), this._copyPass.setUniform("texture", this._positionSourceTex), this._copyPass.render(e), e.gl.clearColor(0, 0, 0, 0), this._framebuffer.attach(this._forcePrevTex), e.gl.clear(e.gl.COLOR_BUFFER_BIT), this._framebuffer.attach(this._globalSpeedPrevTex), e.gl.clear(e.gl.COLOR_BUFFER_BIT), this._framebuffer.unbind(e)
    }, n.prototype._resize = function (e, t) {
      ["_positionSourceTex", "_positionTex", "_positionPrevTex", "_forceTex", "_forcePrevTex"].forEach(function (r) {
        this[r].width = e, this[r].height = t, this[r].dirty()
      }, this)
    }, n.prototype.dispose = function (e) {
      this._framebuffer.dispose(e), this._copyPass.dispose(e), this._nodeRepulsionPass.dispose(e), this._positionPass.dispose(e), this._globalSpeedPass.dispose(e), this._edgeForceMesh.geometry.dispose(e), this._weightedSumMesh.geometry.dispose(e), this._positionSourceTex.dispose(e), this._positionTex.dispose(e), this._positionPrevTex.dispose(e), this._forceTex.dispose(e), this._forcePrevTex.dispose(e), this._weightedSumTex.dispose(e), this._globalSpeedTex.dispose(e), this._globalSpeedPrevTex.dispose(e)
    }, a.a.ForceAtlas2GPU = n, t.a = n
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.forceAtlas2.updateNodeRepulsion\n\n#define NODE_COUNT 0\n\nuniform sampler2D positionTex;\n\nuniform vec2 textureSize;\nuniform float gravity;\nuniform float scaling;\nuniform vec2 gravityCenter;\n\nuniform bool strongGravityMode;\nuniform bool preventOverlap;\n\nvarying vec2 v_Texcoord;\n\nvoid main() {\n\n vec4 n0 = texture2D(positionTex, v_Texcoord);\n\n vec2 force = vec2(0.0);\n for (int i = 0; i < NODE_COUNT; i++) {\n vec2 uv = vec2(\n mod(float(i), textureSize.x) / (textureSize.x - 1.0),\n floor(float(i) / textureSize.x) / (textureSize.y - 1.0)\n );\n vec4 n1 = texture2D(positionTex, uv);\n\n vec2 dir = n0.xy - n1.xy;\n float d2 = dot(dir, dir);\n\n if (d2 > 0.0) {\n float factor = 0.0;\n if (preventOverlap) {\n float d = sqrt(d2);\n d = d - n0.w - n1.w;\n if (d > 0.0) {\n factor = scaling * n0.z * n1.z / (d * d);\n }\n else if (d < 0.0) {\n factor = scaling * 100.0 * n0.z * n1.z;\n }\n }\n else {\n factor = scaling * n0.z * n1.z / d2;\n }\n force += dir * factor;\n }\n }\n\n vec2 dir = gravityCenter - n0.xy;\n float d = 1.0;\n if (!strongGravityMode) {\n d = length(dir);\n }\n\n force += dir * n0.z * gravity / (d + 1.0);\n\n gl_FragColor = vec4(force, 0.0, 1.0);\n}\n@end\n\n@export ecgl.forceAtlas2.updateEdgeAttraction.vertex\n\nattribute vec2 node1;\nattribute vec2 node2;\nattribute float weight;\n\nuniform sampler2D positionTex;\nuniform float edgeWeightInfluence;\nuniform bool preventOverlap;\nuniform bool linLogMode;\n\nuniform vec2 windowSize: WINDOW_SIZE;\n\nvarying vec2 v_Force;\n\nvoid main() {\n\n vec4 n0 = texture2D(positionTex, node1);\n vec4 n1 = texture2D(positionTex, node2);\n\n vec2 dir = n1.xy - n0.xy;\n float d = length(dir);\n float w;\n if (edgeWeightInfluence == 0.0) {\n w = 1.0;\n }\n else if (edgeWeightInfluence == 1.0) {\n w = weight;\n }\n else {\n w = pow(weight, edgeWeightInfluence);\n }\n vec2 offset = vec2(1.0 / windowSize.x, 1.0 / windowSize.y);\n vec2 scale = vec2((windowSize.x - 1.0) / windowSize.x, (windowSize.y - 1.0) / windowSize.y);\n vec2 pos = node1 * scale * 2.0 - 1.0;\n gl_Position = vec4(pos + offset, 0.0, 1.0);\n gl_PointSize = 1.0;\n\n float factor;\n if (preventOverlap) {\n d = d - n1.w - n0.w;\n }\n if (d <= 0.0) {\n v_Force = vec2(0.0);\n return;\n }\n\n if (linLogMode) {\n factor = w * log(d) / d;\n }\n else {\n factor = w;\n }\n v_Force = dir * factor;\n}\n@end\n\n@export ecgl.forceAtlas2.updateEdgeAttraction.fragment\n\nvarying vec2 v_Force;\n\nvoid main() {\n gl_FragColor = vec4(v_Force, 0.0, 0.0);\n}\n@end\n\n@export ecgl.forceAtlas2.calcWeightedSum.vertex\n\nattribute vec2 node;\n\nvarying vec2 v_NodeUv;\n\nvoid main() {\n\n v_NodeUv = node;\n gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n gl_PointSize = 1.0;\n}\n@end\n\n@export ecgl.forceAtlas2.calcWeightedSum.fragment\n\nvarying vec2 v_NodeUv;\n\nuniform sampler2D positionTex;\nuniform sampler2D forceTex;\nuniform sampler2D forcePrevTex;\n\nvoid main() {\n vec2 force = texture2D(forceTex, v_NodeUv).rg;\n vec2 forcePrev = texture2D(forcePrevTex, v_NodeUv).rg;\n\n float mass = texture2D(positionTex, v_NodeUv).z;\n float swing = length(force - forcePrev) * mass;\n float traction = length(force + forcePrev) * 0.5 * mass;\n\n gl_FragColor = vec4(swing, traction, 0.0, 0.0);\n}\n@end\n\n@export ecgl.forceAtlas2.calcGlobalSpeed\n\nuniform sampler2D globalSpeedPrevTex;\nuniform sampler2D weightedSumTex;\nuniform float jitterTolerence;\n\nvoid main() {\n vec2 weightedSum = texture2D(weightedSumTex, vec2(0.5)).xy;\n float prevGlobalSpeed = texture2D(globalSpeedPrevTex, vec2(0.5)).x;\n float globalSpeed = jitterTolerence * jitterTolerence\n * weightedSum.y / weightedSum.x;\n if (prevGlobalSpeed > 0.0) {\n globalSpeed = min(globalSpeed / prevGlobalSpeed, 1.5) * prevGlobalSpeed;\n }\n gl_FragColor = vec4(globalSpeed, 0.0, 0.0, 1.0);\n}\n@end\n\n@export ecgl.forceAtlas2.updatePosition\n\nuniform sampler2D forceTex;\nuniform sampler2D forcePrevTex;\nuniform sampler2D positionTex;\nuniform sampler2D globalSpeedTex;\n\nvarying vec2 v_Texcoord;\n\nvoid main() {\n vec2 force = texture2D(forceTex, v_Texcoord).xy;\n vec2 forcePrev = texture2D(forcePrevTex, v_Texcoord).xy;\n vec4 node = texture2D(positionTex, v_Texcoord);\n\n float globalSpeed = texture2D(globalSpeedTex, vec2(0.5)).r;\n float swing = length(force - forcePrev);\n float speed = 0.1 * globalSpeed / (0.1 + globalSpeed * sqrt(swing));\n\n float df = length(force);\n if (df > 0.0) {\n speed = min(df * speed, 10.0) / df;\n\n gl_FragColor = vec4(node.xy + speed * force, node.zw);\n }\n else {\n gl_FragColor = node;\n }\n}\n@end\n\n@export ecgl.forceAtlas2.edges.vertex\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\n\nattribute vec2 node;\nattribute vec4 a_Color : COLOR;\nvarying vec4 v_Color;\n\nuniform sampler2D positionTex;\n\nvoid main()\n{\n gl_Position = worldViewProjection * vec4(\n texture2D(positionTex, node).xy, -10.0, 1.0\n );\n v_Color = a_Color;\n}\n@end\n\n@export ecgl.forceAtlas2.edges.fragment\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\nvarying vec4 v_Color;\nvoid main() {\n gl_FragColor = color * v_Color;\n}\n@end"
  }, function (e, t, r) {
    "use strict";
    var n = r(5),
      i = r(4),
      a = r(272),
      o = a.a.toString();
    o = o.slice(o.indexOf("{") + 1, o.lastIndexOf("}"));
    var s = {
        barnesHutOptimize: !0,
        barnesHutTheta: 1.5,
        repulsionByDegree: !0,
        linLogMode: !1,
        strongGravityMode: !1,
        gravity: 1,
        scaling: 1,
        edgeWeightInfluence: 1,
        jitterTolerence: .1,
        preventOverlap: !1,
        dissuadeHubs: !1,
        gravityCenter: null
      },
      u = function (e) {
        for (var t in s) this[t] = s[t];
        if (e)
          for (var t in e) this[t] = e[t];
        this._nodes = [], this._edges = [], this._disposed = !1, this._positionTex = new n.a({
          type: i.a.FLOAT,
          flipY: !1,
          minFilter: i.a.NEAREST,
          magFilter: i.a.NEAREST
        })
      };
    u.prototype.initData = function (e, t) {
      var r = new Blob([o]),
        n = window.URL.createObjectURL(r);
      this._worker = new Worker(n), this._worker.onmessage = this._$onupdate.bind(this), this._nodes = e, this._edges = t, this._frame = 0;
      for (var i = e.length, a = t.length, s = new Float32Array(2 * i), u = new Float32Array(i), l = new Float32Array(i), h = new Float32Array(2 * a), c = new Float32Array(a), d = 0; d < e.length; d++) {
        var f = e[d];
        s[2 * d] = f.x, s[2 * d + 1] = f.y, u[d] = null == f.mass ? 1 : f.mass, l[d] = null == f.size ? 1 : f.size
      }
      for (var d = 0; d < t.length; d++) {
        var p = t[d],
          m = p.node1,
          g = p.node2;
        h[2 * d] = m, h[2 * d + 1] = g, c[d] = null == p.weight ? 1 : p.weight
      }
      var _ = Math.ceil(Math.sqrt(e.length)),
        v = _,
        y = new Float32Array(_ * v * 4),
        x = this._positionTex;
      x.width = _, x.height = v, x.pixels = y, this._worker.postMessage({
        cmd: "init",
        nodesPosition: s,
        nodesMass: u,
        nodesSize: l,
        edges: h,
        edgesWeight: c
      }), this._globalSpeed = 1 / 0
    }, u.prototype.updateOption = function (e) {
      var t = {};
      for (var r in s) t[r] = s[r];
      var n = this._nodes,
        i = this._edges,
        a = n.length;
      if (t.jitterTolerence = a > 5e4 ? 10 : a > 5e3 ? 1 : .1, t.scaling = a > 100 ? 2 : 10, t.barnesHutOptimize = a > 1e3, e)
        for (var r in s) null != e[r] && (t[r] = e[r]);
      if (!t.gravityCenter) {
        for (var o = [1 / 0, 1 / 0], u = [-1 / 0, -1 / 0], l = 0; l < n.length; l++) o[0] = Math.min(n[l].x, o[0]), o[1] = Math.min(n[l].y, o[1]), u[0] = Math.max(n[l].x, u[0]), u[1] = Math.max(n[l].y, u[1]);
        t.gravityCenter = [.5 * (o[0] + u[0]), .5 * (o[1] + u[1])]
      }
      for (var l = 0; l < i.length; l++) {
        var h = i[l].node1,
          c = i[l].node2;
        n[h].degree = (n[h].degree || 0) + 1, n[c].degree = (n[c].degree || 0) + 1
      }
      this._worker && this._worker.postMessage({
        cmd: "updateConfig",
        config: t
      })
    }, u.prototype.update = function (e, t, r) {
      null == t && (t = 1), t = Math.max(t, 1), this._frame += t, this._onupdate = r, this._worker && this._worker.postMessage({
        cmd: "update",
        steps: Math.round(t)
      })
    }, u.prototype._$onupdate = function (e) {
      if (!this._disposed) {
        var t = new Float32Array(e.data.buffer);
        this._globalSpeed = e.data.globalSpeed, this._positionArr = t, this._updateTexture(t), this._onupdate && this._onupdate()
      }
    }, u.prototype.getNodePositionTexture = function () {
      return this._positionTex
    }, u.prototype.getNodeUV = function (e, t) {
      t = t || [];
      var r = this._positionTex.width,
        n = this._positionTex.height;
      return t[0] = e % r / (r - 1), t[1] = Math.floor(e / r) / (n - 1), t
    }, u.prototype.getNodes = function () {
      return this._nodes
    }, u.prototype.getEdges = function () {
      return this._edges
    }, u.prototype.isFinished = function (e) {
      return this._frame > e
    }, u.prototype.getNodePosition = function (e, t) {
      if (t || (t = new Float32Array(2 * this._nodes.length)), this._positionArr)
        for (var r = 0; r < this._positionArr.length; r++) t[r] = this._positionArr[r];
      return t
    }, u.prototype._updateTexture = function (e) {
      for (var t = this._positionTex.pixels, r = 0, n = 0; n < e.length;) t[r++] = e[n++], t[r++] = e[n++], t[r++] = 1, t[r++] = 1;
      this._positionTex.dirty()
    }, u.prototype.dispose = function (e) {
      this._disposed = !0, this._worker = null
    }, t.a = u
  }, function (e, t, r) {
    "use strict";

    function n() {
      function e() {
        this.subRegions = [], this.nSubRegions = 0, this.node = null, this.mass = 0, this.centerOfMass = null, this.bbox = new Float32Array(4), this.size = 0
      }

      function t() {
        this.position = new Float32Array(2), this.force = i.create(), this.forcePrev = i.create(), this.mass = 1, this.inDegree = 0, this.outDegree = 0
      }

      function r(e, t) {
        this.source = e, this.target = t, this.weight = 1
      }

      function n() {
        this.autoSettings = !0, this.barnesHutOptimize = !0, this.barnesHutTheta = 1.5, this.repulsionByDegree = !0, this.linLogMode = !1, this.strongGravityMode = !1, this.gravity = 1, this.scaling = 1, this.edgeWeightInfluence = 1, this.jitterTolerence = .1, this.preventOverlap = !1, this.dissuadeHubs = !1, this.rootRegion = new e, this.rootRegion.centerOfMass = i.create(), this.nodes = [], this.edges = [], this.bbox = new Float32Array(4), this.gravityCenter = null, this._massArr = null, this._swingingArr = null, this._sizeArr = null, this._globalSpeed = 0
      }
      var i = {
          create: function () {
            return new Float32Array(2)
          },
          dist: function (e, t) {
            var r = t[0] - e[0],
              n = t[1] - e[1];
            return Math.sqrt(r * r + n * n)
          },
          len: function (e) {
            var t = e[0],
              r = e[1];
            return Math.sqrt(t * t + r * r)
          },
          scaleAndAdd: function (e, t, r, n) {
            return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e
          },
          scale: function (e, t, r) {
            return e[0] = t[0] * r, e[1] = t[1] * r, e
          },
          add: function (e, t, r) {
            return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e
          },
          sub: function (e, t, r) {
            return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e
          },
          normalize: function (e, t) {
            var r = t[0],
              n = t[1],
              i = r * r + n * n;
            return i > 0 && (i = 1 / Math.sqrt(i), e[0] = t[0] * i, e[1] = t[1] * i), e
          },
          negate: function (e, t) {
            return e[0] = -t[0], e[1] = -t[1], e
          },
          copy: function (e, t) {
            return e[0] = t[0], e[1] = t[1], e
          },
          set: function (e, t, r) {
            return e[0] = t, e[1] = r, e
          }
        },
        a = e.prototype;
      a.beforeUpdate = function () {
        for (var e = 0; e < this.nSubRegions; e++) this.subRegions[e].beforeUpdate();
        this.mass = 0, this.centerOfMass && (this.centerOfMass[0] = 0, this.centerOfMass[1] = 0), this.nSubRegions = 0, this.node = null
      }, a.afterUpdate = function () {
        this.subRegions.length = this.nSubRegions;
        for (var e = 0; e < this.nSubRegions; e++) this.subRegions[e].afterUpdate()
      }, a.addNode = function (e) {
        if (0 === this.nSubRegions) {
          if (null == this.node) return void(this.node = e);
          this._addNodeToSubRegion(this.node), this.node = null
        }
        this._addNodeToSubRegion(e), this._updateCenterOfMass(e)
      }, a.findSubRegion = function (e, t) {
        for (var r = 0; r < this.nSubRegions; r++) {
          var n = this.subRegions[r];
          if (n.contain(e, t)) return n
        }
      }, a.contain = function (e, t) {
        return this.bbox[0] <= e && this.bbox[2] >= e && this.bbox[1] <= t && this.bbox[3] >= t
      }, a.setBBox = function (e, t, r, n) {
        this.bbox[0] = e, this.bbox[1] = t, this.bbox[2] = r, this.bbox[3] = n, this.size = (r - e + n - t) / 2
      }, a._newSubRegion = function () {
        var t = this.subRegions[this.nSubRegions];
        return t || (t = new e, this.subRegions[this.nSubRegions] = t), this.nSubRegions++, t
      }, a._addNodeToSubRegion = function (e) {
        var t = this.findSubRegion(e.position[0], e.position[1]),
          r = this.bbox;
        if (!t) {
          var n = (r[0] + r[2]) / 2,
            i = (r[1] + r[3]) / 2,
            a = (r[2] - r[0]) / 2,
            o = (r[3] - r[1]) / 2,
            s = e.position[0] >= n ? 1 : 0,
            u = e.position[1] >= i ? 1 : 0,
            t = this._newSubRegion();
          t.setBBox(s * a + r[0], u * o + r[1], (s + 1) * a + r[0], (u + 1) * o + r[1])
        }
        t.addNode(e)
      }, a._updateCenterOfMass = function (e) {
        null == this.centerOfMass && (this.centerOfMass = new Float32Array(2));
        var t = this.centerOfMass[0] * this.mass,
          r = this.centerOfMass[1] * this.mass;
        t += e.position[0] * e.mass, r += e.position[1] * e.mass, this.mass += e.mass, this.centerOfMass[0] = t / this.mass, this.centerOfMass[1] = r / this.mass
      };
      var o = n.prototype;
      o.initNodes = function (e, r, n) {
        var i = r.length;
        this.nodes.length = 0;
        for (var a = void 0 !== n, o = 0; o < i; o++) {
          var s = new t;
          s.position[0] = e[2 * o], s.position[1] = e[2 * o + 1], s.mass = r[o], a && (s.size = n[o]), this.nodes.push(s)
        }
        this._massArr = r, this._swingingArr = new Float32Array(i), a && (this._sizeArr = n)
      }, o.initEdges = function (e, t) {
        var n = e.length / 2;
        this.edges.length = 0;
        for (var i = 0; i < n; i++) {
          var a = e[2 * i],
            o = e[2 * i + 1],
            s = this.nodes[a],
            u = this.nodes[o];
          if (!s || !u) return void console.error("Node not exists, try initNodes before initEdges");
          s.outDegree++, u.inDegree++;
          var l = new r(s, u);
          t && (l.weight = t[i]), this.edges.push(l)
        }
      }, o.updateSettings = function () {
        if (this.repulsionByDegree)
          for (var e = 0; e < this.nodes.length; e++) {
            var t = this.nodes[e];
            t.mass = t.inDegree + t.outDegree + 1
          } else
            for (var e = 0; e < this.nodes.length; e++) {
              var t = this.nodes[e];
              t.mass = this._massArr[e]
            }
      }, o.update = function () {
        var e = this.nodes.length;
        if (this.updateSettings(), this.updateBBox(), this.barnesHutOptimize) {
          this.rootRegion.setBBox(this.bbox[0], this.bbox[1], this.bbox[2], this.bbox[3]), this.rootRegion.beforeUpdate();
          for (var t = 0; t < e; t++) this.rootRegion.addNode(this.nodes[t]);
          this.rootRegion.afterUpdate()
        }
        for (var t = 0; t < e; t++) {
          var r = this.nodes[t];
          i.copy(r.forcePrev, r.force), i.set(r.force, 0, 0)
        }
        for (var t = 0; t < e; t++) {
          var n = this.nodes[t];
          if (this.barnesHutOptimize) this.applyRegionToNodeRepulsion(this.rootRegion, n);
          else
            for (var a = t + 1; a < e; a++) {
              var o = this.nodes[a];
              this.applyNodeToNodeRepulsion(n, o, !1)
            }
          this.gravity > 0 && (this.strongGravityMode ? this.applyNodeStrongGravity(n) : this.applyNodeGravity(n))
        }
        for (var t = 0; t < this.edges.length; t++) this.applyEdgeAttraction(this.edges[t]);
        for (var s = 0, u = 0, l = i.create(), t = 0; t < e; t++) {
          var r = this.nodes[t],
            h = i.dist(r.force, r.forcePrev);
          s += h * r.mass, i.add(l, r.force, r.forcePrev);
          u += .5 * i.len(l) * r.mass, this._swingingArr[t] = h
        }
        var c = this.jitterTolerence * this.jitterTolerence * u / s;
        this._globalSpeed > 0 && (c = Math.min(c / this._globalSpeed, 1.5) * this._globalSpeed), this._globalSpeed = c;
        for (var t = 0; t < e; t++) {
          var r = this.nodes[t],
            h = this._swingingArr[t],
            d = .1 * c / (1 + c * Math.sqrt(h)),
            f = i.len(r.force);
          f > 0 && (d = Math.min(f * d, 10) / f, i.scaleAndAdd(r.position, r.position, r.force, d))
        }
      }, o.applyRegionToNodeRepulsion = function () {
        var e = i.create();
        return function (t, r) {
          if (t.node) this.applyNodeToNodeRepulsion(t.node, r, !0);
          else {
            i.sub(e, r.position, t.centerOfMass);
            var n = e[0] * e[0] + e[1] * e[1];
            if (n > this.barnesHutTheta * t.size * t.size) {
              var a = this.scaling * r.mass * t.mass / n;
              i.scaleAndAdd(r.force, r.force, e, a)
            } else
              for (var o = 0; o < t.nSubRegions; o++) this.applyRegionToNodeRepulsion(t.subRegions[o], r)
          }
        }
      }(), o.applyNodeToNodeRepulsion = function () {
        var e = i.create();
        return function (t, r, n) {
          if (t != r) {
            i.sub(e, t.position, r.position);
            var a = e[0] * e[0] + e[1] * e[1];
            if (0 !== a) {
              var o;
              if (this.preventOverlap) {
                var s = Math.sqrt(a);
                if ((s = s - t.size - r.size) > 0) o = this.scaling * t.mass * r.mass / (s * s);
                else {
                  if (!(s < 0)) return;
                  o = 100 * this.scaling * t.mass * r.mass
                }
              } else o = this.scaling * t.mass * r.mass / a;
              i.scaleAndAdd(t.force, t.force, e, o), i.scaleAndAdd(r.force, r.force, e, -o)
            }
          }
        }
      }(), o.applyEdgeAttraction = function () {
        var e = i.create();
        return function (t) {
          var r = t.source,
            n = t.target;
          i.sub(e, r.position, n.position);
          var a, o = i.len(e);
          a = 0 === this.edgeWeightInfluence ? 1 : 1 === this.edgeWeightInfluence ? t.weight : Math.pow(t.weight, this.edgeWeightInfluence);
          var s;
          this.preventOverlap && (o = o - r.size - n.size) <= 0 || (s = this.linLogMode ? -a * Math.log(o + 1) / (o + 1) : -a, i.scaleAndAdd(r.force, r.force, e, s), i.scaleAndAdd(n.force, n.force, e, -s))
        }
      }(), o.applyNodeGravity = function () {
        var e = i.create();
        return function (t) {
          i.sub(e, this.gravityCenter, t.position);
          var r = i.len(e);
          i.scaleAndAdd(t.force, t.force, e, this.gravity * t.mass / (r + 1))
        }
      }(), o.applyNodeStrongGravity = function () {
        var e = i.create();
        return function (t) {
          i.sub(e, this.gravityCenter, t.position), i.scaleAndAdd(t.force, t.force, e, this.gravity * t.mass)
        }
      }(), o.updateBBox = function () {
        for (var e = 1 / 0, t = 1 / 0, r = -1 / 0, n = -1 / 0, i = 0; i < this.nodes.length; i++) {
          var a = this.nodes[i].position;
          e = Math.min(e, a[0]), t = Math.min(t, a[1]), r = Math.max(r, a[0]), n = Math.max(n, a[1])
        }
        this.bbox[0] = e, this.bbox[1] = t, this.bbox[2] = r, this.bbox[3] = n
      }, o.getGlobalSpeed = function () {
        return this._globalSpeed
      };
      var s = null;
      self.onmessage = function (e) {
        switch (e.data.cmd) {
          case "init":
            s = new n, s.initNodes(e.data.nodesPosition, e.data.nodesMass, e.data.nodesSize), s.initEdges(e.data.edges, e.data.edgesWeight);
            break;
          case "updateConfig":
            if (s)
              for (var t in e.data.config) s[t] = e.data.config[t];
            break;
          case "update":
            var r = e.data.steps;
            if (s) {
              for (var i = 0; i < r; i++) s.update();
              for (var a = s.nodes.length, o = new Float32Array(2 * a), i = 0; i < a; i++) {
                var u = s.nodes[i];
                o[2 * i] = u.position[0], o[2 * i + 1] = u.position[1]
              }
              self.postMessage({
                buffer: o.buffer,
                globalSpeed: s.getGlobalSpeed()
              }, [o.buffer])
            } else {
              var l = new Float32Array;
              self.postMessage({
                buffer: l.buffer,
                globalSpeed: s.getGlobalSpeed()
              }, [l.buffer])
            }
        }
      }
    }
    t.a = n
  }, function (e, t, r) {
    "use strict";
    var n = r(7),
      i = (r(2), n.a.extend(function () {
        return {
          zr: null,
          viewGL: null,
          minZoom: .2,
          maxZoom: 5,
          _needsUpdate: !1,
          _dx: 0,
          _dy: 0,
          _zoom: 1
        }
      }, function () {
        this._mouseDownHandler = this._mouseDownHandler.bind(this), this._mouseWheelHandler = this._mouseWheelHandler.bind(this), this._mouseMoveHandler = this._mouseMoveHandler.bind(this), this._mouseUpHandler = this._mouseUpHandler.bind(this), this._update = this._update.bind(this)
      }, {
        init: function () {
          var e = this.zr;
          e.on("mousedown", this._mouseDownHandler), e.on("mousewheel", this._mouseWheelHandler), e.on("globalout", this._mouseUpHandler), e.animation.on("frame", this._update)
        },
        setTarget: function (e) {
          this._target = e
        },
        setZoom: function (e) {
          this._zoom = Math.max(Math.min(e, this.maxZoom), this.minZoom), this._needsUpdate = !0
        },
        setOffset: function (e) {
          this._dx = e[0], this._dy = e[1], this._needsUpdate = !0
        },
        getZoom: function () {
          return this._zoom
        },
        getOffset: function () {
          return [this._dx, this._dy]
        },
        _update: function () {
          if (this._target && this._needsUpdate) {
            var e = this._target,
              t = this._zoom;
            e.position.x = this._dx, e.position.y = this._dy, e.scale.set(t, t, t), this.zr.refresh(), this._needsUpdate = !1, this.trigger("update")
          }
        },
        _mouseDownHandler: function (e) {
          if (!e.target) {
            var t = e.offsetX,
              r = e.offsetY;
            if (!this.viewGL || this.viewGL.containPoint(t, r)) {
              this.zr.on("mousemove", this._mouseMoveHandler), this.zr.on("mouseup", this._mouseUpHandler);
              var n = this._convertPos(t, r);
              this._x = n.x, this._y = n.y
            }
          }
        },
        _convertPos: function (e, t) {
          var r = this.viewGL.camera,
            n = this.viewGL.viewport;
          return {
            x: (e - n.x) / n.width * (r.right - r.left) + r.left,
            y: (t - n.y) / n.height * (r.bottom - r.top) + r.top
          }
        },
        _mouseMoveHandler: function (e) {
          var t = this._convertPos(e.offsetX, e.offsetY);
          this._dx += t.x - this._x, this._dy += t.y - this._y, this._x = t.x, this._y = t.y, this._needsUpdate = !0
        },
        _mouseUpHandler: function (e) {
          this.zr.off("mousemove", this._mouseMoveHandler), this.zr.off("mouseup", this._mouseUpHandler)
        },
        _mouseWheelHandler: function (e) {
          e = e.event;
          var t = e.wheelDelta || -e.detail;
          if (0 !== t) {
            var r = e.offsetX,
              n = e.offsetY;
            if (!this.viewGL || this.viewGL.containPoint(r, n)) {
              var i = t > 0 ? 1.1 : .9,
                a = Math.max(Math.min(this._zoom * i, this.maxZoom), this.minZoom);
              i = a / this._zoom;
              var o = this._convertPos(r, n),
                s = (o.x - this._dx) * (i - 1),
                u = (o.y - this._dy) * (i - 1);
              this._dx -= s, this._dy -= u, this._zoom = a, this._needsUpdate = !0
            }
          }
        },
        dispose: function () {
          var e = this.zr;
          e.off("mousedown", this._mouseDownHandler), e.off("mousemove", this._mouseMoveHandler), e.off("mouseup", this._mouseUpHandler), e.off("mousewheel", this._mouseWheelHandler), e.off("globalout", this._mouseUpHandler), e.animation.off("frame", this._update)
        }
      }));
    t.a = i
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.lines2D.vertex\n\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\n\nattribute vec2 position: POSITION;\nattribute vec4 a_Color : COLOR;\nvarying vec4 v_Color;\n\n#ifdef POSITIONTEXTURE_ENABLED\nuniform sampler2D positionTexture;\n#endif\n\nvoid main()\n{\n gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);\n\n v_Color = a_Color;\n}\n\n@end\n\n@export ecgl.lines2D.fragment\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\n\nvarying vec4 v_Color;\n\nvoid main()\n{\n gl_FragColor = color * v_Color;\n}\n@end\n\n\n@export ecgl.meshLines2D.vertex\n\nattribute vec2 position: POSITION;\nattribute vec2 normal;\nattribute float offset;\nattribute vec4 a_Color : COLOR;\n\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform vec4 viewport : VIEWPORT;\n\nvarying vec4 v_Color;\nvarying float v_Miter;\n\nvoid main()\n{\n vec4 p2 = worldViewProjection * vec4(position + normal, -10.0, 1.0);\n gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);\n\n p2.xy /= p2.w;\n gl_Position.xy /= gl_Position.w;\n\n vec2 N = normalize(p2.xy - gl_Position.xy);\n gl_Position.xy += N * offset / viewport.zw * 2.0;\n\n gl_Position.xy *= gl_Position.w;\n\n v_Color = a_Color;\n}\n@end\n\n\n@export ecgl.meshLines2D.fragment\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\n\nvarying vec4 v_Color;\nvarying float v_Miter;\n\nvoid main()\n{\n gl_FragColor = color * v_Color;\n}\n\n@end"
  }, function (e, t, r) {
    "use strict";
    var n = r(0);
    r.n(n), r(276), r(280)
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(1),
      o = r(2),
      s = r(22),
      u = r(277);
    i.a.extendChartView({
      type: "flowGL",
      __ecgl__: !0,
      init: function (e, t) {
        this.viewGL = new s.a("orthographic"), this.groupGL = new a.a.Node, this.viewGL.add(this.groupGL), this._particleSurface = new u.a;
        var r = new a.a.Mesh({
          geometry: new a.a.PlaneGeometry,
          material: new a.a.Material({
            shader: new a.a.Shader({
              vertex: a.a.Shader.source("ecgl.color.vertex"),
              fragment: a.a.Shader.source("ecgl.color.fragment")
            }),
            transparent: !0
          })
        });
        r.material.enableTexture("diffuseMap"), this.groupGL.add(r), this._planeMesh = r
      },
      render: function (e, t, r) {
        var n = this._particleSurface;
        n.setParticleType(e.get("particleType")), n.setSupersampling(e.get("supersampling")), this._updateData(e, r), this._updateCamera(r.getWidth(), r.getHeight(), r.getDevicePixelRatio());
        var i = o.a.firstNotNull(e.get("particleDensity"), 128);
        n.setParticleDensity(i, i);
        var s = this._planeMesh,
          u = +new Date,
          l = this,
          h = !0;
        s.__percent = 0, s.stopAnimation(), s.animate("", {
          loop: !0
        }).when(1e5, {
          __percent: 1
        }).during(function () {
          var e = +new Date,
            t = Math.min(e - u, 20);
          u += t, l._renderer && (n.update(l._renderer, r, t / 1e3, h), s.material.set("diffuseMap", n.getSurfaceTexture())), h = !1
        }).start();
        var c = e.getModel("itemStyle"),
          d = a.a.parseColor(c.get("color"));
        d[3] *= o.a.firstNotNull(c.get("opacity"), 1), s.material.set("color", d), n.setColorTextureImage(e.get("colorTexture"), r), n.setParticleSize(e.get("particleSize")), n.particleSpeedScaling = e.get("particleSpeed"), n.motionBlurFactor = 1 - Math.pow(.1, e.get("particleTrail"))
      },
      updateTransform: function (e, t, r) {
        this._updateData(e, r)
      },
      afterRender: function (e, t, r, n) {
        var i = n.renderer;
        this._renderer = i
      },
      _updateData: function (e, t) {
        var r = e.coordinateSystem,
          n = r.dimensions.map(function (t) {
            return e.coordDimToDataDim(t)[0]
          }),
          i = e.getData(),
          a = i.getDataExtent(n[0]),
          o = i.getDataExtent(n[1]),
          s = e.get("gridWidth"),
          u = e.get("gridHeight");
        if (null == s || "auto" === s) {
          var l = (a[1] - a[0]) / (o[1] - o[0]);
          s = Math.round(Math.sqrt(l * i.count()))
        }
        null != u && "auto" !== u || (u = Math.ceil(i.count() / s));
        var h = this._particleSurface.vectorFieldTexture,
          c = h.pixels;
        if (c && c.length === u * s * 4)
          for (var d = 0; d < c.length; d++) c[d] = 0;
        else c = h.pixels = new Float32Array(s * u * 4);
        var f = 0,
          p = 1 / 0,
          m = new Float32Array(2 * i.count()),
          g = 0,
          _ = [
            [1 / 0, 1 / 0],
            [-1 / 0, -1 / 0]
          ];
        i.each([n[0], n[1], "vx", "vy"], function (e, t, n, i) {
          var a = r.dataToPoint([e, t]);
          m[g++] = a[0], m[g++] = a[1], _[0][0] = Math.min(a[0], _[0][0]), _[0][1] = Math.min(a[1], _[0][1]), _[1][0] = Math.max(a[0], _[1][0]), _[1][1] = Math.max(a[1], _[1][1]);
          var o = Math.sqrt(n * n + i * i);
          f = Math.max(f, o), p = Math.min(p, o)
        }), i.each(["vx", "vy"], function (e, t, r) {
          var n = Math.round((m[2 * r] - _[0][0]) / (_[1][0] - _[0][0]) * (s - 1)),
            i = u - 1 - Math.round((m[2 * r + 1] - _[0][1]) / (_[1][1] - _[0][1]) * (u - 1)),
            a = 4 * (i * s + n);
          c[a] = e / f * .5 + .5, c[a + 1] = t / f * .5 + .5, c[a + 3] = 1
        }), h.width = s, h.height = u, "bmap" === e.get("coordinateSystem") && this._fillEmptyPixels(h), h.dirty(), this._updatePlanePosition(_[0], _[1], e, t), this._updateGradientTexture(i.getVisual("visualMeta"), [p, f])
      },
      _fillEmptyPixels: function (e) {
        function t(e, t, r) {
          e = Math.max(Math.min(e, i - 1), 0), t = Math.max(Math.min(t, a - 1), 0);
          var o = 4 * (t * (i - 1) + e);
          return 0 !== n[o + 3] && (r[0] = n[o], r[1] = n[o + 1], !0)
        }

        function r(e, t, r) {
          r[0] = e[0] + t[0], r[1] = e[1] + t[1]
        }
        for (var n = e.pixels, i = e.width, a = e.height, o = [], s = [], u = [], l = [], h = [], c = 0, d = 0; d < a; d++)
          for (var f = 0; f < i; f++) {
            var p = 4 * (d * (i - 1) + f);
            0 === n[p + 3] && (c = o[0] = o[1] = 0, t(f - 1, d, s) && (c++, r(s, o, o)), t(f + 1, d, u) && (c++, r(u, o, o)), t(f, d - 1, l) && (c++, r(l, o, o)), t(f, d + 1, h) && (c++, r(h, o, o)), o[0] /= c, o[1] /= c, n[p] = o[0], n[p + 1] = o[1]), n[p + 3] = 1
          }
      },
      _updateGradientTexture: function (e, t) {
        if (!e || !e.length) return void this._particleSurface.setGradientTexture(null);
        this._gradientTexture = this._gradientTexture || new a.a.Texture2D({
          image: document.createElement("canvas")
        });
        var r = this._gradientTexture,
          n = r.image;
        n.width = 200, n.height = 1;
        var i = n.getContext("2d"),
          o = i.createLinearGradient(0, .5, n.width, .5);
        e[0].stops.forEach(function (e) {
          var r;
          t[1] === t[0] ? r = 0 : (r = e.value / t[1], r = Math.min(Math.max(r, 0), 1)), o.addColorStop(r, e.color)
        }), i.fillStyle = o, i.fillRect(0, 0, n.width, n.height), r.dirty(), this._particleSurface.setGradientTexture(this._gradientTexture)
      },
      _updatePlanePosition: function (e, t, r, n) {
        var i = this._limitInViewportAndFullFill(e, t, r, n);
        e = i.leftTop, t = i.rightBottom, this._particleSurface.setRegion(i.region), this._planeMesh.position.set((e[0] + t[0]) / 2, n.getHeight() - (e[1] + t[1]) / 2, 0);
        var a = t[0] - e[0],
          o = t[1] - e[1];
        this._planeMesh.scale.set(a / 2, o / 2, 1), this._particleSurface.resize(Math.max(Math.min(a, 2048), 1), Math.max(Math.min(o, 2048), 1)), this._renderer && this._particleSurface.clearFrame(this._renderer)
      },
      _limitInViewportAndFullFill: function (e, t, r, n) {
        var i = [Math.max(e[0], 0), Math.max(e[1], 0)],
          a = [Math.min(t[0], n.getWidth()), Math.min(t[1], n.getHeight())];
        if ("bmap" === r.get("coordinateSystem")) {
          var o = r.getData().getDataExtent(r.coordDimToDataDim("lng")[0]);
          Math.floor(o[1] - o[0]) >= 359 && (i[0] > 0 && (i[0] = 0), a[0] < n.getWidth() && (a[0] = n.getWidth()))
        }
        var s = t[0] - e[0],
          u = t[1] - e[1],
          l = a[0] - i[0],
          h = a[1] - i[1];
        return {
          leftTop: i,
          rightBottom: a,
          region: [(i[0] - e[0]) / s, 1 - h / u - (i[1] - e[1]) / u, l / s, h / u]
        }
      },
      _updateCamera: function (e, t, r) {
        this.viewGL.setViewport(0, 0, e, t, r);
        var n = this.viewGL.camera;
        n.left = n.bottom = 0, n.top = t, n.right = e, n.near = 0, n.far = 100, n.position.z = 10
      },
      remove: function () {
        this._planeMesh.stopAnimation(), this.groupGL.removeAll()
      },
      dispose: function () {
        this._renderer && this._particleSurface.dispose(this._renderer), this.groupGL.removeAll()
      }
    })
  }, function (e, t, r) {
    "use strict";

    function n(e) {
      var t = document.createElement("canvas");
      t.width = t.height = e;
      var r = t.getContext("2d");
      return r.fillStyle = "#fff", r.arc(e / 2, e / 2, e / 2, 0, 2 * Math.PI), r.fill(), t
    }
    var i = r(16),
      a = r(15),
      o = r(40),
      s = r(19),
      u = r(8),
      l = r(5),
      h = r(4),
      c = r(37),
      d = r(43),
      f = r(10),
      p = r(278),
      m = r(279);
    u.a.import(m.a);
    var g = function () {
      this.motionBlurFactor = .99, this.vectorFieldTexture = new l.a({
        type: h.a.FLOAT,
        flipY: !1
      }), this.particleLife = [5, 20], this._particleType = "point", this._particleSize = 1, this.particleColor = [1, 1, 1, 1], this.particleSpeedScaling = 1, this._thisFrameTexture = null, this._particlePass = null, this._spawnTexture = null, this._particleTexture0 = null, this._particleTexture1 = null, this._particlePointsMesh = null, this._surfaceFrameBuffer = null, this._elapsedTime = 0, this._scene = null, this._camera = null, this._lastFrameTexture = null, this._supersampling = 1, this._downsampleTextures = [], this._width = 512, this._height = 512, this.init()
    };
    g.prototype = {
      constructor: g,
      init: function () {
        var e = {
          type: h.a.FLOAT,
          minFilter: h.a.NEAREST,
          magFilter: h.a.NEAREST,
          useMipmap: !1
        };
        this._spawnTexture = new l.a(e), this._particleTexture0 = new l.a(e), this._particleTexture1 = new l.a(e), this._frameBuffer = new f.a({
          depthBuffer: !1
        }), this._particlePass = new i.a({
          fragment: u.a.source("ecgl.vfParticle.particle.fragment")
        }), this._particlePass.setUniform("velocityTexture", this.vectorFieldTexture), this._particlePass.setUniform("spawnTexture", this._spawnTexture), this._downsamplePass = new i.a({
          fragment: u.a.source("clay.compositor.downsample")
        });
        var t = new o.a({
            renderOrder: 10,
            material: new s.a({
              shader: new u.a(u.a.source("ecgl.vfParticle.renderPoints.vertex"), u.a.source("ecgl.vfParticle.renderPoints.fragment"))
            }),
            mode: o.a.POINTS,
            geometry: new a.a({
              dynamic: !0,
              mainAttribute: "texcoord0"
            })
          }),
          r = new o.a({
            renderOrder: 10,
            material: new s.a({
              shader: new u.a(u.a.source("ecgl.vfParticle.renderLines.vertex"), u.a.source("ecgl.vfParticle.renderLines.fragment"))
            }),
            geometry: new p.a,
            culling: !1
          }),
          n = new o.a({
            material: new s.a({
              shader: new u.a(u.a.source("ecgl.color.vertex"), u.a.source("ecgl.color.fragment"))
            }),
            geometry: new d.a
          });
        n.material.enableTexture("diffuseMap"), this._particlePointsMesh = t, this._particleLinesMesh = r, this._lastFrameFullQuadMesh = n, this._camera = new c.a, this._thisFrameTexture = new l.a, this._lastFrameTexture = new l.a
      },
      setParticleDensity: function (e, t) {
        for (var r = e * t, n = new Float32Array(4 * r), i = 0, a = this.particleLife, o = 0; o < e; o++)
          for (var s = 0; s < t; s++, i++) {
            n[4 * i] = Math.random(), n[4 * i + 1] = Math.random(), n[4 * i + 2] = Math.random();
            var u = (a[1] - a[0]) * Math.random() + a[0];
            n[4 * i + 3] = u
          }
        "line" === this._particleType ? this._setLineGeometry(e, t) : this._setPointsGeometry(e, t), this._spawnTexture.width = e, this._spawnTexture.height = t, this._spawnTexture.pixels = n, this._particleTexture0.width = this._particleTexture1.width = e, this._particleTexture0.height = this._particleTexture1.height = t, this._particlePass.setUniform("textureSize", [e, t])
      },
      _setPointsGeometry: function (e, t) {
        var r = e * t,
          n = this._particlePointsMesh.geometry,
          i = n.attributes;
        i.texcoord0.init(r);
        for (var a = 0, o = 0; o < e; o++)
          for (var s = 0; s < t; s++, a++) i.texcoord0.value[2 * a] = o / e, i.texcoord0.value[2 * a + 1] = s / t;
        n.dirty()
      },
      _setLineGeometry: function (e, t) {
        var r = e * t,
          n = this._getParticleMesh().geometry;
        n.setLineCount(r), n.resetOffset();
        for (var i = 0; i < e; i++)
          for (var a = 0; a < t; a++) n.addLine([i / e, a / t]);
        n.dirty()
      },
      _getParticleMesh: function () {
        return "line" === this._particleType ? this._particleLinesMesh : this._particlePointsMesh
      },
      update: function (e, t, r, n) {
        var i = this._getParticleMesh(),
          a = this._frameBuffer,
          o = this._particlePass;
        n && this._updateDownsampleTextures(e, t), i.material.set("size", this._particleSize * this._supersampling), i.material.set("color", this.particleColor), o.setUniform("speedScaling", this.particleSpeedScaling), a.attach(this._particleTexture1), o.setUniform("firstFrameTime", n ? (this.particleLife[1] + this.particleLife[0]) / 2 : 0), o.setUniform("particleTexture", this._particleTexture0), o.setUniform("deltaTime", r), o.setUniform("elapsedTime", this._elapsedTime), o.render(e, a), i.material.set("particleTexture", this._particleTexture1), i.material.set("prevParticleTexture", this._particleTexture0), a.attach(this._thisFrameTexture), a.bind(e), e.gl.clear(e.gl.DEPTH_BUFFER_BIT | e.gl.COLOR_BUFFER_BIT);
        var s = this._lastFrameFullQuadMesh;
        s.material.set("diffuseMap", this._lastFrameTexture), s.material.set("color", [1, 1, 1, this.motionBlurFactor]), this._camera.update(!0), e.renderPass([s, i], this._camera), a.unbind(e), this._downsample(e), this._swapTexture(), this._elapsedTime += r
      },
      _downsample: function (e) {
        var t = this._downsampleTextures;
        if (0 !== t.length)
          for (var r = 0, n = this._thisFrameTexture, i = t[r]; i;) this._frameBuffer.attach(i), this._downsamplePass.setUniform("texture", n), this._downsamplePass.setUniform("textureSize", [n.width, n.height]), this._downsamplePass.render(e, this._frameBuffer), n = i, i = t[++r]
      },
      getSurfaceTexture: function () {
        var e = this._downsampleTextures;
        return e.length > 0 ? e[e.length - 1] : this._lastFrameTexture
      },
      setRegion: function (e) {
        this._particlePass.setUniform("region", e)
      },
      resize: function (e, t) {
        this._lastFrameTexture.width = e * this._supersampling, this._lastFrameTexture.height = t * this._supersampling, this._thisFrameTexture.width = e * this._supersampling, this._thisFrameTexture.height = t * this._supersampling, this._width = e, this._height = t
      },
      setParticleSize: function (e) {
        var t = this._getParticleMesh();
        if (e <= 2) return t.material.disableTexture("spriteTexture"), void(t.material.transparent = !1);
        this._spriteTexture || (this._spriteTexture = new l.a), this._spriteTexture.image && this._spriteTexture.image.width === e || (this._spriteTexture.image = n(e), this._spriteTexture.dirty()), t.material.transparent = !0, t.material.enableTexture("spriteTexture"), t.material.set("spriteTexture", this._spriteTexture), this._particleSize = e
      },
      setGradientTexture: function (e) {
        var t = this._getParticleMesh().material;
        t[e ? "enableTexture" : "disableTexture"]("gradientTexture"), t.setUniform("gradientTexture", e)
      },
      setColorTextureImage: function (e, t) {
        this._getParticleMesh().material.setTextureImage("colorTexture", e, t, {
          flipY: !0
        })
      },
      setParticleType: function (e) {
        this._particleType = e
      },
      clearFrame: function (e) {
        var t = this._frameBuffer;
        t.attach(this._lastFrameTexture), t.bind(e), e.gl.clear(e.gl.DEPTH_BUFFER_BIT | e.gl.COLOR_BUFFER_BIT), t.unbind(e)
      },
      setSupersampling: function (e) {
        this._supersampling = e, this.resize(this._width, this._height)
      },
      _updateDownsampleTextures: function (e, t) {
        for (var r = this._downsampleTextures, n = Math.max(Math.floor(Math.log(this._supersampling / t.getDevicePixelRatio()) / Math.log(2)), 0), i = 2, a = this._width * this._supersampling, o = this._height * this._supersampling, s = 0; s < n; s++) r[s] = r[s] || new l.a, r[s].width = a / i, r[s].height = o / i, i *= 2;
        for (; s < r.length; s++) r[s].dispose(e);
        r.length = n
      },
      _swapTexture: function () {
        var e = this._particleTexture0;
        this._particleTexture0 = this._particleTexture1, this._particleTexture1 = e;
        var e = this._thisFrameTexture;
        this._thisFrameTexture = this._lastFrameTexture, this._lastFrameTexture = e
      },
      dispose: function (e) {
        e.disposeFrameBuffer(this._frameBuffer), e.disposeTexture(this.vectorFieldTexture), e.disposeTexture(this._spawnTexture), e.disposeTexture(this._particleTexture0), e.disposeTexture(this._particleTexture1), e.disposeTexture(this._thisFrameTexture), e.disposeTexture(this._lastFrameTexture), e.disposeGeometry(this._particleLinesMesh.geometry), e.disposeGeometry(this._particlePointsMesh.geometry), e.disposeGeometry(this._lastFrameFullQuadMesh.geometry), this._spriteTexture && e.disposeTexture(this._spriteTexture), this._particlePass.dispose(e), this._downsamplePass.dispose(e), this._downsampleTextures.forEach(function (t) {
          t.dispose(e)
        })
      }
    }, t.a = g
  }, function (e, t, r) {
    "use strict";
    var n = r(15),
      i = r(0),
      a = (r.n(i), n.a.extend(function () {
        return {
          dynamic: !0,
          attributes: {
            position: new n.a.Attribute("position", "float", 3, "POSITION")
          }
        }
      }, {
        resetOffset: function () {
          this._vertexOffset = 0, this._faceOffset = 0
        },
        setLineCount: function (e) {
          var t = this.attributes,
            r = 4 * e,
            n = 2 * e;
          this.vertexCount !== r && t.position.init(r), this.triangleCount !== n && (this.indices = 0 === n ? null : this.vertexCount > 65535 ? new Uint32Array(3 * n) : new Uint16Array(3 * n))
        },
        addLine: function (e) {
          var t = this._vertexOffset;
          this.attributes.position.set(t, [e[0], e[1], 1]), this.attributes.position.set(t + 1, [e[0], e[1], -1]), this.attributes.position.set(t + 2, [e[0], e[1], 2]), this.attributes.position.set(t + 3, [e[0], e[1], -2]), this.setTriangleIndices(this._faceOffset++, [t, t + 1, t + 2]), this.setTriangleIndices(this._faceOffset++, [t + 1, t + 2, t + 3]), this._vertexOffset += 4
        }
      }));
    t.a = a
  }, function (e, t, r) {
    "use strict";
    t.a = "@export ecgl.vfParticle.particle.fragment\n\nuniform sampler2D particleTexture;\nuniform sampler2D spawnTexture;\nuniform sampler2D velocityTexture;\n\nuniform float deltaTime;\nuniform float elapsedTime;\n\nuniform float speedScaling : 1.0;\n\nuniform vec2 textureSize;\nuniform vec4 region : [0, 0, 1, 1];\nuniform float firstFrameTime;\n\nvarying vec2 v_Texcoord;\n\n\nvoid main()\n{\n vec4 p = texture2D(particleTexture, v_Texcoord);\n bool spawn = false;\n if (p.w <= 0.0) {\n p = texture2D(spawnTexture, fract(v_Texcoord + elapsedTime / 10.0));\n p.w -= firstFrameTime;\n spawn = true;\n }\n vec2 v = texture2D(velocityTexture, fract(p.xy * region.zw + region.xy)).xy;\n v = (v - 0.5) * 2.0;\n p.z = length(v);\n p.xy += v * deltaTime / 10.0 * speedScaling;\n p.w -= deltaTime;\n\n if (spawn || p.xy != fract(p.xy)) {\n p.z = 0.0;\n }\n p.xy = fract(p.xy);\n\n gl_FragColor = p;\n}\n@end\n\n@export ecgl.vfParticle.renderPoints.vertex\n\n#define PI 3.1415926\n\nattribute vec2 texcoord : TEXCOORD_0;\n\nuniform sampler2D particleTexture;\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\n\nuniform float size : 1.0;\n\nvarying float v_Mag;\nvarying vec2 v_Uv;\n\nvoid main()\n{\n vec4 p = texture2D(particleTexture, texcoord);\n\n if (p.w > 0.0 && p.z > 1e-5) {\n gl_Position = worldViewProjection * vec4(p.xy * 2.0 - 1.0, 0.0, 1.0);\n }\n else {\n gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);\n }\n\n v_Mag = p.z;\n v_Uv = p.xy;\n\n gl_PointSize = size;\n}\n\n@end\n\n@export ecgl.vfParticle.renderPoints.fragment\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\nuniform sampler2D gradientTexture;\nuniform sampler2D colorTexture;\nuniform sampler2D spriteTexture;\n\nvarying float v_Mag;\nvarying vec2 v_Uv;\n\nvoid main()\n{\n gl_FragColor = color;\n#ifdef SPRITETEXTURE_ENABLED\n gl_FragColor *= texture2D(spriteTexture, gl_PointCoord);\n if (color.a == 0.0) {\n discard;\n }\n#endif\n#ifdef GRADIENTTEXTURE_ENABLED\n gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));\n#endif\n#ifdef COLORTEXTURE_ENABLED\n gl_FragColor *= texture2D(colorTexture, v_Uv);\n#endif\n}\n\n@end\n\n@export ecgl.vfParticle.renderLines.vertex\n\n#define PI 3.1415926\n\nattribute vec3 position : POSITION;\n\nuniform sampler2D particleTexture;\nuniform sampler2D prevParticleTexture;\n\nuniform float size : 1.0;\nuniform vec4 vp: VIEWPORT;\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\n\nvarying float v_Mag;\nvarying vec2 v_Uv;\n\n@import clay.util.rand\n\nvoid main()\n{\n vec4 p = texture2D(particleTexture, position.xy);\n vec4 p2 = texture2D(prevParticleTexture, position.xy);\n\n p.xy = p.xy * 2.0 - 1.0;\n p2.xy = p2.xy * 2.0 - 1.0;\n\n if (p.w > 0.0 && p.z > 1e-5) {\n vec2 dir = normalize(p.xy - p2.xy);\n vec2 norm = vec2(dir.y / vp.z, -dir.x / vp.w) * sign(position.z) * size;\n if (abs(position.z) == 2.0) {\n gl_Position = vec4(p.xy + norm, 0.0, 1.0);\n v_Uv = p.xy;\n v_Mag = p.z;\n }\n else {\n gl_Position = vec4(p2.xy + norm, 0.0, 1.0);\n v_Mag = p2.z;\n v_Uv = p2.xy;\n }\n gl_Position = worldViewProjection * gl_Position;\n }\n else {\n gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);\n }\n}\n\n@end\n\n@export ecgl.vfParticle.renderLines.fragment\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\nuniform sampler2D gradientTexture;\nuniform sampler2D colorTexture;\n\nvarying float v_Mag;\nvarying vec2 v_Uv;\n\nvoid main()\n{\n gl_FragColor = color;\n #ifdef GRADIENTTEXTURE_ENABLED\n gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));\n#endif\n#ifdef COLORTEXTURE_ENABLED\n gl_FragColor *= texture2D(colorTexture, v_Uv);\n#endif\n}\n\n@end\n"
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n);
    i.a.extendSeriesModel({
      type: "series.flowGL",
      dependencies: ["geo", "grid", "bmap"],
      visualColorAccessPath: "itemStyle.color",
      getInitialData: function (e, t) {
        var r = i.a.getCoordinateSystemDimensions(this.get("coordinateSystem")) || ["x", "y"];
        r.push("vx", "vy");
        var n = i.a.helper.completeDimensions(r, this.getSource(), {
            encodeDef: this.get("encode"),
            dimsDef: this.get("dimensions")
          }),
          a = new i.a.List(n, this);
        return a.initData(this.getSource()), a
      },
      defaultOption: {
        coordinateSystem: "cartesian2d",
        zlevel: 10,
        supersampling: 1,
        particleType: "point",
        particleDensity: 128,
        particleSize: 1,
        particleSpeed: 1,
        particleTrail: 2,
        colorTexture: null,
        gridWidth: "auto",
        gridHeight: "auto",
        itemStyle: {
          color: "#fff",
          opacity: .8
        }
      }
    })
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = (r(282), r(283), r(17));
    i.a.registerVisual(Object(a.a)("linesGL"))
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(13),
      o = (r.n(a), i.a.extendSeriesModel({
        type: "series.linesGL",
        dependencies: ["grid", "geo"],
        visualColorAccessPath: "lineStyle.color",
        streamEnabled: !0,
        init: function (e) {
          var t = this._processFlatCoordsArray(e.data);
          this._flatCoords = t.flatCoords, this._flatCoordsOffset = t.flatCoordsOffset, t.flatCoords && (e.data = new Float32Array(t.count)), o.superApply(this, "init", arguments)
        },
        mergeOption: function (e) {
          var t = this._processFlatCoordsArray(e.data);
          this._flatCoords = t.flatCoords, this._flatCoordsOffset = t.flatCoordsOffset, t.flatCoords && (e.data = new Float32Array(t.count)), o.superApply(this, "mergeOption", arguments)
        },
        appendData: function (e) {
          var t = this._processFlatCoordsArray(e.data);
          t.flatCoords && (this._flatCoords ? (this._flatCoords = Object(a.concatArray)(this._flatCoords, t.flatCoords), this._flatCoordsOffset = Object(a.concatArray)(this._flatCoordsOffset, t.flatCoordsOffset)) : (this._flatCoords = t.flatCoords, this._flatCoordsOffset = t.flatCoordsOffset), e.data = new Float32Array(t.count)), this.getRawData().appendData(e.data)
        },
        _getCoordsFromItemModel: function (e) {
          var t = this.getData().getItemModel(e),
            r = t.option instanceof Array ? t.option : t.getShallow("coords");
          return r
        },
        getLineCoordsCount: function (e) {
          return this._flatCoordsOffset ? this._flatCoordsOffset[2 * e + 1] : this._getCoordsFromItemModel(e).length
        },
        getLineCoords: function (e, t) {
          if (this._flatCoordsOffset) {
            for (var r = this._flatCoordsOffset[2 * e], n = this._flatCoordsOffset[2 * e + 1], i = 0; i < n; i++) t[i] = t[i] || [], t[i][0] = this._flatCoords[r + 2 * i], t[i][1] = this._flatCoords[r + 2 * i + 1];
            return n
          }
          for (var a = this._getCoordsFromItemModel(e), i = 0; i < a.length; i++) t[i] = t[i] || [], t[i][0] = a[i][0], t[i][1] = a[i][1];
          return a.length
        },
        _processFlatCoordsArray: function (e) {
          var t = 0;
          if (this._flatCoords && (t = this._flatCoords.length), "number" == typeof e[0]) {
            for (var r = e.length, n = new Uint32Array(r), i = new Float64Array(r), a = 0, o = 0, s = 0, u = 0; u < r;) {
              s++;
              var l = e[u++];
              n[o++] = a + t, n[o++] = l;
              for (var h = 0; h < l; h++) {
                var c = e[u++],
                  d = e[u++];
                i[a++] = c, i[a++] = d
              }
            }
            return {
              flatCoordsOffset: new Uint32Array(n.buffer, 0, o),
              flatCoords: i,
              count: s
            }
          }
          return {
            flatCoordsOffset: null,
            flatCoords: null,
            count: e.length
          }
        },
        getInitialData: function (e, t) {
          var r = new i.a.List(["value"], this);
          return r.hasItemOption = !1, r.initData(e.data, [], function (e, t, n, i) {
            if (e instanceof Array) return NaN;
            r.hasItemOption = !0;
            var a = e.value;
            return null != a ? a instanceof Array ? a[i] : a : void 0
          }), r
        },
        defaultOption: {
          coordinateSystem: "geo",
          zlevel: 10,
          progressive: 1e4,
          progressiveThreshold: 5e4,
          blendMode: "source-over",
          lineStyle: {
            opacity: .8
          },
          postEffect: {
            enable: !1,
            colorCorrection: {
              exposure: 0,
              brightness: 0,
              contrast: 1,
              saturation: 1,
              enable: !0
            }
          }
        }
      }))
  }, function (e, t, r) {
    "use strict";
    var n = r(0),
      i = r.n(n),
      a = r(1),
      o = r(22),
      s = r(105),
      u = r(103),
      l = r(2);
    i.a.extendChartView({
      type: "linesGL",
      __ecgl__: !0,
      init: function (e, t) {
        this.groupGL = new a.a.Node, this.viewGL = new o.a("orthographic"), this.viewGL.add(this.groupGL), this._glViewHelper = new u.a(this.viewGL), this._nativeLinesShader = a.a.createShader("ecgl.lines3D"), this._meshLinesShader = a.a.createShader("ecgl.meshLines3D"), this._linesMeshes = [], this._currentStep = 0
      },
      render: function (e, t, r) {
        this.groupGL.removeAll(), this._glViewHelper.reset(e, r);
        var n = this._linesMeshes[0];
        n || (n = this._linesMeshes[0] = this._createLinesMesh(e)), this._linesMeshes.length = 1, this.groupGL.add(n), this._updateLinesMesh(e, n, 0, e.getData().count()), this.viewGL.setPostEffect(e.getModel("postEffect"), r)
      },
      incrementalPrepareRender: function (e, t, r) {
        this.groupGL.removeAll(), this._glViewHelper.reset(e, r), this._currentStep = 0, this.viewGL.setPostEffect(e.getModel("postEffect"), r)
      },
      incrementalRender: function (e, t, r, n) {
        var i = this._linesMeshes[this._currentStep];
        i || (i = this._createLinesMesh(t), this._linesMeshes[this._currentStep] = i), this._updateLinesMesh(t, i, e.start, e.end), this.groupGL.add(i), n.getZr().refresh(), this._currentStep++
      },
      updateTransform: function (e, t, r) {
        e.coordinateSystem.getRoamTransform && this._glViewHelper.updateTransform(e, r)
      },
      _createLinesMesh: function (e) {
        return new a.a.Mesh({
          $ignorePicking: !0,
          material: new a.a.Material({
            shader: a.a.createShader("ecgl.lines3D"),
            transparent: !0,
            depthMask: !1,
            depthTest: !1
          }),
          geometry: new s.a({
            segmentScale: 10,
            useNativeLine: !0,
            dynamic: !1
          }),
          mode: a.a.Mesh.LINES,
          culling: !1
        })
      },
      _updateLinesMesh: function (e, t, r, n) {
        function i() {
          g[0] = m[0] * T + v[0] * x - (m[1] - v[1]) * s, g[1] = m[1] * T + v[1] * x - (v[0] - m[0]) * s, _[0] = m[0] * x + v[0] * T - (m[1] - v[1]) * s, _[1] = m[1] * x + v[1] * T - (v[0] - m[0]) * s
        }
        var o = e.getData();
        t.material.blend = "lighter" === e.get("blendMode") ? a.a.additiveBlend : null;
        var s = e.get("lineStyle.curveness") || 0,
          u = e.get("polyline"),
          h = t.geometry,
          c = e.coordinateSystem,
          d = l.a.firstNotNull(e.get("lineStyle.width"), 1);
        d > 1 ? (t.material.shader !== this._meshLinesShader && t.material.attachShader(this._meshLinesShader), t.mode = a.a.Mesh.TRIANGLES) : (t.material.shader !== this._nativeLinesShader && t.material.attachShader(this._nativeLinesShader), t.mode = a.a.Mesh.LINES), r = r || 0, n = n || o.count(), h.resetOffset();
        var f = 0,
          p = 0,
          m = [],
          g = [],
          _ = [],
          v = [],
          y = [],
          x = .3,
          T = .7;
        if (u || 0 !== s)
          for (var b = r; b < n; b++)
            if (u) {
              var w = e.getLineCoordsCount(b);
              f += h.getPolylineVertexCount(w), p += h.getPolylineTriangleCount(w)
            } else e.getLineCoords(b, y), this._glViewHelper.dataToPoint(c, y[0], m), this._glViewHelper.dataToPoint(c, y[1], v), i(), f += h.getCubicCurveVertexCount(m, g, _, v), p += h.getCubicCurveTriangleCount(m, g, _, v);
        else {
          var E = n - r;
          f += E * h.getLineVertexCount(), p += E * h.getLineVertexCount()
        }
        h.setVertexCount(f), h.setTriangleCount(p);
        for (var S = r, A = [], b = r; b < n; b++) {
          a.a.parseColor(o.getItemVisual(S, "color"), A);
          var M = l.a.firstNotNull(o.getItemVisual(S, "opacity"), 1);
          A[3] *= M;
          for (var w = e.getLineCoords(b, y), C = 0; C < w; C++) this._glViewHelper.dataToPoint(c, y[C], y[C]);
          u ? h.addPolyline(y, A, d, 0, w) : 0 !== s ? (m = y[0], v = y[1], i(), h.addCubicCurve(m, g, _, v, A, d)) : h.addPolyline(y, A, d, 0, 2), S++
        }
      },
      dispose: function () {
        this.groupGL.removeAll()
      },
      remove: function () {
        this.groupGL.removeAll()
      }
    })
  }])
});