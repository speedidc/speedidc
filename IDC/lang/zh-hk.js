(function () {
  const nav = {} // 側邊欄和頂部
  const index = {} // 首頁模塊
  const login = {} // 登錄、註冊、重置密碼模塊
  const standaloneServer = {} // 獨立服務器模塊
  const cloudServer = {} // 雲服務器模塊
  const otherServer = {} // 其他服務器模塊
  const personalCenter = {} // 個人中心模塊
  const log = {} // 日誌模塊
  const workOrder = {} // 工單模塊
  const helpContent = {} // 幫助中心模塊
  const financeModel = {} // 財務模塊
  const verified = {} // 實名認證
  const securityCenter = {} // 安全中心
  const newsCenter = {} // 新聞中心
  const cart = {} // 購物車模塊
  const paymentComponent = {} // 公共支付組件模塊
  const recommend = {}// 推介計劃模塊
  const notLoggedIn = {}// 未登錄頁面

  // 側邊欄模塊
  nav.home = '首頁'
  nav.Support = '文件下載'
  nav.productManagement = '產品管理'
  nav.cloudServer = '雲服務器'
  nav.standaloneServer = '獨立服務器'
  nav.otherServer = '其他'
  nav.account = '賬戶'
  nav.personalCenter = '個人中心'
  nav.verify = '實名認證'
  nav.security = '安全中心'
  nav.billing = '財務'
  nav.workOrder = '工單'
  nav.recommend = '推介計劃'
  nav.log = '日誌'
  // 頂部訂購按鈕
  nav.order = '訂購'
  // 頂部頭像下拉
  nav.logout = '退出登錄'

  // 首頁模塊
  index.pageTitle = '首頁' // 首頁網頁title名稱
  index.noPhoneNumber = '未綁定手機'
  index.pendingWorkOrder = '待處理工單'
  index.unpaidOrder = '未支付訂單'
  index.quantity = '產品數量'
  index.balance = '當前余額'
  index.expensesRecord = '消費記錄'
  index.consumption = '本月消費'
  index.orderRecord = '訂單記錄'
  index.unpaid = '本月未支付'
  index.recharge = '充值'
  index.resourceList = '資源列表'
  index.domainstatus = '機器狀態'
  index.productname = '主機名'
  index.nextduedate = '到期時間'
  index.price_desc = '費用'
  index.productOpened = '已開通產品'
  index.cloudServer = '雲服務器'
  index.standloneServer = '獨立服務器'
  index.highProtectionIP = '高防IP'
  index.floatIP = '浮動IP'
  index.disk = '磁盤'
  index.firewall = '防火墻'
  index.announcement = '公告通知'
  index.viewMore = '查看更多'

  // 登錄、註冊、重置
  login.register = '註冊'
  login.reset = '重置'
  login.registerPhone = '手機註冊'
  login.enterPhone = '請輸入手機號碼'
  login.enterEmail = '請輸入郵箱'
  login.validatePhone = '手機號碼格式不正確'
  login.validateEmail = '郵箱格式不正確'
  login.enterCode = '請輸入驗證碼'
  login.enterPwd = '請輸入密碼'
  login.enterNewPwd = '請輸入新密碼'
  login.enterPwdAgain = '請再次輸入密碼'
  login.pwdLength = '長度在 6 到 32 個字符'
  login.validatePwd = '兩次輸入密碼不壹致'
  login.getCode = '獲取驗證碼'
  login.registerEmail = '郵箱註冊'
  login.termsMsg = '我已閱讀並同意'
  login.terms = '服務條款'
  login.and = '和'
  login.privacyPolicy = '隱私政策'
  login.hasAccount = '已有壹個賬戶？'
  login.login = '登錄'
  login.agree = '請先同意服務條款'
  login.timeCount = 's後重試'
  login.resetPhone = '手機找回'
  login.resetEmail = '郵箱找回'
  login.loginPhone = '手機登錄'
  login.loginEmail = '郵箱登錄'
  login.loginCode = '驗證碼登錄'
  login.loginPwd = '密碼登錄'
  login.forgetPwd = '忘記密碼'
  login.hasNoAccount = '還沒有賬戶？'
  login.nothing = '暫未開放註冊登錄'

  // 獨立服務器模塊
  standaloneServer.pageTitle = '服務器'
  standaloneServer.placeholderSearch = '按關鍵字搜索'
  standaloneServer.placeholderSelect = '按區域篩選'
  standaloneServer.placeholderMulSelect = '按狀態篩選'
  standaloneServer.domainstatus = '狀態'
  standaloneServer.productname = '產品'
  standaloneServer.nextduedate = '到期時間'
  standaloneServer.amount = '費用'
  standaloneServer.os = '系統'
  standaloneServer.remark = '備註'
  standaloneServer.operate = '操作'
  standaloneServer.dialogEditRemark = '修改備註'
  standaloneServer.renew = '續費'
  standaloneServer.pay = '支付'
  standaloneServer.controlOn = '開機'
  standaloneServer.controlOnMsg = '系統將會立即開機,大約需要5分鐘完成'
  standaloneServer.sureOn = '確定開機嗎？'
  standaloneServer.loadingOn = '正在開機'
  standaloneServer.controlOff = '關機'
  standaloneServer.controlOffMsg = '系統將會立即關機,大約需要5分鐘完成'
  standaloneServer.sureOff = '確定關機嗎？'
  standaloneServer.loadingOff = '正在關機'
  standaloneServer.controlReboot = '重啟'
  standaloneServer.controlRebootMsg = '系統將會立即重啟,大約需要5分鐘完成'
  standaloneServer.sureReboot = '確定重啟嗎？'
  standaloneServer.loadingReboot = '正在重啟'
  standaloneServer.controlResetBMC = '重置BMC'
  standaloneServer.controlResetBMCMsg = '系統將會立即重置BMC,大約需要5分鐘完成'
  standaloneServer.sureResetBMC = '確定重置BMC嗎？'
  standaloneServer.loadingResetBMC = '正在重置'
  standaloneServer.controlReinstallSystem = '重裝系統'
  standaloneServer.controlReinstallSystemMsg = '系統將會立即重裝,大約需要30分鐘完成啟動'
  standaloneServer.controlDecryption = '破解密碼'
  standaloneServer.controlDecryptionMsg = '系統將會立即破解密碼,大約需要5分鐘完成'
  standaloneServer.controlRescueSystem = '救援系統'
  standaloneServer.controlRescueMsg = '系統將會立即進入救援系統,大約需要5分鐘完成'
  standaloneServer.goOnRescueSystem = '執行救援模式會終止之前的操作，確認繼續嗎？'
  standaloneServer.canceGetOperationProgress = '取消獲取操作進度嗎？'
  standaloneServer.hardToTurnItOff = '系統將會立即硬關機,大約需要5分鐘完成'
  standaloneServer.aHardReset = '系統將會立即硬重啟,大約需要5分鐘完成'
  standaloneServer.confirm = '確認'
  standaloneServer.cancel = '取消'
  standaloneServer.controlSuccess = '成功'
  standaloneServer.controlError = '失敗'
  standaloneServer.viewMore = '查看更多'
  standaloneServer.refreshPower = '單擊刷新電源狀態'
  standaloneServer.chart = '圖表'
  standaloneServer.control = '控制'
  standaloneServer.billing = '財務'
  standaloneServer.log = '日誌'
  standaloneServer.traffic = '用量'
  standaloneServer.console = '控制臺'
  standaloneServer.dedicatedIP = '主IP'
  standaloneServer.loginInfo = '登錄信息'
  standaloneServer.userName = '用戶名'
  standaloneServer.password = '密碼'
  standaloneServer.port = '端口'
  standaloneServer.noData = '暫無數據'
  standaloneServer.flowChart = '流量圖'
  standaloneServer.placeholderSelectTime = '請選擇時間'
  standaloneServer.selectTime24 = '24小時'
  standaloneServer.selectTime3 = '3天'
  standaloneServer.selectTime7 = '7天'
  standaloneServer.selectTime15 = '15天'
  standaloneServer.selectTime30 = '30天'
  standaloneServer.selectTimeAll = '全部'
  standaloneServer.inflow = '流入流量'
  standaloneServer.outflow = '流出流量'
  standaloneServer.placeholderSearch = '按關鍵字搜索'
  standaloneServer.operatingTime = '操作時間'
  standaloneServer.operatingDetail = '操作詳情'
  standaloneServer.operator = '操作人'
  standaloneServer.ipAddress = 'IP地址'
  standaloneServer.usageStatistics = '用量統計'
  standaloneServer.remainingFlow = '剩余流量'
  standaloneServer.totalFlow = '總流量'
  standaloneServer.name = '名稱'
  standaloneServer.total = '總計'
  standaloneServer.Remain = '剩余'
  standaloneServer.orderTime = '訂購時間'
  standaloneServer.order = '訂購'
  standaloneServer.orderFlowPack = '訂購流量包'
  standaloneServer.flowname = '流量包名稱'
  standaloneServer.flow = '流量'
  standaloneServer.price = '支付金額'
  standaloneServer.outOfStock = '缺貨'
  standaloneServer.buyNow = '立即購買'
  standaloneServer.transactionRecord = '交易記錄'
  standaloneServer.serialNumber = '流水單號'
  standaloneServer.transactiondate = '支付時間'
  standaloneServer.source = '來源'
  standaloneServer.payMent = '支付方式'
  standaloneServer.firstOrderPrice = '首次訂購價格'
  standaloneServer.overdue = '已逾期'
  standaloneServer.notDue = '不到期'
  standaloneServer.left = '還剩'
  standaloneServer.day = '天'
  standaloneServer.hour = '小時'
  standaloneServer.paymentCycle = '付款周期'
  standaloneServer.renewalPrice = '續費價格'
  standaloneServer.payPrice = '支付價格'
  standaloneServer.renewNow = '立即續費'
  standaloneServer.payNow = '立即支付'
  standaloneServer.hostName = '主機名稱'
  standaloneServer.pleaseSelect = '請選擇'
  standaloneServer.random = '隨 機'
  standaloneServer.partitionType = '分區類型'
  standaloneServer.fullFormat = '全盤格式化'
  standaloneServer.formatTheFirstPartition = '第壹分區格式化'
  standaloneServer.highLevel = '高級'
  standaloneServer.disk = '磁盤'
  standaloneServer.decryTitle = '系統將會默認破解Administrator/root用戶的密碼'
  standaloneServer.crackOther = '破解其他'
  standaloneServer.crackOtherLabel = '選擇後將會破解自定義的用戶的密碼'
  standaloneServer.customUser = '自定義用戶'
  standaloneServer.rulesEnterPassword = '請輸入密碼'
  standaloneServer.rulesPassword = '密碼不能包含特殊字符'
  standaloneServer.rulesNumPassword = '密碼必須包括大小寫字母及數字, 至少六位'
  standaloneServer.rulesEnterPort = '請輸入端口'
  standaloneServer.if = '如從'
  standaloneServer.reloadAs = '重裝為'
  standaloneServer.reloadError = '選擇第壹分區重裝，將會導致安裝失敗'
  standaloneServer.goOnReloadSystem = '執行重裝系統會終止之前的操作，確認繼續嗎？'
  standaloneServer.errorReinstallSystem = '重裝失敗'
  standaloneServer.weekReload = '您已達到本周最大免費重裝次數'
  standaloneServer.frequency = '次'
  standaloneServer.doYouNeed = '是否需要？'
  standaloneServer.goOnPwd = '執行破解密碼會終止之前的操作，確認繼續嗎？'
  standaloneServer.batchRenewPageTitle = '批量續費'
  standaloneServer.currentExpirationTime = '當前到期時間'
  standaloneServer.expiryTimeAfterRenewal = '續費後到期時間'
  standaloneServer.renewalCycle = '續費周期'
  standaloneServer.discount = '優惠金額'
  standaloneServer.purchaseReloads = '購買重裝次數'
  standaloneServer.notSelectServer = '您還沒有選擇任何服務器'
  standaloneServer.selectErrorServer = '您選中了不可續費的服務器，請重新選擇'
  standaloneServer.noDate = '無'
  standaloneServer.upDown = '升降級'
  standaloneServer.upDownMsg = '操作系統版本可以升級亦可以降級，從當前的版本升級到最新版本或恢復之前的舊版本'
  standaloneServer.upDownOptions = '升降級選項'
  standaloneServer.upDownOptionsMsg = '對IP數量、操作系統位數、CPU核心數、內存大小等都可以選擇升級或降級'
  standaloneServer.noUpDownProduct = '當前產品無法升級或降級可配置項'
  standaloneServer.next = '下壹步'
  standaloneServer.newProduct = '新的產品'
  standaloneServer.placeholderPromo = '如有優惠碼或優惠券,請輸入'
  standaloneServer.usePromo = '應用優惠碼'
  standaloneServer.settlement = '結算'
  standaloneServer.goBack = '返回'
  standaloneServer.upDownPay = '升降級結算'

  // 雲服務器模塊
  cloudServer.pageTitle = '雲服務器'
  cloudServer.vnc = '控制臺'
  cloudServer.ipAddress = 'IP地址'
  cloudServer.bzInfo = '備註信息'
  cloudServer.username = '用戶名'
  cloudServer.pwd = '密碼'
  cloudServer.port = '端口'
  cloudServer.loginInfo = '登錄信息'
  cloudServer.deactivate = '停用'
  cloudServer.dqdeactivate = '到期時停用'
  cloudServer.deactivateTime = '到期時間'
  cloudServer.charts = '圖表'
  cloudServer.control = '控制'
  cloudServer.crackPwd = '破解密碼'
  cloudServer.pwdEmpty = '密碼不能為空'
  cloudServer.cancel = '取消'
  cloudServer.determine = '確定'
  cloudServer.finance = '財務'

  cloudServer.discount = '折扣'
  cloudServer.log = '日誌'
  cloudServer.usageAmount = '用量'
  cloudServer.UpgradeAndDowngrade = '升降級'
  cloudServer.editNotes = '修改備註'
  cloudServer.note = '備註'
  cloudServer.pleaseEnterNote = '請輸入備註'
  cloudServer.chooseDeleteTime = '請選擇您要停用並刪除該產品的時間'
  cloudServer.cancelTime = '取消時間'
  cloudServer.immediate = '立即'
  cloudServer.waitingForEnd = '等待賬單周期結束'
  cloudServer.cancelReason = '取消原因'
  cloudServer.lackProductStability = '產品穩定性不足'
  cloudServer.businessToReduce = '業務減少不需要'
  cloudServer.other = '其他'
  cloudServer.pleaseEnterReason = '請輸入原因'
  cloudServer.cloudServer = '雲服務器'
  cloudServer.recently24H = '最近24H'
  cloudServer.d7 = '7天'
  cloudServer.duringMonth = '當月'
  cloudServer.inLast30Days = '最近30天'
  cloudServer.pleaseSelect = '請選擇'
  cloudServer.to = '至'
  cloudServer.startTime = '開始時間'
  cloudServer.endTime = '結束時間'
  cloudServer.intoTraffic = '流入流量'
  cloudServer.flow = '流出流量'
  cloudServer.latestTraffic = '最新流量'
  cloudServer.averageFlowRate = '平均流量'
  cloudServer.maximumFlow = '最大流量'
  cloudServer.core = '核心'

  // 其他服務器模塊
  otherServer.pageTitle = '其他服務器'
  otherServer.log = '日誌'
  otherServer.billing = '財務'

  // 個人中心模塊
  personalCenter.pageTitle = '個人中心'
  personalCenter.name = '真實姓名'
  personalCenter.company = '公司名稱'
  personalCenter.country = '國家'
  personalCenter.provincesCitiesArea = '選擇省市區'
  personalCenter.address = '詳細地址'
  personalCenter.defaultPayment = '默認支付'
  personalCenter.userGroups = '用戶組'
  personalCenter.submit = '提交'
  personalCenter.placeholderName = '請輸入真實姓名'
  personalCenter.placeholderCompany = '請輸入公司名稱'
  personalCenter.placeholderCountry = '請選擇國家或搜索'
  personalCenter.placeholderProvinces = '請選擇省市區'
  personalCenter.placeholderAddress = '詳細地址'
  personalCenter.placeholderPayment = '請選擇默認支付'

  // 日誌模塊
  log.pageTitle = '日誌'
  log.systemLog = '系統日誌'
  log.apiList = 'API列表'
  log.loginLog = '登錄日誌'
  log.placeholderSearch = '按關鍵字搜索'
  log.operatingTime = '操作時間'
  log.operatingDetail = '操作詳情'
  log.operator = '操作人'
  log.ipAddress = 'IP地址'

  // 工單模塊
  workOrder.pageTitle = '工單'
  workOrder.submitTitle = '提交工單'
  workOrder.listTitle = '工單列表'
  workOrder.helpCenter = '幫助中心'
  workOrder.searchBtn = '搜索'
  workOrder.createBtn = '創建工單'
  workOrder.tableTitle = '標題'
  workOrder.tableContent = '內容'
  workOrder.tableCreateTime = '創建時間'
  workOrder.department = '工單類型'
  workOrder.product = '產品'
  workOrder.priority = '優先級'
  workOrder.problemTitle = '問題標題'
  workOrder.problemDescription = '問題描述'
  workOrder.addAttachment = '添加附件'
  workOrder.tips = '只允許:jpg、gif、jpeg、png的文件'
  workOrder.cancel = '取消'
  workOrder.pleaseChoose = '請選擇'
  workOrder.pleaseEnter = '請輸入'
  workOrder.in = '中'
  workOrder.departmentPrompt = '請選擇部門id'
  workOrder.questionPrompt = '請輸入問題標題'
  workOrder.ticketTitle = '工單標題'
  workOrder.status = '狀態'
  workOrder.updateTime = '更新時間'
  workOrder.operating = '操作'
  workOrder.examine = '查看'
  workOrder.delete = '刪除'
  workOrder.workOrderDetails = '工單詳情'
  workOrder.closeTicket = '關閉工單'
  workOrder.submitTime = '提交時間'
  workOrder.workOrderDepartment = '工單部門'
  workOrder.nothing = '無'
  workOrder.customerService = '客服'
  workOrder.user = '用戶'
  workOrder.pleaseRate = '請評分'
  workOrder.replyWorkOrder = '回復工單'

  // 幫助中心模塊
  helpContent.pageTitle = '幫助中心'
  helpContent.helpList = '幫助列表'
  helpContent.helpTitle = '幫助標題'
  helpContent.backList = '返回列表'
  helpContent.tableCreateTime = '創建時間'

  // 財務
  financeModel.pageTitle = '財務'
  financeModel.rechargeCentre = '充值中心'
  financeModel.orderList = '訂購列表'
  financeModel.currentBalance = '當前余額'
  financeModel.yuan = '元'
  financeModel.Amount = '金額'
  financeModel.minAmount = '最小充值金額'
  financeModel.maxAmount = '最大充值金額'
  financeModel.maxBalance = '最大余額'
  financeModel.paymentMethod = '支付方式'
  financeModel.confirmRecharge = '確定充值'
  financeModel.transactionPipeline = '交易流水'
  financeModel.keywordSearch = '輸入關鍵字搜索'
  financeModel.serialNumber = '流水單號'
  financeModel.transactionDate = '交易日期'
  financeModel.source = '來源'
  financeModel.all = '全部'
  financeModel.unpaid = '未支付'
  financeModel.completed = '已完成'
  financeModel.cancelled = '已取消'
  financeModel.billId = '賬單ID'
  financeModel.product = '產品'
  financeModel.paymentDate = '支付日期'
  financeModel.status = '狀態'
  financeModel.paymentMethod = '付款方式'
  financeModel.operating = '操作'
  financeModel.pay = '支付'
  financeModel.delete = '刪除'
  financeModel.isBalancePay = '是否使用余額支付'
  financeModel.errorTips = '這裏好像沒有ID，您可能操作有誤'
  financeModel.requesting = '正在請求，請勿操作'
  financeModel.openNewWebPay = '請在新打開的網頁進行支付'
  financeModel.phoneScanPayment = '請用手機掃描二維碼進行付款'
  financeModel.paySucess = '支付成功'
  financeModel.to = '到'
  financeModel.rotalOrderPrice = '訂單總價'
  financeModel.useOrNot = '是否使用'
  financeModel.stillNeedPay = '還需支付'
  financeModel.payNow = '立即去支付'
  financeModel.calculating = '計算中……'
  financeModel.selectPayType = '請選擇支付方式'
  financeModel.doNotUse = '不使用'
  financeModel.querying = '正在查詢'
  financeModel.delectIsCarry = '將刪除此訂單, 是否繼續?'
  financeModel.prompt = '提示'
  financeModel.determine = '確定'
  financeModel.cancel = '取消'
  financeModel.theOrderDelect = '該訂單已刪除'
  financeModel.cancelDelect = '已取消刪除'
  financeModel.useBalance = '使用余額'
  financeModel.error = '出現了錯誤'
  financeModel.depositSuccess = '充值成功'

  // 實名認證
  verified.pageTitle = '實名認證'
  verified.uncertifiedPrompt = '您還未進行實名認證'
  verified.publicAnnouncement = `據我國2016年11月7日全國人民代表大會常務委員會通過的《中華人民共和國網絡安全法》規定,用戶不提供真實身份信息的，網絡運營者不得為其提供相關服務。
          為了符合國家法律法規，以及不影響您參與優惠活動，請您先實名認證。實名認證信息保密工作是統壹管理，請放心填寫。`
  verified.uesrAuthentication = '個人認證'
  verified.personalAuthentication = '用個人身份證進行認證'
  verified.instantPass = '全自動審核，即時通過'
  verified.upgrade = '支持升級為企業用戶'
  verified.authenticateNow = '立即認證'
  verified.enterpriseCertification = '企業認證'
  verified.businessLicense = '用營業執照進行認證'
  verified.enterpriseFiling = '支持申請企業備案'
  verified.certificationCompleted = '認證完成'
  verified.informationChanges = '恭喜妳，成功通過我們的認證。若您是企業用戶，可通過提交企業認證資質信息進行變更。'
  verified.goCart = '恭喜妳，成功通過我們的企業認證。現在您可前往購物車選購我們的雲服務產品'
  verified.vipId = '會員ID'
  verified.actualName = '真實姓名'
  verified.identityCode = '身份證號'
  verified.businessLicense = '營業執照號'
  verified.picture = '證件圖片'
  verified.authenticationType = '認證類型'
  verified.uploaded = '已上傳'
  verified.notUploaded = '未上傳'
  verified.goEnterpriseCertification = '去企業認證'
  verified.underReview = '審核中'
  verified.underReviewWait = '您的實名認證正在審核中，請耐心等待'
  verified.authenticationFailed = '認證失敗'
  verified.failedResubmit = '您的實名認證未通過，請重新提交'
  verified.causeFailure = '失敗原因'
  verified.resubmit = '重新提交'
  verified.pleaseEnterName = '請輸入真實姓名'
  verified.certificateType = '證件類型'
  verified.residentIdentityCard = '居民身份證'
  verified.CardType = '身份證類型'
  verified.mainland = '大陸'
  verified.otherAreas = '其他地區'
  verified.certificateNum = '證件號碼'
  verified.enterCertificateNum = '請輸入證件號碼'
  verified.cardFrontBack = '身份證正反面'
  verified.legendTips = '圖例及要求：格式要求JPG、JPEG、PNG格式，文件大小不超過5MB'
  verified.submitInformation = '提交信息'
  verified.reset = '重置'
  verified.alipayScanCode = '請使用支付寶掃碼'
  verified.selectCardType = '請選擇證件類型'
  verified.enterCardType = '請輸入證件類型'
  verified.uploadCardFrontBack = '請上傳身份證正反面'
  verified.uploadAllImg = '請上傳所有圖片'
  verified.submitSuccess = '提交成功'
  verified.submitInformationSuccess = '提交實名信息成功'
  verified.More5MB = '文件大小超過 5MB,請壓縮後上傳!'
  verified.More5MBTips = '文件大小超過 5MB'
  verified.only2Pic = '最多只能上傳2張圖片!'
  verified.only1Pic = '最多只能上傳1張圖片!'
  verified.upPicError = '上傳圖片失敗!'
  verified.companyName = '企業名稱'
  verified.enterBusinessLicenseNum = '請輸入營業執照號碼'
  verified.authorName = '提交人姓名'
  verified.enterAuthorName = '請輸入提交人姓名'
  verified.enterIdentityCode = '請輸入身份證號'
  verified.enterBank = '請輸入銀行卡號'
  verified.enterPhone = '請輸入手機號'
  verified.enterBankID = '銀行卡號'
  verified.phoneNum = '手機號'
  verified.BankVerification = '請輸入正確的銀行卡號,且不含特殊符號'
  verified.PhoneVerification = '請輸入正確的手機號'
  verified.businessLicense = '公司營業執照'
  verified.enterCompanyName = '請輸入企業名稱'
  verified.enterCorrectBusinessLicenseNum = '請輸入正確的營業執照號碼'
  verified.uploadBusinessLicense = '公司營業執照'
  verified.submitAfterUpload = '請上傳所有圖片後再提交'

  // 安全中心
  securityCenter.pageTitle = '安全中心'
  securityCenter.loginAgain = '密碼已修改，請重新登錄'
  securityCenter.realName = '已實名認證'
  securityCenter.unnamed = '未實名認證'
  securityCenter.mailbox = '郵箱'
  securityCenter.phone = '手機'
  securityCenter.unboundPhone = '未綁定手機'
  securityCenter.openingTime = '開通時間'
  securityCenter.safetyStrength = '賬號安全強度'
  securityCenter.loginPassword = '登錄密碼'
  securityCenter.suggestEidPass = '安全性高的密碼可以使帳號更安全,建議您定期更換密碼'
  securityCenter.hasBeenSet = '已設置'
  securityCenter.modify = '修改'
  securityCenter.setPassword = '設置密碼'
  securityCenter.phoneBinding = '手機綁定'
  securityCenter.receiveImportant = '可用於重置密碼和接收重要通知'
  securityCenter.bindNow = '立即綁定'
  securityCenter.EmailBinding = '郵箱綁定'
  securityCenter.emailNotification = '可用於重置密碼和接受郵件通知'
  securityCenter.weChatBinding = '微信綁定'
  securityCenter.secondaryVerification = '微信綁定後，登錄時可通過它進行二次校驗'
  securityCenter.loginReminder = '登錄提醒'
  securityCenter.SmsNotification = '設置後，每次登錄時可通過它進行短信提醒'
  securityCenter.cancelSettings = '取消設置'
  securityCenter.setNow = '立即設置'
  securityCenter.bindOn = '請綁定手機後開啟'
  securityCenter.changePassword = '修改密碼'
  securityCenter.oldPassword = '原密碼'
  securityCenter.enterOldPassword = '請輸入原密碼'
  securityCenter.newPassword = '新密碼'
  securityCenter.enterNewPassword = '請輸入新密碼'
  securityCenter.repeatNewPassword = '重復新密碼'
  securityCenter.enterRepeatNewPassword = '請輸入重復新密碼'
  securityCenter.bindPhone = '綁定手機'
  securityCenter.phoneNum = '手機號'
  securityCenter.enterPhoneNum = '請輸入手機號'
  securityCenter.areaCode = '區號'
  securityCenter.captcha = '驗證碼'
  securityCenter.enterCaptcha = '請輸入驗證碼'
  securityCenter.verifyOriginalPhone = '驗證原手機'
  securityCenter.verifyNewPhone = '驗證新手機'
  securityCenter.bindMailbox = '綁定郵箱'
  securityCenter.enterMailbox = '請輸入郵箱'
  securityCenter.verifyOriginalEmail = '驗證原郵箱'
  securityCenter.verifyNewEmail = '驗證新郵箱'
  securityCenter.cancelVerificationPhone = '取消登錄提醒需要驗證手機'
  securityCenter.scanWeChat = '請使用微信掃壹掃'
  securityCenter.newOldDifferent = '新密碼和舊密碼不能相同!'
  securityCenter.confirmPassword = '請再次確認密碼!'
  securityCenter.passwordsInconsistent = '兩次輸入密碼不壹致!'
  securityCenter.selectDropdown = '請選擇下拉選擇'
  securityCenter.selectAreaCode = '請選擇區號'
  securityCenter.getCaptcha = '獲取驗證碼'
  securityCenter.directBindingPhone = '檢測到您已經驗證過原手機，您可以直接綁定新手機'
  securityCenter.captchaSendSuccess = '驗證碼發送成功'
  securityCenter.directBindingMailbox = '檢測到您已驗證過原郵箱，您可以直接綁定新郵箱'
  securityCenter.successVerification = '驗證成功'
  securityCenter.weak = '弱'
  securityCenter.in = '中'
  securityCenter.Strong = '強'
  securityCenter.retryAfter = 's後重試'

  // 新聞中心
  newsCenter.pageTitle = '新聞中心'
  newsCenter.newsList = '新聞列表'
  newsCenter.newsTitle = '新聞標題'
  newsCenter.ceartTimt = '創建時間'
  newsCenter.backNewsList = '返回列表'
  newsCenter.Previous = '上壹篇'
  newsCenter.Next = '下壹篇'

  // 購物車
  cart.productList = '產品列表'
  cart.buyNow = '立即購買'
  cart.productConfig = '產品配置'
  cart.configurableOptions = '可配置選項'
  cart.pleaseSelect = '請選擇'
  cart.pleaseSelectPayment = '請選擇支付方式'
  cart.piece = '個'
  cart.customFields = '自定義字段'
  cart.os = '操作系統'
  cart.paymentCycle = '付款周期'
  cart.total = '總計'
  cart.orderNow = '現在下單'
  cart.cart = '購物車'
  cart.noProduct = '未訂購任何產品'
  cart.noProductMsg = '當前沒有訂購任何產品，您可以點擊下方按鈕進行訂購'
  cart.edit = '編輯'
  cart.delete = '刪除'
  cart.placeholderPromo = '如有優惠碼或優惠券,請輸入'
  cart.usePromo = '應用優惠碼'
  cart.payment = '付款方式'
  cart.pay = '去付款'
  cart.buyMore = '繼續購買'
  cart.warning = '提示'
  cart.removeMsg = '確定將此產品移除購物車？'
  cart.cancelRemove = '已取消刪除'
  cart.settlement = '結算'

  // 推介計劃
  recommend.title = '推介計劃'
  recommend.applyNow = '立即申請為推介人'
  recommend.info = '新客戶通過推廣鏈接註冊與推介人建立關聯，關聯有限期內，購買指定產品成功即為有效訂單，推介成功可獲得現金獎勵'
  recommend.applyRecommendation = '申請成為推介者'
  recommend.getUrl = '獲得您的個人專屬鏈接'
  recommend.shareOrRecommend = '分享或者推薦'
  recommend.shareFriend = '將推廣鏈接發給需要購買產品的好友'
  recommend.getReward = '獲得獎勵'
  recommend.getRewardMsg = '好友成功下單後即可獲得獎勵'
  recommend.apply = '立即申請'
  recommend.noRecommend = '暫未開啟推介計劃'
  recommend.referralCooperation = '推介合作'
  recommend.referralRecord = '推介記錄'
  recommend.withdrawalsRecord = '提現記錄'
  recommend.promotedLinkVisits = '推廣鏈接訪問次數'
  recommend.purchaseQuantity = '購買數量'
  recommend.registeredUser = '註冊用戶'
  recommend.currentAmount = '當前金額'
  recommend.withdrawImmediately = '立即提現'
  recommend.withdrawalReview = '提現審核中'
  recommend.toConfirmCommission = '待確認傭金'
  recommend.discountLink = '優惠鏈接'
  recommend.referralLink = '推薦鏈接'
  recommend.withdraw = '提現'
  recommend.amount = '金額'
  recommend.enterAmount = '請輸入金額'
  recommend.copySuccess = '復制成功'
  recommend.placeholderSearch = '按關鍵字搜索'
  recommend.orderTime = '訂購時間'
  recommend.orderAmount = '訂購金額'
  recommend.type = '類型'
  recommend.manner = '方式'
  recommend.confirmationTime = '確認時間'
  recommend.confirmed = '已確認'
  recommend.commission = '傭金'
  recommend.commissionRate = '傭金比例'
  recommend.withdrawalTime = '提現時間'
  recommend.withdrawalAmount = '提現金額'
  recommend.balance = '余額'
  recommend.recordOnly = '僅記錄'
  recommend.turnover = '流水支持'
  recommend.status = '狀態'
  recommend.statusPending = '待審核'
  recommend.statusApproved = '審核通過'
  recommend.statusReject = '拒絕'
  recommend.operator = '操作人'

  // 公共支付組件
  paymentComponent.isBalancePay = '是否使用余額支付'
  paymentComponent.rotalOrderPrice = '訂單總價'
  paymentComponent.useOrNot = '是否使用'
  paymentComponent.stillNeedPay = '還需支付'
  paymentComponent.payNow = '立即去支付'
  paymentComponent.pay = '支付'
  paymentComponent.billId = '賬單ID'
  paymentComponent.errorTips = '這裏好像沒有ID，您可能操作有誤'
  paymentComponent.requesting = '正在請求，請勿操作'
  paymentComponent.phoneScanPayment = '請用手機掃描二維碼進行付款'
  paymentComponent.paySucess = '支付成功'
  paymentComponent.doNotUse = '不使用'
  paymentComponent.calculating = '計算中……'
  paymentComponent.selectPayType = '請選擇支付方式'
  paymentComponent.querying = '正在查詢'
  paymentComponent.useBalance = '使用余額'
  paymentComponent.error = '出現了錯誤'
  paymentComponent.depositSuccess = '充值成功'

  // 未登錄頁面
  notLoggedIn.login = '登錄'
  notLoggedIn.register = '註冊'
  notLoggedIn.toOrderProducts = '訂購產品'
  notLoggedIn.pleaseLogIn = '請登錄'

  const lang = {
    htmlAttrs: { // html 語言標識
      lang: 'zh-cn'
    },
    Previous: ' 上壹頁 ',
    Nextpage: ' 下壹頁 ',

    btnCancle: '取 消', // 取消按鈕
    btnConfirmation: '確 定', // 確定按鈕

    nav, // 側邊欄和頂部
    index, // 首頁
    login, // 登錄、註冊、重置密碼
    standaloneServer, // 獨立服務器
    cloudServer, // 雲服務器
    otherServer, // 其他服務器
    personalCenter, // 個人中心
    log, // 日誌
    helpContent, // 幫助中心
    workOrder, // 工單
    financeModel, // 財務
    verified, // 實名認證
    securityCenter, // 安全中心
    newsCenter, // 新聞中心
    cart, // 購物車
    recommend, // 推介計劃
    paymentComponent, // 公共支付組件
    notLoggedIn // 未登錄頁面
  }

  // 變量名稱需要和lang文件的flag保持壹致
  const src = document.currentScript.src
  const ind = src.indexOf('lang/')
  const key = src.slice(ind + 5, src.length - 10)
  window.language[key] = lang
  window.lang(key)
})()
